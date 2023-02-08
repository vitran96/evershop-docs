---
sidebar_position: 1
hide_table_of_contents: true
keywords:
- EverShop api
sidebar_label: Payment Method
title: Payment Method API
description: Use the REST API to interact with EverShop Payment Method.
---

# Payment Method API

Use the REST API to interact with EverShop payment methods.

## Get available payment methods

Use this endpoint to get available payment methods.

import Api from '@site/src/components/rest/Api';

<Api
  method="GET"
  url="/api/paymentMethods"
  responseSample={`{
  "data": {
    "methods": [
      {
        "code": "cod",
        "name": "Cash On Delivery"
      },
      {
        "code": "paypal",
        "name": "Paypal"
      },
      {
        "code": "stripe",
        "name": "Credit Card"
      }
    ]
  }
}`}
 />
