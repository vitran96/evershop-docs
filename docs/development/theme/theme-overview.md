---
sidebar_position: 5
keywords:
- Theme overview
sidebar_label: Theme overview
title: Theme overview
description: EverShop theme overview document. What is theme, where is it located and how to develop your own theme for your own store.
---

# Theme overview

A theme is a component of EverShop application which provides a consistent look and feel (visual design) for entire application area (for example, storefront or EverShop admin panel) using a combination of custom templates, styles or images.

In EverShop, themes are designed to override or customize view layer, provided initially by modules or libraries.

Just like [modules](/docs/development/module/module-overview), [Themes](./theme-overview) are implemented by different vendors (frontend developers) and intended to be distributed as additional packages for EverShop system.

Out-of-the-box [EverShop](https://evershop.io/) application provides a default theme as a demonstration theme, which is fully customizable so you can develop your theme based on it.

You can use the default theme for a live store, but if you want to customize the default design, you need to create a new theme. We strongly recommend not to change the default directly, because if you do edit the default files, your changes can be overwritten by the new version of the default files during upgrades.

## Where are themes located?

### The default theme

If you already see the [module overview document](../module/module-overview), you know that EverShop is a modular application, all functionality is implemented and delivered in components that are known as Modules. The theme is also implemented and delivered in modules too. 

It means that every single module has its own `view` part to take care of the UI/UX. And this `view` part is designed to be easily customized without modifying the core files.

In each module, you can find a `pages` folder which contains all the files related to the UI/UX of the module. This folder contains the following sub-folders:

- `admin` folder: contains all pages related to the admin panel.
- `storefront` folder: contains all pages related to the storefront.
- `global` folder: This special folder contains middlewares that are used in both admin and storefront.

```bash
├── global
├── admin
│   ├── all
│   ├── attributeEdit
│   ├── attributeEdit+attributeNew
│   ├── attributeGrid
│   ├── attributeNew
│   ├── categoryEdit
│   ├── categoryEdit+categoryNew
│   ├── categoryGrid
│   ├── categoryNew
│   ├── productEdit
│   ├── productEdit+productNew
│   ├── productGrid
│   └── productNew
└── frontStore
    ├── categoryView
    ├── homepage
    └── productView
```

:::info
You can learn more about the `view` part of the module in the [module view system](../knowledge-base/view-system.md).
:::

### The vendor themes

Themes that provided by vendors/developers are located in the folder named ‘themes’. This folder is located at the [root level of your project](/docs/development/knowledge-base/architecture-overview).

Each theme must be stored in a separate directory

```bash
*/themes/
├── <theme1>
├── <theme2>
├── <theme3>
├--...
```

## Theme structure

### Theme name

A theme folder will be used as the theme name. So make sure you don’t have any whitespace or special characters in the directory name of your theme.

The structure of a EverShop theme directory typically would be like following

```bash
/themes/
    <justatheme>/
    ├── catalog
    │   └── pages
    │       ├── all
    │       │   ├── FeaturedCategories.js
    │       │   └── homepage copy
    │       │       └── FeaturedCategories.js
    │       ├── categoryView
    │       │   └── FeaturedCategories.js
    │       ├── homepage
    │       │   └── FeaturedCategories.js
    │       └── productView
    │           └── FeaturedCategories.js
    ├── checkout
    │   └── pages
    │       ├── cart
    │       │   └── FeaturedCategories.js
    │       └── checkout
    │           └── FeaturedCategories.js
    ├── cms
    │   └── pages
    │       ├── all
    │       │   └── Layout.js
    │       └── homepage
    │           └── MainSlideShow.js
    └── pages
        ├── categoryView
        │   └── FreeShippingBanner.js
        ├── checkout
        │   └── CheckoutOnly.js
        └── homepage
            └── HomepageOnly.js
```

#### module folders

In the above example, we have 4 module folders, which are `catalog`, `checkout`, `cms` and `pages`. These folders are used to override the default view of the modules.

#### The 'pages' folder

The `pages` folder is used to add new components to the existing pages. For example, if you want to add a new component to the homepage, you can create a new file in the `pages/homepage` folder.

In the above example, we have a file named `HomepageOnly.js` in the `pages/homepage` folder. This file will be used to add a new component to the homepage only.

## Theme configuration

You can configure your theme in the `config/default.js` file located in the root directory of your project.

```json
{
  "shop": {
    "title": "",
    "description": "",
    "currency": "usd",
    "language": "en",
    "timezone": "",
    "theme": "justatheme"
  }
}
```

