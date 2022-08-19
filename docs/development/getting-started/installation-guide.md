---
sidebar_position: 10
keywords:
- EverShop installation
sidebar_label: Installation guide
title: Quick installation guide.
description: EverShop system requirements. The full list of requirements that you need to check your system before installing EverShop.
---

# Installation guide

The following installation guides will guide you step-by-step to create a new EverShop project and get it started.

:::info

Please check [this document](/docs/development/getting-started/system-requirements) for the system requirement list.

:::
## Install EverShop

### Step 1: Install The @evershop/core Npm Package

`@evershop/core` is the core of the EverShop platform. It contains all of the core modules like `catalog`, `checkout`, `order`.


```js title="Install the @evershop/core Npm package"
npm init;
npm install @evershop/core;
```

### Step 2: Install The Core Npm Scripts

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
- Create a MySQL schema.
- Create your administrator user.

```js title="Installation script"
npm run setup
```

:::caution

During the installation process, you will be asked for some information like database connection, your shop information…

:::

### Step 4: Run the `build` command to build the site

```js title="Build the site"
npm run build
```

### Step 5: Run the `start` command to start your store in production mode

```js title="Start the site"
npm run start
```

Your site will start at `http://localhost:3000`.

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