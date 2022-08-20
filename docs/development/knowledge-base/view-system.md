---
sidebar_position: 30
keywords:
- the view
sidebar_label: The View System
title: The View System
description: Evershop makes use of React to render the view. The page will be rendered on the server side and then sent to the client side. The client side do the Hydration process and make the page interactive.
---

![EverShop view system](./img/the-view-system.jpg "EverShop view system")

The view is one of the most important parts of a web application. It is the part that the user interacts with.

Evershop makes use of [React](https://reactjs.org/) to render the view. The page will be rendered on the server side and then sent to the client side. The client side do the Hydration process and make the page interactive.

The EverShop view system was designed to be flexible and easy to extend. Third party developers can insert their own React components into the view system without having to modify the core code.

## The View

### Multi page application

The EverShop is a multi page application. Each page has its own layout and components. The build process will generate a bundle file for each page. The bundle file will contain the HTML markup and the JavaScript code to render the page.

### Server-Side Rendering And Hydration

The EverShop follows the server-side-rendering approach. The page will be rendered on the server side and sent to the client along with some JavaScript code. The client side will do the Hydration process to make the page fully interactive.

**Compared to a client-side Single-Page Application (SPA), the advantage of SSR primarily lies in**:

- **Faster time-to-content**: this is more prominent on slow internet or slow devices. Server-rendered markup doesn't need to wait until all JavaScript has been downloaded and executed to be displayed, so your user will see a fully-rendered page sooner. In addition, data fetching is done on the server-side for the initial visit, which likely has a faster connection to your database than the client. This generally results in improved Core Web Vitals metrics, better user experience, and can be critical for applications where time-to-content is directly associated with conversion rate.

- **Unified mental model**: you get to use the same language and the same declarative, component-oriented mental model for developing your entire app, instead of jumping back and forth between a backend templating system and a frontend framework.

- **Better SEO**: the search engine crawlers will directly see the fully rendered page.

### Fast Refresh

The EverShop implements [Fast Refresh](../knowledge-base/fast-refresh). This feature helps to improve the developer experience and performance. This feature is only available in the development mode.

## The `Area` Component

Let's take a look at the following layout:

import Layout from '@site/src/components/Layout';

<Layout/>
<br/>

Each of the block at the above layout is an `Area` and it has an unique ID.

The `Area` is a React Higher-Order component(HOC) that takes components as its child. It will render the child components and pass the `Area`'s props to the child components.

If a block is rendered by an Area component, third party developers can insert their own React components into the block without modifying the core code. That make the view system flexible and easy to extend.

#### Using Area component:

```js title="src/components/Layout.js"
import React from 'react';
import Area from '@evershop/core/src/lib/components/Area';

export default function Layout() {
  return (
    <div className="just-a-block">
      <Area id="blockId" />
    </div>
  );
}
```

You can provide a list of pre-defined components to the `Area` component:

```js title="src/components/Layout.js"
import React from 'react';
import Area from '@evershop/core/src/lib/components/Area';
import Top from './Top';
import Bottom from './Bottom';

export default function Layout() {
  return (
    <div className="just-a-block">
      <Area 
      id="blockId" 
      coreComponents={
        [
          {
            component: () => <Top />,
            props: {
              title: 'Top',
            },
            sortOrder: 1
          },
          {
            component: () => Bottom,
            props: {
              title: 'Bottom',
            },
            sortOrder: 2
          },
        ]
      }
      />
    </div>
  );
}
```

The `Area` component will render its child components in order of `sortOrder`.

In the below section, we will learn how to insert a React component into the `Area` component.

## The Module View

:::info
Please check [this document](../module/module-overview) to understand the structure of EverShop module.
:::

Every module in EverShop has a `views` folder. This folder contains all of the React components that are used in the module. The `views` folder has the following structure:

Let's take an example of the `catalog` module:

```bash
catalog
├── controllers
├── views
    ├── admin
    │   ├── components.js
    │   └── productEdit
    │       ├── General.js
    │       ├── Images.js
    │       ├── Price.js
    └── site
        ├── components.js
        └── productView
            ├── ProductImages.js
            ├── ProductInfo.js
            ├── ProductOptions.js
```

The `views` folder has two sub-folders: `admin` and `site`. The `admin` folder contains all of the React components that are used in the admin panel. The `site` folder contains all of the React components that are used in the front-end.

### The `components.js` File

The `components.js` file is used to register React component to the route. There are 2 `components.js` files, one in the `admin` folder and one in the `site` folder.

This is the `components.js` file in the `admin` folder:

```js title="admin/components.js"
const { buildUrl } = require('../../../../lib/router/buildUrl');
const { useComponent } = require('../../../../lib/componee/useComponent');

// eslint-disable-next-line no-multi-assign
exports = module.exports = {
  '*': [
    {
      id: 'catalog.group',
      areaId: 'admin.menu',
      source: useComponent('NavigationItemGroup.js', 'cms'),
      props: {
        id: 'catalog.group',
        name: 'Catalog'
      },
      sortOrder: 10
    }
  ],
  categoryGrid: [
    {
      id: 'categoryGrid',
      areaId: 'content',
      source: useComponent('category/grid/Grid.js'),
      props: {
        limit: 20
      },
      sortOrder: 20
    }
  ],
  /** PRODUCT */
  productEdit: [
    {
      id: 'metaTitle',
      areaId: 'head',
      source: useComponent('Title.js'),
      props: {
        title: 'Edit product'
      },
      sortOrder: 10
    }
  ],
  productNew: [
    {
      id: 'metaTitle',
      areaId: 'head',
      source: useComponent('Title.js'),
      props: {
        title: 'Create a new product'
      },
      sortOrder: 10
    }
  ],
  'productNew+productEdit': [
    {
      id: 'pageHeading',
      areaId: 'content',
      source: useComponent('PageHeading.js', 'cms'),
      props: {
        backUrl: buildUrl('productGrid')
      },
      sortOrder: 10
    }
  ],
  productGrid: [
    {
      id: 'productGrid',
      areaId: 'content',
      source: useComponent('product/grid/Grid.js'),
      props: {
        limit: 20
      },
      sortOrder: 20
    }
  ],
  categoryEdit: [
    {
      id: 'metaTitle',
      areaId: 'head',
      source: useComponent('Title.js'),
      props: {
        title: 'Edit category'
      },
      sortOrder: 10
    }
  ],
  categoryNew: [
    {
      id: 'metaTitle',
      areaId: 'head',
      source: useComponent('Title.js'),
      props: {
        title: 'Create a new category'
      },
      sortOrder: 10
    }
  ],
  'categoryNew+categoryEdit': [
    {
      id: 'pageHeading',
      areaId: 'content',
      source: useComponent('PageHeading.js', 'cms'),
      props: {
        backUrl: buildUrl('categoryGrid')
      },
      sortOrder: 10
    }
  ],
  /* Attributes */
  attributeGrid: [
    {
      id: 'attributeGrid',
      areaId: 'content',
      source: useComponent('attribute/grid/Grid.js'),
      props: {
        limit: 20
      },
      sortOrder: 20
    }
  ],
  attributeEdit: [
    {
      id: 'metaTitle',
      areaId: 'head',
      source: useComponent('Title.js'),
      props: {
        title: 'Edit attribute'
      },
      sortOrder: 10
    }
  ],
  attributeNew: [
    {
      id: 'metaTitle',
      areaId: 'head',
      source: useComponent('Title.js'),
      props: {
        title: 'Create a new attribute'
      },
      sortOrder: 10
    }
  ],
  'attributeNew+attributeEdit': [
    {
      id: 'pageHeading',
      areaId: 'content',
      source: useComponent('PageHeading.js', 'cms'),
      props: {
        backUrl: buildUrl('attributeGrid')
      },
      sortOrder: 10
    }
  ]
};
```

### Components and Routes

The `components.js` file is a Javascript file that provide an object as a default export. The object has the following structure:

```js
{
  [routeId]: [
    // List of components
  ]
}
```

A `roundId` is a string that is used to identify a [route](./routing-system). For example, the `productEdit` is the route for the `productEdit` page. All components under the `productEdit` route will be rendered in the `productEdit` page.

If you have a component that is used in multiple routes, you can use the `+` sign to separate the routeIds. For example, the `attributeNew+attributeEdit` routeId is used for both the `attributeNew` and `attributeEdit` pages.

'*' is a special routeId that is used to render components in all routes.

### Component Object Definition

Let's take a look at this example:
```js title="admin/components.js"
const { buildUrl } = require('../../../../lib/router/buildUrl');
const { useComponent } = require('../../../../lib/componee/useComponent');

// eslint-disable-next-line no-multi-assign
exports = module.exports = {
  '*': [
    {
      id: 'catalog.group',
      areaId: 'admin.menu',
      source: useComponent('NavigationItemGroup.js', 'cms'),
      props: {
        id: 'catalog.group',
        name: 'Catalog'
      },
      sortOrder: 10
    }
  ]
};
```
When we declare a component object, we need to provide the following properties:

- `id`: A string that is used to identify the component. This is used to prevent duplicate components from being rendered.
- `areaId`: A string that is used to identify the area where the component will be rendered. This is used to render the component in the correct area.
- `source`: A function that returns the component. This is used to render the component.
- `props`: An object that contains the props that will be passed to the component. This is used to pass data to the component.
- `sortOrder`: A number that is used to sort the components. This is used to render the components in the correct order.

:::warning
Each of component must be provided as a default export.
:::