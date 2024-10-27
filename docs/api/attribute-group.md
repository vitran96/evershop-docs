---
sidebar_position: 1
hide_table_of_contents: true
keywords:
- EverShop api
sidebar_label: Attribute Group
title: Attribute Group REST API
description: Use the REST API to interact with EverShop attribute group. Create, update, delete, and get attributes.
---

# Attribute Group API

Use the REST API to interact with EverShop product attribute group.

## Create an attribute group

Use this endpoint to create an attribute group.

import Api from '@site/src/components/rest/Api';

<Api
  method="POST"
  url="/api/attributeGroups"
  requestSchema={{
  "type": "object",
  "properties": {
    "group_name": {
      "type": "string"
    }
  },
  "required": [
    "group_name"
  ],
  "additionalProperties": true
}}
  responseSample={`{
  "data": {
    "attribute_group_id": 49,
    "uuid": "dcc16767a5c311edb46b60d819134f39",
    "group_name": "Attribute Group Name",
    "created_at": "2023-02-06 09:13:35",
    "updated_at": "2023-02-06 09:13:35"
  }
}`}
 />

<hr />

## Update an attribute group

Use this endpoint to update an attribute group.

<Api
  method="PATCH"
  url="/api/attributeGroups/{id}"
  requestSchema={{
  "type": "object",
  "properties": {
    "group_name": {
      "type": "string"
    }
  },
  "required": [
    "group_name"
  ],
  "additionalProperties": true
}}
  responseSample={`{
  "data": {
    "attribute_group_id": 50,
    "uuid": "dcc16767a5c311edb46b60d819134f39",
    "group_name": "Attribute Group Name",
    "created_at": "2023-02-06 09:13:35",
    "updated_at": "2023-02-06 09:13:35"
  }
}`}
 />

 <hr />

 ## Delete an attribute group

Use this endpoint to delete an attribute group.

<Api
  method="DELETE"
  url="/api/attributeGroups/{id}"
  responseSample={`{
  "data": {
    "attribute_group_id": 50,
    "uuid": "dcc16767a5c311edb46b60d819134f39",
    "group_name": "Attribute Group Name",
    "created_at": "2023-02-06 09:13:35",
    "updated_at": "2023-02-06 09:13:35"
  }
}`}
 />