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
- [Argo CD]: Provide CD Implementation. Detect change of git repository and deploy.
- [Argo Events]: Listen to various events and trigger various actions including `Argo Workflows`.
- [TODO]: chatops implementation
- [MinIO]: Provide artifact repostiory capability for CI/CD.

## How to Use?

### Modify the Configuration

First, specify a host like `argo.cicd.localhost` for the web server of `Argow Workflows`.

Modify it through modify `/spec/rules/0/host` in `./cicd/kustomize/argo-workflows/namespace-install/ingress.yaml`.

If you are deploying the cicd in local k8s cluster, you will need to be able to resolve DNS for *.localhost.
You can check `./local-k8s-cluster/scripts/override_dns.sh` as a tip.

Also specify `namespace` in `./cicd/kustomize/kustomization.yaml` and `./cicd/kustomize/namespace.yaml`.
Default is `cicd`.

### Deploy/Undeploy

```bash
make deploy
```

Undeploy:
```bash
make undeploy
```

After deploy, you can check `Argo Server` Web UI from [http://argo.cicd.localhost](http://argo.cicd.localhost) or the host you specify.

:::warning
As current testing, `Argo Server` Web UI may not support Microsoft Edge yet.
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

## Argo Workflows Catalog

For more reusable `Argo Workflow Template`, please check [Argo Workflows Catalog](https://argoproj-labs.github.io/argo-workflows-catalog/).