---
sidebar_position: 28
keywords:
- EverShop API Routes
sidebar_label: RESTful API Routes
title: API Routes
description: EverShop supports API Routes, which allow you to build your API  endpoints to provide backend functionality. Learn how it works here.
---

# RESTful API Routes

:::info
Check the [module structure](/docs/development/module/module-overview) to learn more about the structure of EverShop modules.
:::

EverShop RESTful are located in the `api` folder of each module. Bellow is an example of a page in the `api` folder of the `catalog` module:

```bash
catalog
├── api
│   ├── createProduct
│   │   ├── ... // Other middleware functions
│   │   └── route.json
│   ├── updateProduct
│   │   ├── ... // Other middleware functions
│   │   └── route.json
│   ├── createCategory
│   │   ├── ... // Other middleware functions
│   │   └── route.json
│   ├── updateCategory
│   │   ├── ... // Other middleware functions
│   │   └── route.json
│   ├── createAttribute
│   │   ├── ... // Other middleware functions
│   │   └── route.json
│   └── updateAttribute
│   │   ├── ... // Other middleware functions
│       └── route.json

```

## `api` folder structure

The `api` folder contains the following subfolders:

- `global` - This folder contains middleware functions that are used in all API. For example, the `global` folder contains the `auth` middleware function that is used in all API endpoints.

- `<apiID>` - Those folders are the API endpoints. For example, the `createProduct` folder is the create product API endpoint.

## The single api folder

Each api folder contains the middleware functions and the route defination for the API endpoint.

Below is an example of an api folder:

```bash
├── createProduct
│   ├── [context]bodyParser[auth].js
│   ├── saveProduct.js
│   └── route.json
```

## The API route defination

In each api folder, there is a `route.json` file. This file contains the route defination for the API endpoint. For example, the `route.json` file of the `deleteProduct` API is:

```bash
{
  "methods": [
    "DELETE"
  ],
  "path": "/products/:id",
  "access": "private"
}
```

:::warning
The folder name will be used as the routeId, so make sure the folder name is unique and does not contain any special characters.
:::

:::info
Check the [routing system document](/docs/development/knowledge-base/routing-system) to learn more about the routing system.
:::

## The api authentication

In the `route.json` file, you can set the `access` property to `public` or `private`. If you set the `access` property to `private`, the API endpoint will be protected by the authentication system. Private API endpoints can only be accessed by the authenticated users (admin users).

:::warning
For security reasons, if the `access` property is not set, the API endpoint will be treated as a private API endpoint.
:::

## The api request data validation

EverShop allows you to define the request data schema for each API endpoint. You can define the request data schema using a json file named `payloadSchema.json` in the api folder. For example, the `createProduct` API endpoint has the following request data schema:

```bash title = "createProduct/payloadSchema.json"
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "short_description": {
      "type": "string"
    },
    "url_key": {
      "type": "string",
      "pattern": "^\\S+$"
    },
    "meta_title": {
      "type": "string"
    },
    "meta_description": {
      "type": "string"
    },
    "meta_keywords": {
      "type": "string"
    },
    "status": {
      "type": [
        "integer",
        "string"
      ],
      "enum": [
        0,
        1,
        "0",
        "1"
      ]
    },
    "sku": {
      "type": "string"
    },
    "price": {
      "type": [
        "string",
        "number"
      ],
      "pattern": "^\\d+(\\.\\d{1,2})?$"
    },
    "weight": {
      "type": [
        "string",
        "number"
      ],
      "pattern": "^[0-9]+(\\.[0-9]{1,2})?$"
    },
    "qty": {
      "type": [
        "string",
        "number"
      ],
      "pattern": "^[0-9]+$"
    },
    "manage_stock": {
      "type": [
        "string",
        "number"
      ],
      "enum": [
        0,
        1,
        "0",
        "1"
      ]
    },
    "stock_availability": {
      "type": [
        "string",
        "number"
      ],
      "enum": [
        0,
        1,
        "0",
        "1"
      ]
    },
    "group_id": {
      "type": [
        "string",
        "integer"
      ],
      "pattern": "^[0-9]+$"
    },
    "visibility": {
      "type": [
        "integer",
        "string"
      ],
      "enum": [
        0,
        1,
        "0",
        "1"
      ]
    },
    "images": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "attributes": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "attribute_code": {
            "type": "string"
          },
          "value": {
            "type": [
              "string",
              "array"
            ],
            "items": {
              "type": "string"
            }
          }
        }
      }
    },
    "categories": {
      "type": "array",
      "items": {
        "type": [
          "string",
          "integer"
        ],
        "pattern": "^[0-9]+$"
      }
    },
    "options": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "option_name": {
            "type": "string"
          },
          "option_type": {
            "type": "string",
            "enum": [
              "select",
              "multiselect"
            ]
          },
          "is_required": {
            "type": [
              "string",
              "integer"
            ],
            "enum": [
              0,
              1,
              "0",
              "1"
            ],
            "default": 0
          },
          "values": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "value": {
                  "type": "string"
                },
                "extra_price": {
                  "type": [
                    "string",
                    "number"
                  ],
                  "pattern": "^\\d+(\\.\\d{1,2})?$"
                }
              }
            }
          }
        },
        "required": [
          "option_name",
          "option_type",
          "values"
        ],
        "additionalProperties": true
      }
    }
  },
  "required": [
    "name",
    "meta_title",
    "url_key",
    "status",
    "sku",
    "qty",
    "price",
    "weight",
    "group_id",
    "visibility"
  ],
  "additionalProperties": true
}
```

The request data will be validated based on this schema. If the validation was failed, an error response will be sent to client.

:::info
EverShop makes use of [Ajv JSON schema validator](https://ajv.js.org/) for request payload validation.
:::

## The api middleware functions

EverShop allows you to create middleware functions for each API. You can create many middleware functions as you need.

:::info
Check the [middleware system document](/docs/development/knowledge-base/middleware-system) to learn more about the middleware system.
:::

### Shared middleware functions

In some cases, you may need to use the same middleware functions in multiple API. For example, you may need to use the same middleware function for the `createProduct` and `updateProduct` API. In this case, you can create a special folder `createProduct+updateProduct` in the `api` folder and put the middleware function in this folder. All middleware function in this folder will be executed in both API endpoints.

This special folder does not contain any `route.json` file. It only contains middleware functions.

If you have a middleware function that required for all API endpoints (both frontStore and admin panel), you can put it in the `api/global`.
