import { themes as prismThemes } from 'prism-react-renderer';
const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();

const backendServerUri = 'https://iot-backend-server-sparkling-sun-1719.fly.dev/projects';

async function pagesGenPlugin(context, options) {
  return {
    name: 'pages-gen',
    async loadContent() {
      try {
        const response = await fetch(backendServerUri);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched data:', data); 
        return data;
      } catch (error) {
        console.error('Error fetching data from backend server:', error);
        return [];
      }
    },
    async contentLoaded({ content, actions }) {
      const { addRoute } = actions;

      if (Array.isArray(content)) {
        await Promise.all(
          content.map(async (page) => {
            if (typeof page === 'object' && page !== null) {
              console.log('Adding route for page:', page); 
              return addRoute({
                path: `/${page.slug}`,
                component: require.resolve('./src/pages/ProjectPage.jsx'),
                exact: true,
                props: {
                  customData: page
                },
              });
            }
          })
        );
      } else {
        console.error('Invalid content format:', content);
      }
    },
  };
}

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
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
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
        {
          title: 'Contact Information',
          items: [
            {
              html: `
                <div>
                  <p>Oshawa, Canada<br />L1G 0C5</p>
                  <p>T: 905.721.8668 ext. 7365<br />F: 905.721.3370</p>
                </div>
              `,
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
      '@cmfcmf/docusaurus-search-local',
      {
        indexPages: true,
        language: "en",
      },
    ],
    pagesGenPlugin,
  ],
  customFields: {
    healthTitle: "IoT in Health Care",
    infraTitle: "IoT Infrastructure and Applications",
    trafficTitle: "IoT in Smart Mobility",
    mongoURI: process.env.MONGODB_URI,
  },
};

module.exports = config;
