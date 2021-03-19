---
home: true
tagline: 提供一个k8s项目模板，并集成一系列工程实践
actionText: 快速上手 →
actionLink: /guide/
features:
- title: 开箱即用
  details: 以一定的项目结构来最小化项目初始配置，方便快速开始专注于开发。
- title: 云原生持续集成/持续部署
  details: 内置的云原生持续集成/持续部署.
- title: K8s可观察性
  details: 内置的k8s可观测性组件并提供相应样例。

footer: Apache-2.0 Licensed | Copyright © 2021-present lisy09.thu@gmail.com
# for search
tags:
  - k8s-project-template
---
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

本项目致力于提供k8s项目模板，并集成一系列工程实践。

## Features

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

## 简单易用，开箱即用

```bash
# build all needed docker images
make all

# start a local k8s cluster
make local-cluster

# deploy k8s workload
make deploy

# check the monitoring dash board in http://monitoring.observe.local
```