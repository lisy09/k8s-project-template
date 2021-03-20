---
home: true
tagline: Provide a k8s project template with built-in engineering excellence
actionText: Get Started →
actionLink: /guide/
features:
- title: Out-of-Box
  details: Minimal setup with organized project structure helps you focus on development.
- title: Cloud Native CI/CD
  details: Enjoy the cloud native CI/CD.
- title: K8s Observability
  details: Built-in k8s observability with examples.

footer: Apache-2.0 Licensed | Copyright © 2021-present lisy09.thu@gmail.com
# for search
tags:
  - k8s-project-template
---
[Argo]: https://argoproj.github.io/
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

::: tip Source Code
Github: [https://github.com/lisy09/k8s-project-template](https://github.com/lisy09/k8s-project-template)
:::

This is a project to provide a k8s project template with built-in engineering excellence.

## Features

This project provides these features:
- document templates with [VuePress][VuePress]/[dev-docs-template][dev-docs-template]
- k8s cluster in docker for local or CI/CD machine with [kind][kind]
- ci/cd, gitops with [Argo][Argo]
- chatops with [Jenkins X (lighthouse)][lighthouse]
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

## Easy to Start

```bash
# build all needed docker images
make all

# start a local k8s cluster
make local-cluster

# deploy k8s workload
make deploy

# check the monitoring dash board in http://monitoring.observe.local
```