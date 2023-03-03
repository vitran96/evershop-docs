---
sidebar_position: 25
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

### Master level components

Let's take a look at the catalog module. The catalog module has a `pages` folder that contains the React components for each page.

```bash
catalog
└── pages
    ├── admin
    │   ├── categoryEdit
    │   ├── productEdit
    │   └── attributeEdit
    ├── frontStore
    │   ├── productView
    │   │   ├── General.js
    │   │   └── Media.js
    │   ├── categoryView
    │   │   ├── General.js
    │   │   └── Products.js
```
In the above example, the `General.js`, `Media.js` and `Products.js` are the master level components. They are located directly in the page folder. There is no limitation on the number of master level components in a page. You can have as many as you want.

:::warning
Since the master level components will be loaded automatically, you must provide the `export default` statement in the master level components.
:::

### Shared components

Shared components are the components that are used in multiple pages. Those components will not be used unless you import them in the master level components. By default, EverShop has a `components` folder in the `src` folder.

```bash
@evershop/evershop
└── src
    └── components
        ├── admin
        ├── common
        │   ├── Area.js
        │   └── form
        │       ├── Form.js
        └── frontStore
```

### Component path alias

There are 3 path alias that you should know:

- `@components` - This path alias will point to the `components` folder in the `src` folder. Use this path alias to import the shared components.

```js
import Area from '@components/common/Area';
```

- `@components-origin` - This path alias will also point to the `components` folder in the `src` folder just like the `@components` path alias. Use this path alias when you want to overwrite the existing shared components.

```js title="themes/your-theme-folder/components/common/Area.js"
import Area from '@components-origin/common/Area';
```

- `@default-theme` -  This path alias will point to `pages` folder in each module. Use this path when you want to overwrite the existing master level components.

```js title="themes/your-theme-folder/pages/productView/General.js"
import General from '@default-theme/catalog/frontStore/productView/General';
```

## Overwriting the existing blocks

When you want to overwrite the existing component, first thing you need to do is to identify the component that you want to overwrite. It can be a master level component or a shared component.

### Overwriting the existing master level component

Let's take a look the default `Layout.js` component from the `cms` core module:

```js title="modules/pages/all/Layout.js"

import React from 'react';
import Area from '@components/common/Area';
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

This master component is located in the `modules/cms/pages/frontStore/all` folder. In order to overwrite this component, you need to create a new file at `themes/your-theme-folder/pages/all/Layout.js`.

```js title="themes/your-theme-folder/pages/all/Layout.js"

import React from 'react';
import Area from '@components/common/Area';
import './Layout.scss';
import './tailwind.scss';

// Your component code goes here

export const layout = {
  areaId: "body",
  sortOrder: 1
};

```

Now, EverShop will use your component instead of the default one.

### Overwriting the existing shared component

Let's take a look the default `Area.js` component from the `common` folder:

```js title="src/components/common/Area.js"
import React from 'react';
import PropTypes from 'prop-types';

// component code

export default Area;
```

This shared component is located in the `src/components/common` folder. In order to overwrite this component, you need to create a new file at `themes/your-theme-folder/components/common/Area.js`.

```js title="themes/your-theme-folder/components/common/Area.js"
import React from 'react';
import PropTypes from 'prop-types';

// Your component code goes here

export default Area;
```

Now, EverShop will use your component instead of the default one.

:::note
In case you want to use the default component, you can import the component from the `@components-origin` path alias.
:::

## Adding new components

### Adding a new master level component

To add a new master level component to the page, first thing you need to do is to identify the page that you want to add the component. In the following example, we will add a new component to the `productView` page.

**Single page**

```bash
<your-theme-folder>
└── pages
    └── productView
        └── NewComponent.js
```
The `NewComponent.js` file will be automatically loaded when the `productView` page is rendered.

**All pages**

If you want to add a new master level component that will be used in all pages, you can create a new file in the `all` folder.

```bash
<your-theme-folder>
└── pages
    └── all
        └── NewComponent.js
```

The `NewComponent.js` file will be automatically loaded when any page is rendered.

**Multiple pages**

And, if you have a component that will be used in multiple pages, you can create a new folder with special name `pageA+pageB+pageC` and put the component in that folder.

```bash
<your-theme-folder>
└── pages
    └── productView+categoryView
        └── NewComponent.js
```

The `NewComponent.js` file will be automatically loaded when the `productView` and `categoryView` page is rendered.

### Adding a new shared component

To add a new shared component, you can create a new file in the `components` folder.

```bash
<your-theme-folder>
└── components
    └── common
        └── NewComponent.js
```

Now you can import the new component in any master level component.

```js
import NewComponent from '@components/common/NewComponent';
```

## The `jsconfig.json` file for path alias

In order to make the import path shorter, you can create a `jsconfig.json` file in the root folder of your theme. The content of the file should be like this:

```json title="jsconfig.json"
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@components/*": [
        "./themes/<yourtheme>/components/*",
        "./node_modules/@evershop/evershop/src/components/*"
      ],
      "@components-origin/*": [
        "./node_modules/@evershop/evershop/src/components/*"
      ],
      "@default-theme/*" : [
        "./node_modules/@evershop/evershop/src/modules/*/pages/*"
      ]
    }
  }
}
```

## Make your theme translatable

In order to make your theme translatable, every string that you want to translate should be wrapped with the `_` function.

```js
import React from 'react';
import { _ } from '@evershop/evershop/src/lib/locale/translate';

export default function Component() {
  return (
    <div>
      <h1>{_('Hello World')}</h1>
    </div>
  );
}
```

In case your text is dynamic, you can use a second argument to pass the variables.

```js
import React from 'react';
import { _ } from '@evershop/evershop/src/lib/locale/translate';

export default function Component() {
  const name = 'John';
  return (
    <div>
      <h1>{_('Hello ${name}', {name})}</h1>
    </div>
  );
}
```