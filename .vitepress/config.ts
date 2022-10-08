import { defineConfig } from "vitepress";
import { version } from "../package.json";
const nav = [
  {
    text: "FrontEnd",
    activeMatch: `^/frontEnd/`,
    link: "/frontEnd/stylelint"
  },
  {
    text: "BackEnd",
    activeMatch: `^/(backend)/`,
    link: "/backend/make"
  },
  {
    text: "数学",
    activeMatch: `^/Algorithm/`,
    link: "/Algorithm/dfs"
  },
  {
    text: "工程学",
    activeMatch: `^/engineeing/`,
    link: "/engineeing/introduce"
  },
  {
    text: "编程拾遗",
    activeMatch: `^/program/`,
    link: "/program/Iterators"
  },
  {
    text: "思过崖",
    activeMatch: `^/viewBook/`,
    link: "/viewBook/program"
  },
  {
    text: "金融",
    activeMatch: `^/financial/`,
    link: "/financial/bubble"
  }
];
export const sidebar = {
  "/frontEnd/": [
    {
      text: "前端工程化",
      collapsible: true,
      items: [
        { text: "stylelint", link: "/frontEnd/stylelint" },
        { text: "eslint", link: "/frontEnd/eslint" },
        {
          text: "prettier",
          link: "/frontEnd/prettier"
        }
        // {
        //   text: "pnpm",
        //   link: "/frontEnd/pnpm",
        // },
        // {
        //   text: "vite",
        //   link: "/frontEnd/vite",
        // },
        // {
        //   text: "bun",
        //   link: "/frontEnd/bun",
        // },
        // {
        //   text: "ski",
        //   link: "/frontEnd/ski",
        // },
      ]
    },
    {
      text: "移动端",
      collapsible: true,
      items: [{ text: "rem适配", link: "/frontEnd/rem" }]
    }
  ],
  "/program/": [
    {
      text: "编程拾遗",
      collapsible: true,
      items: [
        { text: "迭代器实现(Iterator)", link: "/program/Iterators" },
        { text: "高阶函数(HOT)", link: "/program/hot" }
      ]
    }
  ],
  "/viewBook/": [
    {
      text: "优秀书籍",
      collapsible: true,
      items: [
        { text: "编程", link: "/viewBook/program" },
        { text: "娱乐", link: "/viewBook/enjoying" }
      ]
    },
    {
      text: "最爱影音",
      collapsible: true,
      items: [
        { text: "电影", link: "/viewBook/movie" },
        { text: "电视剧", link: "/viewBook/tv" }
      ]
    }
  ],
  "/backend/": [
    {
      text: "GNU",
      collapsible: true,
      items: [
        { text: "gcc编译", link: "/backend/gcc" },
        { text: "make工具", link: "/backend/make" }
      ]
    },
    {
      text: "Clang",
      collapsible: true,
      items: [{ text: "llvm编译", link: "/backend/llvm" }]
    }
  ],
  "/Algorithm/": [
    {
      text: "回溯",
      collapsible: true,
      items: [{ text: "算法", link: "/Algorithm/dfs" }]
    }
  ],
  "/engineeing/": [
    {
      text: "工程学",
      collapsible: true,
      items: [{ text: "工程学分类", link: "/engineeing/introduce" }]
    }
  ],
  financial: [
    {
      text: "房地产",
      collapsible: true,
      items: [{ text: "日本房地产泡沫", link: "/financial/bubble" }]
    }
  ]
};

export default defineConfig({
  lang: "en-US",
  title: "TREEDOCS",
  description: "docs tree.",
  lastUpdated: true,
  cleanUrls: "without-subfolders",
  base: "/TreeDocs/",
  themeConfig: {
    nav,
    sidebar,
    editLink: {
      pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
      text: "Edit this page on GitHub"
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" }
    ],
    algolia: {
      appId: "8J64VVRP8K",
      apiKey: "a18e2f4cc5665f6602c5631fd868adfd",
      indexName: "vitepress"
    }
  }
});
