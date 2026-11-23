import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Discuss from './Discuss.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // 正文之后、页脚之前插入站外讨论入口
      'doc-after': () => h(Discuss)
    })
  }
} satisfies Theme
