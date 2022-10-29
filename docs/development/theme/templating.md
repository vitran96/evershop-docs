---
sidebar_position: 15
keywords:
- Templating
sidebar_label: Templating
title: Templating
description: This document will guide you through the process of customizing the default template using React component. Overwriting the existing components or adding your new components to the template is easy.
---

# Templating

Developing a theme is a process of customizing the default template or adding new components to provide a unique look and feel to your store. This document will guide you through the process of customizing the default template using React component. Overwriting the existing components or adding your new components to the template is easy.

As you may know, each of EverShop module has a `pages` folder that contains the React component for each page. We suggest you to check out the [pages](/docs/development/knowledge-base/pages) and [module structure](/docs/development/module/module-overview) document to learn more about the module structure.

We also suggest you to check out the [theme overview](/docs/development/theme/theme-overview) document to learn more about the structure of EverShop theme.

## EverShop template system

EverShop uses React component to render the pages. Every single page in EverShop is a set of React component. Those components are designed to work independently so you can slit your page to small components instead of having only one component for everything. You can override the existing component or add your own component to provide a unique look and feel to your store.

## Overwriting the existing components

Let's take a look the default Layout.js component from the `cms` core module:

```js title="modules/cms/pages/frontStore/all/Layout.js"

import React from 'react';
import Area from '../../../../../lib/components/Area';
import './Layout.scss';
import './tailwind.scss';

export default function Layout() {
  return (
    <>
      <div className="header flex justify-between">
        <Area id="header" noOuter coreComponents={[
          {
            component: { default: Area },
            props: { id: "icon-wrapper", className: "icon-wrapper flex justify-between space-x-1" },
            sortOrder: 20
          }
        ]} />
      </div>
      <main className="content">
        <Area id="content" className="" noOuter />
      </main>
      <div className="footer">
        <Area id="footer" className="" />
      </div>
    </>
  );
}

export const layout = {
  areaId: "body",
  sortOrder: 1
};
```

This file is located in the `modules/cms/pages/frontStore/all` folder. In order to overwrite this component, you need to create a new file with the same name and location in your theme folder. (You should remove the `frontStore` from the path)

```js title="themes/your-theme-folder/cms/pages/all/Layout.js"

import React from 'react';
import Area from '../../../../../lib/components/Area';
import './Layout.scss';
import './tailwind.scss';

...

export const layout = {
  areaId: "body",
  sortOrder: 1
};

```

Now, EverShop will use your component instead of the default one.

## Adding new components

To add a new component to the page, first thing you need to do is creating a new folder named `pages` in your theme folder. 


```bash title = "themes/pages"
├── catalog
│   └── pages
│       ├── all
│       ├── homepage
│       │   └── FeaturedCategories.js
│       └── productView
│           └── General.js
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

In this `pages` folder, you can create a subfolder to represent the page that you want to add new component to. For example, if you want to add a new component to the `homepage` page, you need to create a new folder named `homepage` in the `pages` folder. Then, you can create a new file named `FeaturedCategories.js` in the `homepage` folder.

```js title="themes/<yourthemefolder>/pages/homepage/FeaturedCategories.js"
import React from 'react';

...

export const layout = {
  areaId: "content",
  sortOrder: 1
};

```

In case you want to add a component to all pages, add it in a subfolder named `all`.