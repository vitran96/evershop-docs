---
sidebar_position: 1
hide_table_of_contents: true
keywords:
- EverShop api
sidebar_label: Attribute
title: Attribute REST API
description: Use the REST API to interact with EverShop product attributes. Create, update, delete, and get attributes.
---


# Attribute API

Use the REST API to interact with EverShop product attribute.

## Create an attribute

Use this endpoint to create an attribute.

import Api from '@site/src/components/rest/Api';

<Api
  method="POST"
  url="/api/attributes"
  requestSchema={{
  "type": "object",
  "properties": {
    "attribute_name": {
      "type": "string"
    },
    "attribute_code": {
      "type": "string"
    },
    "is_required": {
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
    "display_on_frontend": {
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
    "sort_order": {
      "type": [
        "string",
        "integer"
      ],
      "pattern": "^[0-9]*$"
    },
    "is_filterable": {
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
    "groups": {
      "type": "array",
      "items": {
        "type": [
          "string",
          "integer"
        ],
        "pattern": "^[0-9]*$"
      }
    },
    "options": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "option_text": {
            "type": "string"
          },
          "option_id": {
            "type": [
              "string",
              "integer"
            ],
            "pattern": "^[1-9][0-9]*$"
          }
        },
        "required": [
          "option_text"
        ]
      }
    }
  },
  "required": [
    "attribute_code",
    "attribute_name",
    "type",
    "is_required",
    "display_on_frontend",
    "groups"
  ],
  "additionalProperties": true
}}
  responseSample={`{
  "data": {
    "attribute_id": 99,
    "uuid": "98bd0beea63211edb46b60d819134f39",
    "attribute_code": "GTW5s9bqJ7rP3gDrU5HF",
    "attribute_name": "Text attribute",
    "type": "text",
    "is_required": 1,
    "display_on_frontend": 1,
    "sort_order": 1,
    "is_filterable": 0,
    "links": [
      {
        "rel": "attributeGrid",
        "href": "/admin/attributes",
        "action": "GET",
        "types": [
          "text/xml"
        ]
      },
      {
        "rel": "edit",
        "href": "/admin/attributes/edit/98bd0beea63211edb46b60d819134f39",
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

## Update an attribute

Use this endpoint to update an attribute.

<Api
  method="PATCH"
  url="/api/attributes/{id}"
  requestSchema={{
  "type": "object",
  "properties": {
    "attribute_name": {
      "type": "string"
    },
    "attribute_code": {
      "type": "string"
    },
    "is_required": {
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
    "display_on_frontend": {
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
    "sort_order": {
      "type": [
        "string",
        "integer"
      ],
      "pattern": "^[0-9]*$"
    },
    "is_filterable": {
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
    "groups": {
      "type": "array",
      "items": {
        "type": [
          "string",
          "integer"
        ],
        "pattern": "^[0-9]*$"
      }
    },
    "options": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "option_text": {
            "type": "string"
          },
          "option_id": {
            "type": [
              "string",
              "integer"
            ],
            "pattern": "^[0-9]*$"
          }
        },
        "required": [
          "option_text"
        ]
      }
    }
  },
  "required": [
    "attribute_code"
  ],
  "additionalProperties": true
}}
  responseSample={`{
  "data": {
    "attribute_id": 99,
    "uuid": "98bd0beea63211edb46b60d819134f39",
    "attribute_code": "GTW5s9bqJ7rP3gDrU5HF",
    "attribute_name": "Text attribute",
    "type": "text",
    "is_required": 1,
    "display_on_frontend": 1,
    "sort_order": 1,
    "is_filterable": 0,
    "links": [
      {
        "rel": "attributeGrid",
        "href": "/admin/attributes",
        "action": "GET",
        "types": [
          "text/xml"
        ]
      },
      {
        "rel": "edit",
        "href": "/admin/attributes/edit/98bd0beea63211edb46b60d819134f39",
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

 ## Delete an attribute

Use this endpoint to delete an attribute.

<Api
  method="DELETE"
  url="/api/attributes/{id}"
  responseSample={`{
  "data": {
    "attribute_id": 99,
    "uuid": "98bd0beea63211edb46b60d819134f39",
    "attribute_code": "GTW5s9bqJ7rP3gDrU5HF",
    "attribute_name": "Text attribute Updated",
    "type": "text",
    "is_required": 1,
    "display_on_frontend": 1,
    "sort_order": 1,
    "is_filterable": 0
  }
}`}
 />