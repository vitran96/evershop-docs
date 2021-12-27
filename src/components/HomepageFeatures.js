import React from 'react';

const FeatureList = [
  {
    title: 'Open Source',
    Svg: require('../../static/homepage/open-source.svg').default,
    description: (
      <>
        Nodejs Cart is an opensource project. The entire codebase is available
        on GitHub and maintained by many of contributors.
      </>
    ),
  },
  {
    title: 'Customizable',
    Svg: require('../../static/homepage/customizable.svg').default,
    description: (
      <>
        Easily customize the admin panel as well as the front-store. Extend your ecommerce feature with custom extension and theme.
      </>
    ),
  },
  {
    title: 'Feature-Rich',
    Svg: require('../../static/homepage/rich-feature.svg').default,
    description: (
      <>
        NodeJs Cart offers rich functionality. Enabling merchants to develop a web store meets the business requirements.
      </>
    ),
  },
  {
    title: 'Built using React',
    Svg: require('../../static/homepage/reactjs.svg').default,
    description: (
      <>
        Extend or customize your website layout by using React components. NodeJs Cart can
        be extended without modifying the core.
      </>
    ),
  }
];

function Feature({ Svg, title, description }) {
  return (
    <div className="grid grid-cols-feature gap-6 md:gap-10">
      <div className="justify-center flex text-primary feature-icon">
        <Svg alt={title} />
      </div>
      <div className="">
        <h3 className="uppercase tracking-wide font-semibold">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className="mt-5 md:mt-10">
      <div className="text-center mb-10">
        <h2 className="tracking-wide">TOP FEATURES</h2>
      </div>
      <div className="container">
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
