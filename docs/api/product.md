---
sidebar_position: 1
hide_table_of_contents: true
keywords:
- EverShop api
sidebar_label: Product
title: Product REST API
description: Use the REST API to interact with EverShop products. Create, update, delete, and get products.
---

# Products API

Use the REST API to interact with EverShop products.

## Create a product

Use this endpoint to create a product.

import Api from '@site/src/components/rest/Api';

<Api
  method="POST"
  url="/api/products"
  requestSchema={{
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "short_description": {
      "type": "string"
    },
    "url_key": {
      "type": "string",
      "pattern": "^\\S+$"
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
    "sku": {
      "type": "string"
    },
    "price": {
      "type": [
        "string",
        "number"
      ],
      "pattern": "^\\d+(\\.\\d{1,2})?$"
    },
    "weight": {
      "type": [
        "string",
        "number"
      ],
      "pattern": "^[0-9]+(\\.[0-9]{1,2})?$"
    },
    "qty": {
      "type": [
        "string",
        "number"
      ],
      "pattern": "^[0-9]+$"
    },
    "manage_stock": {
      "type": [
        "string",
        "number"
      ],
      "enum": [
        0,
        1,
        "0",
        "1"
      ]
    },
    "stock_availability": {
      "type": [
        "string",
        "number"
      ],
      "enum": [
        0,
        1,
        "0",
        "1"
      ]
    },
    "group_id": {
      "type": [
        "string",
        "integer"
      ],
      "pattern": "^[0-9]+$"
    },
    "visibility": {
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
    "images": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "attributes": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "attribute_code": {
            "type": "string"
          },
          "value": {
            "type": [
              "string",
              "array"
            ],
            "items": {
              "type": "string"
            }
          }
        }
      }
    },
    "categories": {
      "type": "array",
      "items": {
        "type": [
          "string",
          "integer"
        ],
        "pattern": "^[0-9]+$"
      }
    },
    "options": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "option_name": {
            "type": "string"
          },
          "option_type": {
            "type": "string",
            "enum": [
              "select",
              "multiselect"
            ]
          },
          "is_required": {
            "type": [
              "string",
              "integer"
            ],
            "enum": [
              0,
              1,
              "0",
              "1"
            ],
            "default": 0
          },
          "values": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "value": {
                  "type": "string"
                },
                "extra_price": {
                  "type": [
                    "string",
                    "number"
                  ],
                  "pattern": "^\\d+(\\.\\d{1,2})?$"
                }
              }
            }
          }
        },
        "required": [
          "option_name",
          "option_type",
          "values"
        ],
        "additionalProperties": true
      }
    }
  },
  "required": [
    "name",
    "meta_title",
    "url_key",
    "status",
    "sku",
    "qty",
    "price",
    "weight",
    "group_id",
    "visibility"
  ],
  "additionalProperties": true
}}
  responseSample={`{
  "data": {
    "product_id": 281,
    "uuid": "99a7b39ca63211edb46b60d819134f39",
    "variant_group_id": null,
    "visibility": 1,
    "group_id": 4,
    "image": null,
    "sku": "Q7Oq0kxZIMQ5isUyJRbg",
    "price": 43,
    "qty": 123,
    "weight": 17,
    "manage_stock": 1,
    "stock_availability": 1,
    "tax_class": null,
    "status": 0,
    "created_at": "2023-02-07 00:01:46",
    "updated_at": "2023-02-07 00:01:46",
    "product_description_id": 351,
    "product_description_product_id": 281,
    "name": "Q7Oq0kxZIMQ5isUyJRbg",
    "description": null,
    "short_description": null,
    "url_key": "Q7Oq0kxZIMQ5isUyJRbg",
    "meta_title": "Q7Oq0kxZIMQ5isUyJRbg",
    "meta_description": null,
    "meta_keywords": null,
    "links": [
      {
        "rel": "productGrid",
        "href": "/admin/products",
        "action": "GET",
        "types": [
          "text/xml"
        ]
      },
      {
        "rel": "view",
        "href": "/product/Q7Oq0kxZIMQ5isUyJRbg",
        "action": "GET",
        "types": [
          "text/xml"
        ]
      },
      {
        "rel": "edit",
        "href": "/admin/products/edit/99a7b39ca63211edb46b60d819134f39",
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

## Update a product

Use this endpoint to update a product.

<Api
  method="PATCH"
  url="/api/products/{id}"
  requestSchema={{
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "short_description": {
      "type": "string"
    },
    "url_key": {
      "type": "string",
      "pattern": "^\\S+$"
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
    "sku": {
      "type": "string"
    },
    "price": {
      "type": [
        "string",
        "number"
      ],
      "pattern": "^\\d+(\\.\\d{1,2})?$"
    },
    "weight": {
      "type": [
        "string",
        "number"
      ],
      "pattern": "^[0-9]+(\\.[0-9]{1,2})?$"
    },
    "qty": {
      "type": [
        "string",
        "number"
      ],
      "pattern": "^[0-9]+$"
    },
    "manage_stock": {
      "type": [
        "string",
        "number"
      ],
      "enum": [
        0,
        1,
        "0",
        "1"
      ]
    },
    "stock_availability": {
      "type": [
        "string",
        "number"
      ],
      "enum": [
        0,
        1,
        "0",
        "1"
      ]
    },
    "group_id": {
      "type": [
        "string",
        "integer"
      ],
      "pattern": "^[0-9]+$"
    },
    "visibility": {
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
    "images": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "attributes": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "attribute_code": {
            "type": "string"
          },
          "value": {
            "type": [
              "string",
              "array"
            ],
            "items": {
              "type": "string"
            }
          }
        }
      }
    },
    "categories": {
      "type": "array",
      "items": {
        "type": [
          "string",
          "integer"
        ],
        "pattern": "^[0-9]+$"
      }
    },
    "options": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "option_id": {
            "type": "number"
          },
          "option_name": {
            "type": "string"
          },
          "option_type": {
            "type": "string",
            "enum": [
              "select",
              "multiselect"
            ]
          },
          "is_required": {
            "type": [
              "string",
              "integer"
            ],
            "enum": [
              0,
              1,
              "0",
              "1"
            ],
            "default": 0
          },
          "values": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "value_id": {
                  "type": "number"
                },
                "value": {
                  "type": "string"
                },
                "extra_price": {
                  "type": [
                    "string",
                    "number"
                  ],
                  "pattern": "^\\d+(\\.\\d{1,2})?$"
                }
              },
              "required": [
                "value",
                "extra_price"
              ]
            }
          }
        },
        "required": [
          "option_name",
          "option_type",
          "values"
        ],
        "additionalProperties": true
      }
    }
  },
  "additionalProperties": true
}}
  responseSample={`{
  "data": {
    "product_id": 281,
    "uuid": "99a7b39ca63211edb46b60d819134f39",
    "variant_group_id": null,
    "visibility": 1,
    "group_id": 4,
    "image": null,
    "sku": "Q7Oq0kxZIMQ5isUyJRbg",
    "price": 43,
    "qty": 123,
    "weight": 17,
    "manage_stock": 1,
    "stock_availability": 1,
    "tax_class": null,
    "status": 0,
    "created_at": "2023-02-07 00:01:46",
    "updated_at": "2023-02-07 00:01:46",
    "product_description_id": 351,
    "product_description_product_id": 281,
    "name": "Q7Oq0kxZIMQ5isUyJRbg",
    "description": null,
    "short_description": null,
    "url_key": "Q7Oq0kxZIMQ5isUyJRbg",
    "meta_title": "Q7Oq0kxZIMQ5isUyJRbg",
    "meta_description": null,
    "meta_keywords": null,
    "links": [
      {
        "rel": "productGrid",
        "href": "/admin/products",
        "action": "GET",
        "types": [
          "text/xml"
        ]
      },
      {
        "rel": "view",
        "href": "/product/Q7Oq0kxZIMQ5isUyJRbg",
        "action": "GET",
        "types": [
          "text/xml"
        ]
      },
      {
        "rel": "edit",
        "href": "/admin/products/edit/99a7b39ca63211edb46b60d819134f39",
        "action": "GET",
        "types": [
          "text/xml"
        ]
      }
    ]
  }
}`}
 />

 <hr/>

 ## Delete a product

Use this endpoint to delete a product.

<Api
  method="DELETE"
  url="/api/products/{id}"
  responseSample={`{
  "data": {
    "product_id": 281,
    "uuid": "99a7b39ca63211edb46b60d819134f39",
    "variant_group_id": null,
    "visibility": 1,
    "group_id": 4,
    "image": null,
    "sku": "skuUpdated",
    "price": 45,
    "qty": 123,
    "weight": 17,
    "manage_stock": 1,
    "stock_availability": 1,
    "tax_class": null,
    "status": 1,
    "created_at": "2023-02-07 00:01:46",
    "updated_at": "2023-02-07 00:01:46",
    "product_description_id": null,
    "product_description_product_id": null,
    "name": null,
    "description": null,
    "short_description": null,
    "url_key": null,
    "meta_title": null,
    "meta_description": null,
    "meta_keywords": null
  }
}`}
 />