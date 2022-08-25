import fs from 'fs'
import path from 'path'
import { defineConfigWithTheme } from 'vitepress'
import type { Config as ThemeConfig } from '@vue/theme'
import baseConfig from '@vue/theme/config'
import { headerPlugin } from './headerMdPlugin'

const nav = [
  {
    text: '文档',
    activeMatch: `^/(engineering|style-guide|cookbook|examples)/`,
    link: '/engineering/prettier'
  }
]

export const sidebar = {
  '/engineering/': [
    {
      text: 'Compiler',
      items: [
        { text: 'stylelint', link: '/engineering/stylelint' },
        {
          text: 'prettier',
          link: '/engineering/prettier'
        },
        {
          text: 'pnpm',
          link: '/engineering/pnpm'
        },
        {
          text: 'pnpm',
          link: '/engineering/pnpm'
        }
      ]
    }
  ]
}

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  lang: 'zh-CN',
  srcDir: 'docs',
  srcExclude: ['tutorial/**/description.md'],
  scrollOffset: 'header',
  base: '/gitDocs/',
  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['meta', { name: 'twitter:site', content: '@vuejs' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],

    [
      'script',
      {},
      fs.readFileSync(
        path.resolve(__dirname, './inlined-scripts/restorePreference.js'),
        'utf-8'
      )
    ],
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'ZPMMDSYA',
        'data-spa': 'auto',
        defer: ''
      }
    ]
  ],
  themeConfig: {
    nav,
    sidebar,
    algolia: {
      indexName: 'vuejs_cn2',
      appId: 'UURH1MHAF7',
      apiKey: 'c23eb8e7895f42daeaf2bf6f63eb4bf6',
      searchParameters: {
        facetFilters: ['version:v3']
      }
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/' }],
    footer: {
      license: {
        text: '版权声明',
        link: 'https://github.com/vuejs-translations/docs-zh-cn#%E7%89%88%E6%9D%83%E5%A3%B0%E6%98%8E'
      },
      copyright: `本中文文档内容版权为幽州胖都督，保留所有权利。`
    }
  },

  markdown: {
    config(md) {
      md.use(headerPlugin)
    }
  },

  vite: {
    define: {
      __VUE_OPTIONS_API__: false
    },
    optimizeDeps: {
      include: ['gsap', 'dynamics.js'],
      exclude: ['@vue/repl']
    },
    // @ts-ignore
    ssr: {
      external: ['@vue/repl']
    },
    server: {
      host: true,
      fs: {
        // for when developing with locally linked theme
        allow: ['../..']
      }
    },
    build: {
      minify: 'terser',
      chunkSizeWarningLimit: Infinity
    },
    json: {
      stringify: true
    }
  },

  vue: {
    reactivityTransform: true
  }
})
