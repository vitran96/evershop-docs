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
### Without MySQL database(The `playAround` mode) 
You can get started with EverShop in minutes by running the following command:
    
```bash
npx create-evershop-app my-app --playAround
```
With the `--playAround` flag, you don't need to install MySQL database. A MySQL database will be provided to you in our cloud server. So you can get started with EverShop quickly.

:::warning
This database is only for testing purpose. It will be permanently deleted after 7 days. No backup is available. Please DO NOT insert any important data into this database. After 7 days, you will have to install your own MySQL database to continue using EverShop.
:::

### With MySQL database
If you already have a MySQL database, you can run the following command to get started with EverShop:
    
```bash
npx create-evershop-app my-app
``` 

## Install manually

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
    "setup": "evershop setup",
    "build": "evershop build",
    "start": "evershop start",
    "dev": "evershop dev"
}
```

### Start the project in development mode

```js title="Start the site in development mode"
npm run dev
```