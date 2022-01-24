---
sidebar_position: 1
keywords:
- Module folder structure
- NodeJsCart module
- NodeJsCart module development
- NodeJsCart custom module
title: NodeJsCart module folder structure
description: This document explains the folder structure of the NodeJsCart module. It is helpful for you to start developing your own module.
---

# Module structure

The default structure of a NodeJsCart module looks like the following:

``` javascript
├── apiControllers /* This folder contains the list of api controllers */
│   ├── [context]config.js
│   ├── admin /* We organize middleware in 2 folders: This `admin` folder contains middleware(s) for the admin panel */
│   │   ├── productEdit
│   │   │   ├── [loadProductEdit]loadVariants.js
│   │   │   ├── loadImages.js
│   │   │   ├── loadOptions.js
│   │   │   ├── loadProductAttribute.js
│   │   │   └── route /* This file contains the route definition */
│   └── site /* We organize middleware in 2 folders: This `site` folder contains middleware(s) for the front store */
│       └── productView
│           ├── [detectVariant]loadImages.js
│           ├── [detectVariant]loadVariants.js
│           ├── [loadProduct]detectVariant.js
│           ├── loadProduct.js
│           └── route /* This file contains the route definition */
├── controllers /* This folder contains the list of page controllers */
│   ├── [context]config.js
│   ├── admin /* We organize middleware in 2 folders: This `admin` folder contains middleware(s) for the admin panel */
│   │   ├── productEdit
│   │   │   ├── [loadProductEdit]loadVariants.js
│   │   │   ├── loadImages.js
│   │   │   ├── loadOptions.js
│   │   │   ├── loadProductAttribute.js
│   │   │   ├── loadProductEdit.js
│   │   │   └── route /* This file contains the route definition */
│   └── site /* We organize middleware in 2 folders: This `site` folder contains middleware(s) for the front store */
│       └── productView
│           ├── [detectVariant]loadImages.js
│           ├── [detectVariant]loadVariants.js
│           ├── [loadProduct]detectVariant.js
│           └── route /* This file contains the route definition */
├── views /* This folder contains the list of template file (React components) and css */
│   ├── admin /* We organize components in 2 folders: This `admin` folder contains components for the admin panel */
│   │   ├── components.js /* This file is where we register our components for our pages */
│   │   └── product
│   │       ├── edit
│   │       │   ├── Variants.js
│   │       │   └── Variants.scss
│   │       └── grid
│   │           ├── Grid.js
│   │           ├── NameRow.js
│   │           └── PriceRow.js
│   └── site /* We organize the components in 2 folders: This `site` folder contains components for the front store */
│       ├── components.js /* This file is where we register our components for our pages */
│       └── product
│           ├── list
│           │   ├── Pagination.js
│           │   └── Pagination.scss
│           └── view
│               ├── Variants.js
│               └── Variants.scss
└── package.json
```

:::info

For the project folder structure. Check [this document](/docs/knowledge-base/project-structure).

:::

:::info

For the theme folder structure. Check [this document](/docs/theme-development/theme-structure).

:::