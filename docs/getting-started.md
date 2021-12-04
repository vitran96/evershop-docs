---
sidebar_position: 2
---

# Getting started

Welcome to NodeJS Cart. An open-source e-commerce project using ExpressJS, ReactJS, and MySQL.

## System Requirements


- [Node.js 12.0](https://nodejs.org/en/) or later.
- [MySQL 5.7](https://www.mysql.com/) or later.

## Setup

### Step 1: Clone the template
We have created a template with some pre-configured items to help you can start using NodeJS Cart quickly.

```shell
git clone https://github.com/nodeonline/create-nodejscart.git nodejscart
```

### Step 2: Install dependency

Navigate to the root folder and install the dependencies.

```shell
cd nodejscart

npm install
```
### Step 3: Install database

NodeJS Cart uses MySQL. You will need to create a database named `nodejscart`, username is `admin` and password is `123456` (Yeah I know, this will be a part of configuration later one)

Navigate to the root folder and you will se a file named `db.sql`. Import this file to your database.

```shell
cd nodejscart

mysql -u <root> -p nodejscart < db.sql
```
### Step 4: Run the app in production mode
```shell
cd nodejscart

npm run build
npm run start
```

Your site starts at `http://localhost:3000`.