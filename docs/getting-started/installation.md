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

NodeJS Cart uses MySQL. You will need to create a database named `nodejscart`, username is `admin` and password is `123456` (Yeah I know, this will be a part of configuration later)

Navigate to the root folder and you will see a file named `db.sql`. Import this file to your database.

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