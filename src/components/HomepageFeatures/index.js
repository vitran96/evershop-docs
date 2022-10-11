import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Fully Customizable',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Easily customize the admin panel as well as the front-store. Extend your e-commerce feature with custom extension and theme.
      </>
    ),
    readMore: '/docs/development/module/extension-development'
  },
  {
    title: 'Fast Refresh',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Evershop Fast Refresh provides fast, reliable live-editing experience.
      </>
    ),
    readMore: '/docs/development/knowledge-base/fast-refresh'
  },
  {
    title: 'File-system Middleware',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Powerful middleware system that allows you to customize the behavior of your app easily.
      </>
    ),
    readMore: '/docs/development/knowledge-base/middleware-system'
  }
];

function Feature({ Svg, title, description, readMore }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
