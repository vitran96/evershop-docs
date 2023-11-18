---
sidebar_position: 10
keywords:
- extension development
sidebar_label: Extension Development
title: Extension Development
description: Understand the Need for a Evershop extension development and how to develop a Evershop extension.
---

![EverShop extension development](./img/evershop-extension-development.jpg "EverShop extension development")

:::info
Before you start writing code for your Evershop module, we recommend reading [EverShop’s module overview documentation](./module-overview) to understand the basic of EverShop module.
:::

This document will guide you through the process of enabling the extension feature of EverShop. After that, you will be able to create your own extension and install it to your EverShop project.

Let's assume that you have already installed EverShop and you have a running project. If you haven't installed EverShop yet, please check [this document](../getting-started/installation-guide) for the installation guide.

Let's start!

## The `extensions` Folder

In the root folder of your EverShop project, you will find a folder named `extensions`. If it doesn't exist, you can create it manually. This folder contains all of the extensions that you have installed to your project. You can create your own extension and install it to this folder.

You can check [this document](../knowledge-base/architecture-overview) to learn more about the project folder structure.

## The NPM Workspace

An extension can be a NPM package. It means that you can have a `packages.json` file in your extension with some dependency. To do that, you need to create a NPM workspace. A NPM workspace is a NPM package that contains multiple NPM packages. You can read more about NPM workspace [here](https://docs.npmjs.com/cli/v7/using-npm/workspaces).

To enable the NPM workspace feature, you need to add the following lines to your `package.json` file in your EverShop project:

```js title="package.json"
{
  "workspaces": [
    "extensions/*"
  ]
}
```
After that, when you run `npm install` command, it will install all of the dependencies of your extensions.

## Naming Convention

We only accept characters `[a-z]` and `_` for the extension name. The extension name must be unique. It means that you can't have two extensions with the same name.

### Example

- `FreeShipping`
- `Vendor_FreeShipping`

## The Extension Folder Structure

Just like a module, below is the folder structure of an extension:

```bash
extensions
└── Vendor_ExtensionName
    ├── api
    │   └── postCreate
    │       ├── route.json
    │       ├── validatePostMiddleware.js
    │       └── [validatePostMiddleware]savePostMiddleware.js
    ├── graphql
    │   └── types
    ├── migration
    │   └── Version_1.0.0.js
    ├── pages
    │   ├── admin
    │   │   └── postCreate
    │   │       ├── route.json
    │   │       ├── index.js
    │   │       ├── GeneralComponent.jsx
    │   │       └── FormComponent.jsx
    │   └── frontStore
    │       └── postView
    │           ├── route.json
    │           ├── index.js
    │           ├── TitleComponent.jsx
    │           ├── PriceComponent.jsx
    │           └── VariantsComponent.jsx
    ├── bootstrap.js
    └── packages.json
```
You can check [this document](./module-overview) to learn more about the module folder structure.

## Active/Deactive Your Extension

Let's assume that you have created an extension named `myExtension`. To enable it, you need to add the following lines to your config file in your EverShop project:

```js title="./config/production.config.json"
{
  ...
  "system": {
        "database": {
            "host": "localhost",
            "port": 3306,
            "database": "evershop",
            "user": "root",
            "password": ""
        },
        "extensions": [
            {
                "name": "myExtension",
                "resolve": "extensions/myExtension",
                "enabled": true,
                "priority": 10 // Smaller number means higher priority
            }
        ]
    }
}
```
To disable it, you need to change the `enabled` property to `false`.

:::info
Enabling or disabling an extension requires building your project again.
:::

## Publish your extension as a NPM package

By default, extension is located in the `extensions` folder of your EverShop project. However, you can publish your extension as a NPM package and install it to your EverShop project just like any other NPM package.

```bash 
npm install @evershop/productcomment
```

and then hook it up to your EverShop project:

```js title="./config/production.config.json"
{
  ...
  "system": {
        "database": {
            "host": "localhost",
            "port": 3306,
            "database": "evershop",
            "user": "root",
            "password": ""
        },
        "extensions": [
            {
                "name": "productcomment",
                "resolve": "node_modules/@evershop/productcomment",
                "enabled": true,
                "priority": 10 // Smaller number means higher priority
            }
        ]
    }
}
```

:::info
Check out the [create your first extension](./create-your-first-extension) document to learn how to create your first extension.
:::