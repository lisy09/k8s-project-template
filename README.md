[Jenkins X]: https://jenkins-x.io/
[lighthouse]: https://github.com/jenkins-x/lighthouse
[sonarqube]: https://github.com/SonarSource/sonarqube
[coverage.py]: https://github.com/nedbat/coveragepy
[go tool cover]: https://golang.org/cmd/cover/
[jacoco]: https://www.eclemma.org/jacoco/
[sbt-jacoco]: https://www.scala-sbt.org/sbt-jacoco/
[kind]: https://kind.sigs.k8s.io/

---
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](meta/CODE_OF_CONDUCT.md)

# k8s-project-template

Origin: https://github.com/lisy09/k8s-project-template

This is a project to provide a project template including features as below:
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

# Prerequisite

- The environment for build needs to be linux/amd64 or macos/amd64
- The environemnt for build needs [docker engine installed](https://docs.docker.com/engine/install/)
- have [docker-compose](https://docs.docker.com/compose/install/) installed
- The environemnt for build needs GNU `make` > 3.8 installed
- The environemnt for build needs `bash` shell

## License
Check the [LICENSE](LICENSE.md) file for license rights and limitations.

## Contributing

Please check [CONTRIBUTING.md](meta/CONTRIBUTING.md).

## Directory (WIP)

- `services/`: parent dir for each components/services
- `local-k8s-cluster`: module to create a local k8s cluster using [kind][kind], which is using Docker container "nodes".
- `cicd`: ci/cd construction on k8s
- `gitops`: source for gitops. Please notice that in production practice, please seperate this module to another repository, to handle the deployment permission control separately.
- `scripts/`: scripts for building/running
- `Makefile`: GNU Make Makefile as quick command entrypoint

## How to Use


### Build command

To build all docker images locally:
```bash
make all
```

To push built docker images to the remote registry:
```bash
make push
```

To delete built local docker images:
```bash
make clean
```

Or you can check `./Makefile` for more details.
