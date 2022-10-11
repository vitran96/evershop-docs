---
sidebar_position: 30
keywords:
- Middleware
sidebar_label: Middleware
title: Evershop middleware system overview
description: Learn about the middleware system in EverShop. How do they work and how to create, add and remove a middleware function from a route.
---

# Middleware system

## What is middleware?

Let’s take a look the below diagram

![EverShop Middleware System](./img/middleware-flow.png "EverShop Middleware System")

In the above flow, we have a request triggered from the end-user. That request will be received and proceed by a list of middleware functions, after all of the middleware functions are executed a response object containing the webpage data will be sent to the client.

Middleware are functions that execute during the lifecycle of a request to the server. Each middleware has access to the HTTP request and response for each route (or path) it’s attached to. Middleware can be written to perform a variety of tasks. For example, a logging middleware might log all incoming requests to your application or authenticate an incoming user.

Let’s take a look one example of middleware function

```js
const {
  del
} = require('@evershop/mysql-query-builder');

const {
  pool
} = require('../../../../../lib/mysql/connection');

module.exports = async (request, response, stack, next) => {
  try {
    const attributeIds = request.body.ids;
    await del('attribute').where('attribute_id', 'IN', attributeIds.split(',')).execute(pool);
    response.json({
      data: {},
      success: true
    });
  } catch (e) {
    response.json({
      data: {},
      message: e.message,
      success: false
    });
  }
};
```

## EverShop middleware type

In EverShop, there are 4 types of middleware functions

### 1: Application-level middleware

Application-level middleware is a middleware function that will be executed on all requests, both admin and front store even though 404 page.

For example, a logging middleware that takes care of writing some log information is an application-level middleware.

In a module, you can create a middleware function by creating a file in the `api/global` or `pages/global` folder. For example, if you create a file named `logMiddleware.js` in the `api/global` folder, this middleware will be executed on all API requests.

### 2: Admin-level middleware

Admin level middleware is a middleware function that will be executed on all requests to the admin panel.

For example, an admin user authentication middleware that takes care of admin authentication is an admin level middleware.

In a module, you can create a middleware function by creating a file in the `api/admin/all` or `pages/admin/all` folder. For example, if you create a file named `authMiddleware.js` in the `pages/admin/all` folder, this middleware will be executed on all pages in the admin panel.

### 3: Site-level middleware

Similiar to the admin-level middleware, site-level middleware is a middleware function that will be executed on all requests to the front store.

For example, a customer authentication middleware that takes care of customer authentication is a site-level middleware.

### 4: Routed-level middleware

Routed level middleware is a middleware function that will only be executed on a specific route.

For example, a load product middleware will only be executed when a user visits the product view route.

## Middleware function

Middleware is a function that have access to maximum 4 arguments

1. `request` object: The HTTP request object.
2. `response` object: The HTTP response object.
3. `delegate` array: The list of returned value from previous middleware functions.
4. `next`: The function to call the next middleware.

### ‘Passive’ middleware function

Let’s take a look an example

```js
module.exports = (request, response) => {
    // Do something
}
```

You can see we do not have `next` argument in this middleware function. This middleware function only care about it’s own business and do not call `next()`. It is because the core of EverShop will take care of calling the next middleware in this case.

### ‘Active’ middleware function

Let’s take a look an example:

```js
module.exports = (request, response, delegate, next) => {
  // Do something
  next();
}
```

This middleware function has the next argument. Besides of doing it’s own business, it takes care of calling `next()` based on it’s own logic. In this case, if you do not call `next()` the request will be left hanging forever.

### Asynchronous middleware function

Let’s take a look an example: 

```js
module.exports = async (request, response) => {
  // Do something asynchonous
}
```

By default, EverShop supports async middleware functions. You can just create and export an async middleware function just like the above example and EverShop will take care of the rest.

In case you want the subsequence middleware functions to wait for your middleware, you can use the ‘active’ middleware function style.

## Middleware and route

:::info

Before we dive into the relationship between middleware and route, we suggest you check [this document](/docs/development/knowledge-base/routing-system) about the routing system.

:::

Let’s take a look at the directory structure of a module:

![EverShop middleware and route](./img/middleware-and-route.png ""EverShop middleware and route")

EverShop has a file-system based middleware. It bases on the directory structure to identify, load and build middleware functions for each routes.

In the above picture, the middleware functions that located in the yellow box are ‘Application-level’ middleware. They are direct child of either ‘controllers’ or ‘apiControllers’ directory. So if you want to have a middleware function that execute on all incoming request, you know where to put them, right?

The middleware functions that located in the blue box are ‘Site-level’ middleware. They will be executed on all request to the front store. They located in a folder named ‘all‘, this folder is a direct child of either ‘controllers’ or ‘apiControllers’ directory. This is applied for ‘Admin-level’ middleware too.

The middleware functions that located in the purple box are ‘Route-level’ middleware. They will only be executed when the route with ID ‘cmsPageView‘ is triggered.

## Middleware naming rules and dependency management

One of the most important thing when working with middleware is we must be able to control the order of execution of middleware function.

In other words, we have to control and make sure that our middleware functions are executing in the order that we are expecting.

In EverShop, we base on the file name of middleware for ordering and dependency management. The way you name your middleware function decides when your middleware will be executed.

### Middleware naming rules

Is is pretty simple, your middleware file should meet 2 below requirements

1. It has to have ‘.js’ as the file name extension.
2. We do not accept whitespace and special characters (except ‘[‘, ‘]’ and ‘,’).

### Middleware ordering

Let’s take a look an example of module structure: 

```bash
├── components
├── controllers
│   ├── admin
│   └── site
│       └── productView
│           ├── a.js
│           ├── [a]b.js
│           ├── [a,b]c[e].js
│           ├── e.js
│           ├── [f]g.js
└──         └── route
```

In the above example, the middleware `[a]b.js` will be executed after the middleware a.js. You can see we do it by having `[a]` at the beginning of `[a]b.js`. This example shows you the basics of middleware ordering based on file name.

Middleware `[a,b]c[e].js` shows us a more complex case, this middleware will be executed after both `a.js` and `b.js` AND before the middleware `e.js`.

In the above example, the middleware `[f]g.js` will never be executed because it’s dependency (`f.js`) does not exist (We assume it does not exist in all module).

:::warning

A middleware function will never be executed if it’s dependency does not exist or was removed somehow.

:::
