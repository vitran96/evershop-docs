---
sidebar_position: 1
displayed_sidebar: 'apiSidebar'
keywords:
- EverShop api
sidebar_label: Overview
title: Api Overview 
description: The overview of EverShop rest api. Learn more about the rest api authentication, error handling, and more.
---

# RESTful API Overview

EverShop is an API based e-commerce platform. It provides a RESTful API and a GraphQL API for developers to build their own e-commerce applications.

EverShop uses the [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) for creating, updating, and deleting resources. It uses the [GraphQL](https://graphql.org/) for querying resources.

:::info
Check out [this document](/docs/development/knowledge-base/api-routes.md) to learn more about the API routes.
:::

:::info
Check out [this document](/docs/development/knowledge-base/graphql.md) to learn more about the GraphQL API in EverShop.
:::

## Content Types

EverShop uses the [JSON](https://www.json.org/json-en.html) format for all the API requests and responses. The content type of the request and response is `application/json`.

## Authentication

For now, EverShop supports the cookie based authentication. You can get the cookie by calling the [admin login](/docs/api/user) API. This cookie will be used for all the subsequent API calls.

Some API endpoints do not require authentication. If the `access` property is set to `public` in the `route.json` file, the API endpoint will be treated as a public API endpoint. Public API endpoints can be accessed by anyone.

## HTTP verbs
Where possible, the EverShop REST API strives to use appropriate HTTP verbs for each action. Note that HTTP verbs are case-sensitive.

- GET:	Used for retrieving resources.
- POST:	Used for creating resources.
- PATCH:	Used for updating resources with partial JSON data. For instance, an Issue resource has title and body attributes. A PATCH request may accept one or more of the attributes to update the resource.
- DELETE:	Used for deleting resources.

## Error Handling

EverShop uses the [HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) to indicate the status of the API calls. The HTTP status code is returned in the response header.

List of the HTTP status codes:

- 200: OK
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 405: Method Not Allowed
- 500: Internal Server Error

### Error Response

If the API call was failed, the response body will contain the error message. The error message is a JSON object with the following structure:

```json
{
  "error": {
    "status": 500,
    "message": "error_message"
  }
}
```

