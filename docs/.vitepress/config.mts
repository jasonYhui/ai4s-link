import { defineConfig } from 'vitepress'

// 请根据你的 GitHub 仓库名修改这里
// 假设你的仓库是：https://github.com/你的用户名/ai4s-wiki
// 那么 base 应该是：'/ai4s-wiki/'
export default defineConfig({
  base: '/ai4s-wiki/',  // 你的仓库名，与 GitHub 仓库名一致
  lang: 'zh-CN',
  title: 'AI4S Wiki',
  description: 'AI for Science 科研资源导航站',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '资源', link: '/resources/' },
      { text: '问答', link: '/qa/' }
    ],
    sidebar: {
      '/resources/': [
        {
          text: '科研资源',
          collapsed: false,
          items: [
            { text: 'CARSI 超算资源', link: '/resources/carsi-supercomputing' },
            // 后续添加更多资源页面
          ]
        }
      ],
      '/qa/': [
        {
          text: '常见问题',
          collapsed: false,
          items: [
            { text: '如何申请 CARSI', link: '/qa/carsi-apply' },
            // 后续添加更多问答页面
          ]
        }
      ]
    }
  }
})
