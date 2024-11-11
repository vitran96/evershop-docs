// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");
const lightTheme = themes.palenight;
const darkTheme = themes.dracula;
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "EverShop",
  titleDelimiter: " - ",
  tagline:
    "NodeJS ecommerce platform with essential commerce features. Built with React, modular and fully customizable",
  url: "https://evershop.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  trailingSlash: false,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "evershopcommerce", // Usually your GitHub org/user name.
  projectName: "evershop", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: ["docusaurus-plugin-sass", "@docusaurus/plugin-ideal-image"],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/evershopcommerce/docs/tree/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/evershopcommerce/docs/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
        googleAnalytics: {
          trackingID: "G-NL5DS5R8SM",
          // Optional fields.
          anonymizeIP: true, // Should IPs be anonymized?
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: "",
        logo: {
          alt: "A Open-source NodeJS ecommerce platform",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "html",
            value: `
              <a class="navbar__link" href="/docs"><span>Docs</span> <img src="/img/chevron-down.svg" alt="divider" class="divider" /></a> 
              <div class="mega__menu__dropdown">
                This is the mega menu
              </div>
            `,
          },
          {
            type: "doc",
            docId: "api/overview",
            position: "left",
            label: "API",
          },
          {
            href: "/extensions",
            position: "left",
            label: "Marketplace",
          },
          {
            href: "/contact-us",
            position: "left",
            label: "Contact Us",
          },
          {
            type: "html",
            position: "right",
            value: `<a class="button button--primary button--xs flex items-center align-middle" href="/docs/development/getting-started/introduction"><span>Get started</span> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path d="M3 9H15M15 9L10.5 4.5M15 9L10.5 13.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></a>`,
          },
        ],
      },
      footer: {
        style: "light",
        logo: {
          alt: "Evershop",
          src: "img/logo.svg",
          href: "https://evershop.io",
        },
        links: [
          {
            items: [
              {
                label: "Support Us",
                to: "/support",
              },
              {
                label: "License",
                to: "https://github.com/evershopcommerce/evershop/blob/main/LICENSE",
              },
              {
                label: "Code of Conduct",
                to: "/code-of-conduct",
              },
              {
                label: "Discord",
                href: "https://discord.com/invite/GSzt7dt7RM",
              },
            ],
          },
        ],
        copyright: `© Copyright © ${new Date().getFullYear()} Evershop. Deploys by <a href="https://www.netlify.com" target="_blank" rel="nofollow">Netlify</a>`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
      },
      metadata: [
        {
          name: "og:image",
          content: "https://evershop.io/img/social-card.jpg",
        },
      ],
      algolia: {
        // The application ID provided by Algolia
        appId: "YOUP0U3MFZ",

        // Public API key: it is safe to commit it
        apiKey: "d160d70304dd855502e1a83c4a312ad1",

        indexName: "evershopio",

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // replaceSearchResultPathname: {
        //   from: "/docs/", // or as RegExp: /\/docs\//
        //   to: "/",
        // },

        // Optional: Algolia search parameters
        //searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        //searchPagePath: "search",

        //... other Algolia params
      },
    }),
};

export default config;
