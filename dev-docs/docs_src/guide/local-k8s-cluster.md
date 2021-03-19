---
---
[kind]: https://kind.sigs.k8s.io/
---

# Local K8S Cluster

This document explains basic about `./local-k8s-cluster`.

This module is the main implementation of `setup a k8s cluster in docker containers` with [kind][kind].

## Prerequisite

- `kind` cli tool. How to install: [https://kind.sigs.k8s.io/docs/user/quick-start/#installation](https://kind.sigs.k8s.io/docs/user/quick-start/#installation)
- `kubectl` cli tool. How to install: [https://kubernetes.io/docs/tasks/tools/#kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl)
- `kustomize` cli tool. How to install: [https://kubectl.docs.kubernetes.io/installation/kustomize/](https://kubectl.docs.kubernetes.io/installation/kustomize/)

## How to Use

Deploy a local k8s cluster using `kind`:

```bash
make deploy
```

Undeploy:

```bash
make undeploy
```

## Advance

### How to change the k8s cluster version

To specify the version for local k8s cluster, please modify the part below in `./local-k8s-cluster/.env`

```bash
KIND_NODE_IMAGE=kindest/node:v1.19.7
```

Available version can be checked here from official [kind docker hub](https://hub.docker.com/r/kindest/node/tags?page=1&ordering=last_updated)

### How to change the number of nodes of local k8s cluster

Modify the part below in `./local-k8s-cluster/manifest/kind-config.yaml`.

Change the number of `role: control-plane` & `role: worker`.

### More customize of local cluster

Please check [kind official document](https://kind.sigs.k8s.io/docs/user/configuration/).