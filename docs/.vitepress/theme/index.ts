import DefaultTheme from 'vitepress/theme'
import CustomNavButton from './CustomNavButton.vue'
import './custom.css'
import { h } from 'vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // You can add your custom button to the 'nav-bar-content-after' or 'nav-bar-content-before' slot
      'nav-bar-content-after': () => h(CustomNavButton)
    })
  }
}
