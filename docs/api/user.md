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

## Create a user session

Use this endpoint to create a user session (admin login).

<Api
  method="POST"
  url="/api/users/sessions"
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
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lciI6eyJjdXN0b21lcklkIjoyMiwidXVpZCI6ImQ3YTVlOGI1YTY3MzExZWRiNDZiNjBkODE5MTM0ZjM5Iiwic3RhdHVzIjoxLCJncm91cElkIjoxLCJlbWFpbCI6ImtjMDRBY25MNHU2dUNldDJoSFVxQGVtYWlsLmNvbSIsImZ1bGxOYW1lIjoia2MwNEFjbkw0dTZ1Q2V0MmhIVXEiLCJjcmVhdGVkQXQiOiIyMDIzLTAyLTA3IDE1OjA3OjU1IiwidXBkYXRlZEF0IjoiMjAyMy0wMi0wNyAxNTowNzo1NSJ9LCJzaWQiOiIwOWQzNGMyMS00YWYzLTRkYjgtYTM4Yi0zMzVlYmY2ZDQ1ZmEiLCJpYXQiOjE2NzU2NDk2MTgsImV4cCI6MTY3NTgyMjQxOH0.KVViMcH55nQKHGffvNaVzEENAYS4kEh2xz-KfHHjOWA",
    "sid": "09d34c21-4af3-4db8-a38b-335ebf6d45fa"
  }
}`}
 />

<hr/>

 ## Delete a user session

Use this endpoint to delete a user session (admin logout).

<Api
  method="POST"
  url="/api/users/sessions/{id}"
  responseSample={`{
  "data": {}
}`}
 />
