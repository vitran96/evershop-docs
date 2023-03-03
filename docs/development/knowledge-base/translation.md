---
sidebar_position: 51
keywords:
- Evershop Translation
sidebar_label: Translation
title: Translation
description: This page will help you to understand how to translate your Evershop app. How to make your theme translatable.
---

# Translation

By default Evershop is translated into English. You can translate your front store into any language you want.

## How to translate your front store?

### 1. Set the language of your front store

To set the language of your front store, you need to go to update the `config/<yourenvironmen>.json` file located in the root directory of your project. Edit the `system.language` property and set the language code of your language. For example, if you want to translate your front store into French, you should set the `system.language` property to `fr`.

```json
{
  "system": {
    ..., // other configurations
    "language": "fr"
  }
}
```

:::note
The language code is 2 letters long. You can find the list of all the language codes [here](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).
:::

### 2. Create a new folder for your language

From your root directory, create a new folder named `translations` and inside it create a new folder named with the language code of your language. For example, if you want to translate your front store into French, you should create a folder named `fr` inside the `translations` folder.

```bash
/translations
    /fr
```

### 3. Translate your store by using csv files

Inside the folder you just created, create a new file named `general.csv`. This csv file has 2 columns: the first column is the text in English and the second column is the text in your language. You can translate the text in the second column.

```csv
en,fr
"Hello, world!",Bonjour le monde!
```

You can create as many csv files as you want. For example, you can have a file named `catalog.csv` to translate the catalog pages like the category page, the product page, etc and a file named `checkout.csv` to translate the checkout pages like the cart page, the checkout page, etc.

```bash
/translations
    /fr
        /catalog.csv
        /checkout.csv
        /customer.csv
        /general.csv
```

### 4. Sample

You can find a sample of the `translations` folder [here](https://github.com/evershopcommerce/evershop/tree/main/translations).

:::warning
Changing the language of your front store requires running the `build` command again.
:::