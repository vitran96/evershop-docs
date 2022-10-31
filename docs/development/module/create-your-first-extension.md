---
sidebar_position: 15
keywords:
- create EverShop extension
sidebar_label: Create your first extension
title: Create your first extension
description: In this tutorial, we will pick a simple use case and create an extension to demonstrate step by step how to create an extension for EverShop.
---

# Create your first extension

## Requirements

- You must have EverShop version 2.0.2-alpha.5 installed on your machine. If you don't have EverShop installed, please follow the [installation guide](/docs/development/getting-started/installation-guide).

- You must have a basic understanding of EverShop module. If you don't know what is a module, please read [this document](/docs/development/module/module-overview).

- You must have a basic understanding of EverShop extension. If you don't know what is an extension, please read [this document](/docs/development/module/extension-development).

## Senario

In this tutorial, we will pick a simple use case and create an extension to demonstrate step by step how to create an extension for EverShop.

Let's assume that you have a store that sells books. You want to add a new feature to allow customers to comment on the product.

Below is the list of requirements:
- Customers can comment on the product.
- Customers can see the list of comments on the product.

Let's start!

## Step 1: Create a new extention project

From the root directory of your EverShop project, find the folder named `extensions` and create a new folder named `productComment`.

:::info
If the folder `extensions` does not exist, please create it.
:::

```bash
./extensions
    └── productComment
```
## Steps 2: Setup NPM workspace

Edit your `package.json` file in the root directory of your EverShop project and add the following lines:

```js title="package.json"
{
  "workspaces": [
    "extensions/*"
  ]
}
```

This step is optional, it is only required if your extension has some dependencies.

## Step 3: Adding the comment form to the product page

To do this, add a subfolder named `pages`:

```bash
./extensions
    └── productComment
        └── pages
```

We will add the comment form to the product page only. Which has the route id `productView`. You can check it by navigating to the catalog module at `@evershop/core/src/modules/catalog/pages/frontStore`

So to add a Component to this page, we will create a subfolder named `frontStore` and then its subfolder named `productView`:

```bash
./extensions
    └── productComment
        └── pages
            └── frontStore
                └── productView
```

Now let's create a [React component](https://reactjs.org/) named `CommentForm.js`:

```js title="CommentForm.js"
import React from 'react';
import { Form } from '@evershop/core/src/lib/components/form/Form';
import { Field } from '@evershop/core/src/lib/components/form/Field';

export default function ComponentForm() {
  return (
    <div className='product-comment-form'>
      <h3>Your comment</h3>
      <Form
        id="comment-form"
        method="POST"
        btnText="Submit"
        isJSON={true}
      >
        <Field
          name="user_name"
          label="Your Name"
          type="text"
          validationRules={['notEmpty']} # This is a mandatory field
        />
        <Field
          name="comment"
          label="Your Comment"
          type="textarea"
          validationRules={['notEmpty']} # This is a mandatory field
        />
      </Form>
    </div>
  );
}
```

We will use the default `Form` component and this form has two fields: `user_name` and `comment`. The `user_name` field is a text field and the `comment` field is a textarea field.

For now, we will not add any logic to the form. We will do it later. 

We want to display the form to the left column of the product page. To do that, we update the `CommentForm.js` file and add the layout definition:

```js title="CommentForm.js"
import React from 'react';
import { Form } from '@evershop/core/src/lib/components/form/Form';
import { Field } from '@evershop/core/src/lib/components/form/Field';

export default function ComponentForm() {
  return (
    <div className='product-comment-form'>
      <h3>Your comment</h3>
      <Form
        id="comment-form"
        method="POST"
        btnText="Submit"
        isJSON={true}
      >
        <Field
          name="user_name"
          label="Your Name"
          type="text"
          validationRules={['notEmpty']}
        />
        <Field
          name="comment"
          label="Your Comment"
          type="textarea"
          validationRules={['notEmpty']}
        />
      </Form>
    </div>
  );
}

// highlight-start

export const layout = {
  areaId: 'productPageMiddleLeft',
  sortOrder: 50
}

// highlight-end
```

:::info
To see list of available areas, please check the file `@evershop/core/src/modules/catalog/pages/frontStore/productView/Layout.js`
:::

The product page will be look like this:

![product page](./img/product-comment-form.png)

## Step 4: Create a MySQL table to store the comments

When a customer submits the comment form, we will save the comment to the database. To do that, we need to create a MySQL table to store the comments.

To create a MySQL table, we will use the migration feature of EverShop. To do that, we will create a new folder named `migration` in our extension:

```bash
./extensions
    └── productComment
        │── pages
        │   └── frontStore
        │       └── productView
        └── migration
```

In the `migration` folder, we will create a new file named `Version-1.0.0.js`:

```js title="migration/Version-1.0.0.js"
const { execute } = require('@evershop/mysql-query-builder');
const { pool } = require('@evershop/core/src/lib/mysql/connection');

// eslint-disable-next-line no-multi-assign
module.exports = exports = async () => {
  await execute(pool, `CREATE TABLE \`product_comment\` (
  \`comment_id\` int(10) unsigned NOT NULL AUTO_INCREMENT,
  \`product_id\` int(10) unsigned NOT NULL,
  \`user_name\` varchar(255) NOT NULL,
  \`comment\` text DEFAULT NULL,
  \`created_at\` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (\`comment_id\`),
  CONSTRAINT \`FK_PRODUCT_COMMENT\` FOREIGN KEY (\`product_id\`) REFERENCES \`product\` (\`product_id\`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
`);
};
```
That's it. A new MySQL table named `product_comment` will be created automatically when you start the project later.

For now, let's make it simple with 4 columns only: `comment_id`, `product_id`, `user_name` and `comment`.

In real case, you may want to add more columns such as `email`, `rating`, `status` (approved or not), `created_at`, `updated_at`...

## Step 5: Create an API endpoint to save the comment

When a customer submits the comment form, we will send the data to the server and save it to the database. To do that, we will create a new API endpoint.

To create an API endpoint, we will create a new folder named `api` in our extension:

```bash
./extensions
    └── productComment
        │── pages
        │   └── frontStore
        │       └── productView
        │── migration
        └── api
```

Since this API is public, we will create a folder named `frontStore`. In the `frontStore` folder, we will create a subfolder named `productComment`:

```bash
./extensions
    └── productComment
        │── pages
        │   └── frontStore
        │       └── productView
        │── migration
        └── api
            └── frontStore
                └── productComment
```

### API route definition

In the `productComment` folder, we will create a new file named `route` with the following content:

```js title="api/frontStore/productComment/route.js"
POST
/productComments
```

Above code means that we will create a new API endpoint with the URL `/productComments` and the HTTP method is `POST`.

### API middleware functions

#### Parse the request body

The first middleware that we need is a middleware to parse the request body. To do that, we will create a new file named `bodyParser.js`:

```js title="api/frontStore/productComment/bodyParser.js"
const bodyParser = require('body-parser');

module.exports = (request, response, stack, next) => {
  bodyParser.json({ inflate: false })(request, response, () => {
    bodyParser.urlencoded({ extended: true })(request, response, next);
  });
}
```

#### Validate the comment

The second middleware that we need is a middleware to validate the comment. This middleware will be executed after the `bodyParser` middleware. To do that, we will create a new file named `[bodyParser]validateComment.js`:

```js title="api/frontStore/productComment/[bodyParser]validateComment.js.js"
module.exports = (request, response) => {
  const { body } = request;
  // Validate the comment data
  if (!body.product_id) {
    throw new Error('product Id is required');
  }

  if (!body.user_name) {
    throw new Error('User name is required');
  }

  if (!body.comment) {
    throw new Error('Comment is required');
  }
}
```

For now let's make it simple, we check and make sure the `product_id`, `user_name` and `comment` are not empty.

In real case, you may want to do more like validating the customer info and only allow the logged-in customer to submit the comment.

#### Save the comment

The last middleware that we need is a middleware to save the comment. This middleware will be executed after the `validateComment` middleware. To do that, we will create a new file named `[validateComment]saveComment.js`:

```js title="api/frontStore/productComment/[validateComment]saveComment.js"
const { pool } = require('@evershop/core/src/lib/mysql/connection');
const { insert } = require('@evershop/mysql-query-builder');

module.exports = async function graphql(request, response, delegate, next) {
  try {
    const { body: { product_id, user_name, comment } } = request;
    // Insert the comment into the database
    await insert('product_comment')
      .given({
        product_id,
        user_name,
        comment
      })
      .execute(pool);
    response.json({ success: true });
  } catch (error) {
    next(error);
  }
}
```

Above code will insert the comment into the database table or call the `next` function with the error if any.

Now let's test the API endpoint. To do that, we will use the `curl` command:

```bash
curl -X POST \
  http://localhost:3000/productComments \
  -H 'Content-Type: application/json' \
  -d '{
  "product_id": 1,
  "user_name": "John Doe",
  "comment": "This is a comment"
}'
```

If everything is OK, you will see the following response:

```json
{"success":true}
```

Now let's go back to the `CommentForm` component and add this API endpoint to the form:

```js title="src/components/CommentForm.js"
import React from 'react';
import { Form } from '@evershop/core/src/lib/components/form/Form';
import { Field } from '@evershop/core/src/lib/components/form/Field';

export default function ComponentForm({ action }) {
  const [error, setError] = React.useState(null);

  const onSuccess = (response) => {
    if (response.success) {
      window.location.reload();
    } else {
      setError(response.message);
    }
  }

  return (
    <div className='product-comment-form'>
      <h3>Your comment</h3>
      {error && <div className='error'>{error}</div>}
      <Form
        id="comment-form"
        action={action}
        method="POST"
        btnText="Submit"
        onSuccess={onSuccess}
        isJSON={true}
      >
        <Field
          name="user_name"
          label="Your Name"
          type="text"
          validationRules={['notEmpty']}
        />
        <Field
          name="comment"
          label="Your Comment"
          type="textarea"
          validationRules={['notEmpty']}
        />
      </Form>
    </div>
  );
}

export const layout = {
  areaId: 'productPageMiddleLeft',
  sortOrder: 50
}

// highlight-start

export const query = `
  query {
    action: url(routeId: "productComment")
  }
`;

// highlight-end
```

In the above code, we use a GraphQL query to get the API endpoint URL. The GraphQL query result will be passed to the `CommentForm` component as the `action` prop.

We also create a `onSuccess` function to handle the response from the API endpoint. If the response is successful, we will reload the page to show the new comment. Otherwise, we will show the error message.

Because our API requires a field named `product_id` to be passed to the API endpoint, get the current product id and pass it to the `CommentForm` component:

The final code of the `CommentForm` component is:

```js title="src/components/CommentForm.js"
import React from 'react';
import { Form } from '@evershop/core/src/lib/components/form/Form';
import { Field } from '@evershop/core/src/lib/components/form/Field';

export default function ComponentForm({ action, product }) {
  const [error, setError] = React.useState(null);

  const onSuccess = (response) => {
    if (response.success) {
      window.location.reload();
    } else {
      setError(response.message);
    }
  }

  return (
    <div className='product-comment-form'>
      <h3>Your comment</h3>
      {error && <div className='error'>{error}</div>}
      <Form
        id="comment-form"
        action={action}
        method="POST"
        btnText="Submit"
        onSuccess={onSuccess}
        isJSON={true}
      >
        <Field
          name="user_name"
          label="Your Name"
          type="text"
          validationRules={['notEmpty']}
        />
        <Field
          name="comment"
          label="Your Comment"
          type="textarea"
          validationRules={['notEmpty']}
        />
        <Field
          type='hidden'
          name='product_id'
          value={product.productId}
        />
      </Form>
    </div>
  );
}

export const layout = {
  areaId: 'productPageMiddleLeft',
  sortOrder: 50
}

export const query = `
  query {
    action: url(routeId: "productComment"),
    product: product(id: getContextValue("productId")) {
      productId
    }
  }
`;
```

## Step 6: Build the GraphQL schema for the product comment

### GraphQL Schema for the comments

Now let's show the comments on the product page. To do that, the first step we need to do is define the Comment GraphQL type. To do that, we will create a subfolders named `graphql` under our extension folder and inside that folder, we will create a folder named `types`:

```bash
./extensions
    └── productComment
        │── pages
        │   └── frontStore
        │       └── productView
        │── migration
        │── api
        └── graphql
            └── types
```

Now let's create a subfolder named `Comment` under the `types` folder and inside that folder, we will create a file named `Comment.graphql`:

```bash
./extensions
    └── productComment
        │── pages
        │   └── frontStore
        │       └── productView
        │── migration
        │── api
        └── graphql
            └── types
                └── Comment
                    └── Comment.graphql
```

Now let's add the following code to the `Comment.graphql` file:

```graphql title="graphql/types/Comment/Comment.graphql"
type Comment {
  commentId: Int!
  userName: String
  comment: String
  createdAt: String
}
```

We also need to extend the `Query` type and add our `comments` field to it. The final code of the `Comment.graphql` file is:

```graphql title="graphql/types/Comment/Comment.graphql"
type Comment {
  commentId: Int!
  userName: String
  comment: String
  createdAt: String
}

extend type Query {
  comments(productId: Int!): [Comment]
}
```

### GraphQL Resolver for the comments

Now let's create the GraphQL resolver for the comments. To do that, we will add a new file named `Comment.resolvers.js` under the `Comment` folder:

```bash
./extensions
    └── productComment
        │── pages
        │   └── frontStore
        │       └── productView
        │── migration
        │── api
        └── graphql
            └── types
                └── Comment
                    │── Comment.graphql
                    └── Comment.resolvers.js
```

The code of the `Comment.resolvers.js` file is:

```js title="graphql/types/Comment/Comment.resolvers.js"
const { camelCase } = require('@evershop/core/src/lib/util/camelCase');
const { select } = require('@evershop/mysql-query-builder');

module.exports = {
  Query: {
    comments: async (root, { productId }, { pool }) => {
      const comments = await select()
        .from('product_comment')
        .where('product_id', '=', productId)
        .execute(pool);

      return comments.map(comment => camelCase(comment));
    }
  }
}
```

That's it. Now we have the GraphQL schema and resolver for the comments. In next step, we will use the GraphQL query to get the comments and show them on the product page.

## Step 7: Show the comments on the product page

Now let's show the comments on the product page. To do that, we will create a new component named `Comments` under the `productView` folder:

```bash
./extensions
    └── productComment
        │── pages
        │   └── frontStore
        │       └── productView
        │           │── CommentForm.js
        │           └── Comments.js
        │── migration
        │── api
        └── graphql
```

The code of the `Comments.js` file is:

```js title="src/components/Comments.js"
import React from 'react';

export default function Comments({ comments = [] }) {
  return <div id="productComments">
    <h3>Comments</h3>
    <ul className="comment-list">
      {comments.map((comment) => (
        <li key={comment.commentId}>
          <div className='user-name'>{comment.userName}</div>
          <p className='comment'>{comment.comment}</p>
        </li>
      ))}
    </ul>
  </div>;
}

// highlight-start

// We display the comment list above the comment form
export const layout = {
  areaId: 'productPageMiddleLeft',
  sortOrder: 45
}

// highlight-end

export const query = `
  query {
    comments(productId: getContextValue("productId")) {
      commentId
      userName
      comment
      createdAt
    }
  }
`;
```

We use GraphQL query to get the comments and pass the comments to the `Comments` component. The `Comments` component will show the comments on the product page.

Let's create a new file named 'Component.scss' and add some styles to it:

```bash
./extensions
    └── productComment
        │── pages
        │   └── frontStore
        │       └── productView
        │           │── CommentForm.js
        │           │── Comments.js
        │           └── Component.scss
        │── migration
        │── api
        └── graphql
```

The code of the `Component.scss` file is:

```scss title="src/components/Component.scss"
.comment-list  {
  margin-bottom: 20px;
  li {
    padding: 10px 0;
    border-bottom: 1px solid #eee;
    :last-child {
      border-bottom: 0;
    }
  }
  .user-name {
    font-weight: bold;
    margin-bottom: 5px;
  }
  .comment{
    font-style: italic;
  }
}
```

Update the `Comments.js` file to use the `Component.scss` file:

```js title="src/components/Comments.js"
import React from 'react';
import './Comments.scss';

export default function Comments({ comments = [] }) {
  return <div id="productComments">
    <h3>Comments</h3>
    <ul className="comment-list">
      {comments.map((comment) => (
        <li key={comment.commentId}>
          <div className='user-name'>{comment.userName}</div>
          <p className='comment'>{comment.comment}</p>
        </li>
      ))}
    </ul>
  </div>;
}

export const layout = {
  areaId: 'productPageMiddleLeft',
  sortOrder: 45
}

export const query = `
  query {
    comments(productId: getContextValue("productId")) {
      commentId
      userName
      comment
      createdAt
    }
  }
`;
```

So far, we have completed our extension. Let's jump to the next step and enable the extension.

## Step 8: Enable the extension

To start using our extension, we need update our configuration. Open the file in your `/config` directory. Depend on the environment you are using, the file name will be different. For example, if you are using the `development` environment, the file name will be `development.json`. Add the following code to the file (under the `system` section):

```json title="config/development.json"
{
  "system": {
        ...
        "extensions": [
            {
                "name": "productComment",
                "resolve": "extensions/productComment",
                "enabled": true
            }
        ]
    }
}
```

Now, start the server and open the product page. You should see the comments and the comment form.

## Conclusion

In this tutorial, we have learned:

- How to create a new extension
- How to work with layout and Component
- How to create a GraphQL schema and resolver
- How to create a RESTful API
- How to create a database migration
- How to style a component
- How to enable the extension

## Bonus: Publish the extension as a NPM package

If you want to share your extension with the community, you can publish it as a NPM package. To do that, go to the extension folder and run the following command:

```bash
npm init
```

Then, you will be asked to fill in some information about your extension. After that, you can publish your extension to NPM by running the following command:

```bash
npm publish --access public
```

Now your extension can be installed just like any other NPM package. However, the extension resolver will be different. For example, if your extension name is `productcomment`, the configuration will be:

```json title="config/development.json"
{
  "system": {
        ...
        "extensions": [
            {
                "name": "productComment",
                "resolve": "node_modules/productcomment",
                "enabled": true
            }
        ]
    }
}
```
