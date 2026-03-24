// docs/.vitepress/theme/index.ts
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import CustomNavButton from './CustomNavButton.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // You can add your custom button to the 'nav-bar-content-after' or 'nav-bar-content-before' slot
      'nav-bar-content-after': () => h(CustomNavButton)
    })
  }
}
