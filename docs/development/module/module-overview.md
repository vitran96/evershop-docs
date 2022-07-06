---
sidebar_position: 5
keywords:
- module overview
sidebar_label: Module overview
title: Module overview
description: The quick and overview about EverShop's module system. What is the EverShop's module and how does it work.
---

# Module overview

EverShop is a modular application and it supports modularity. It means that all functionality is implemented and delivered in components that are known as Modules.

A module is a logical group –  a directory containing controllers, services, views – that are related to a specific business feature. In keeping with EverShop’s commitment to optimal modularity, a module encapsulates one feature and has minimal dependencies on other modules.

Modules and themes are the units of customization in EverShop. Modules provide business features, with supporting logic, while themes strongly influence user experience and storefront appearance. Both of theme have a life cycle that allows them to be installed, deleted, and disabled. From the perspective of both merchants and extension developers, modules are the central unit of EverShop organization.

The purpose of a module is to provide specific product features by implementing new functionality or extending the functionality of other modules. Each module is designed to function independently, so the inclusion or exclusion of a particular module does not typically affect the functionality of other modules.

![EverShop modular pattern](./img/modular.png "EverShop modular pattern")

## Module components

A module is a directory that contains 5 parts:

1. `Controller`: The `controllers` or `apiControllers` contains a list of the controller and its middleware functions and route definition. Check this document for more information.
2. `Migration`: The `migration` folder contains the database migration files used for module installation and upgrade.
3. `Services`: The `services` folder contains Javascript class/function that provides some functionality.
4. `View`: The `view` folder contains the ReactJS components for UI/UX implementation. 
5. `bootstrap.js` file. This file will be executed once the application is starting.

## Module locations

![EverShop module location](./img/modules-location.png "EverShop module location")

There are two types of modules:

1. Core module: Those modules are developed and maintained by the EverShop team. They are located in @evershop/core/src/modules
2. Extension: Those modules developed by a third party/developer. They are located in the ‘extensions’ folder at the root level.
