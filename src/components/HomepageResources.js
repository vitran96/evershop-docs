import React from 'react';
import Link from '@docusaurus/Link';

const ResourceList = [
  {
    title: 'Getting started',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Learn how to install NodeJS Cart and basic commands available.
      </>
    ),
    link: "/docs/getting-started/introduction"
  },
  {
    title: 'Module development',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Learn how to write your own module to extend the feature for your ecommerce project.
      </>
    ),
    link: "/docs/module-development/module-structure"
  },
  {
    title: 'Theme development',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by developing your own theme.
      </>
    ),
    link: "/docs/theme-development/theme-structure"
  }
];

function Resource({ Svg, title, description, link }) {
  return (
    <div className="border rounded-md p-5">
      <div className="">
        <h3 className="h4">{title}</h3>
        <div>{description}</div>
        <div className="mt-5 text-blue-500">
          <Link to={link}>
            <span className="flex justify-start">
              <span>{title}</span>
              <svg className="self-center" style={{ width: "20px", height: "20px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomepageResources() {
  return (
    <section className="mt-30">
      <div className="text-center mb-10">
        <h2 className="tracking-wide">RESOURCES</h2>
      </div>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {ResourceList.map((props, idx) => (
            <Resource key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
