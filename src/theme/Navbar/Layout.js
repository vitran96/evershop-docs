import React from "react";
import Layout from '@theme-original/Navbar/Layout';

export default function NavLayout(props) {
  return (
    <>
      <div className="py-1 text-center bg-[#2f80ed] text-white">
        ⭐️ If you love EverShop, give it a star on <a className="text-white underline hover:text-white" target="_blank" href="https://github.com/evershopcommerce/evershop">GitHub</a>. Thanks!
      </div>
      <Layout {...props} />
    </>
  );
}