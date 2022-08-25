import { defineConfig } from "vitepress";
import { version } from "../package.json";
const nav = [
  {
    text: "FrontEnd",
    activeMatch: `^/(engineering|style-guide|cookbook|examples)/`,
    link: "/engineering/prettier",
  },
];
export const sidebar = {
  "/engineering/": [
    {
      text: "前端工程化",
      collapsible: true,
      items: [
        { text: "stylelint", link: "/engineering/stylelint" },
        {
          text: "prettier",
          link: "/engineering/prettier",
        },
        {
          text: "pnpm",
          link: "/engineering/pnpm",
        },
        {
          text: "vite",
          link: "/engineering/vite",
        },
        {
          text: "bun",
          link: "/engineering/bun",
        },
        {
          text: "ski",
          link: "/engineering/ski",
        },
      ],
    },
  ],
};
export default defineConfig({
  lang: "en-US",
  title: "DOCS",
  description: "docs tree.",

  lastUpdated: true,
  cleanUrls: "without-subfolders",
  base: "/gitDocs/",
  themeConfig: {
    nav,

    sidebar,

    editLink: {
      pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
    algolia: {
      appId: "8J64VVRP8K",
      apiKey: "a18e2f4cc5665f6602c5631fd868adfd",
      indexName: "vitepress",
    },
  },
});
