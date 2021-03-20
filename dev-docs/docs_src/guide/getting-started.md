# Getting Started

This section will help you setup the environment with `k8s-project-template` from ground up.

## Prerequisite

- The environment for build needs to be linux/amd64 or macos/amd64
- The environemnt for build needs [docker engine installed](https://docs.docker.com/engine/install/)
- have [docker-compose](https://docs.docker.com/compose/install/) installed
- The environemnt for build needs GNU `make` > 3.8 installed
- The environemnt for build needs `bash` shell

[optional]
- for unified IDE support without installing any programming language tools in the local environment, need 
  - [Visual Studio Code][vscode] to be [installed][install vscode]
  - [Visual Studio Code Extension: Remote - Containers][vscode remote container] to be installed

## Quick Start

### 1. Clone this Repository

Clone this repository as your own repository or a submodule of your monolithic repository.

```bash
git clone https://github.com/lisy09/k8s-project-template
```

### 2. Build all necessary artifacts before running other commands

```bash
make all
```

### 3. Start a local k8s cluster with kind

```bash
make local-k8s
```

(Optional) remove local cluster finally

```bash
make local-k8s-undeploy
```

### 4. Deploy k8s workload

```bash
make deploy
```

### 5. Check the monitoring dash board 

Open the browser with [http://monitoring.observe.local](http://monitoring.observe.local)

## Other Quick Entrypoints

### Docs

Preview the html docs:

```bash
make docs-preview
```

Then open [http://localhost:8081](http://localhost:8081).


You can build the `./docs/` from `./dev-docs/docs_src` using:

```bash
make docs
```

### Local K8S Cluster

Deploy local k8s cluster using `kind`:

```bash
make local-k8s
```

Undeploy:

```bash
make local-k8s-undeploy
```