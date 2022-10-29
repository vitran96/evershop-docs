---
sidebar_position: 28
keywords:
- EverShop API Routes
sidebar_label: API Routes
title: API Routes
description: EverShop supports API Routes, which allow you to build your API  endpoints to provide backend functionality. Learn how it works here.
---

# API Routes

:::info
Check the [module structure](/docs/development/module/module-overview) to learn more about the structure of EverShop modules.
:::

EverShop RESTful are located in the `api` folder of each module. Bellow is an example of a page in the `api` folder of the `checkout` module:

```bash
checkout
├── api
    ├── admin
    │   ├── bestsellers
    │   │   ├── loadData.js
    │   │   └── route
    │   ├── createShipment
    │   │   ├── [context]multerNone[auth].js
    │   │   ├── createShipment.js
    │   │   └── route
    │   ├── lifetimesales
    │   │   ├── loadData.js
    │   │   └── route
    │   ├── orderBulkFullFill
    │   │   ├── [bodyParser]fullfill.js
    │   │   ├── bodyParser.js
    │   │   └── route
    │   ├── salestatistic
    │   │   ├── loadData.js
    │   │   └── route
    │   └── updateShipment
    │       ├── [context]multerNone[auth].js
    │       ├── route
    │       └── updateShipment.js
    └── frontStore
        ├── addToCart
        │   ├── [context]multerNone[auth].js
        │   ├── [initCart]addToCart[saveCart].js
        │   ├── initCart.js
        │   ├── [initCart]saveCart.js
        │   └── route
        ├── cartItemRemove
        │   ├── removeItem.js
        │   └── route
        ├── checkoutGetPaymentMethods
        │   ├── [context]multerNone[auth].js
        │   ├── route
        │   └── sendMethods.js
        ├── checkoutGetShippingMethods
        │   ├── [context]multerNone[auth].js
        │   ├── route
        │   └── sendMethods.js
        ├── checkoutPlaceOrder
        │   ├── placeOrder.js
        │   └── route
        ├── checkoutSetBillingAddressInfo
        │   ├── [context]multerNone[auth].js
        │   ├── route
        │   └── saveBillingAddress.js
        ├── checkoutSetContactInfo
        │   ├── [context]multerNone[auth].js
        │   ├── route
        │   ├── saveContactInfo.js
        │   └── validateEmail[saveContactInfo].js
        ├── checkoutSetPaymentInfo
        │   ├── [context]multerNone[auth].js
        │   ├── route
        │   └── savePaymentInfo.js
        └── checkoutSetShipmentInfo
            ├── [context]multerNone[auth].js
            ├── route
            └── saveShipmentInfo.js

```

## `api` folder structure

The `api` folder contains the following subfolders:

- `admin` - This folder contains the admin API. The `admin` folder contains subfolders for each api. For example, the `createShipment` folder contains middleware functions for create shipment API endpoint.

- `frontStore` - This folder contains the front store API. The `frontStore` folder contains subfolders for each page. For example, the `addToCart` folder contains middleware functions for add to cart API endpoint.

## The `admin` and `frontStore` folders

The `admin` and `frontStore` folders contain the following subfolders:

- `all` - This folder contains middleware functions that are used in all API.

- Other subfolders - Each subfolder represents a API endpoint. For example, the `addToCart` folder is the add to cart API endpoint.

## The single api folder

Each api folder contains the middleware functions and the route defination for the API endpoint.

Below is an example of an api folder:

```bash
├── addToCart
│   ├── [context]multerNone[auth].js
│   ├── [initCart]addToCart[saveCart].js
│   ├── initCart.js
│   ├── [initCart]saveCart.js
│   └── route
```

### The API route defination

In each api folder, there is a `route` file. This file contains the route defination for the API endpoint. For example, the `route` file of the `addToCart` API is:

```bash
POST
/cart/add
```

:::warning
The folder name will be used as the routeId, so make sure the folder name is unique and does not contain any special characters.
:::

:::info
Check the [routing system document](/docs/development/knowledge-base/routing-system) to learn more about the routing system.
:::

### The api middleware functions

EverShop allows you to create middleware functions for each API. You can create many middleware functions as you need.

:::info
Check the [middleware system document](/docs/development/knowledge-base/middleware-system) to learn more about the middleware system.
:::

### Shared middleware functions

In some cases, you may need to use the same middleware functions in multiple API. For example, you may need to use the same middleware function for the `addToCart` and `updateCartItem` API. In this case, you can create a special folder `addToCart+updateCartItem` in the `pages/frontStore` folder and put the middleware function in this folder. All middleware function in this folder will be executed in both API endpoints.

This special folder does not contain any `route` file. It only contains middleware functions.

If you have a middleware function that required for all API endpoints (both frontStore and admin panel), you can put it in the `api/global`.

If you have a middleware function that required for all pages in the admin panel, you can put it in the `api/admin/all`. The same for the front store APIs.