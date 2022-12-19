// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion


const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {

  /* ---- CUSTOM FIELDS -------- */
  customFields: {
    description: "Learning Svelte in #30Days - learning in public, and sharing my roadmap.",
  },

  title: '#30DaysOfSvelte',
  tagline: 'Learn to Build Modern Web Apps With Svelte',
  url: 'https://30DaysOf.github.io/',
  baseUrl: '/svelte/',  // use `/` for SWA
  favicon: "img/favicon.ico",
  organizationName: "30DaysOf", 
  projectName: "svelte", 
  trailingSlash: false,
  deploymentBranch: 'gh-pages',
  
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  /* ---- CONFIGURE PRESETS FOR THEMES & PLUGINS -------- */
  presets: [

    /* ---- THEME PRESETS: CLASSIC -------- */
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // 1. Docs set as default destination for "/"
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },

        // 2. Blog turned off since this is a documentation site
        blog: false,

        // 3. Global default styles for theme can be customized here
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },

        // 4. Sitemap (requires plugin-sitemap) - at /sitemap.xml
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },

      }),
    ],
  ],

  /* ---- CONFIGURE THEMES -------- */
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      docs :{
        sidebar: {
          hideable: false,
          autoCollapseCategories: false,
        },
      },

      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      navbar: {
        title: '#30DaysOfSvelte',
        logo: {
          alt: '30DaysOf Logo',
          src: '/img/logo.svg',
          target: '_self',
          width: 32,
          height: 32,
        },
        style: 'dark',
        items: [
          { to: "/learn", label: "Learn", position: "left" },
          { to: "/build", label: "Build", position: "left" },
          { to: "/sitemap.xml", label: "🏠 Sitemap", position: "right" },
          {
            href: "https://github.com/30DaysOf/svelte",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },

      footer: {
        style: "light",
        copyright: `Copyright © ${new Date().getFullYear()}-present Nitya Narasimhan | Logo by Undraw.co`,
        links: [
          {
            html: `
                <a href="https://nitya.dev" target="_blank" rel="noreferrer noopener" aria-label="About Nitya Narasimhan, PhD">
                  <img src="https://30daysof.github.io/svelte/img/logo.svg" alt="Logo from Undraw.co" width="114" height="51" />
                </a>
              `,
          },
        ],
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

      // 2.2 adds built-in support for Mermaid diagrams using codeblocks
      // See: https://docusaurus.io/blog/releases/2.2#mermaid-diagrams
      // See: https://docusaurus.io/tests/pages/diagrams for examples
      mermaid: {
        options: {
          //maxTextSize: 50,
        },
      },

    }),

  /* ---- CONFIGURE PLUGINS -------- */
  // See: https://docusaurus.io/docs/using-plugins
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. 
        steps: 2, // #images b/w min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],

  /* --- Enable MERMAID ---------- */
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
};

module.exports = config;