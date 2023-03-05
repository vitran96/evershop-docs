---
sidebar_position: 27
keywords:
- EverShop Pages
sidebar_label: Pages
title: Pages
description: EverShop pages are located in the `pages` folder of each module. Learn how to create a page in your extension.
---

# Pages

:::info
Check the [module structure](/docs/development/module/module-overview) to learn more about the structure of EverShop modules.
:::

EverShop pages are located in the `pages` folder of each module. Below is an example of a page in the `pages` folder of the `catalog` module:

```bash
catalog
├── pages
    ├── global
    │   └── auth.js
    ├── admin
    │   └── productEdit
    │       ├── route.json
    │       ├── index.js
    │       ├── General.js
    │       ├── Images.js
    │       ├── Price.js
    └── frontStore
        └── productView
            ├── route.json
            ├── index.js
            ├── ProductImages.js
            ├── ProductInfo.js
            ├── ProductOptions.js

```

## `pages` folder structure

The `pages` folder contains the following subfolders:

- `global` - This folder contains middleware functions that are executed for all pages, both admin panel and front store. For example, you can use this folder to create a middleware that checks if the user is authenticated. This folder does not contain any [React](https://reactjs.org/) components. It only contains middleware functions.

- `admin` - This folder contains the pages of the admin panel. The `admin` folder contains subfolders for each page. For example, the `productEdit` folder contains the pages for editing a product.

- `frontStore` - This folder contains the pages of the front store. The `frontStore` folder contains subfolders for each page. For example, the `productView` folder contains the pages for viewing a product.

## The `admin` and `frontStore` folders

The `admin` and `frontStore` folders contain the following subfolders:

- `all` - This folder contains React components that are used in all pages.

- Other subfolders - Each subfolder represents a page. For example, the `productEdit` folder is the page for editing a product.

## The single page folder

Each page folder contains the middleware functions, React components and the route definition for the page.

Below is an example of a page folder:

```bash
productEdit
├── route.json #This is route definition for the page
├── index.js #This is a middleware function
├── General.js #This is a React component 
├── Images.js #This is a React component
└── Price.js #This is a React component
```

### The page route

In each page folder, there is a `route.json` file. This file contains the route definition for the page. For example, the `route.json` file of the `productEdit` page is:

```bash
{
  "path": "/admin/product/:productId",
  "methods": [
    "GET"
  ]
}
```

:::warning
The folder name will be used as the routeId, so make sure the folder name is unique and does not contain any special characters.
:::

:::info
Check the [routing system document](/docs/development/knowledge-base/routing-system) to learn more about the routing system.
:::

### The page middleware

EverShop allows you to create middleware functions for each page. For example, you can create a middleware to check for the page availability before rendering the page. You can create many middleware functions as you need.

To differentiate between the middleware functions and the React components, the middleware function files should be all lowercase. For example, the `index.js` file is a middleware function.

:::info
Check the [middleware system document](/docs/development/knowledge-base/middleware-system) to learn more about the middleware system.
:::

### Shared middleware functions

In some cases, you may need to use the same middleware functions in multiple pages. For example, you may need to use the same middleware function for the `productEdit` and `productCreate` pages. In this case, you can create a special folder `productEdit+productCreate` in the `pages/admin` folder and put the middleware function in this folder. All middleware function in this folder will be executed in both pages.

This special folder does not contain any `route` file. It only contains React components and middleware functions.

If you have a middleware function that required for all pages (both frontStore and admin panel), you can put it in the `pages/global`.

If you have a middleware function that required for all pages in the admin panel, you can put it in the `pages/admin/all`. The same for the front store.

### The page template (Master components)

The Master components are located in the page folder. For example, the `General.js`, `Images.js` and `Price.js` files are React components for the `productEdit` page.

You must provide a default export for each React component. For example, the `General.js` file is:

```js

import React from 'react';

const General = () => {
  return (
    <div>
      <h1>General</h1>
    </div>
  );
};

export default General;

export const layout = {
  areaId: 'content',
  sortOrder: 10
}
```

:::info
Check the [view system document](/docs/development/knowledge-base/view-system) to learn more about the layout and block system.
:::

:::info
Check the [data loading document](/docs/development/knowledge-base/data-fetching) to learn how to load data in a React component.
:::

:::warning
A page folder can contain both middlewares and React components. To help EverShop to identify the React Component and middleware, you must name the React component with the first letter in uppercase. For example, `General.js` is a React component while `general.js` is a middleware.
:::

### Shared React components

In some cases, you may need to use the same React component in multiple pages. For example, you may need to use the same React component for the `productEdit` and `productCreate` pages. In this case, you can create a special folder `productEdit+productCreate` in the `pages/admin` folder and put the React component in this folder. All components in this folder will be used in both pages.

This special folder does not contain any `route` file. It only contains React components and middleware functions.

If you have a component that required for all pages, you can put it in the `admin/all` or `storeFront/all` folder. For example, CMS module use this folder to store the Layout component.