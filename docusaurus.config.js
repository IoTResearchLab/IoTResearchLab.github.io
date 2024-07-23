// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
// @ts-check
// @ts-check
// @ts-check
import { promises as fs } from 'fs';
import path from 'path';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IoT Research Lab',
  tagline: 'We make the future',
  favicon: 'img/logo.svg',
  url: 'https://sensorsconnect.github.io/',
  baseUrl: '/',
  organizationName: 'IoTResearchLab',
  projectName: 'IoTResearchLab.github.io',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
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
        { type: 'search', position: 'right' },
        { to: '/join-us', label: 'Contact Us', position: 'right' },
        { to: '/health', label: 'IoT in Health Care', position: 'left' },
        { to: '/infra', label: 'IoT Infrastructure', position: 'left' },
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
  },
  plugins: [
    async function pagesGenPlugin(context, options) {
      return {
        name: 'pages-gen',
        async loadContent() {
          const jsonFilePath = path.resolve(__dirname, 'pages.json');
          try {
            const fileContent = await fs.readFile(jsonFilePath, 'utf8');
            return JSON.parse(fileContent);
          } catch (error) {
            console.error('Error reading or parsing pages.json:', error);
            return [];
          }
        },
        async contentLoaded({ content, actions }) {
          const { addRoute } = actions;

          if (Array.isArray(content)) {
            await Promise.all(
              content.map(async (page) => {
                if (typeof page === 'object' && page !== null) {
                  return addRoute({
                    path: `/${page.slug}`,  // Path to generate, e.g., /project1
                    component: require.resolve('./src/pages/ProjectPage.jsx'),
                    exact: true,
                    customData: page,  // Pass the page data to your component
                  });
                }
              })
            );
          } else {
            console.error('Invalid content format:', content);
          }
        },
      };
    },
  ],
  customFields:{
    healthTitle:"IoT in Health Care",
    infraTitle:"IoT Infrastructure and Applications",
    trafficTitle:"IoT in Traffic Management",
  },
};

export default config;
