---
sidebar_position: 15
keywords:
- Routing system
sidebar_label: The Routing System
title: Evershop routing system
description: The document explains how does EverShop routing system work, how to define a route and generate a URL base on route ID.
---

![Routing system](./img/routing.jpg "Routing system")

# Routing system

Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

In EverShop we make use of [ExpressJs](https://expressjs.com/) for routing.

Before we dive into the routing system, we suggest you checkout the module structure document to understand more about the way a module is organized.

:::info
Check [this document](/docs/development/knowledge-base/architecture-overview) to understand more about EverShop project folder structure.
:::

## The fundamental

Let’s take a look a module structure

```bash
./
├── api
│   ├── createProduct
│   │   ├── route.json
│   ├── updateProduct
│   │   ├── route.json
│   ├── deleteProduct
│   │   ├── route.json
├── graphql
├── migration
├── pages
│   ├── admin
│   │   ├── attributeEdit
│   │   │   └── route.json
│   │   ├── attributeGrid
│   │   │   └── route.json
│   │   ├── attributeNew
│   │   │   └── route.json
│   │   ├── categoryEdit
│   │   │   └── route.json
│   │   ├── categoryEdit+categoryNew
│   │   │   └── route.json
│   │   ├── categoryGrid
│   │   │   └── route.json
│   │   ├── categoryNew
│   │   │   └── route.json
│   │   ├── components.js
│   │   ├── productEdit
│   │   │   └── route.json
│   │   ├── productGrid
│   │   │   └── route.json
│   │   └── productNew
│   │       └── route.json
│   └── frontStore
│       ├── categoryView
│       │   └── route.json
│       └── productView
│           └── route.json
├── services
└── tests
```

In the picture above, there are 3 important things that we need to understand:

### 1: The `api` folder

You can see there is a folder named `api` in the above example. This folder is where we organize our RESTful api controller.

Each of sub-folder in the `api` folder is a RESTful api controller. For example, the `createProduct` folder is a RESTful api controller that handles the `POST` request to the `/api/products` endpoint. This folder contains a file named “route.json” that defines the detail (HTTP method, path) for this RESTful api controller.

:::info
  Check this [document](/docs/development/knowledge-base/api-routes) to understand more about a RESTful api.
:::

### 2: The `pages` folders

You can see there is a folder named `pages` in the above example. This folder is where we organize our pages.

Each of sub-folder in the `pages` folder is a page controller. Those folders contain a file named `route.json` that defines the detail (HTTP method, path) for this RESTful api controller.

### 2: The `admin` and `frontStore` folders

Those folders are used for scoping. All routes located under the `frontStore` folder are used for front-page routing.

And all routes located under the `admin` folder will be used for the admin panel and therefore several authentication [middleware functions](/docs/development/knowledge-base/middleware-system) will be added to those routes.

### 3: The route folders

They are folders located under either the `admin` or `frontStore` folder.

Basically, they contain 2 important things

The middleware functions will be executed when the route is triggered. You can learn more about how does middleware system works in [this document](/docs/development/knowledge-base/middleware-system)
The declaration of the route
And the folder name will be used as a `route ID`. Typically, the route folder name has to be unique and we do not accept white space in the route ID.

:::info
Since the route folder name will be used as a `route ID`.So it has to be unique and basically, we do not accept special characters or whitespace.
:::

## The declaration of the route

In the above picture, in each route folder, there is a file named `route.json`. It is where we define our route specification.

Let’s take a look at one example:

```bash
{
  "methods": [
    "GET"
  ],
  "path": "/category/:url_key"
}
```

In the above example, the route file has 2 lines:

1. `methods`: This is the list of accepted HTTP methods for the route.
2. `path`: This is the URL path of the route. We make use of Path-to-RegExp for route path. You can find more information route path [here](https://www.npmjs.com/package/path-to-regexp).

That is how we define our route specification.

## Generate a URL of a specific route

When you are developing a module or a theme, there are many times that you need to generate a URL of a specific route.

EverShop has a function that helps you to general a URL of a route base on its ID.

Let’s take a look at an example

```js
const { commit, rollback } = require('@evershop/mysql-query-builder');
const { buildUrl } = require('../../../../../lib/router/buildUrl');

// eslint-disable-next-line no-unused-vars
module.exports = async (request, response, stack, next) => {
  const promises = [];
  Object.keys(stack).forEach((id) => {
    // Check if middleware is async
    if (stack[id] instanceof Promise) {
      promises.push(stack[id]);
    }
  });
  const connection = await stack.getConnection;
  const results = await Promise.allSettled(promises);
  if (results.findIndex((r) => r.status === 'rejected') === -1) {
    await commit(connection);
    // Store success message to session
    request.session.notifications = request.session.notifications || [];
    request.session.notifications.push({
      type: 'success',
      message: request.body.product_id ? 'Product was updated successfully' : 'Product was created successfully'
    });
    request.session.save();
    response.json({
      data: { redirectUrl: buildUrl('productGrid') },
      success: true,
      message: request.body.product_id ? 'Product was updated successfully' : 'Product was created successfully'
    });
  } else {
    await rollback(connection);
  }
};
```

In the above example, we use function `buildUrl` to generate a URL.

This function takes 2 arguments:

1. The `route ID`. This is the ID of the route that you want to generate a URL.
2. Param list. A ‘key-value’ pare of route params in case your route has some dynamic params.
And it returns a final URL.

```js
buildUrl('productEdit', { id: 1 });
```