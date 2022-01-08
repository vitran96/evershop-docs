---
sidebar_position: 3
keywords:
- installation
- NodeJsCart install
- Install NodeJsCart
- NodeJsCart installation guide
description: NodeJsCart installation guide.
---

# Installation

The following installation guides will guide you step-by-step to create a new NodeJsCart project and get it started.

### Step 1: Install the `@nodejscart/core` npm package
`@nodejscart/core` is the core of the project. It contains all of the core modules.

```shell
npm init;
npm install @nodejscart/core;
```

### Step 2: Install some scripts

Open package.json and add the following scripts:


```shell
"scripts": {
    "install": "nodejscart install",
    "build": "nodejscart build",
    "start": "nodejscart start"
}
```
### Step 3: Run the installation script

This installation script will do the following tasks:
- Create a default configuration file.
- Create a MySQL database.
- Create your administrator user.

During the installation process, you will be asked for some information like database connection, your shop information...

```shell
npm run install
```

Once this step is done, your store is ready to go.

### Step 4: Run the app in production mode
```shell
npm run build
npm run start
```

Your site starts at `http://localhost:3000`.

## For developer

If you want to start the project in the development mode. There are some extra steps to do

### Install the Babel dependency

```shell
npm install @babel/cli, @babel/core, @babel/node -d
```
### Create babel configuration file

Create a file at the project root folder level and name it "babel.config.js" with the following content. 

```shell
module.exports = {
    babelrcRoots: [__dirname],
    parserOpts: { allowReturnOutsideFunction: true },
    presets: [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
};
```

### Add the `dev` script

Open package.json and add the following script:

```shell
"scripts": {
    "dev": "nodejscart dev"
}
```

Now you can run `npm run dev` to start development.