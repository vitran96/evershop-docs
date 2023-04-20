---
sidebar_position: 36
keywords:
- database migration, database schema migration, upgrade schema
sidebar_label: Database Migration
title: Database Schema Migration
description: Learn how to use migration scripts to upgrade your database schema
---

![Database Migration In EverShop](./img/data-fetching-evershop.png "Database Migration In EverShop")

# Database Schema Migration

If you are writing an EverShop extension, you will almost certainly find that you need to store some information in the EverShop database.

This documentations will help you to understand how to use migration scripts to upgrade your database schema.

## What is a migration script?

Every extension can have its own database schema migration scripts. When you install an extension, those migration scripts are executed automatically and the database schema is upgraded.

The migration scripts are located in the `migrations` directory of your extension. One migration script is a single file providing a single function that is executed when the migration script is executed. 

```js 
module.exports = async function (connection) {
  // Your migration script goes here
};
```

This function is passed a connection object that you can use to execute queries.
