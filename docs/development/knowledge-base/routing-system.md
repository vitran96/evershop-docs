---
sidebar_position: 25
keywords:
- Routing system
sidebar_label: Routing system
title: Routing system
description: The document explains how does EverShop routing system work, how to define a route and generate a URL base on route ID.
---

![Routing system](./img/routing.jpg "Routing system")

# Routing system

Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

In EverShop we make use of [ExpressJs](https://expressjs.com/) for routing.

Before we dive into the routing system, we suggest you checkout the module structure document to understand more about the way a module is organized.

:::info
Check [this document](/docs/development/knowledge-base/project-folder-structure) to understand more about EverShop project folder structure.
:::

## The fundamental

Let’s take a look a core module structure

![EverShop Catalog Module](./img/evershop-routing-system.jpg "Evershop Catalog Module")

In the picture above, there are 3 important things that we need to understand:

### 1: The controller folders

You can see there are 2 folders named “controllers” and “apiControllers” located under the “catalog” folder. They are where we organize our controller.

There 2 folders are identical. There are only 2 differences:

1. The ‘api controller’ route will only return a JSON response
2. The ‘api controller’ route URL will be prefixed by ‘v1’ automatically

### 2: The ‘admin’ and ‘site’ folders

Those folders are used for scoping. All routes located under the ‘site’ folder are used for front-page routing.

And all routes located under the ‘admin’ folder will be used for the admin panel and therefore several authentication [middleware functions](/docs/development/knowledge-base/middleware) will be added to those routes.

### 3: The route folders

They are folders located under either the ‘site’ or ‘admin’ folder.

Basically, they contain 2 important things

The middleware functions will be executed when the route is triggered. You can learn more about how does middleware system works in [this document](/docs/development/knowledge-base/middleware)
The declaration of the route
And the folder name will be used as a ‘route ID’.

:::info

Since the route folder name will be used as a ‘route ID’.So it has to be unique and basically, we do not accept special characters or whitespace.

:::


## The declaration of the route

In the above picture, in each route folder, there is a file named ‘route’. It is where we define our route specification.

Let’s take a look at one example:

```bash
GET,POST
/category/:url_key
```

In the above example, the route file has 2 lines:

1. `GET,POST`: This is the list of accepted HTTP methods for the route. In case of multiple methods, you can use commas to separate them
2. `/category/:url_key`: This is the URL path of the route. We make use of Path-to-RegExp for route path. You can find more information route path [here](https://www.npmjs.com/package/path-to-regexp).

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