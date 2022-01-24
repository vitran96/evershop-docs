---
sidebar_position: 5
sidebar_label: Middleware
keywords:
- NodeJsCart middleware
- NodeJsCart middleware functions
title: The middleware function system design of NodeJsCart
description: The middleware system is the most important part of the NodeJsCart platform. It was designed to make the system fully customizable by supporting adding or removing any middleware function. 
---

# NodeJsCart middleware function system

In NodeJsCart, middleware functions are functions that have access to the request object (request), the response object (response), and the next middleware function in the application’s request-response cycle.
When the server receives a request, a list of middleware functions will be executed. There are 4 types of middleware functions:

1. "Application-level middleware"
2. "Admin-level middleware"
3. "Site-level middleware"
4. "Route-level middleware"

:::info

For the project folder structure. Check [this document](/docs/module-development/module-structure).

:::

In a module, middleware functions are JS files located in the `middleware` folders. 

```javascript
├── components
├── middlewares
│   ├── [context]config.js
│   ├── admin
│   └── site
└── routes.js
```

## Middleware function

A middleware function is a function that takes maximum 4 arguments:

* "request" object: The HTTP request object.
* "response" object: The HTTP response object.
* "stack" array: The list of returned value from previous middleware functions.
* "next": The function to call the next middleware.

### Simple middleware function

A function that takes 2 arguments.

```javascript
module.exports = (request, response) => {
    // Do something
}
```

You can see we do not have `next` argument for this middleware function. It is because the core of NodeJsCart will take care of calling the next middleware in this case.

### '4-aguments' middleware function

A function that takes 4 arguments.

```javascript
module.exports = (request, response, stack, next) => {
    // Do something
    next();
}
```

When you have 4 arguments in your middleware function, it means that you want to take care of calling 'next' function yourself.
In this case, you must call 'next' function, otherwise, the request will be left hanging forever.

### Async middleware function

```javascript
module.exports = async (request, response) => {
    // Do something
    await someFunction();
}
```
NodeJsCart will wait for all of the async middleware functions to be resolved before sending the response.
If one of the middleware functions is rejected, an error-handling middleware will be called.

### The 'stack' argument

```javascript
module.exports = async (request, response, stack) => {
    let previousReturnedValue = await stack['middlewareID']
    // Do something
    await someFunction();
}
```
Many times, your middleware functions work base on the result of one or the previous middleware.
In this case, the 'stack' argument can be helpful.

## Application-level middleware functions

Those middleware functions are executed on every request, both admin panel, and storefront.

For the "Application-level" middleware functions, we locate them in the `middleware` folder.

In the above example `[context]config.js` is an "application-level" middleware function

## Admin-level middleware functions

Those middleware functions are executed on every request to the admin panel.

We organize the "Admin-level" middleware functions in `middleware/admin` folder.

## Site-level middleware functions

Those middleware functions are executed on every request to the storefront.

We keep the "Site-level" middleware functions in `middleware/site` folder.

## Route-level middleware functions

Those middleware functions are executed on the request that matches the route.

### Middleware function and route

Remember the "routeId" argument when we register a route in [this document](/docs/knowledge-base/routing)?

```javascript
registerSiteRoute("productView", ["GET"], "/product/:url_key");
```

Above function registers a route for the product single page. 
To add a middleware function that executes when user visits the product single page, we create a folder inside `middleware/site` folder and name it productView. 
The name of the folder must be the same as the `routeId` argument.

```javascript
├── components
├── middlewares
│   ├── [context]config.js
│   ├── admin
│   └── site
│       └── productView
│           └── productLoad.js
└── routes.js
```

All middleware functions located in this folder will be executed when user visits the product single page.
In the above example, we have one middleware `productLoad.js`.

## Middleware naming rules

How you name your middleware function decides how and when your middleware will be executed.

First of all, your middleware file name must only contain letter, no special character, no whitespace.

In the above example, your middleware name is `productLoad.js`. 
It is the most simple name, this middleware will be executed when user visits the route, but you do not know when exactly your middleware will be executed.

*What if you want to make sure your middleware is only executed after one or several middleware?*

```javascript
├── components
├── middlewares
│   ├── [context]config.js
│   ├── admin
│   └── site
│       └── productView
│           ├── a.js
│           ├── [a]b.js
│           ├── [a,b]c[e].js
│           └── e.js
└── routes.js
```

In the above example, the middleware `[a]b.js` will be executed **after** `a.js` middleware.

The middleware `[a,b]c[e].js` will be executed **after** both `a.js` and `b.js` middleware functions. It also will be executed **before** the `e.js` middleware function.

:::caution

In the above example, the **a.js** middleware function is a dependency of the **b.js** middleware. It means the **b.js** will never be executed if the middleware **a.js** was removed somehow.

:::