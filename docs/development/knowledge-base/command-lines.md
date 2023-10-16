---
sidebar_position: 40
keywords:
- Evershop command lines
sidebar_label: Command Lines
title: Command lines
description: List of EverShop command lines which help you to build and launch your online store with detail explain.
---

# EverShop command lines

EverShop comes with several command lines which help you to develop and launch your store.

Below is the list of available commands

## Evershop Installation Command

This command is used to install your store. Checkout the [installation guide](/docs/development/getting-started/installation-guide) for more information.

```bash
evershop install
```

## Evershop Dev Command

This command will start your store in development mode. 

```bash
evershop dev
```

## Evershop Debug Command

This command will start your store in development mode and enable the debugging. 

```bash
evershop start --debug
```

:::info
The debug mode will enable by default when you run `evershop dev` command.
:::

## Evershop Build Command

This command builds the [React](https://reactjs.org/) components and make your store ready for production. The built components will be stored in the `.evershop` folder.


```bash
evershop build
```

:::info
If you want to skip the minimization process, you can run `evershop build -- --skip-minify` command.
:::

## Evershop Start Command

This command starts your store in production mode. You need to run `evershop build` before running this command.

```bash
evershop start
```

## Evershop Admin User Create Command

You can use this command to create a new admin user.

```bash
npm run user:create -- --email "user email" --password "user password" --name "user name"
```

## Evershop Admin User Change Password Command

You can use this command to change the password of an admin user.

```bash
npm run user:changePassword -- --email "user email" --password "new password"
```