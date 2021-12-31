---
sidebar_position: 4
keywords:
- Routing
- NodeJsCart routing
- NodeJsCart module route
description: NodeJsCart routing system. How to register a route in NodeJsCart module.
---

# Routing

Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

NodeJsCart uses [ExpressJs](https://expressjs.com/) as the routing system.

This is an example of an admin panel route:

```javascript
registerAdminRoute("productNew", ["GET"], "/products/new");
```

and this is for a front store route:

```javascript
registerSiteRoute("productView", ["GET"], "/product/:url_key");
```

Above functions takes 3 arguments:

* `productNew`. This is the route id, It as to be unique. We will base on this to manage [middleware(s)](/docs/knowledge-base/middleware) for this route.
* `["GET"]`. This is the list of accepted HTTP methods.
* `/products/new`. This is the URL path of the route.

You may be noticed that we did not provide any middleware to this route. It is because we designed a 'file-based' middleware system to make it more flexible and customizable.
You can find more information about how to work with middleware(s) in [this document](/docs/knowledge-base/middleware).

We organize all routes of a module in a file named `routes.js`. This file is located in each module folder.

Here is an example of a `route.js` file:

```javascript
module.exports = function ({ registerSiteRoute, registerAdminRoute }) {
    registerAdminRoute("productNew", ["GET"], "/products/new");

    registerAdminRoute("productEdit", ["GET"], "/products/edit/:id(\\d+)");

    // Site routes
    registerSiteRoute("categoryView", ["GET"], "/category/:url_key");

    registerSiteRoute("productView", ["GET"], "/product/:url_key");
}

```