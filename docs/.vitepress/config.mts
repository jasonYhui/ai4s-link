import { defineConfig } from 'vitepress'

// 站点部署路径。
// 绑定自定义域名后站点运行在根路径，必须是 '/'
// （之前用 用户名.github.io/仓库名/ 时是 '/ai4s-wiki/'）
const base = '/'

// head 里的静态资源链接不会自动带上 base，统一在这里拼，避免换域名时漏改
const asset = (p: string) => `${base}${p}`

export default defineConfig({
  base,
  lang: 'zh-CN',
  title: '科研搭子',
  description: 'AI4S 交叉学科资源与互助问答',
  head: [
    ['link', { rel: 'icon', href: asset('favicon.ico'), sizes: 'any' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: asset('favicon.svg') }],
    ['link', { rel: 'apple-touch-icon', href: asset('apple-touch-icon.png') }]
  ],
  sitemap: {
    // 自定义域名后站点在根路径。结尾斜杠必须保留：
    // VitePress 把 hostname 当 base URL 解析相对路径，少了斜杠页面 URL 会错
    hostname: 'https://ai4s.link/'
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '资源', link: '/resources/' },
      { text: '问答', link: '/qa/' }
    ],
    footer: {
      message: '资源政策会变，请以官方页面为准；每条资源都标注了验证日期。',
      copyright: '科研搭子 · ai4s.link'
    },
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
