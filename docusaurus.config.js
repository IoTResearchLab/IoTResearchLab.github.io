// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';
import fs from 'fs';
import path from 'path';

// Only needed if you have a .env file for local development
// import dotenv from 'dotenv';
// dotenv.config();

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
        { to: '/traffic', label: 'IoT in Smart Mobility', position: 'left' },
        { type: 'search', position: 'right' },
        { to: '/join-us', label: 'Contact Us', position: 'right' },
        { to: '/health', label: 'IoT in Health Care', position: 'left' },
        { to: '/infra', label: 'IoT Infrastructure', position: 'left' },
        { to: '/Publications', label: 'Publications', position: 'left' },
        { to: '/team', label: 'Our Team', position: 'left' },
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
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {
        indexPages: true,
        language: "en",
      },
    ],
    async function pagesGenPlugin(context, options) {
      return {
        name: 'pages-gen',
        async loadContent() {
          console.log('Loading content from pages.json...');
          
          const filePath = path.resolve(__dirname, 'pages.json');
          
          try {
            const data = fs.readFileSync(filePath, 'utf-8');
            return JSON.parse(data);
          } catch (error) {
            console.error('Error reading pages.json:', error);
            return [];
          }
        },
        async contentLoaded({ content, actions }) {
          console.log('Content loaded:', content);
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
  customFields: {
    healthTitle: "IoT in Health Care",
    infraTitle: "IoT Infrastructure and Applications",
    trafficTitle: "IoT in Smart Mobility",
    mongoURI: process.env.MONGODB_URI,
  },
};

export default config;
