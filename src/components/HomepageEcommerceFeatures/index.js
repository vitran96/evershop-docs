import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Catalog Management',
    description: (
      <>
        Product management with attribute and variation. Multiple category and collection management.
      </>
    ),
    readMore: 'https://demo.evershop.io/admin/products'
  },
  {
    title: 'Checkout',
    description: (
      <>
        One-page Checkout process with online payment and shipping. Saved shopping cart. Integration with multiple payment gateways.
      </>
    ),
    readMore: 'https://demo.evershop.io/'
  },
  {
    title: 'Promotion Code',
    description: (
      <>
        Flexible coupons (pricing rules) with ability to restrict to customer groups, time period, products, and categories.
      </>
    ),
    readMore: 'https://demo.evershop.io/admin/coupons'
  },
  {
    title: 'Catalog Browsing',
    description: (
      <>
        Layered / faceted navigation for filtering of products in categories and search results. Filter products by price and attributes.
      </>
    ),
    readMore: 'https://demo.evershop.io/category/women'
  },
  {
    title: 'Order Management',
    description: (
      <>
        View, edit and fulfill orders from the admin panel.
      </>
    ),
    readMore: 'https://demo.evershop.io/admin/orders'
  },
  {
    title: 'Content Management',
    description: (
      <>
        Create and manage static content page from the admin panel. SEO friendly.
      </>
    ),
    readMore: 'https://demo.evershop.io/admin/pages/'
  }
];

function Feature({ Svg, title, description, readMore }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="padding-horiz--md mb-5">
        <h3>{title}</h3>
        <div className='mb-2'>{description}</div>
        <Link
          to={readMore}>
          Read more
        </Link>
      </div>
    </div>
  );
}

export default function HomepageEcommerceFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className='text-center'>The React Ecommerce Platforms Features</h2>
        <div className='text-center'>
          EverShop eCommerce platforms provides rich e-commerce features that help you build online stores faster.
        </div>
        <div className="row mt-12">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
