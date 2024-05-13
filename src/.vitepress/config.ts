import { defineConfig } from '@jcamp/vitepress-blog-theme/config'
import plugin from "markdown-it-mathjax3";

// https://vitepress.dev/reference/site-config


export default defineConfig({
  title: 'About',
  description: '',
  markdown: {
    config(md) {
      md.use(plugin, {})
    },
  },
  head: [
    ['link', { rel: 'icon', href: '/assets/images/nadira.JPG' }]
  ],
  themeConfig: {
    blog: {
      title: '',
      description: 'Welcome to my projects and blog!',
      defaultAuthor: 'Nadira',
      categoryIcons: {
        article: 'i-[heroicons-outline/book-open]',
        tutorial: 'i-[heroicons-outline/academic-cap]',
        document: 'i-[heroicons-outline/annotation]',
      },
      tagIcons: {
        github: 'i-[carbon/logo-github]',
        vue: 'i-[carbon/logo-vue]',
      },
    },
    logo: '/assets/images/nadira.JPG',
    search: {
      provider: 'local',
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Blog',
        items: [
          {
            text: 'All',
            link: '/blog/',
            activeMatch: '/blog/$',
          },
          {
            text: 'Tags',
            link: '/blog/tags',
            activeMatch: '/blog/tags',
          },
          {
            text: 'Archives',
            link: '/blog/archives',
            activeMatch: '/blog/archives',
          },
          // {
          //   text: 'RSS Feed',
          //   link: '/blog/feed.rss',
          // },
        ],
      },
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' },
    //     ],
    //   },
    // ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/nadira30',
      },
      {
        icon: 'linkedin',
        link: 'https://linkedin.com/in/nadira-m',
      },
    ],
  },
})
