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