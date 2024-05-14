import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

function SupportUs() {
  return (
    <header className="hero--primary justify-center">
      <div className="container text-left" style={{ maxWidth: "1000px" }}>
        <h1 className="text-center">Support Us</h1>
        <br />
        <p>
          Thank you for using and supporting{" "}
          <a href="https://evershop.io/">EverShop</a>! Your contributions and
          support are crucial for the continued development and improvement of
          our project. There are several ways you can support us:
        </p>
        <br />
        <h2 className=" mb-4">
          <p>Financial Contributions</p>
        </h2>
        <p>
          EverShop is an open source project with its ongoing development made
          possible thanks to the support by the community. We appreciate any
          financial support to help cover the costs of development, hosting, and
          other expenses. You can make a one-time or recurring donation through
          the following platforms:
        </p>
        <ul>
          <li>
            <a href="https://opencollective.com/evershopcommerce">
              Open Collective
            </a>
          </li>
        </ul>
        <br />
        <h2 className=" mb-4">
          <p>Contributing Code</p>
        </h2>
        <h3>
          <p>Join the Development</p>
        </h3>
        <p>
          We welcome contributions from developers of all skill levels. To get
          started, visit our{" "}
          <a href="https://github.com/evershopcommerce/evershop">
            GitHub repository
          </a>{" "}
          and check out the{" "}
          <a href="https://github.com/evershopcommerce/evershop/blob/main/CONTRIBUTING.md">
            Contributing Guide
          </a>
          . You can help by:
        </p>
        <ul>
          <li>Reporting bugs and issues</li>
          <li>Improving documentation</li>
          <li>Submitting pull requests</li>
        </ul>
        <br />
        <h2 className=" mb-4">
          <p>Spread the Word</p>
        </h2>
        <h3>
          <p>Share Our Project</p>
        </h3>
        <p>
          Help us grow our community by sharing EverShop with your friends,
          colleagues, and followers. You can share our website, GitHub
          repository, or specific features you find useful.
        </p>
        <h3>
          <p>Write About Us</p>
        </h3>
        <p>
          If you have a blog or website, consider writing about EverShop. You
          can write a review, tutorial, or share your experience using our
          project.
        </p>
        <h2 className=" mb-4">
          <p>Thank you!</p>
        </h2>
        <p>
          We are incredibly grateful for your support in any form. Together, we
          can continue to build and improve EverShop. Thank you for being a part
          of our community!
        </p>
      </div>
    </header>
  );
}

export default function SupportPage() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Support" description="Support EverShop.">
      <main>
        <SupportUs />
      </main>
    </Layout>
  );
}
