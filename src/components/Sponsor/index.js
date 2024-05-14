import React from "react";
import Link from "@docusaurus/Link";

export default function Sponsor() {
  return (
    <div className="">
      <hr />
      <br />
      <div className="">
        <h2 className="text-3xl">Support us</h2>
        <br />
        <p>
          EverShop is an open-source project that relies on community support.
          If you find our project useful, please consider sponsoring us.
        </p>
        <div className="flex justify-center">
          <Link to="https://opencollective.com/evershopcommerce">
            Become a sponsor
          </Link>
        </div>
      </div>
    </div>
  );
}
