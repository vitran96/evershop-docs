---
sidebar_position: 1
hide_table_of_contents: true
keywords:
- EverShop api
sidebar_label: Promotion
title: Promotion REST API
description: Use the REST API to interact with EverShop promotions. Create, update, delete, and get promotions.
---


# Promotion API

Use the REST API to interact with EverShop promotions.

## Create a coupon

Use this endpoint to create a coupon.

import Api from '@site/src/components/rest/Api';

<Api
  method="POST"
  url="/api/coupons"
  requestSchema={{
  "type": "object",
  "properties": {
    "coupon": {
      "type": "string",
      "pattern": "^[a-zA-Z0-9]+$"
    },
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
    "description": {
      "type": "string"
    },
    "discount_amount": {
      "type": [
        "string",
        "number"
      ],
      "pattern": "^\\d*\\.?\\d*$"
    },
    "free_shipping": {
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
    "discount_type": {
      "type": "string"
    },
    "target_products": {
      "type": "object",
      "properties": {
        "maxQty": {
          "type": [
            "string",
            "integer"
          ],
          "pattern": "^[0-9]*$"
        },
        "products": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "key": {
                "type": "string"
              },
              "operator": {
                "type": "string",
                "enum": [
                  "IN",
                  "NOT IN",
                  "=",
                  "!=",
                  ">",
                  ">=",
                  "<",
                  "<="
                ]
              },
              "value": {
                "type": [
                  "string",
                  "number"
                ],
                "pattern": "^\\d*\\.?\\d*$"
              }
            },
            "required": [
              "key",
              "operator",
              "value"
            ],
            "additionalProperties": true
          }
        }
      }
    },
    "condition": {
      "type": "object",
      "properties": {
        "order_total": {
          "type": [
            "string",
            "number"
          ],
          "pattern": "^\\d*\\.?\\d*$"
        },
        "order_qty": {
          "type": [
            "string",
            "integer"
          ],
          "format": "digits"
        },
        "required_products": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "key": {
                "type": "string"
              },
              "operator": {
                "type": "string",
                "enum": [
                  "IN",
                  "NOT IN",
                  "=",
                  "!=",
                  ">",
                  ">=",
                  "<",
                  "<="
                ]
              },
              "qty": {
                "type": [
                  "string",
                  "integer"
                ],
                "pattern": "^[0-9]*$"
              },
              "value": {
                "type": [
                  "string",
                  "number"
                ],
                "pattern": "^\\d*\\.?\\d*$"
              }
            },
            "required": [
              "key",
              "qty",
              "operator",
              "value"
            ],
            "additionalProperties": true
          }
        },
        "additionalProperties": true
      }
    },
    "user_condition": {
      "type": "object",
      "properties": {
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
        "email": {
          "type": "string",
          "format": "email"
        },
        "purchased": {
          "type": [
            "string",
            "integer"
          ],
          "pattern": "^\\d*\\.?\\d*$"
        }
      },
      "additionalProperties": true
    },
    "max_uses_time_per_coupon": {
      "type": "string",
      "pattern": "^[0-9]*$"
    },
    "max_uses_time_per_customer": {
      "type": "string",
      "pattern": "integer"
    },
    "start_date": {
      "type": "string",
      "format": "date"
    },
    "end_date": {
      "type": "string",
      "format": "date"
    }
  },
  "buyx_gety": {
    "type": "array",
    "items": {
      "type": "object",
      "properties": {
        "buy_qty": {
          "type": [
            "string",
            "integer"
          ],
          "pattern": "^[0-9]*$"
        },
        "get_qty": {
          "type": [
            "string",
            "integer"
          ],
          "pattern": "^[0-9]*$"
        },
        "max_y": {
          "type": [
            "string",
            "integer"
          ],
          "pattern": "^[0-9]*$"
        },
        "sku": {
          "type": "string"
        }
      },
      "required": [
        "buy_qty",
        "get_qty",
        "max_y",
        "sku"
      ],
      "additionalProperties": true
    }
  },
  "start_date": {
    "type": "string",
    "format": "date"
  },
  "end_date": {
    "type": "string",
    "format": "date"
  },
  "required": [
    "coupon",
    "status",
    "discount_amount",
    "discount_type"
  ],
  "additionalProperties": true,
  "errorMessage": {
    "properties": {
      "coupon": "Coupon is invalid",
      "status": "Status is invalid",
      "discount_amount": "Discount amount is invalid"
    }
  }
}}
  responseSample={`{
  "data": {
    "coupon_id": 30,
    "uuid": "d63601a5a67311edb46b60d819134f39",
    "status": 1,
    "description": "y2RFMOdn9LuiUtob5n1c",
    "discount_amount": 10,
    "free_shipping": 0,
    "discount_type": "fixed_discount_to_entire_order",
    "coupon": "y2RFMOdn9LuiUtob5n1c",
    "used_time": 0,
    "target_products": null,
    "condition": null,
    "user_condition": null,
    "buyx_gety": null,
    "max_uses_time_per_coupon": null,
    "max_uses_time_per_customer": null,
    "start_date": null,
    "end_date": null,
    "created_at": "2023-02-07 15:07:53",
    "updated_at": "2023-02-07 15:07:53",
    "links": [
      {
        "rel": "couponGrid",
        "href": "/admin/coupons",
        "action": "GET",
        "types": [
          "text/xml"
        ]
      },
      {
        "rel": "edit",
        "href": "/admin/coupon/edit/d63601a5a67311edb46b60d819134f39",
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

## Update a coupon

Use this endpoint to update a coupon.

<Api
  method="PATCH"
  url="/api/coupons/{id}"
  requestSchema={{
  "type": "object",
  "properties": {
    "coupon": {
      "type": "string",
      "pattern": "^[a-zA-Z0-9]+$"
    },
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
    "description": {
      "type": "string"
    },
    "discount_amount": {
      "type": [
        "string",
        "number"
      ],
      "pattern": "^\\d*\\.?\\d*$"
    },
    "free_shipping": {
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
    "discount_type": {
      "type": "string"
    },
    "target_products": {
      "type": "object",
      "properties": {
        "maxQty": {
          "type": [
            "string",
            "integer"
          ],
          "pattern": "^[0-9]*$"
        },
        "products": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "key": {
                "type": "string"
              },
              "operator": {
                "type": "string",
                "enum": [
                  "IN",
                  "NOT IN",
                  "=",
                  "!=",
                  ">",
                  ">=",
                  "<",
                  "<="
                ]
              },
              "value": {
                "type": [
                  "string",
                  "number"
                ],
                "pattern": "^\\d*\\.?\\d*$"
              }
            },
            "required": [
              "key",
              "operator",
              "value"
            ],
            "additionalProperties": true
          }
        }
      }
    },
    "condition": {
      "type": "object",
      "properties": {
        "order_total": {
          "type": [
            "string",
            "number"
          ],
          "pattern": "^\\d*\\.?\\d*$"
        },
        "order_qty": {
          "type": [
            "string",
            "integer"
          ],
          "format": "digits"
        },
        "required_products": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "key": {
                "type": "string"
              },
              "operator": {
                "type": "string",
                "enum": [
                  "IN",
                  "NOT IN",
                  "=",
                  "!=",
                  ">",
                  ">=",
                  "<",
                  "<="
                ]
              },
              "qty": {
                "type": [
                  "string",
                  "integer"
                ],
                "pattern": "^[0-9]*$"
              },
              "value": {
                "type": [
                  "string",
                  "number"
                ],
                "pattern": "^\\d*\\.?\\d*$"
              }
            },
            "required": [
              "key",
              "qty",
              "operator",
              "value"
            ],
            "additionalProperties": true
          }
        },
        "additionalProperties": true
      }
    },
    "user_condition": {
      "type": "object",
      "properties": {
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
        "emails": {
          "type": "string"
        },
        "purchased": {
          "type": [
            "string",
            "integer"
          ],
          "pattern": "^\\d*\\.?\\d*$"
        }
      },
      "additionalProperties": true
    },
    "max_uses_time_per_coupon": {
      "type": "string",
      "pattern": "^[0-9]*$"
    },
    "max_uses_time_per_customer": {
      "type": "string",
      "pattern": "integer"
    },
    "start_date": {
      "type": "string",
      "format": "date"
    },
    "end_date": {
      "type": "string",
      "format": "date"
    }
  },
  "buyx_gety": {
    "type": "array",
    "items": {
      "type": "object",
      "properties": {
        "buy_qty": {
          "type": [
            "string",
            "integer"
          ],
          "pattern": "^[0-9]*$"
        },
        "get_qty": {
          "type": [
            "string",
            "integer"
          ],
          "pattern": "^[0-9]*$"
        },
        "max_y": {
          "type": [
            "string",
            "integer"
          ],
          "pattern": "^[0-9]*$"
        },
        "sku": {
          "type": "string"
        }
      },
      "required": [
        "buy_qty",
        "get_qty",
        "max_y",
        "sku"
      ],
      "additionalProperties": true
    }
  },
  "start_date": {
    "type": "string",
    "format": "date"
  },
  "end_date": {
    "type": "string",
    "format": "date"
  },
  "required": [
    "coupon"
  ],
  "additionalProperties": true,
  "errorMessage": {
    "properties": {
      "coupon": "Coupon is invalid",
      "status": "Status is invalid",
      "discount_amount": "Discount amount is invalid"
    }
  }
}}
  responseSample={`{
  "data": {
    "coupon_id": 30,
    "uuid": "d63601a5a67311edb46b60d819134f39",
    "status": 1,
    "description": "y2RFMOdn9LuiUtob5n1c",
    "discount_amount": 10,
    "free_shipping": 0,
    "discount_type": "fixed_discount_to_entire_order",
    "coupon": "y2RFMOdn9LuiUtob5n1c",
    "used_time": 0,
    "target_products": null,
    "condition": null,
    "user_condition": null,
    "buyx_gety": null,
    "max_uses_time_per_coupon": null,
    "max_uses_time_per_customer": null,
    "start_date": null,
    "end_date": null,
    "created_at": "2023-02-07 15:07:53",
    "updated_at": "2023-02-07 15:07:53",
    "links": [
      {
        "rel": "couponGrid",
        "href": "/admin/coupons",
        "action": "GET",
        "types": [
          "text/xml"
        ]
      },
      {
        "rel": "edit",
        "href": "/admin/coupon/edit/d63601a5a67311edb46b60d819134f39",
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

 ## Delete a coupon

Use this endpoint to delete a coupon.

<Api
  method="DELETE"
  url="/api/coupons/{id}"
  responseSample={`{
  "data": {
    "coupon_id": 30,
    "uuid": "d63601a5a67311edb46b60d819134f39",
    "status": 1,
    "description": "TRNfYH0X7kQL4Evddsy6",
    "discount_amount": 20,
    "free_shipping": 0,
    "discount_type": "fixed_discount_to_entire_order",
    "coupon": "TRNfYH0X7kQL4Evddsy6",
    "used_time": 0,
    "target_products": null,
    "condition": null,
    "user_condition": null,
    "buyx_gety": null,
    "max_uses_time_per_coupon": null,
    "max_uses_time_per_customer": null,
    "start_date": null,
    "end_date": null,
    "created_at": "2023-02-07 15:07:53",
    "updated_at": "2023-02-07 15:07:53"
  }
}`}
 />

 ## Apply a coupon

Use this endpoint to apply a coupon to a cart.

<Api
  method="POST"
  url="/api/carts/{cart_id}/coupons"
  requestSchema={{
  "type": "object",
  "properties": {
    "coupon": {
      "type": "string"
    }
  },
  "required": [
    "coupon"
  ],
  "additionalProperties": true,
  "errorMessage": {
    "properties": {
      "coupon": "Coupon is invalid"
    }
  }
}}
  responseSample={`{
  "data": {
    "coupon": "coupon"
  }
}`}
 />