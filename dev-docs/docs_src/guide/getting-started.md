# Getting Started

This section will help you setup the documentation environment with dev-docs-template from ground up.

## Prerequisite

- The environment for build needs to be linux/amd64 or macos/amd64. Windows x64 users can use wsl2 as linux environment.
- The environemnt for build needs [docker engine installed](https://docs.docker.om/engine/install/)
- The environemnt for edit needs [docker compose](https://docs.docker.com/compose/install/)
- The environemnt for build needs `GNU make >= 3.8` installed
- Need [VSCode](https://code.visualstudio.com/docs/setup/etup-overview) and [VSCode Extension: Remote Development Extension Packs](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.scode-remote-extensionpack) installed.

## Quick Start

### 1. Clone this Repository

Clone this repository as your own repository or a submodule of your monolithic repository.

```bash
git clone https://github.com/lisy09/dev-docs-template
```

### 2. Build Docker Images before Editing

To build all docker images locally:
```bash
make all
```

(Optional) To push built docker images to the remote registry:
```bash
make push
```

(Optional) To delete built local docker images:
```bash
make clean
```

Or you can check `./Makefile` for more details.

### 3. Create the Base Documents

Developers can create the base documents with simply replace `./docs_src` directory with one example in `./docs_example`, e.g.

```bash
# delete original ./docs_src directory
rm -rf docs_src

# copy an example docs
cp ./docs_examples/mono-data-science docs_src

# delete original ./docs_examples
rm -rf docs_examples
# modify the line below of .devcontainer/docker-compose.yml to exclude mounting docs_examples
#  - ../${EXAMPLES_RELATIVE_PATH}:/${WOKRKING_PACKAGE_PATH}/${EXAMPLES_RELATIVE_PATH}:cached
```

Developers can also create the base documents from scratch with proper [VuePress directory-structure](https://vuepress.vuejs.org/zh/guide/directory-structure.html) if familiar enough with VuePress and the source codes of this project.

### 4.  Start the Remote Containter Environment in VSCode

Run in `vscode` and execute `Remote-Containers: Open Folder in Container` nd select the root directory of this module.
Then VSCode will build a dev-container and run it based on `./.devcontgainer/evcontainer.json`.
The whole directory will be mounted to `/workspace`.

### 5. Start VuePress Dev Server for Realtime Preview

Run this command in the remote container.

```bash
make dev-local
```

Then a VuePress dev server will be started and listened at $VUEPRESS_DEV_PORT port value defined in `./.env`, default 8080)
And you can check the docs in a browser with the url localhost:$VUEPRESS_DEV_PORT`.

![](./quick-start.gif)

### Build VuePress Docs in VSCode Remote Container

Run this command in the remote container.

```bash
make build-local
```

The built result is in `$DOCS_RELATIVE_PATH/.vuepress/dist` (defined in `./.env`, default `docs_src`)