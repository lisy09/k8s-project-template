# Dev-docs

`./dev-docs` is the module to edit the dev docs.
This document helps to explain how to use this module.

## Prerequisite

- The environment for build needs to be linux/amd64 or macos/amd64
- The environemnt for build needs [docker engine installed](https://docs.docker.com/engine/install/)
- have [docker-compose](https://docs.docker.com/compose/install/) installed
- The environemnt for build needs GNU `make` > 3.8 installed
- The environemnt for build needs `bash` shell
- for unified IDE support without installing any programming language tools in the local environment, need 
  - [Visual Studio Code][vscode] to be [installed][install vscode]
  - [Visual Studio Code Extension: Remote - Containers][vscode remote container] to be installed

## How to Edit

### Build Docker Images before Editing

To build all docker images & push:

```bash
make all
```

### Start the Remote Containter Environment in VSCode

Run in `vscode` and execute `Remote-Containers: Open Folder in Container`, select the root directory of this module. 

Then VSCode will build a dev-container and run it based on `./.devcontgainer/evcontainer.json`. 

The whole directory will be mounted to `/workspace`.

### Start VuePress Dev Server for Realtime Preview

Run this command in the remote container.

```bash
make dev-local
```

Then a VuePress dev server will be started and listened at `$VUEPRESS_DEV_PORT` port value defined in `./.env`, default `8080`).

Now you can check the docs in a browser with the url `localhost:$VUEPRESS_DEV_PORT`.

## How to Preview

You can preview your document sites locally by running a docker container to host your markdown documents. Run this command:

```bash
make preview
```

Then a VuePress dev server will be started and listened at `$VUEPRESS_PREVIEW_PORT` port value defined in `./.env`, default `8081`).

Now you can check the docs in a browser with the url `localhost:$VUEPRESS_PREVIEW_PORT`.

## How to Build Your Document Sites

Run this command:

```bash
make build
```

The built result is in` $DOCS_RELATIVE_PATH/.vuepress/dist` (defined in `./.env`, default `docs_src`).

This result is also offlinified by `./docker/offlinify.js` so that support `file:// access`, which means that you can package `$DOCS_RELATIVE_PATH/.vuepress/dist` into a zip file and distributed it as an offline documentation. (Please noted that search is not support when using file:// access).

:::warning
Please noticed that current `./docker/offlinify.js` only supports current directory structure. Please modify the js file when you use other VuePress theme or use untested directory structure.
:::

## Learn More

- check `Makefile` for details
- check https://lisy09.github.io/dev-docs-template/ for docs of original repo `dev-docs-template`