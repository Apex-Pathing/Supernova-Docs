import { defineConfig } from 'vitepress'
import guide from "./sidebar/guide.mts";

export default defineConfig({
  title: "ApexPathing Docs",
  description: 'ApexPathing Docs',
  base: '/Supernova-Docs/',
  themeConfig: {
    nav: [
      { text: 'About', link: '/about' },
      { text: 'Guide', link: '/guide'}
    ],

    search: {
      provider: 'local'
    }, 
    
    
    //sidebar stuff
     sidebar: {
        '/guide/': guide
     }
  }

})
