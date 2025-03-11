import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sthack",
  description: "Sthack was first held in 2011. The event takes place in Bordeaux and was first an overnight security contest. It was born from the desire of its founders to have a local CTF and to combine security and epicurean lifestyle.",
  themeConfig: {
    outline: false,
    aside: false,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Past editions', link: '/editions' }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'youtube', link: 'https://www.youtube.com/@sth4ck' },
      { icon: 'twitter', link: 'https://twitter.com/sth4ck' },
      { icon: 'discord', link: 'https://discord.gg/A4p6faRFzf'}
    ]
  }
})
