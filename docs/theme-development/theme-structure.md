---
sidebar_position: 1
keywords:
- Theme folder structure
- NodeJsCart theme
- NodeJsCart theme development
- NodeJsCart custom theme
description: The folder structure of the NodeJsCart theme
---

# Theme structure

The default structure of a NodeJsCart theme looks like the following:

``` javascript
├── components /* This folder contains the list of template file (React components) and css */
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
├── middlewares /* This folder contains the list of middleware */
│   ├── [context]config.js
│   ├── admin /* We organize middleware in 2 folders: This `admin` folder contains middleware(s) for the admin panel */
│   │   ├── productEdit
│   │   │   ├── [loadProductEdit]loadVariants.js
│   │   │   ├── loadImages.js
│   │   │   ├── loadOptions.js
│   │   │   ├── loadProductAttribute.js
│   │   │   └── loadProductEdit.js
│   └── site /* We organize middleware in 2 folders: This `site` folder contains middleware(s) for the front store */
│       └── productView
│           ├── [detectVariant]loadImages.js
│           ├── [detectVariant]loadVariants.js
│           ├── [loadProduct]detectVariant.js
│           └── loadProduct.js
└── routes.js /* This file contains list of our route(s). Both admin and front route(s) */
└── package.json
```

:::info

For the project folder structure. Check [this document](/docs/knowledge-base/project-structure).

:::

:::info

For the theme folder structure. Check [this document](/docs/theme-development/theme-structure).

:::