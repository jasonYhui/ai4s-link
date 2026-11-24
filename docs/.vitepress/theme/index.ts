import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Discuss from './Discuss.vue'
import ResourceHeader from './ResourceHeader.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 资源详情页头部组件，可直接在 markdown 里用 <ResourceHeader />
    app.component('ResourceHeader', ResourceHeader)
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // 正文之后、页脚之前插入站外讨论入口
      'doc-after': () => h(Discuss)
    })
  }
} satisfies Theme
