---
sidebar_position: 35
keywords:
- Evershop database
sidebar_label: The Database
title: Database
description: Learn what a database is and how to work with database in EverShop. Create and modify MySQL database by following this tutorial.
---

# Database

EverShop uses [MySQL](https://www.mysql.com/) as a database storage. EverShop supports MySQL 5.7 or higher.

It is recommended to use MySQL 8 which is up to twice as fast as the previously supported version 5.7.

## What is MySQL?

MySQL is an open-source relational database management system developed, distributed, and supported by Oracle Corporation. It uses [structured query language](https://en.wikipedia.org/wiki/SQL) for accessing, adding, and managing content in a database.

MySQL is an open-source software licensed under the [GNU General Public License v2](https://en.wikipedia.org/wiki/GNU_General_Public_License), allowing users to use, scrutinize, share and modify the software. The Oracle Corporation also offers commercially licensed MySQL servers that take-away the pains of configuring, securing, and managing a database.

MySQL provides high-performance databases that are ideal for heavy-load production systems. Industry leaders like Amazon, Netflix, Uber, and Airbnb are companies using MySQL in their tech stacks.

## Working with MySQL in EverShop

### Database connection setup

By accessing in the EverShop installation DIR we can edit the `config/default.json` file using any of the best text editor. Here you can see the codes that connect MySQL DB with live EverShop site. For example, the codes looks like following:

```json
  "system": {
    "database": {
      "host": "localhost",
      "port": "3306",
      "database": "evershop",
      "user": "root",
      "password": "123456"
    }
  }
```

## Quick Tour

The EverShop database access layer abstracts and provides help with most aspects of dealing with relational databases such as, keeping connections to the server, building queries, preventing SQL injections, inspecting and altering schemas.

The functions described in this document illustrate what is possible to do with the lower-level database access API.

### Create a database connection

The below examples show you how to create a connection to the database. This method will return a connection object and can be used for further queries.

#### 1: The easiest way is to use the pool object

If what you are doing is just loading some data from the database or doing some simple insert/update that you do not care about the transaction, you can just use the pool object.

You let the pool object manage the connection for you rather than creating and managing connections one by one.

```js
const {
  pool
} = require('../../../../../lib/mysql/connection');

const {
  select
} = require('@evershop/mysql-query-builder');

const query = select();
query.from('cms_page')
.leftJoin('cms_page_description')
.on('cms_page.`cms_page_id`', '=', 'cms_page_description.`cms_page_description_cms_page_id`');
query.where('status', '=', 1);
query.where('cms_page_description.`url_key`', '=', request.params.url_key);

const cmsPage = await query.load(pool);
```

#### 2: Create a connection object

Sometimes you want to do some complex query and you want to control the transaction commit or rollback by yourself based on your logic, then you can create a single connection.

```js
const {
  rollback,
  insert,
  commit,
  select,
  update,
  startTransaction
} = require('@evershop/mysql-query-builder');

const {
  getConnection
} = require('../../../../../lib/mysql/connection');

const connection = await getConnection();
await startTransaction(connection);

try {
// Doing some insert/update queries here
    await commit(connection);
} catch (e) {
    await rollback(connection);
}
```

### Basic CRUD operations

#### Running Select Statements

```js
const {
  pool
} = require('../../../../../lib/mysql/connection');

const {
  select
} = require('@evershop/mysql-query-builder');

const order = await select()
.from('order')
.where('order_id', '=', orderId)
.load(pool);
```

It is also possible to perform a complex query by using a query builder.

```js
const {
  pool
} = require('../../../../../lib/mysql/connection');

const {
  select
} = require('@nodejscart/mysql-query-builder');

const query = select();
query.from('cms_page')
.leftJoin('cms_page_description')
.on('cms_page.`cms_page_id`', '=', 'cms_page_description.`cms_page_description_cms_page_id`');
query.where('status', '=', 1);
query.andWhere('cms_page_description.`url_key`', '=', request.params.url_key);

const cmsPage = await query.load(pool);
```

#### Running Insert Statements

```js
const {
  rollback,
  insert,
  commit,
  startTransaction
} = require('@evershop/mysql-query-builder');

const {
  getConnection
} = require('../../../../../lib/mysql/connection');

module.exports = async (request, response, stack, next) => {
  const connection = await getConnection();
  await startTransaction(connection);
  try {
    await insert('shipment').given({
      shipment_order_id: orderId,
      carrier_name: carrierName,
      tracking_number: trackingNumber
    }).execute(connection);
    await commit(connection);
  } catch (e) {
    await rollback(connection);
  }
};
```
In the above example, the data is passed to the insert statement is a ‘key-value’ pair object with the key is the table column name.

If the key provided does not exist, it will just be ignored and the query still being proceeded.

#### Running Update Statements

Updating rows in the database is equally intuitive, the following example will update the order with id 10:

```js
const {
  rollback,
  update,
  commit,
  startTransaction
} = require('@evershop/mysql-query-builder');

const {
  getConnection
} = require('../../../../../lib/mysql/connection');

module.exports = async (request, response, stack, next) => {
  const connection = await getConnection();
  await startTransaction(connection);
  try {
    await update('order')
    .given({
        shipment_status: 'fullfilled'
      })
    .where('order_id', '=', 10)
    .execute(connection);
    await commit(connection);
  } catch (e) {
    await rollback(connection);
  }
};
```

#### Running Delete Statements

Similarly, the `del()` method is used to delete rows from the database, the following example deletes the order with id 10:

```js
const {
  rollback,
  del,
  commit,
  startTransaction
} = require('@evershop/mysql-query-builder');

const {
  getConnection
} = require('../../../../../lib/mysql/connection');

module.exports = async (request, response, stack, next) => {
  const connection = await getConnection();
  await startTransaction(connection);
  try {
    await del('order')
    .where('order_id', '=', 10)
    .execute(connection);
    await commit(connection);
  } catch (e) {
    await rollback(connection);
  }
};
```