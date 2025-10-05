import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  title: 'RASA XALID QADR - Portfolio',
  description: 'Personal portfolio showcasing my projects and skills as a developer',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'author', content: 'RASA XALID QADR' }],
    ['meta', { name: 'keywords', content: 'developer, portfolio, web development, javascript, vue, java, python, c++' }],
    ['meta', { property: 'og:title', content: 'RASA XALID QADR - Portfolio' }],
    ['meta', { property: 'og:description', content: 'Personal portfolio showcasing my projects and skills' }],
    ['meta', { property: 'og:type', content: 'website' }],
  ],

  theme: defaultTheme({
    navbar: [
      { text: 'Home', link: '/' },
      { 
        text: 'Links', 
        children: [
          { text: 'GitHub Profile', link: 'https://github.com/RasaXalidQadr' },
          { text: 'Email Me', link: 'mailto:rasaxalid23@gmail.com' },
        ]
      }
    ],

    sidebar: {
      '/projects/': [
        {
          text: 'Projects',
          children: ['/projects/']
        }
      ],
      '/skills/': [
        {
          text: 'Skills',
          children: ['/skills/']
        }
      ]
    },

    repo: 'RasaXalidQadr/my-portfolio',
    repoLabel: 'GitHub',

    editLink: false,
    lastUpdated: true,
    contributors: false,
    colorMode: 'auto',
    colorModeSwitch: true,
  }),

  bundler: viteBundler(),
  base: '/my-portfolio/',
})