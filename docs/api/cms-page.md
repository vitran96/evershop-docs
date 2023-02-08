---
sidebar_position: 1
hide_table_of_contents: true
keywords:
- EverShop api
sidebar_label: Cms Page
title: Cms Page REST API
description: Use the REST API to interact with EverShop cms pages. Create, update, delete, and get cms pages.
---

# Cms Page API

Use the REST API to interact with EverShop cms pages.

## Create a page

Use this endpoint to create a category.

import Api from '@site/src/components/rest/Api';

<Api
  method="POST"
  url="/api/pages"
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
    "layout": {
      "type": "string",
      "enum": [
        "oneColumn",
        "twoColumnsLeft",
        "twoColumnsRight",
        "threeColumns"
      ]
    },
    "name": {
      "type": "string"
    },
    "content": {
      "type": "string"
    },
    "url_key": {
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
    }
  },
  "required": [
    "status",
    "layout",
    "name",
    "url_key",
    "content",
    "meta_title",
    "meta_description",
    "meta_keywords"
  ],
  "additionalProperties": true
}}
  responseSample={`{
  "data": {
    "cms_page_id": 14,
    "uuid": "e15da567a66c11edb46b60d819134f39",
    "layout": "oneColumn",
    "status": 1,
    "created_at": null,
    "updated_at": null,
    "cms_page_description_id": 15,
    "cms_page_description_cms_page_id": 14,
    "url_key": "OSbIajIBDgJMem2VtiF4",
    "name": "OSbIajIBDgJMem2VtiF4",
    "content": "OSbIajIBDgJMem2VtiF4",
    "meta_title": "fixed_discount_to_entire_order",
    "meta_keywords": "fixed_discount_to_entire_order",
    "meta_description": "fixed_discount_to_entire_order",
    "links": [
      {
        "rel": "cmsPageGrid",
        "href": "/admin/pages",
        "action": "GET",
        "types": [
          "text/xml"
        ]
      },
      {
        "rel": "edit",
        "href": "/admin/pages/edit/e15da567a66c11edb46b60d819134f39",
        "action": "GET",
        "types": [
          "text/xml"
        ]
      },
      {
        "rel": "view",
        "href": "/page/OSbIajIBDgJMem2VtiF4",
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

## Update a page

Use this endpoint to update a page.

<Api
  method="PATCH"
  url="/api/pages/{id}"
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
    "layout": {
      "type": "string",
      "enum": [
        "oneColumn",
        "twoColumnsLeft",
        "twoColumnsRight",
        "threeColumns"
      ]
    },
    "name": {
      "type": "string"
    },
    "content": {
      "type": "string"
    },
    "url_key": {
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
    }
  },
  "required": [
    "name"
  ],
  "additionalProperties": true
}}
  responseSample={`{
  "data": {
    "cms_page_id": 14,
    "uuid": "e15da567a66c11edb46b60d819134f39",
    "layout": "oneColumn",
    "status": 1,
    "created_at": null,
    "updated_at": null,
    "cms_page_description_id": 15,
    "cms_page_description_cms_page_id": 14,
    "url_key": "contact-us",
    "name": "Contact us",
    "content": "Page content",
    "meta_title": "Contact us",
    "meta_keywords": "Contact us",
    "meta_description": "Contact us",
    "links": [
      {
        "rel": "cmsPageGrid",
        "href": "/admin/pages",
        "action": "GET",
        "types": [
          "text/xml"
        ]
      },
      {
        "rel": "edit",
        "href": "/admin/pages/edit/e15da567a66c11edb46b60d819134f39",
        "action": "GET",
        "types": [
          "text/xml"
        ]
      },
      {
        "rel": "view",
        "href": "/page/OSbIajIBDgJMem2VtiF4",
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

 ## Delete a page

Use this endpoint to delete a page.

<Api
  method="DELETE"
  url="/api/pages/{id}"
  responseSample={`{
  "data": {
    "cms_page_id": 14,
    "uuid": "e15da567a66c11edb46b60d819134f39",
    "layout": "twoColumnsLeft",
    "status": 1,
    "created_at": null,
    "updated_at": "2023-02-07 14:18:05",
    "cms_page_description_id": 15,
    "cms_page_description_cms_page_id": 14,
    "url_key": "OSbIajIBDgJMem2VtiF4",
    "url_key": "contact-us",
    "name": "Contact us",
    "content": "Page content",
    "meta_title": "Contact us",
    "meta_keywords": "Contact us",
    "meta_description": "Contact us"
  }
}`}
 />