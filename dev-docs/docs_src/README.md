---
home: true
tagline: Provide a toolbox/template and examples for easily creating the development documents
actionText: Get Started →
actionLink: /guide/
features:
- title: Out-of-Box
  details: Minimal setup with markdown-centered project structure helps you focus on writing documents.
- title: VuePress-Powered
  details: Enjoy the dev experience of VuePress.
- title: Rich Diagrams Edit
  details: Support plantuml & draw.io based diagrams edit.

footer: MIT Licensed | Copyright © 2021-present lisy09.thu@gmail.com
# for search
tags:
  - dev-docs-template
---

::: tip Source Code
Github: [https://github.com/lisy09/dev-docs-template](https://github.com/lisy09/dev-docs-template)
:::

This is a project to provide a toolbox/template and examples for easily creating the development documents.

## Features

This project provides these features:
- Major documents `drafted in Markdown`, generated as a `single static html` sites (with VuePress)
- Support export the document as a single `pdf` file
- Support offlinify the static VuePress site so that can open through file:// access (do not support search yet)
- Building the docs only `depends on docker and Gnu Make`
- Editing the docs depends on
  - `VSCode`
  - `VSCode Remote Container Extension`
  - Docker engine
- PlantUML in Markdown for creating some diagram with UML
- Also support Plantuml in .puml file and generated as image (png/svg) file (Recommended)
- Create more complicated diagrams & images by `draw.io` inside VSCode
- Several docs template

## Easy to Start

```bash
# build all needed docker images
make all

# create a markdown file
echo '# Hello dev-docs-template' > docs_src/README.md

# build static html files
make html
```