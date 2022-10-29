import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const ResourceList = [
  {
    title: 'Development document',
    image: '/img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        EverShop is an open-source project.
        The entire codebase is available on GitHub
        and maintained by many of contributors.
      </>
    ),
    link: '/docs/intro',
    linkText: 'Getting Started'
  },
  {
    title: 'User Guide',
    image: '/img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Learn how to use EverShop in our user guide.
      </>
    ),
    link: '/docs/intro',
    linkText: 'Learn More'
  }
];

function Resource({ title, description, image, link, linkText, index }) {
  return (
    <div className="row mb-12">
      <div className={index % 2 === 0 ? "flex-row-reverse gap-5 flex items-center" : "gap-5 flex items-center"}>
        <div className="text-center">
          <img src={image} />
        </div>
        <div className="text-center ">
          <h3>{title}</h3>
          <p>{description}</p>
          <div><Link className="button button--secondary button--lg" to={link} >{linkText}</Link></div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageWebDevFeatures() {
  return (
    <section className="resource mt-6">
      <div className="text-center hero__subtitle"><h2>Resources</h2></div>
      <div className="container mx-auto md:px-40 mt-16">
        {ResourceList.map((props, idx) => (
          <Resource key={idx} index={idx} {...props} />
        ))}
      </div>
    </section >
  );
}
