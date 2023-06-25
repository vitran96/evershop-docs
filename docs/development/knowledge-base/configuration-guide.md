---
sidebar_position: 45
keywords:
- Configuration
sidebar_label: Configuration
title: Configuration
description: Configure the EverShop application. Setup your shop information and configure the database connection. Extend configuration for different deployment environments
---

# Configuration guide

In EverShop, some of the configurations can be done from the admin panel like Payment method, Shipment method, Taxes… We will learn more about these items in our user guide document.

In this section, we will focus on the configuration from the `config/` directory. This directory contains the configuration files for the application.

Under the hood, EverShop makes use of [config package](https://www.npmjs.com/package/config) to handle the configuration.

## Configuration file location

Configurations are JSON files stored in configuration files within a directory named ‘config’ located at the root level of your application.

Let’s take a look at an example

```bash
{
    "shop" : {
        "currency": "USD",
        "language": "cn",
        "weightUnit": "kg"
    },   
    "catalog": {
        "product": {
            "image": {
                "thumbnail": {
                    "width": 100,
                    "height": 100
                },
                "listing": {
                    "width": 300,
                    "height": 300
                },
                "single": {
                    "width": 500,
                    "height": 500
                },
                "placeHolder": "/default/image/placeholder.png"
            }
        },
        "showOutOfStockProduct": false
    },
    "order": {
        "shipmentStatus": [
            {
                "name": "Unfullfilled",
                "code": "unfullfilled",
                "badge": "warning",
                "progress": "incomplete"
            },
            {
                "name": "Fullfilled",
                "code": "fullfilled",
                "badge": "success",
                "progress": "complete"
            }
        ],
        "paymentStatus": [
            {
                "name": "Pending",
                "code": "pending",
                "badge": "default",
                "progress": "incomplete"
            },
            {
                "name": "Paid",
                "code": "paid",
                "badge": "success",
                "progress": "complete"
            },
            {
                "name": "Refunded",
                "code": "refunded",
                "badge": "critical",
                "progress": "complete"
            }
        ]
    },
    "system": {
        "database": {
            "host": "localhost",
            "port": "5432",
            "database": "testrc5again",
            "user": "postgres",
            "password": "123456"
        },
        "extensions": [
            {
                "name": "productComment",
                "resolve": "extensions/productComment",
                "enabled": true,
                "priority": 10 
            }
        ]
    },
    "pricing": {
        "tax": {
            "precision": 2,
            "round_level": "unit"
        }
    }
}
```

## Configuration and deployment environment

Configuration files can be overridden and extended by [environment variables](https://github.com/node-config/node-config/wiki/Environment-Variables).

For example, you can overwrite the configuration for your production store by below steps

- Create a new configuration file named ‘production.json’ in the ‘config’ directory.
- Add your configuration for production

```bash
{
  "system": {
    "database": {
      "host": "aws.production",
      "port": "3306",
      "database": "production",
      "user": "root",
      "password": "lsdjgdfhgoiwnm"
    }
  }
}
```

## Working with configuration in your code

Let's take a look at the below code:

```bash
const config = require('config');
//...
const dbConfig = config.get('system.db');
db.connect(dbConfig, ...);

if (config.has('optionalFeature.detail')) {
  const detail = config.get('optionalFeature.detail');
  //...
}
```

The above example shows us how to get the configurable variables from the configuration file.

`config.get()` will throw an exception for undefined keys to help catch typos and missing values. You can use `config.has()` to test if a configuration value is defined.

You also can use the below method to get the configuration and provide a default value in case the configuration does not exist:

```bash
const {
  getConfig
} = require('@evershop/evershop/lib/util/getConfig');

let shopTitle = getConfig('shop.language', 'en'),
```