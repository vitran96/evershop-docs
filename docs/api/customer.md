---
sidebar_position: 1
hide_table_of_contents: true
keywords:
- EverShop api
sidebar_label: Customer
title: Customer REST API
description: Use the REST API to interact with EverShop product customers. Create, update, delete, and get customers.
---

# Customer API

Use the REST API to interact with EverShop customers.

## Create a customer

Use this endpoint to create a customer.

import Api from '@site/src/components/rest/Api';

<Api
  method="POST"
  url="/api/customers"
  requestSchema={{
  "type": "object",
  "properties": {
    "status": {
      "type": [
        "string",
        "integer"
      ],
      "enum": [
        "0",
        "1",
        0,
        1
      ]
    },
    "email": {
      "type": "string",
      "format": "email"
    },
    "password": {
      "type": "string"
    },
    "full_name": {
      "type": "string"
    }
  },
  "required": [
    "email",
    "password",
    "full_name"
  ],
  "additionalProperties": true
}}
  responseSample={`{
  "data": {
    "customer_id": 21,
    "uuid": "e1b20098a66c11edb46b60d819134f39",
    "status": 1,
    "group_id": 1,
    "email": "wkVPyU6LG9nQ1kwTn3Or@email.com",
    "full_name": "wkVPyU6LG9nQ1kwTn3Or",
    "created_at": "2023-02-07 14:18:05",
    "updated_at": "2023-02-07 14:18:05",
    "links": [
      {
        "rel": "customerGrid",
        "href": "/admin/customers",
        "action": "GET",
        "types": [
          "text/xml"
        ]
      },
      {
        "rel": "edit",
        "href": "/admin/customers/edit/e1b20098a66c11edb46b60d819134f39",
        "action": "GET",
        "types": [
          "text/xml"
        ]
      }
    ]
  }
}`}
 />

<hr />

## Update a customer

Use this endpoint to update an customer.

<Api
  method="PATCH"
  url="/api/customers/{id}"
  requestSchema={{
  "type": "object",
  "properties": {
    "email": {
      "type": "string",
      "format": "email"
    },
    "password": {
      "type": "string"
    },
    "full_name": {
      "type": "string"
    }
  },
  "additionalProperties": true
}}
  responseSample={`{
  "data": {
    "customer_id": 21,
    "uuid": "e1b20098a66c11edb46b60d819134f39",
    "status": 1,
    "group_id": 1,
    "email": "Ssbvz5pUbOXPCFv5WDrd@gmail.com",
    "full_name": "abc",
    "created_at": "2023-02-07 14:18:05",
    "updated_at": "2023-02-07 14:18:06",
    "links": [
      {
        "rel": "customerGrid",
        "href": "/admin/customers",
        "action": "GET",
        "types": [
          "text/xml"
        ]
      },
      {
        "rel": "edit",
        "href": "/admin/customers/edit/e1b20098a66c11edb46b60d819134f39",
        "action": "GET",
        "types": [
          "text/xml"
        ]
      }
    ]
  }
}`}
 />

 <hr />

 ## Delete a customer

Use this endpoint to delete an customer.

<Api
  method="DELETE"
  url="/api/customers/{id}"
  responseSample={`{
  "data": {
    "customer_id": 21,
    "uuid": "e1b20098a66c11edb46b60d819134f39",
    "status": 1,
    "group_id": 1,
    "email": "Ssbvz5pUbOXPCFv5WDrd@gmail.com",
    "full_name": "abc",
    "created_at": "2023-02-07 14:18:05",
    "updated_at": "2023-02-07 14:18:06"
  }
}`}
 />

 <hr/>

 ## Create a customer session

Use this endpoint to create a customer session (login).

<Api
  method="POST"
  url="/api/customers/sessions"
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

 ## Delete a customer session

Use this endpoint to delete a customer session (logout).

<Api
  method="POST"
  url="/api/customers/sessions/{ids}"
  responseSample={`{
  "data": {}
}`}
 />
