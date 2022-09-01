import { defineConfig } from "vitepress";
import { version } from "../package.json";
const nav = [
  {
    text: "FrontEnd",
    activeMatch: `^/(engineering|style-guide|cookbook|examples)/`,
    link: "/engineering/stylelint",
  },
  {
    text: "编程拾遗",
    activeMatch: `^/(engineering|style-guide|cookbook|examples)/`,
    link: "/program/Iterators",
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
          collapsible: true,
          items: [
            {
              text: "vscode",
              link: "",
            },
            {
              text: "项目配置",
              link: "",
            },
          ],
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
  "/program/": [
    {
      text: "编程拾遗",
      collapsible: true,
      items: [{ text: "迭代器实现(Iterator)", link: "/program/Iterators" }],
    },
  ],
};

export default defineConfig({
  lang: "en-US",
  title: "TREEDOCS",
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
