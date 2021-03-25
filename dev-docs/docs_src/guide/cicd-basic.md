# CI/CD Basic

[Argo Workflows]: https://github.com/argoproj/argo-workflows
[Argo CD]: https://github.com/argoproj/argo-cd
[Argo Events]: https://github.com/argoproj/argo-events
[MinIO]: https://min.io/

This document explains basic about `./cicd`.

This module is the main implementation of `CI/CD on k8s`.

## How it works?

The built-in CI/CD utilize these projects:

- [Argo Workflows]: Construct CI/CD pipelines/workflows
- [Argo CD]: Provide CD + gitops implementation. Detect change of git repository and deploy.
- [Argo Events]: Listen to various events and trigger various actions including `Argo Workflows`.
- [TODO]: chatops implementation
- [MinIO]: Provide artifact repostiory capability for CI/CD.

## Deploy/Undeploy

```bash
make deploy
```

Undeploy:
```bash
make undeploy
```

## How to Use CI with Argo Workflows?

This section introduce basic CI usage with built-in `Argo Workflows`.

To know more, please check [official documents](https://argoproj.github.io/argo-workflows/).

### Modify the Configuration

First, specify a host like `argo.cicd.localhost` or `localhost` for the web server of `Argow Workflows`.

Modify it through modify `/spec/rules/0/host` in `./cicd/kustomize/argo-workflows/local/ingress.yaml`.

If you are deploying the cicd in local k8s cluster, you will need to be able to resolve DNS for *.localhost.
You can check `./local-k8s-cluster/scripts/override_dns.sh` as a tip.

Also specify `namespace` in `./cicd/kustomize/kustomization.yaml` and `./cicd/kustomize/namespace.yaml`.
Default is `cicd`.

### After Deploy

After deploy, you can check `Argo Workflow Server` Web UI from [http://localhost/cicd/argo](http://localhost/cicd/argo) or the host you specify.

You can check `Argo CD` Web UI from [http://localhost/cicd/argo-cd](http://localhost/cicd/argo-cd) or the host you specify.

You can check `MinIO` Web UI from [http://minio.cicd.localhost/](http://minio.cicd.localhost/) or the host you specify.

:::warning

Please notice that currently `MinIO` only support serving as root path `/` for the reason to be compatiable with S3.
So we cannot modify the ingress host for `MinIO` to something like `http://localhost/cicd/minio`

:::

### Deploy a Hello-World Workflow

```bash
kubectl --namespace cicd create -f ./cicd/manefest/argo-workflow-test.yaml
```

Then an Argo `Workflow` Resource with the name `hello-world-xxx` will be deploy, bringing up a pod with the same name.

```bash
kubectl --namespace cicd logs hello-world-xxx -c main
```

This command will show the execution result in the log.

To delete this workflow, simply

```bash
kubectl --namespace cicd delete workflow hello-world-xxx
```

### Argo Workflows Catalog

For more reusable `Argo Workflow Template`, please check [Argo Workflows Catalog](https://argoproj-labs.github.io/argo-workflows-catalog/).


## How to Use CD with Argo CD?

This section introduce basic CI usage with built-in `Argo CD`.

To know more, please check [official documents](https://argo-cd.readthedocs.io/en/stable/).

### Modify the Configuration

First, specify a host like `argocd.cicd.localhost` for the web server of `Argow CD`.

Modify it through modify `./cicd/kustomize/ingress.yaml`.

If you are deploying the cicd in local k8s cluster, you will need to be able to resolve DNS for *.localhost.
You can check `./local-k8s-cluster/scripts/override_dns.sh` as a tip.

Also specify `namespace` in `./cicd/kustomize/kustomization.yaml` and `./cicd/kustomize/namespace.yaml`.
Default is `cicd`.

### After Deploy

After deploy, you can check `Argo CD Server` Web UI. from [http://localhost/cicd/argo-cd](http://localhost/cicd/argo-cd) or the host you specify.

You can check the initial `username` & `password` by following the [official documents](https://argo-cd.readthedocs.io/en/stable/getting_started/#4-login-using-the-cli)

### Deploy a Hello-World Application

Follow the [official documents](https://argo-cd.readthedocs.io/en/stable/getting_started/#6-create-an-application-from-a-git-repository).

## How to Trigger CI/CD with Argo Events?

This section introduce basic event/trigger usage with built-in `Argo Events`.

To know more, please check [official documents](https://argoproj.github.io/argo-events/).

### Deploy a Hello-World Event Bus/Event Source/Sensor

Please check the [official documents](https://argoproj.github.io/argo-events/quick_start/).

## Advance Configuration

### Artifact Repository Using Minio

In the default deploy using local k8s cluster, MinIO is setuped with 1 instance.

In production, you may want to setup HA for MinIO.

Check `./cicd/kustomize/minio/production/kustomization.yaml` for HA MinIO cluster.
(Simply modify resources field in `./cicd/kustomize/kustomization`, change the children `- ./minio/local` to `- ./minio/production`)