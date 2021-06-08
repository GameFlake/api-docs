/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'API de GameFlake',
  tagline: 'Documentación de API de plataforma de intercambio de videojuegos',
  url: 'https://gameflake.github.io',
  baseUrl: '/api-docs/build/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/gameflake_logo.ico',
  organizationName: 'GameFlake', // Usually your GitHub org/user name.
  projectName: 'api-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'GameFlake API',
      logo: {
        alt: 'GameFlake logo',
        src: 'img/gameflake_logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Documentación',
        },
        {
          href: 'https://github.com/GameFlake/GameFlake',
          label: 'GitHub de GameFlake',
          position: 'right',
        },
        {
          href: 'https://purnito.codes',
          label: 'Sitio GameFlake',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentación',
          items: [
            {
              label: 'Introducción',
              to: '/docs/intro',
            },
            {
              label: 'Autenticación y cuentas',
              to: '/docs/api_iniciar_sesion',
            },
            {
              label: 'Títulos y juegos',
              to: '/docs/consultar_catalogo_titulos',
            },
            {
              label: 'Intercambio de juegos',
              to: '/docs/consultar_ofertas_recibidas',
            },
          ],
        },
        {
          title: 'Más',
          items: [
            {
              label: 'GitHub de GameFlake',
              href: 'https://github.com/GameFlake/GameFlake',
            },
            {
              label: 'Sitio GameFlake',
              href: 'https://purnito.codes',
            },
            {
              label: 'Hoja de aprendizaje',
              to: 'https://docs.google.com/spreadsheets/d/1afM6EwTns8HcwLkiqiPV_5KmsFMPkVVOq0u49tsGiuY/edit?usp=sharing',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} GameFlake. Hecho con Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
