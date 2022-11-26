---
sidebar_position: 1
keywords:
- EverShop Stripe payment gateway integration
sidebar_label: Stripe Payment Integration
title: Stripe Payment Integration
description: This document describes step by step how to integrate the Stripe payment gateway with EverShop. So you will learn how to integrate your payment gateway with EverShop.
---

# Stripe Payment Gateway Integration

By default, EverShop supports an online payment gateway - Stripe. This document will walk you through the steps how we integrated with Stripe payment gateway. So you will learn how to integrate your payment gateway with EverShop.

## Create an extension

Because we make Stripe as a part of EverShop core, so this step is not necessary. The Stripe module is located in `modules/stripe` folder.

But if you want to create your own payment gateway, you can follow the [Create your first extension](/docs/development/module/create-your-first-extension) guide to create an extension.

## Register your payment gateway to the checkout page

During the checkout process, EverShop will render the payment gateway list for the customer to choose. To get the payment gateway list, EverShop will call the `paymentMethods` API. So you need to register your payment gateway to the checkout page by hooking into the `paymentMethods` API.

As you may know, to hook into an API, you need to create a middleware. So let's create a middleware to register our payment gateway.

Let's go and create a api folder in the root of your extension. It will look like this:

```bash
stripe
├── api
│   └── frontStore
│       └── paymentMethods
│           └── [validateCart]registerStripe[sendMethods].js
```

Looking to the name of the middleware, our middleware will be executing after the `validateCart` middleware and before the `sendMethods` middleware. So we can get the cart data from the `validateCart` middleware and send the payment gateway list to the `sendMethods` middleware.

Now let's complete our middleware. It will look like this:

```js
const { getConfig } = require('../../../../../lib/util/getConfig');
const { getSetting } = require('../../../../setting/services/setting');

module.exports = async (request, response) => {
  // Check if Stripe is enabled
  const stripeConfig = getConfig('system.stripe', {});
  let stripeStatus;
  if (stripeConfig.status) {
    stripeStatus = stripeConfig.status;
  } else {
    stripeStatus = await getSetting('stripePaymentStatus', 0);
  }
  if (parseInt(stripeStatus) === 1) {
    return {
      methodCode: 'stripe',
      methodName: await getSetting('stripeDislayName', 'Stripe')
    }
  } else {
    return;
  }
};
```

Your middeware is encouraged to return a payment gateway object. The object should contain `methodCode` and `methodName` properties. The `methodCode` is the unique code of your payment gateway. The `methodName` is the name of your payment gateway. It will be displayed on the checkout page.

You can do some validation here. For example, if the Stripe payment gateway is disabled, you can return nothing. So the payment gateway will not be displayed on the checkout page.

After this step, you can see your payment gateway on the checkout page.

## Adding Stripe payment gateway to the cart

During the checkout process, the customer will choose a payment gateway from the list. At this time, EverShop will call the `addPaymentMethod` API to add the payment gateway to the cart.

This API simply takes the `methodCode` and `methodName`, adds the payment gateway to the cart. It does not do any payment process. 

:::info
Maybe you will ask how we do the validation before adding the payment gateway to the cart. We will cover this later. For now, let's assume that we do not need to do any validation.
:::

## Create a payment intent

Stripe requires us to create a payment intent before we can do the payment. You can find more information about payment intent [here](https://stripe.com/docs/payments/payment-intents).

Let's create an API to create a payment intent. We will create a new folder `paymentIntent` in the `api/frontStore` folder. It will look like this:

```bash
stripe
├── api
│   └── frontStore
│       ├── paymentIntent
│       │   └── [context]bodyParser[auth].js
│       │   └── createPaymentIntent.js
│       │   └── route
```

The `createPaymentIntent.js` will look like this:

```js
const { select } = require('@evershop/mysql-query-builder');
const { pool } = require('../../../../../lib/mysql/connection');
const smallestUnit = require("zero-decimal-currencies");
const { getSetting } = require('../../../../setting/services/setting');
const stripePayment = require('stripe');
const { getConfig } = require('../../../../../lib/util/getConfig');

// eslint-disable-next-line no-unused-vars
module.exports = async (request, response, stack, next) => {
  const { body } = request;
  // Check the order
  const order = await select()
    .from('order')
    .where('uuid', '=', body.orderId)
    .load(pool);

  if (!order) {
    response.json({
      success: false,
      message: "The requested order does not exisst"
    });
  } else {
    const stripeConfig = getConfig('system.stripe', {});
    let stripeSecretKey;
    if (stripeConfig.secretKey) {
      stripeSecretKey = stripeConfig.secretKey;
    } else {
      stripeSecretKey = await getSetting('stripeSecretKey', '');
    }

    const stripe = stripePayment(stripeSecretKey);
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: smallestUnit.default(order.grand_total, order.currency),
      currency: order.currency,
      metadata: {
        orderId: body.orderId
      }
    });

    response.json({
      clientSecret: paymentIntent.client_secret,
      success: true
    });
  }
};
```

And here is our route file:

```js
POST
/stripe/paymentIntent
```

When the customer clicks the `Place Order` button, EverShop will call the `paymentIntent` API. This API will create a payment intent and return the payment intent id to the frontend. The frontend will use this payment intent id to do the payment process.

## Create a payment form

Stripe provides a solution to create a payment form. You can find more information about this [here](https://stripe.com/docs/payments/payment-intents/quickstart).

Let's go create our payment form. This form will be displayed on the checkout page when the customer chooses the Stripe payment gateway.

Let's create 2 React components `CheckoutForm.js` and `PaymentFormContext.js` in the `pages/frontStore/checkout` folder. It will look like this:

```bash
stripe
├── pages
│   └── frontStore
│       └── checkout
│           └── PaymentFormContext.js
│           └── CheckoutForm.js
```

This is our `PaymentFormContext.js`:

```js
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with your real test publishable API key.
var stripe;
const stripeLoader = (publishKey) => {
  if (!stripe) {
    stripe = loadStripe(publishKey);
  }
  return stripe
}

export default function StripeApp({ setting }) {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="App">
      <Elements stripe={stripeLoader(setting.stripePublishableKey)}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}

export const layout = {
  areaId: 'checkoutPaymentMethods',
  sortOrder: 10
}

export const query = `
  query Query {
    setting {
      stripeDislayName
      stripePublishableKey
    }
  }
`
```

In above code, we use the `loadStripe` function to load the Stripe library. We also use the `Elements` component to wrap our payment form.

You can also see how we use the `layout` to tell EverShop where to display this component. And we use the `query` to get the Stripe publishable key from the setting.

This is our `CheckoutForm.js`:

```js
import React, { useState, useEffect } from 'react';
import {
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';
import { useCheckout } from '../../../../../lib/context/checkout';
import Button from '../../../../../lib/components/form/Button';
import { get } from '../../../../../lib/util/get';
import './CheckoutForm.scss';
import { useQuery } from 'urql';

const cartQuery = `
  query Query($cartId: String) {
    cart(id: $cartId) {
      billingAddress {
        cartAddressId
        fullName
        postcode
        telephone
        country {
          name
          code
        }
        province {
          name
          code
        }
        city
        address1
        address2
      }
      shippingAddress {
        cartAddressId
        fullName
        postcode
        telephone
        country {
          name
          code
        }
        province {
          name
          code
        }
        city
        address1
        address2
      }
      customerEmail
    }
  }
`;

const cardStyle = {
  style: {
    base: {
      color: '#737373',
      fontFamily: 'Arial, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#737373'
      }
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a'
    }
  },
  hidePostalCode: true
};

export default function CheckoutForm() {
  const [, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const [showTestCard, setShowTestCard] = useState('success');
  const stripe = useStripe();
  const elements = useElements();
  const [billingCompleted] = useState(false);
  const [paymentMethodCompleted] = useState(false);
  const { cartId, orderId, orderPlaced, paymentMethods, checkoutSuccessUrl } = useCheckout();
  const [loading, setLoading] = useState(false);

  const [result, reexecuteQuery] = useQuery({
    query: cartQuery,
    variables: {
      cartId: cartId
    },
    pause: orderPlaced === true
  });

  useEffect(() => {
    // Create PaymentIntent as soon as the order is placed
    if (orderPlaced === true) {
      window
        .fetch('/v1/stripe/paymentIntent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ orderId: orderId })
        })
        .then((res) => res.json())
        .then((data) => {
          setClientSecret(data.clientSecret);
        });
    }
  }, [orderId]);

  useEffect(() => {
    const pay = async () => {
      const billingAddress = result.data.cart.billingAddress || result.data.cart.shippingAddress
      const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: billingAddress.fullName,
            email: result.data.cart.customerEmail,
            phone: billingAddress.telephone,
            address: {
              line1: billingAddress.address1,
              country: billingAddress.country.code,
              state: billingAddress.province.code,
              postal_code: billingAddress.postcode,
              city: billingAddress.city
            }
          }
        }
      });

      if (payload.error) {
        setError(`Payment failed ${payload.error.message}`);
        setProcessing(false);
      } else {
        setError(null);
        setProcessing(false);
        setSucceeded(true);
        // Redirect to checkout success page
        window.location.href = `${checkoutSuccessUrl}/${orderId}`;
      }
    };

    if (orderPlaced === true && clientSecret) {
      setLoading(false);
      if (processing !== true) {
        setProcessing(true);
        pay();
      }
    }
  }, [orderPlaced, clientSecret, result]);

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setLoading(true);
    const cardElement = elements.getElement('card');
    if (get(cardElement, '_implementation._complete') !== true) {
      setError('Please complete the card information');
      setLoading(false);
    } else {
      setError(null);
      if (!billingCompleted) {
        document.getElementById('checkoutBillingAddressForm').dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
      }
    }
  };

  const testSuccess = () => {
    setShowTestCard('success');
  };

  const testFailure = () => {
    setShowTestCard('failure');
  };

  if (result.error) return <p>Oh no... {error.message}</p>;
  // Check if the selected payment method is Stripe
  const stripePaymentMethod = paymentMethods.find((method) => method.code === 'stripe' && method.selected === true);
  if (!stripePaymentMethod) return null;

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <form id="payment-form" onSubmit={handleSubmit}>
      <div className="stripe-form">
        <div style={{
          border: '1px solid #dddddd',
          borderRadius: '3px',
          padding: '5px',
          boxSizing: 'border-box',
          marginBottom: '10px'
        }}>
          {showTestCard === 'success' && (
            <div>
              <div><b>Test success:</b></div>
              <div className="text-sm text-gray-600">Test card number: 4242 4242 4242 4242</div>
              <div className="text-sm text-gray-600">Test card expiry: 04/24</div>
              <div className="text-sm text-gray-600">Test card CVC: 242</div>
            </div>
          )}
          {showTestCard === 'failure' && (
            <div>
              <div><b>Test failure:</b></div>
              <div className="text-sm text-gray-600">Test card number: 4000 0000 0000 9995</div>
              <div className="text-sm text-gray-600">Test card expiry: 04/24</div>
              <div className="text-sm text-gray-600">Test card CVC: 242</div>
            </div>
          )}
        </div>
        <div className="stripe-form-heading flex justify-between">
          <div className="self-center">
            <span>Powered by Stripe</span>
          </div>
          <div className="self-center flex space-x-1">
            <Button onAction={testSuccess} title="Test success" outline variant="interactive" />
            <Button onAction={testFailure} title="Test failure" variant="critical" outline />
          </div>
        </div>
        <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
      </div>
      {/* Show any error that happens when processing the payment */}
      {error && (
        <div className="card-error text-critical mb-2" role="alert">
          {error}
        </div>
      )}

      <div className="form-submit-button">
        <Button
          onAction={
            () => { document.getElementById('payment-form').dispatchEvent(new Event('submit', { cancelable: true, bubbles: true })); }
          }
          title="Place Order"
          isLoading={processing || loading}
        />
      </div>
    </form>
  );
}
```

As you know our checkout process is organized in steps. The first step is the `contact info`, the second step is the `shipping info` and the third step is the `payment info`. The checkout context will manage the steps and trigger the order creation API automatically when all steps are completed. 

So what we need to do in this step are: 

+ Manage the billing address form and payment method
+ Save the billing address and payment method 
+ Mark the `payment info` step as completed
+ When the order is placed (orderId is available), call API to create a payment intent and get the client secret
+ When the client secret is returned, call the Stripe API to confirm the payment
+ Receive the payment result and redirect to the success page

## Order payment status and webhook

When an order is placed, the payment status is `pending`.

When the payment is completed successfully, Stripe will send a webhook to our server. The webhook will update the order payment status to `paid`.

To receive the webhook, we need to create and API endpoint and configure the webhook in Stripe dashboard.

### Create webhook endpoint

Lets create our webhook endpoint. We will create a folder `stripeWebHook` in the `api/frontStore` folder.

```bash
stripe
├── api
│   ├── frontStore
│   │   ├── stripeWebHook
│   │   │   ├── route
│   │   │   └── bodyJson.js
│   │   │   └── [bodyJson]webhook.js
```

The webhook endpoint will receive the webhook from Stripe and update the order payment status to `paid`.

```js title = "api/frontStore/stripeWebHook/route/[bodyJson]webhook.js"
/* eslint-disable import/order */
const {
  insert, startTransaction, update, commit, rollback, select
} = require('@evershop/mysql-query-builder');
const { getConnection } = require('../../../../../lib/mysql/connection');
const { getConfig } = require('../../../../../lib/util/getConfig');
const { getSetting } = require('../../../../setting/services/setting');

// eslint-disable-next-line no-unused-vars
module.exports = async (request, response, stack, next) => {
  const sig = request.headers['stripe-signature'];

  let event;
  const connection = await getConnection();
  try {
    const stripeConfig = getConfig('system.stripe', {});
    let stripeSecretKey;
    if (stripeConfig.secretKey) {
      stripeSecretKey = stripeConfig.secretKey;
    } else {
      stripeSecretKey = await getSetting('stripeSecretKey', '');
    }
    const stripe = require('stripe')(stripeSecretKey);

    // Webhook enpoint secret
    let endpointSecret;
    if (stripeConfig.endpointSecret) {
      endpointSecret = stripeConfig.endpointSecret;
    } else {
      endpointSecret = await getSetting('stripeEndpointSecret', '');
    }

    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
    await startTransaction(connection);
    // Handle the event
    switch (event.type) {
      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object;
        const { orderId } = paymentIntent.metadata;
        // Load the order
        const order = await select()
          .from('order')
          .where('uuid', '=', orderId)
          .load(connection);

        // Update the order
        // Create payment transaction
        await insert('payment_transaction')
          .given({
            amount: paymentIntent.amount,
            payment_transaction_order_id: order.order_id,
            transaction_id: paymentIntent.id,
            transaction_type: 'online',
            payment_action: paymentIntent.capture_method === 'automatic' ? 'Capture' : 'Authorize'
          })
          .execute(connection);

        // Update the order status
        await update('order')
          .given({ payment_status: 'paid' })
          .where('order_id', '=', order.order_id)
          .execute(connection);

        // Add an activity log
        await insert('order_activity')
          .given({
            order_activity_order_id: order.order_id,
            comment: `Customer paid by using credit card. Transaction ID: ${paymentIntent.id}`,
            customer_notified: 0
          })
          .execute(connection);
        break;
      }
      case 'payment_method.attached': {
        console.log('PaymentMethod was attached to a Customer!');
        break;
      }
      // ... handle other event types
      default: {
        console.log(`Unhandled event type ${event.type}`);
      }
    }
    await commit(connection);
    // Return a response to acknowledge receipt of the event
    response.json({ received: true });
  } catch (err) {
    await rollback(connection);
    response.status(400).send(`Webhook Error: ${err.message}`);
  }
};
```

The above middleware will receive the webhook from Stripe and update the order payment status to `paid`. It also creates a payment transaction and add an activity log.

### Configure webhook in Stripe dashboard

Now we need to configure the webhook in Stripe dashboard. Go to the Stripe dashboard and click `Developers` -> `Webhooks` -> `Add endpoint` to add a new webhook endpoint.

## Stripe setting from admin panel

We will create setting page for our Stripe payment method. The setting page will allow admin to configure the Stripe API keys and webhook endpoint.

We will not cover the detail of this step here since it is similar to the previous tutorial. You can refer to the previous tutorial to learn how to create a page or extending a existed layout. You can also refer to the source code of the Stripe payment method in the `modules/stripe` folder for more details.

## Summary

In this tutorial, we have learned how to create a Stripe payment method for our Evershop store. We have created a Stripe payment method and configured the webhook in Stripe dashboard. We have also created a setting page for the Stripe payment method.

Each payment method has its own payment flow and the integration with the payment gateway is different. In this tutorial, we have used Stripe as an example we will cover other payment methods in the future.
