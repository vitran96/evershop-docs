---
sidebar_position: 10
keywords:
- EverShop installation
sidebar_label: Installation guide
title: Evershop installation guide.
 # Wite a good SEO description here.
description: This document will guide you through the installation process of EverShop. The quick installation guide is also available to help you install EverShop template quickly.
---

# Installation guide

The following installation guides will guide you step-by-step to create a new EverShop project and get it started.

:::info

Please check [this document](/docs/development/getting-started/system-requirements) for the system requirement list.

:::
## Using `create-evershop-app` command

```bash
npx create-evershop-app my-app
```

The `create-evershop-app` command will create a new folder named `my-app` and install all of the dependencies for you.

## Install manually

### Step 1: Install The @evershop/evershop Npm Package

`@evershop/evershop` is the core of the EverShop platform. It contains all of the core modules like `catalog`, `checkout`, `order`.


```js title="Install the @evershop/evershop Npm package"
npm init;
npm install @evershop/evershop;
```

### Step 2: Install the core Npm scripts

Open the package.json file and add the following scripts:

```js title="Add the core npm scripts"
"scripts": {
    "setup": "evershop install",
    "build": "evershop build",
    "start": "evershop start"
}
```

### Step 3: Run the installation script

Before running this script, make sure that you have an empty database ready for EverShop.
:::info

Please check [this document](/docs/development/getting-started/system-requirements) for the system requirement list.

:::
This installation script will do the following tasks:

- Create a default configuration file.
- Create a database schema.
- Create your administrator user.

```js title="Installation script"
npm run setup
```

:::caution

During the installation process, you will be asked for some information like database connection, your shop information…

:::

### Step 4: Folder permision

EverShop needs to write some files to the disk. So you need to make sure that the following folders have the write permission:

- `public/`
- `.evershop`
- `.log`
- `media`

### Step 5: Run the `build` command to build the site

```js title="Build the site"
npm run build
```

### Step 6: Run the `start` command to start your store in production mode

```js title="Start the site"
npm run start
```

Your site will start at `http://localhost:3000`.

Admin panel can be accessed at `http://localhost:3000/admin`.

## Update EverShop

To update EverShop, you can run the following command:

```js title="Update EverShop"
npm install @evershop/evershop@latest
```

EverShop will take care of the database migration for you.

:::note
Updating EverShop requires running the `build` command again.
:::

## For developer

If you are developer and want to start the project in the development mode. There are some extra steps

### Adding the `dev` script

Open the package.json and add the following script:

```js title="Add the core dev script"
"scripts": {
    "setup": "evershop install",
    "build": "evershop build",
    "start": "evershop start",
    "dev": "evershop dev"
}
```

### Start the project in development mode

```js title="Start the site in development mode"
npm run dev
```

### Adding `jsconfig.json` file

Open the `jsconfig.json` file and add the following content:

```js title="Add the jsconfig.json file"
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@components/*": [
        "./themes/<Your Theme Folder>/components/*",
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

### The debug mode

To run the project in debug mode, you are required to add the debuging script to the `package.json` file.

```js title="Add the debuging scripts"
"scripts": {
    ...,
    "start:debug": "evershop start --debug",
    "dev:debug": "evershop dev --debug"
}
```