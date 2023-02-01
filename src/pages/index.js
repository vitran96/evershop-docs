import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageWebDevFeatures from '@site/src/components/HomepageWebDevFeatures';
import CodeBlock from '@theme/CodeBlock';
import HomepageEcommerceFeatures from '../components/HomepageEcommerceFeatures';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const Github = require('@site/static/img/github.svg').default
  return (
    <header className='hero hero--primary text-center'>
      <div className="container text-center">
        <h1 className="hero__title mb-4">{'Open-Source NodeJS Ecommerce Platform'}</h1>
        <div className='flex items-center justify-center'>
          <p className="text-lg text-center text-slate-500">
            <p>NodeJS ecommerce platform with essential commerce features
              <br />Built with React, modular and fully customizable</p>
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 mt-6">
          <div className='flex justify-center md:justify-end'>
            <Link
              className="button button--primary button--md"
              to="https://demo.evershop.io/">
            Explore our demo ->
            </Link>
          </div>
          <div className='flex md:justify-start justify-center'>
            <Link
              className="button button--secondary button--md hover:bg-gray-200"
              to="/docs/development/getting-started/introduction">
              Getting started ->
            </Link>
          </div>
        </div>
        <div className="flex gap-2 justify-center items-center mt-3">
          <span>Star us on</span>
          <a aria-label="EverShop GitHub" className='flex' href="https://github.com/evershopcommerce/evershop" target="_blank">
            <Github role={'img'} />
          </a>
        </div>
      </div>
    </header >
  );
}

function QuickStart() {
  return <div className='container'>
    <div className='flex flex-col  md:flex-row md:space-y-0  justify-center '>
      <div>
        <h2 className='justify-center text-center'>Get started in minutes</h2>
        <CodeBlock
          language="bash"
        >
          {`npx create-evershop-app my-app --playAround`}
        </CodeBlock>
      </div>
    </div>
  </div>
}

function GraphQLAndReact() {
  return <div className='container'>
    <div className='flex flex-col md:flex-row md:space-y-0 justify-center '>
      <div>
        <h1 className='text-center largest font-bold'>GraphQL & React</h1>
        <p className='text-center'>Use GraphQL query at the component level. <br />Data fetching never been easier</p>
        <div className='flex justify-center'>
          <img width={1201} height={707} alt='EverShop GraphQL Data Loading' src='/img/graphql-react.webp' style={{ boxShadow: "0px 5px 30px rgb(0 0 0 / 10%), 0px 1px 4px rgb(0 0 0 / 5%)", borderRadius: '12px', width: '800px', maxWidth: '100%', height: 'auto' }} />
        </div>
      </div>
    </div>
  </div>
}

function Discord() {
  return <div className='container mt-20'>
    <div className='flex flex-col  md:flex-row md:space-y-0  justify-center bg-[#3f39a7] p-[30px] md:p-[80px] rounded-lg relative'>
      <div className='text-center'>
        <h3 className='largest justify-center text-center text-white'>Let's build together. Work together!</h3>
        <p className='text-white'>Join our young and creative team on Discord</p>
        <div className='flex justify-center mb-5'>
          <div style={{ width: '150px' }}>
            <img alt='Join EverShop team' src="data:image/webp;base64,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" />
          </div>
        </div>
        <Link
          className="button button--primary button--md"
          to="https://discord.com/invite/GSzt7dt7RM">
          Join the team
        </Link>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute disable-pointer-events z-0 pointer-events-none"
        style={{ top: "0", left: "0", right: "0", bottom: "0" }}
        fill="none"
        viewBox="0 0 1160 463"
      >
        <path
          fillRule="evenodd"
          stroke="#fff"
          strokeOpacity="0.24"
          d="M1220.2-29.472c3.88 60.252-41.77 112.247-101.99 116.134-60.21 3.886-112.18-41.807-116.07-102.059-3.885-60.252 41.77-112.247 101.99-116.133 60.21-3.887 112.18 41.806 116.07 102.058z"
          clipRule="evenodd"
        ></path>
        <path
          fillRule="evenodd"
          stroke="#000"
          strokeOpacity="0.24"
          d="M-56.233-34.453c4.856-75.219 69.729-132.262 144.898-127.409 75.17 4.852 132.171 69.762 127.316 144.98-4.856 75.218-69.729 132.261-144.898 127.409-75.17-4.852-132.17-69.762-127.316-144.98z"
          clipRule="evenodd"
        ></path>
        <path
          stroke="#000"
          strokeOpacity="0.24"
          d="M991.325 -77H1150.4940000000001V82.16900000000001H991.325z"
          transform="rotate(20.34 991.325 -77)"
        ></path>
        <rect
          width="244.949"
          height="244.949"
          stroke="#fff"
          strokeOpacity="0.24"
          rx="15"
          transform="scale(-1 1) rotate(30 215.805 -518.215)"
        ></rect>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute disable-pointer-events z-0 pointer-events-none"
        style={{ left: "0", right: "0", bottom: "0" }}
        fill="none"
        viewBox="0 0 1160 463"
      >
        <path
          stroke="#000"
          strokeOpacity="0.24"
          d="M203.506 325.479L51.127 608.876l-150.632-175.15 303.011-108.247z"
        ></path>
        <circle
          cx="168.078"
          cy="399.913"
          r="31.187"
          stroke="#fff"
          strokeOpacity="0.24"
          transform="rotate(-10.785 168.078 399.913)"
        ></circle>
        <circle
          cx="1019.6"
          cy="372.772"
          r="51.81"
          stroke="#000"
          strokeOpacity="0.24"
          transform="rotate(-24 1019.6 372.772)"
        ></circle>
        <path
          stroke="#fff"
          strokeOpacity="0.24"
          d="M1239.01 281.575l-152.38 283.397L936 389.822l303.01-108.247z"
        ></path>
      </svg>
    </div>
  </div>
}

function Developer() {
  return <div className='container mt-10 mb-10'>
    <div className='grid grid-cols-1 md:grid-cols-5 gap-y-3 md:gap-3 p-[20px] md:p-[80px] bg-[#eaf2fd] items-center rounded-lg relative'>
      <div className='text-left md:text-center col-span-1'>
        <img alt='EverShop - React ecommerce platform' src='/img/logo.png' height={92} width={80} />
      </div>
      <div className='text-left col-span-3'>
        <h3 className='largest justify-center text-left '>Made For Developers!</h3>
        <p> EverShop took care of all the boring, painful parts and offers best developer experience. </p>
      </div>
      <div className='grid grid-cols-1 gap-2 col-span-1'>
        <Link
          className="button button--primary button--md"
          to="https://discord.com/invite/GSzt7dt7RM">
          Join the team
        </Link>
        <Link
          className="button button--secondary button--md"
          to="https://github.com/evershopcommerce/evershop">
          Star us on Github
        </Link>
      </div>
    </div>
  </div>
}

function TechStack() {
  return <section className='py-10 md:py-20'>
    <div className='container'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
        <div className='flex justify-center items-center'>
          <img src="/img/stack-bg.webp" alt='Evershop tech stack' width={878} height={592} />
        </div>
        <div>
          <h1 className='text-center md:text-left largest font-bold'>Build with stack <br /> that you love!</h1>
          <div className='flex justify-center md:justify-start mt-10'>
            <img width={686} height={465} style={{ maxWidth: '300px', height: 'auto' }} alt='EverShop Tech Stack' src='/img/tech-stack.webp' />
          </div>
        </div>
      </div>
    </div>
  </section>
}


export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Open source NodeJS ecommerce platform"
      description="EverShop ecommerce platform provides the best developer experience and rich ecommerce features that help build online stores and start selling online.">
      <HomepageHeader />
      <GraphQLAndReact />
      <main>
        <HomepageWebDevFeatures />
        <TechStack />
        <Developer />
        <HomepageEcommerceFeatures />
        <Discord />
      </main>
    </Layout>
  );
}
