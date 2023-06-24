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

This command will start your store in development mode and enable the debuging. 

```bash
evershop dev --debug
```

## Evershop Build Command

This command builds the [React](https://reactjs.org/) components and make your store ready for production. The built components will be stored in the `.evershop` folder.


```bash
evershop build
```

## Evershop Start Command

This command starts your store in production mode. You need to run `evershop build` before running this command.

```bash
evershop start
```

