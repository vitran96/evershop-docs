---
sidebar_position: 10
keywords:
- Styling
sidebar_label: Styling
title: Styling
description: EverShop supports including CSS files as Global CSS or TailwindCss. This document will guide you through the process of styling your component and page.
---

# Styling

EverShop supports including importing CSS files. It also support Sass or TailwindCss out of the box. This document will guide you through the process of styling your component and page.

## Css file

By default, EverShop supports importing CSS files. You can import CSS files from any component or page in your application.

```js
import React from 'react';
import './style.scss';
```

:::warning
Note that the file extension must be `.scss` (NOT `.css`).
:::

## TailwindCss

EverShop supports [TailwindCss](https://tailwindcss.com/) out of the box. The default EverShop theme uses TailwindCss for styling. 

If you do not want to use TailwindCss, you create a Layout template from the CMS module and remove the `tailwind.scss` file.

:::info
Check out the [templating document](./templating) to learn more about customizing the layout template.
:::

If you override the default layout template from the cms core module, and keep using TailwindCss, you need to add the `tailwind.scss` file to your layout template.

```html title="tailwind.scss"
@tailwind base;
@tailwind components;
@tailwind utilities;
```

and then import the `tailwind.scss` file in your component.

```js title="Layout.js"
import React from 'react';
import './tailwind.scss';
```

That is all. Now you can use TailwindCss in your components.

## Sass

EverShop supports [Sass](https://sass-lang.com/) out of the box. You can use Sass in your components and pages.

```css
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```