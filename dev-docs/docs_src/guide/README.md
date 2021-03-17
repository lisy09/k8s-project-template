# Introduction

`dev-docs-template` is a toolbox for creating development documents with minimal setup so that developers can focus on documentation.

## How It Works

`dev-docs-template` is a project with all source codes needed to build an environment for documentation.

It packages the tools below needed to build/edit the documents into `docker images` or `VSCode Remote Container`:

- [VuePress](https://vuepress.vuejs.org/): Static Site Generator (Markdown to html)
- PlantUML VSCode Extension and plantuml-server docker container: Provide PlantUML edit/preview/export function
- [C4-PlantUML](https://github.com/plantuml-stdlib/C4-PlantUML): a plantuml library to combines the benefits of [PlantUML](http://en.plantuml.com/) and the [C4 model](https://c4model.com/) for providing a simple way of `describing and communicate software architectures` – especially during up-front design sessions – with an intuitive language using open source and platform independent tools.
- Draw.io VSCode Extension: Provided complicated diagram edit feature within VSCode. Recommended to use the svg file (with suffix `.drawio.svg`) so that no export is needed.

Developers can write documents with Markdown, and then uses this toolbox to `exported all markdown documents into a static html site`.
Also  dev mode of VuePress can help to preview your document sites while documenting.

## Advance

To modify the setting or use the full features of VuePress, please check [official VuePress documents](https://vuepress.vuejs.org/guide/).