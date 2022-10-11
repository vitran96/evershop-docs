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
<theme_dir>/
├── components
│   ├── catalog/
│   ├── cms/
│   ├── checkout/
├── css/
├── js/
├── images/
```

#### ‘components’ folder

The ‘components’ folder contains the Javascript template files.

Those Javascript files are actually [ReactJS components](https://reactjs.org/) of EverShop modules. We will learn more about how to develop your own component and overwrite the default one in next section.

#### ‘css’ folder

This folder contains css files for your theme styling.

#### ‘js’ folder

This folder contains external Javascript libraries like [jQuery](https://jquery.com/).

#### ‘image’ folder

This folder contains others assets files like images, icons.

### Theme installation

Theme can be configured from [configuration file](/docs/development/knowledge-base/configuration-guide). From here you can define the theme that you want to use.

Changing the theme configuration requires to run [build command](/docs/development/knowledge-base/command-lines) again to load new template and styling.

```json
{
  "shop": {
    "title": "",
    "description": "",
    "currency": "usd",
    "language": "en",
    "timezone": "",
    "frontTheme": "your theme name"
  }
}
```

