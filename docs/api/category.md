---
sidebar_position: 1
hide_table_of_contents: true
keywords:
- EverShop api
sidebar_label: Category
title: Category REST API
description: Use the REST API to interact with EverShop categories. Create, update, delete, and get categories.
---


# Category API

Use the REST API to interact with EverShop categories.

## Create a category

Use this endpoint to create a category.

import Api from '@site/src/components/rest/Api';

<Api
  method="POST"
  url="/api/categories"
  requestSchema={{
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "image": {
      "type": "string"
    },
    "meta_title": {
      "type": "string"
    },
    "meta_description": {
      "type": "string"
    },
    "meta_keywords": {
      "type": "string"
    },
    "url_key": {
      "type": "string"
    },
    "status": {
      "type": [
        "integer",
        "string"
      ],
      "enum": [
        0,
        1,
        "0",
        "1"
      ]
    },
    "include_in_nav": {
      "type": [
        "integer",
        "string"
      ],
      "enum": [
        0,
        1,
        "0",
        "1"
      ]
    },
    "parent_id": {
      "type": [
        "string",
        "integer"
      ],
      "pattern": "^[0-9]*$"
    },
    "position": {
      "type": [
        "string",
        "integer"
      ],
      "pattern": "^[0-9]*$"
    }
  },
  "required": [
    "name",
    "description",
    "status",
    "url_key",
    "meta_title",
    "meta_description"
  ],
  "additionalProperties": true
}}
  responseSample={`{
  "data": {
    "category_id": 103,
    "uuid": "9ab75946a63211edb46b60d819134f39",
    "status": 1,
    "parent_id": 16,
    "include_in_nav": 0,
    "position": 22,
    "created_at": "2023-02-07 00:01:47",
    "updated_at": "2023-02-07 00:01:47",
    "category_description_id": 82,
    "category_description_category_id": 103,
    "name": "2sl0ifz1declc91p67h",
    "short_description": null,
    "description": "2sl0ifz1declc91p67i",
    "image": "2sl0ifz1declc91p67j",
    "meta_title": "2sl0ifz1declc91p67k",
    "meta_keywords": "2sl0ifz1declc91p67m",
    "meta_description": "2sl0ifz1declc91p67l",
    "url_key": "2sl0ifz1declc91p67n",
    "links": [
      {
        "rel": "categoryGrid",
        "href": "/admin/categories",
        "action": "GET",
        "types": [
          "text/xml"
        ]
      },
      {
        "rel": "view",
        "href": "/category/2sl0ifz1declc91p67n",
        "action": "GET",
        "types": [
          "text/xml"
        ]
      },
      {
        "rel": "edit",
        "href": "/admin/categories/edit/9ab75946a63211edb46b60d819134f39",
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

## Update a category

Use this endpoint to update a category.

<Api
  method="PATCH"
  url="/api/categories/{id}"
  requestSchema={{
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "image": {
      "type": "string"
    },
    "meta_title": {
      "type": "string"
    },
    "meta_description": {
      "type": "string"
    },
    "meta_keywords": {
      "type": "string"
    },
    "url_key": {
      "type": "string"
    },
    "status": {
      "type": [
        "integer",
        "string"
      ],
      "enum": [
        0,
        1,
        "0",
        "1"
      ]
    },
    "include_in_nav": {
      "type": [
        "integer",
        "string"
      ],
      "enum": [
        0,
        1,
        "0",
        "1"
      ]
    },
    "parent_id": {
      "type": [
        "string",
        "integer"
      ],
      "pattern": "^[0-9]*$"
    },
    "position": {
      "type": [
        "string",
        "integer"
      ],
      "pattern": "^[0-9]*$"
    }
  },
  "additionalProperties": true
}}
  responseSample={`{
  "data": {
    "category_id": 103,
    "uuid": "9ab75946a63211edb46b60d819134f39",
    "status": 1,
    "parent_id": 16,
    "include_in_nav": 0,
    "position": 22,
    "created_at": "2023-02-07 00:01:47",
    "updated_at": "2023-02-07 00:01:47",
    "category_description_id": 82,
    "category_description_category_id": 103,
    "name": "2sl0ifz1declc91p67h",
    "short_description": null,
    "description": "2sl0ifz1declc91p67i",
    "image": "2sl0ifz1declc91p67j",
    "meta_title": "2sl0ifz1declc91p67k",
    "meta_keywords": "2sl0ifz1declc91p67m",
    "meta_description": "2sl0ifz1declc91p67l",
    "url_key": "2sl0ifz1declc91p67n",
    "links": [
      {
        "rel": "categoryGrid",
        "href": "/admin/categories",
        "action": "GET",
        "types": [
          "text/xml"
        ]
      },
      {
        "rel": "view",
        "href": "/category/2sl0ifz1declc91p67n",
        "action": "GET",
        "types": [
          "text/xml"
        ]
      },
      {
        "rel": "edit",
        "href": "/admin/categories/edit/9ab75946a63211edb46b60d819134f39",
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

 ## Delete a category

Use this endpoint to delete a category.

<Api
  method="DELETE"
  url="/api/categories/{id}"
  responseSample={`{
  "data": {
    "category_id": 103,
    "uuid": "9ab75946a63211edb46b60d819134f39",
    "status": 0,
    "parent_id": 16,
    "include_in_nav": 0,
    "position": 22,
    "created_at": "2023-02-07 00:01:47",
    "updated_at": "2023-02-07 00:01:48",
    "category_description_id": null,
    "category_description_category_id": null,
    "name": null,
    "short_description": null,
    "description": null,
    "image": null,
    "meta_title": null,
    "meta_keywords": null,
    "meta_description": null,
    "url_key": null
  }
}`}
 />