[Jenkins X]: https://jenkins-x.io/
[lighthouse]: https://github.com/jenkins-x/lighthouse
[sonarqube]: https://github.com/SonarSource/sonarqube
[coverage.py]: https://github.com/nedbat/coveragepy
[go tool cover]: https://golang.org/cmd/cover/
[jacoco]: https://www.eclemma.org/jacoco/
[sbt-jacoco]: https://www.scala-sbt.org/sbt-jacoco/
[kind]: https://kind.sigs.k8s.io/
[locust]: https://locust.io/
[dev-docs-template]: https://github.com/lisy09/dev-docs-template
[VuePress]: https://vuepress.vuejs.org/
[vscode]: https://code.visualstudio.com/
[install vscode]: https://code.visualstudio.com/docs/setup/setup-overview
[vscode remote container]: https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers
[Promtail]: https://grafana.com/docs/loki/latest/clients/promtail/
[Loki]: https://grafana.com/oss/loki/
[Grafana]: https://grafana.com/grafana/
[Prometheus]: https://prometheus.io/

---
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](meta/CODE_OF_CONDUCT.md)

# k8s-project-template

Origin: https://github.com/lisy09/k8s-project-template

This is a project to provide a project template including features as below:
- k8s cluster in docker for local or CI/CD machine with [kind][kind]
- ci/cd with [Jenkins X][Jenkins X]
- chatops with [Jenkins X (lighthouse)][lighthouse]
- gitops with [Jenkins X][Jenkins X]
- source code scan with [sonarqube][sonarqube]
- code coverage:
  - python: [coverage.py][coverage.py]
  - golang: [go tool cover][go tool cover]
  - java/scala: [jacoco][jacoco]/[sbt-jacoco][sbt-jacoco]
- examples for various test x various language
  - unit test
  - e2e test
  - integration test/deployment test
  - load test 
    - [locust][locust]
- k8s observability
  - monitoring/metrics
    - [Prometheus][Prometheus]
  - alert to email/slack
    - [Prometheus][Prometheus]
  - logging
    - PGL stack: Promtail + Loki + Grafana
      - [Promtail][Promtail]: log collecting sidecar
      - [Loki][Loki]: log storage & query
      - [Grafana][Grafana]: UI
  - [TODO] tracing
- document templates with [VuePress][VuePress]/[dev-docs-template][dev-docs-template]

## Documentation

The documentation of the project is located on the [website]() or in the `docs/` directory.

To check the src markdown of docs, please check `./dev-docs/docs_src`

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

## License
Check the [LICENSE](LICENSE.md) file for license rights and limitations.

## Contributing

Please check [CONTRIBUTING.md](meta/CONTRIBUTING.md).

## Directory (WIP)

- `services/`: parent dir for each components/services
- `local-k8s-cluster`: module to create a local k8s cluster using [kind][kind], which is using Docker container "nodes".
- `cicd`: ci/cd construction on k8s
- `gitops`: source for gitops. Please notice that in production practice, please seperate this module to another repository, to handle the deployment permission control separately.
- `dev-docs`: module to edit the docs
- `docs`: generated static html docs from `dev-docs`
- `scripts/`: scripts for building/running
- `Makefile`: GNU Make Makefile as quick command entrypoint

## Local Port Binding for Docker-Compose based Development

Please maintain the local port binding list here for docker/docker-compose based development, to `avoid port conflict for multiple modules` 

- 8080: dev-docs dev preview (with vscode remote container)
- 8081: dev-docs dev preview (run docker container locally)
- 53: dns proxy by dnsmasq
- 5380: http manage page for dnsmasq
- 2049: port for nfs server

## How to Use

### Build all necessary artifacts before running other commands

```bash
make all
```

### Preview thd dev-docs locally

```bash
make docs-preview
```

Then open `http://localhost:8081` in browser.

### Build docs

```bash
make docs
```

`docs/` will be updated.