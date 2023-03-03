---
sidebar_position: 20
keywords:
- Styling
sidebar_label: Styling
title: Styling
description: EverShop supports including CSS files as Global CSS or TailwindCss. This document will guide you through the process of styling your component and page.
---

# Styling

EverShop supports including importing CSS files. It also support Sass or TailwindCss out of the box. This document will guide you through the process of styling your component and page.

## Scss file

By default, EverShop supports importing SCSS files. You can import SCSS files from any component or page in your application.

```js
import React from 'react';
import './style.scss';
```

:::warning
Note that the file extension must be `.scss` (NOT `.css`).
:::

## TailwindCss

EverShop supports [TailwindCss](https://tailwindcss.com/) out of the box. The default EverShop theme uses TailwindCss for styling. 

If you do not want to use TailwindCss, you create a Layout template to override the default one from the CMS module and remove the `tailwind.scss` file.

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

```js title="<yourtheme>/pages/all/Layout.js"
import React from 'react';
import './tailwind.scss';
```

That is all. Now you can use TailwindCss in your components.

### Overwrite TailwindCss configuration

You can overwrite the default TailwindCss configuration by creating a `tailwind.frontStore.config.js` file in the root of your project.

```js title="tailwind.frontStore.config.js"
module.exports = {
  corePlugins: {
    // ...
    lineHeight: false,
    placeholder: false,
    placeholderOpacity: false,
    textOpacity: false,
    backgroundOpacity: false,
    backgroundPosition: false,
    backgroundImage: false,
    gradientColorStops: false,
    borderOpacity: false,
    divideColor: false,
    divideOpacity: false,
    ringOpacity: false,
    ringOffsetColor: false,
    mixBlendMode: false,
    backgroundBlendMode: false,
    brightness: false,
    contrast: false,
    dropShadow: false,
    hueRotate: false,
    invert: false,
    saturate: false,
    sepia: false,
    backdropFilter: false,
    backdropBlur: false,
    backdropBrightness: false,
    backdropContrast: false,
    backdropGrayscale: false,
    backdropHueRotate: false,
    backdropInvert: false,
    backdropOpacity: false,
    backdropSaturate: false,
    backdropSepia: false,
    transitionDelay: false,
    transform: false,
    transformOrigin: false,
    scale: false,
    rotate: false,
    translate: false,
    skew: false
  },
  theme: {
    fontFamily: {
      sans: 'Helvetica,Helvetica Neue,Arial,Lucida Grande,sans-serif'
    },
    fontSize: {
      base: '.875rem'
    },
    colors: {
      white: '#ffffff',
      primary: '#3a3a3a',
      secondary: '#111213'
    },
    spacing: {
      0: '0px'
    },
    margin: {
      0: '0px'
    },
    borderRadius: {
      DEFAULT: '0.25rem',
      100: '100%'
    },
    borderWidth: {
      0: '0px',
      DEFAULT: '1px'
    },
    opacity: {

    },
    boxShadow: {
      DEFAULT: '0 0 0 1px rgba(63,63,68,.05),0 1px 3px 0 rgba(63,63,68,.15)'
    }
  },
  variants: {
    extend: {
      borderWidth: ['first', 'last'],
      margin: ['first', 'last'],
      padding: ['first', 'last']
    }
  },
  plugins: []
};
```

:::warning
Adding the `tailwind.storeFront.config.js` file requires you to restart the development server.
:::

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