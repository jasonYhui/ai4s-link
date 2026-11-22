import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Comments from './Comments.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // 正文之后、页脚之前插入评论区
      'doc-after': () => h(Comments)
    })
  }
} satisfies Theme
