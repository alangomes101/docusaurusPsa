// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Base de dados PSA',
  tagline: 'Aqui está concentrada toda a base de conhecimento da seção de Software Aplicativo',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'ignore', //Era throw
  onBrokenMarkdownLinks: 'ignore', //Era warn
  favicon: 'img/logo_weg.png',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // id: 'docs', // omitted => default instance
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebarsGeral.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'Todas as Notas Técnicas',
          blogSidebarCount: 'ALL',          
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
   // [
      /*require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        // Options here
          // language of your documentation, see next section
        language: "en",
      },*/
    //],

	require.resolve('docusaurus-lunr-search'),
	
	[
      '@docusaurus/plugin-content-docs',
      {
        id: '01_clp',
        path: '01_clp',
        routeBasePath: '01_clp',
        sidebarPath: require.resolve('./sidebarsClp.js'),
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: '02_ihm',
        path: '02_ihm',
        routeBasePath: '02_ihm',
        sidebarPath: require.resolve('./sidebarsIhm.js'),
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: '03_scada',
        path: '03_scada',
        routeBasePath: '03_scada',
        sidebarPath: require.resolve('./sidebarsScada.js'),
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: '50_bess',
        path: '50_bess',
        routeBasePath: '50_bess',
        sidebarPath: require.resolve('./sidebarsBess.js'),
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: '51_solar',
        path: '51_solar',
        routeBasePath: '51_solar',
        sidebarPath: require.resolve('./sidebarsSolar.js'),
        // ... other options
      },
    ],
    //Outros itens do menu superior vão aqui
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      /*
      algolia: {
        // The application ID provided by Algolia
        appId: "WRDX8J1YDZ",

        // Public API key: it is safe to commit it
        apiKey: "544bd67c784f49cd441c3108434030ca",

        indexName: "-demo",
        // Optional: see doc section below
        contextualSearch: false,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: "external\\.com|domain\\.com",

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: "/docs/", // or as RegExp: /\/docs\//
          to: "/",
        },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",

        // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
        insights: false,
        
      },*/
      navbar: {
        title: 'DOCS PSA',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo_weg.png',
        },
        items: [
          {
            type: 'doc',
            position: 'left',
            docId: 'intro',
            label: 'GERAL',
          },
          
          //----------------------------------
          //Lista com as áreas de conhecimento
          //----------------------------------
          {
            to: '/01_clp/intro',   // To highlight the navbar item, you must link to a document, not a top-level directory
            position: 'left',
            label: 'CLP',
            activeBaseRegex: `/01_clp/`,
          },
          {
            to: '/02_ihm/intro',   // To highlight the navbar item, you must link to a document, not a top-level directory
            position: 'left',
            label: 'IHM',
            activeBaseRegex: `/02_ihm/`,
          },
          {
            to: '/03_scada/intro',   // To highlight the navbar item, you must link to a document, not a top-level directory
            position: 'left',
            label: 'SCADA',
            activeBaseRegex: `/03_scada/`,
          },
          /*Outros itens do menu superior vão aqui
          .
          .
          .
          */

          //------------------------------------
          //Lista com as áreas de atuação de PSA
          //------------------------------------
          {
            type: 'docsVersionDropdown',
            position: 'left',
            dropdownItemsBefore: [{to: '/50_bess/intro', label: 'BESS',},
                                  {to: '/51_solar/intro', label: 'SOLAR',}],
                                  /*Outras áreas aqui
                                  .
                                  .
                                  .
                                  */
            dropdownActiveClassDisabled: true,
          },

          {
            to: '/blog/nota-tecnica-start-page',
            label: 'Notas Técnicas',
            position: 'right'
          },


          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Youtube',
            items: [
              {
               label: 'Tutoriais Astec',
               href: 'https://www.youtube.com/@GuiasdeAutomacao'
              },
            ],
          },
          {
            title: 'Mais',
            items: [
              {
                label: 'Site WEG',
                href: 'https://www.weg.net/institutional/BR/pt/',
              },
              {
                label: 'Sharepoint PSA',
                href: 'https://weg365.sharepoint.com/teams/BR-WDS-INDENG-DEPTPROJMTESISTEMAS/PSA',
              },
              {
                label: 'WEGdoc',
                href: 'https://wegdoc.weg.net/softexpert/workspace?page=home',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} WDS - WEG DIGITAL & SISTEMAS.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
