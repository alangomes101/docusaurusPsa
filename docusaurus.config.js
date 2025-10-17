// @ts-check
// Configuração padrão do Docusaurus em português (pt-BR)

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentação Padrão',
  tagline: 'Seu ponto de partida com Docusaurus',
  favicon: 'img/favicon.ico',

  // Endereço base (ajuste se for publicar)
  url: 'https://example.com',
  baseUrl: '/',

  // Tratamento de erros
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Idioma padrão
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
    localeConfigs: {
      'pt-BR': { htmlLang: 'pt-BR' },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // Pasta da documentação padrão (docs/)
          path: 'docs',
          routeBasePath: '/', // Documentação direto na raiz do site
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false, // Blog desativado
        theme: {
          //customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Docusaurus Padrão',
        items: [
          { type: 'doc', docId: 'intro', position: 'left', label: 'Início' },
          { type: 'search', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docusaurus',
            items: [
              {
                label: 'Documentação Oficial',
                href: 'https://docusaurus.io/docs',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Protagonista WEG.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
