import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

function Extensions() {
  return (
    <header className="hero--primary text-center">
      <div className="mb-20">
        <h1>Comming soon</h1>
      </div>
      <div className="container text-center">
        <div className="md:p-8">
          <h2 className=" mb-4">Extensions from the community and the team</h2>
          <p>
            If you have an extension and want to share it with the community,
            feel free to <a href="/contact-us">contact us</a>.
          </p>
        </div>
      </div>
    </header>
  );
}

export default function ContactUs() {
  return (
    <Layout
      title="Extensions marketplace for EverShop"
      description="Extensions for EverShop. From the community and the team">
      <main>
        <Extensions />
      </main>
    </Layout>
  );
}
