import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'GraphQL First',
    description: (
      <>
        Unearth the power of GraphQL and React to build a scalable, production ready application.
      </>
    ),
    readMore: '/docs/development/knowledge-base/graphql'
  },
  {
    title: 'Zero Config',
    description: (
      <>
        Automatic compilation and bundling. Optimized for production from the start.
      </>
    ),
    readMore: '/docs/development/getting-started/installation-guide'
  },
  {
    title: 'Fast Refresh',
    description: (
      <>
        Evershop Fast Refresh provides fast, reliable live-editing experience.
      </>
    ),
    readMore: '/docs/development/knowledge-base/fast-refresh'
  },
  {
    title: 'File-system Middleware',
    description: (
      <>
        File-system based middleware. Flexible to add or remove middleware as you need.
      </>
    ),
    readMore: '/docs/development/knowledge-base/middleware-system'
  },
  {
    title: 'API Routes',
    description: (
      <>
        Flexible to create API endpoints to provide backend functionality.
      </>
    ),
    readMore: '/docs/development/knowledge-base/api-routes'
  },
  {
    title: 'Built-in CSS Support',
    description: (
      <>
        Import CSS files from a JavaScript file. Built-in Sass and TailwindCSS support.
      </>
    ),
    readMore: '/docs/development/theme/styling'
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

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className='text-center'>The Web Development Tools</h2>
        <div className='text-center'>
          EverShop has the tools you need to develop your web app faster.
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
