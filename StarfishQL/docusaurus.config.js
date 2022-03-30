// const versions = require('./versions.json');

// function getNextMinorVersionName() {
//   const minorVersion = parseInt(versions[0].split('.')[1], 10);
//   return `0.${minorVersion + 1}.x`;
// }

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'StarfishQL - ✴️ A graph database and query engine',
  tagline: '✴️ A graph database and query engine',
  url: 'https://www.sea-ql.org',
  baseUrl: '/StarfishQL/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'SeaQL',
  projectName: 'starfish-ql',
  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'StarfishQL',
      logo: {
        alt: 'StarfishQL Logo',
        src: 'img/SeaQL.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'index',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left'
        },
        {
          to: '/demo',
          label: 'Demo',
          position: 'left',
        },
        {
          href: 'https://crates.io/crates/starfish-ql',
          label: 'Crate',
          position: 'right',
        },
        {
          href: 'https://github.com/SeaQL/starfish-ql',
          label: 'GitHub',
          position: 'right',
        },
        // {
        //   type: 'docsVersionDropdown',
        //   position: 'right',
        //   dropdownActiveClassDisabled: true,
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/index',
            },
            {
              label: 'Interactive Demo',
              to: '/demo',
            },
            {
              label: 'API Reference',
              to: 'https://docs.rs/starfish-ql/latest/starfish_ql/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/SeaQL/starfish-ql/discussions',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/invite/uCPdDXzbdv',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/sea_ql',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'About Us',
              to: '/about-us',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
      ],
      copyright: [
        `<br/><div style="display: flex; justify-content: center;"><a href="https://github.com/SeaQL/starfish-ql/stargazers/" target="_blank"><img src="https://img.shields.io/github/stars/SeaQL/starfish-ql.svg?style=social&label=Star&maxAge=1"/></a></div>`,
        `<br/>Copyright © ${new Date().getFullYear()} SeaQL`,
        `<br/>Built with 🔥 by 🌊🦀🐚`,
      ].join(''),
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
      additionalLanguages: [
        'toml',
        'rust',
      ],
    },
    // algolia: {
    //   appId: 'F60BRNGE7P',
    //   apiKey: 'cb0fff4f36dcd0f3d6a97e12e494dec7',
    //   indexName: 'seaorm',
    //   contextualSearch: true,
    // },
    hideableSidebar: true,
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/SeaQL/seaql.github.io/edit/master/StarfishQL/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // versions: {
          //   current: {
          //     label: `${getNextMinorVersionName()} 🚧`,
          //   },
          // },
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/SeaQL/seaql.github.io/edit/master/StarfishQL/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.8,
          trailingSlash: true,
        },
      },
    ],
  ],
  scripts: [
    '/sea-ql.js',
  ],
};
