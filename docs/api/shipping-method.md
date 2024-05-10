---
sidebar_position: 1
hide_table_of_contents: true
keywords:
- EverShop api
sidebar_label: Shipping Method
title: Shipping Method API
description: Use the REST API to interact with EverShop shipping Method.
---

# Shipping Method API

Use the REST API to interact with EverShop shipping methods.

## Get available shipping methods

Use this endpoint to get available shipping methods.

import Api from '@site/src/components/rest/Api';

<Api
  method="GET"
  url="/api/shippingMethods"
  responseSample={`{
  "data": {
    "methods": [
      {
        "code": "free",
        "name": "Free Shipping"
      }
    ]
  }
}`}
  isPrivate={false}
 />
