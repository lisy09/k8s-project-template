---
home: true
tagline: 提供创建开发文档的工具箱/模板以及样例
actionText: 快速上手 →
actionLink: /guide/
features:
- title: 开箱即用
  details: 使用最简的配置即可开始集中文档写作。
- title: 基于VuePress
  details: 文档生成基于VuePress，可以使用一切VuePress可以的扩展。
- title: 丰富的图表支持
  details: 支持基于Plantuml或draw.io的图表编辑。

footer: MIT Licensed | Copyright © 2021-present lisy09.thu@gmail.com
# for search
tags:
  - dev-docs-template
---

::: tip
Github: [https://github.com/lisy09/dev-docs-template](https://github.com/lisy09/dev-docs-template)
:::

本项目致力于提供创建开发文档的工具箱/模板以及样例。

## 简单易用，开箱即用

```bash
# build all needed docker images
make all

# create a markdown file
echo '# Hello dev-docs-template' > docs_src/README.md

# build static html files
make html
```