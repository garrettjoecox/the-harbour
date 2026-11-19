import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'The Harbour',
  tagline: 'The home page for all things porting',
  favicon: 'img/favicon.ico',
  
  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'garrettjoecox', // GitHub org/user name.
  projectName: 'the-harbour', // Repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Righteous (titles) and Open Sans (body), matching shipofharkinian.com.
  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Righteous&display=swap',
      type: 'text/css',
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/garrettjoecox/the-harbour/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  headTags: [
    { // insert script to change page colors into html head on initial load, 
      // allowing the color to change before document hydration, preventing FOUC
      tagName: 'script',
      attributes: {},
      innerHTML: `
        (function() {
          let pathName = window.location.pathname;
          let colorSet = ''; // default to none
          if (pathName.includes("docs/2ship2harkinian")) { // in the 2ship directory
            colorSet = 'mm'
          }
          document.documentElement.setAttribute('data-special-theme', colorSet);
        })();`,
    },
  ],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        fromExtensions: ['html'],
        createRedirects(routePath:string) {
          if (routePath.includes('/ship-of-harkinian/mod-development')) {
            // Redirect from /zship-modding/x to /ship-of-harkinian/mod-development/x
            return routePath.replace('/ship-of-harkinian/mod-development', '/zship-modding')
          }
          if (routePath.includes('/ship-of-harkinian/info')) {
            return routePath.replace('/ship-of-harkinian/info', '/ship-of-harkinian')
          }
          if (routePath.includes('/2ship2harkinian/info')) {
            return routePath.replace('/2ship2harkinian/info', '/2ship2harkinian')
          }
          return undefined; // Return a falsy value: no redirect created
        },
      },
    ],
  ],

  // global script to change page colors on in-site navigation
  clientModules: ['./src/clientModules/pageColorOverride.js'],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'The Harbour',
      items: [
        // Common
        {
          type: 'dropdown',
          label: 'Ports',
          position: 'left',
          items: [
            {
              label: 'Ship of Harkinian',
              to: '/docs/ship-of-harkinian/info/',
            },
            {
              label: '2Ship2Harkinian',
              to: '/docs/2ship2harkinian/info/',
            },
          ],
        },

        // Port Tabs
        {
          type: 'custom-conditionalItem',
          label: 'About',
          to: [
            '/docs/ship-of-harkinian/info/',
            '/docs/2ship2harkinian/info/',
          ],
          showIn: [
            'docs/ship-of-harkinian',
            'docs/2ship2harkinian',
          ],
          position: 'left',
        },
        {
          type: 'custom-conditionalItem',
          label: 'Randomizer',
          to: [
            '/docs/ship-of-harkinian/randomizer/',
            '/docs/2ship2harkinian/randomizer/',
          ],
          showIn: [
            'docs/ship-of-harkinian',
            'docs/2ship2harkinian',
          ],
          position: 'left',
        },
        {
          type: 'custom-conditionalItem',
          label: 'Mod Development',
          to: [
            '/docs/ship-of-harkinian/mod-development/',
            '/docs/2ship2harkinian/mod-development/',
          ],
          showIn: [
            'docs/ship-of-harkinian',
            'docs/2ship2harkinian',
          ],
          position: 'left',
        },
        {
          type: 'custom-conditionalItem',
          label: 'Github',
          graphic: 'navbar-github-link',
          href: [
            'https://github.com/HarbourMasters/Shipwright/',
            'https://github.com/2ship2harkinian/2ship2harkinian',
            'https://github.com/garrettjoecox/the-harbour'
          ],
          showIn: [
            'docs/ship-of-harkinian',
            'docs/2ship2harkinian',
            '!docs/', // hacky way of referring to the homepage, 
                      // since it's the only page not in docs
          ],
          position: 'right',
        },
        {
          type: 'custom-conditionalItem',
          label: 'Discord',
          graphic: 'navbar-discord-link',
          href: [
            'https://discord.gg/shipofharkinian',
            'https://discord.com/invite/sxrPyuh697',
          ],
          showIn: [
            'docs/ship-of-harkinian',
            'docs/2ship2harkinian',
          ],
          position: 'right',
        },
        {
          type: 'custom-conditionalItem',
          label: 'Mod Library',
          graphic: 'navbar-gamebanana-link',
          href: [
            'https://gamebanana.com/games/16121',
            'https://gamebanana.com/games/20371',
          ],
          showIn: [
            'docs/ship-of-harkinian',
            'docs/2ship2harkinian',
          ],
          position: 'right',
        },
      ],
    },
    // footer: {
    //   style: 'dark',
    //   links: [
    //     {
    //       title: 'Docs',
    //       items: [
    //         {
    //           label: 'Tutorial',
    //           to: '/docs/intro',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'Community',
    //       items: [
    //         {
    //           label: 'Stack Overflow',
    //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
    //         },
    //         {
    //           label: 'Discord',
    //           href: 'https://discordapp.com/invite/docusaurus',
    //         },
    //         {
    //           label: 'X',
    //           href: 'https://x.com/docusaurus',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'More',
    //       items: [
    //         {
    //           label: 'Blog',
    //           to: '/blog',
    //         },
    //         {
    //           label: 'GitHub',
    //           href: 'https://github.com/garrettjoecox/the-harbour/tree/main/',
    //         },
    //       ],
    //     },
    //   ],
    //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    // },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
