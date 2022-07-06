import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const Github = require('@site/static/img/github.svg').default
  return (
    <header className='hero hero--primary px-24 text-center'>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className="flex gap-5 justify-center mt-6">
          <Link
            className="button button--primary button--lg"
            to="/docs/development/getting-started/introduction">
            Getting started
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://demo.evershop.io/">
            Explore our demo
          </Link>
        </div>
        <div className="flex gap-5 justify-center mt-3">
          <a href="https://github.com/evershopcommerce/evershop" target="_blank">
            <Github role={'img'} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Free ecommerce framework with NodeJs"
      description="EverShop provides the best developer experience and rich e-commerce features that help build and start selling online.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
