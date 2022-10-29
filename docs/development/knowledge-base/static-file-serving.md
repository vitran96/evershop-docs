---
sidebar_position: 37
keywords:
- Static File Serving
sidebar_label: Static File Serving
title: Static File Serving
description: EverShop allows you to serve static files, like images, in the public directory. You can learn how it works here.
---

# Static File Serving

EverShop can serve static files, like images, under a folder called public in the root directory. Files inside public can then be referenced by your code starting from the base URL (/).

For example, if you add an image to public/banner.png, the following code will access the image:

```js
<img src="/banner.png" />
```

This folder is also useful for robots.txt, favicon.ico, Google Site Verification, and any other static files (including .html)!

:::info
After the fresh installation of EverShop, you will have to create the public folder in the root directory of your project.
:::

:::info
The folder name must be `public`, not `publics` or anything else.
:::