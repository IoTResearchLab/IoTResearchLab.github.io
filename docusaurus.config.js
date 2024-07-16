// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IoT Research Lab',
  tagline: 'We make the future',
  favicon: 'img/logo.svg',

  // Set the production url of your site here
  url: 'https://sensorsconnect.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'IoTResearchLab', // Usually your GitHub org/user name.
  projectName: 'IoTResearchLab.github.io', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo.svg',
      navbar: {
        title: 'Home',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          { to: '/team', label: 'Our Team', position: 'left' },
          { to: '/Publications', label: 'Publications', position: 'left' },
          { to: '/traffic', label: 'Smart Mobility', position: 'left' },
          { to: '/join-us', label: 'Contact Us', position: 'right' },
          { to: '/health', label: 'IoT in Health Care', position: 'left' },
          { to: '/infra', label: 'IoT Infrastructure', position: 'left' },
          { type: 'search', position: 'right' }, 
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Connect with us',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/IoTResearchLab',
                logo: {
                  alt: 'Github',
                  src: 'img/th.ico',
                  width: 160,
                  height: 51,
                },
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/iot-research-lab/',
                logo: {
                  alt: 'LinkedIn',
                  src: 'img/th(1).png',
                  width: 160,
                  height: 51,
                },
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} IoT Research Lab @Ontario Tech University`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  plugins: [
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {
        // Options here
        indexDocs: true,          // Whether to index docs
        indexBlog: true,          // Whether to index blog posts
        indexPages: true,         // Whether to index static pages
        language: "en",           // Language of your documentation
        // Additional options can be added as needed
      },
    ],
  ],
  customFields:{
    healthTitle:"IoT in Health Care",
    infraTitle:"IoT Infrastructure and Applications",
    trafficTitle:"IoT in Traffic Management",
  },
};

export default config;
