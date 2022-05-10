// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "no-secreto",
  tagline:
    "Fast, Unopinionated, Minimalistic Open-Source Passwordless Authentication Library for NodeJs.",
  url: "https://docs-no-secreto.vercel.app/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Manas-Nanivadekar", // Usually your GitHub org/user name.
  projectName: "no-secreto", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/Manas-Nanivadekar/no-secreto",
          remarkPlugins: [
            [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
          ],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "os-sswordless",
        logo: {
          alt: "My Site Logo",
          src: "img/android-chrome-192x192.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Tutorial",
          },
          {
            href: "https://github.com/Manas-Nanivadekar/no-secreto",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          // {
          //   title: "Community",
          //   items: [
          //     {
          //       label: "Stack Overflow",
          //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
          //     },
          //     {
          //       label: "Discord",
          //       href: "https://discordapp.com/invite/docusaurus",
          //     },
          //     {
          //       label: "Twitter",
          //       href: "https://twitter.com/docusaurus",
          //     },
          //   ],
          // },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/Manas-Nanivadekar/no-secreto",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} no-secreto, Inc. Built with Docusaurus.`,
      },
      announcementBar: {
        id: "supportus",
        content:
          '⭐️ If you like no-secreto, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/manas-nanivadekar/no-secreto">GitHub</a>! ⭐️',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
