---
sidebar_position: 1
hide_table_of_contents: true
displayed_sidebar: 'apiSidebar'
keywords:
- EverShop api
sidebar_label: User
title: User REST API
description: Use the REST API to interact with EverShop product users. Create, update, delete, and get users.
---

# User API

Use the REST API to interact with EverShop users.

import Api from '@site/src/components/rest/Api';

## Login

Use this endpoint login a user.

<Api
  method="POST"
  url="/user/login"
  requestSchema={{
  "type": "object",
  "properties": {
    "email": {
      "type": "string",
      "format": "email"
    },
    "password": {
      "type": "string"
    }
  },
  "required": [
    "email",
    "password"
  ]
}}
  responseSample={`{
  "data": {
    "sid": "auxzei_bEdRGT-HwfACmq7D5XyHf2l5M"
  }
}`}
 />

<hr/>

 ## Logout

Use this endpoint to logout a user.

<Api
  method="GET"
  url="/user/logout"
  responseSample={`{
  "data": {}
}`}
 />
