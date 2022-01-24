---
sidebar_position: 1
keywords:
- NodeJsCart folder structure
title: The folder structure of a NodeJsCart project.
description: The detailed list of the folders of a NodeJsCart project with a detailed explanation. Help you understand more about the NodeJsCart platform system design.
---

# NodeJsCart's folder structure

The default structure of a NodeJsCart project looks like the following:


``` javascript
├── .nodejscart # This folder contains the built files (css, js).
├── config
│     ├ default.json # This is the default store configuration file.
├── extensions # This folder contains the list of module from third parties.
├── media # This folder contains media files (product images...).
├── node_modules
├── themes # This folder contains the list of theme from third parties.
├── package-lock.json
└── package.json
```

:::info

For the module folder structure. Check [this document](/docs/module-development/module-structure).

:::

:::info

For the theme folder structure. Check [this document](/docs/theme-development/theme-structure).

:::