import { defineConfig } from 'vitepress'

// 站点部署路径。
// 绑定自定义域名后在根路径运行，必须是 '/'
// （之前用 用户名.github.io/仓库名/ 时是 '/ai4s-link/'）
const base = '/'

// head 里的静态资源链接不会自动带上 base，统一在这里拼，避免换域名时漏改
const asset = (p: string) => `${base}${p}`

export default defineConfig({
  base,
  lang: 'zh-CN',
  title: '科学涌现',
  description: 'AI4S 交叉学科社区',
  head: [
    ['link', { rel: 'icon', href: asset('favicon.ico'), sizes: 'any' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: asset('favicon.svg') }],
    ['link', { rel: 'apple-touch-icon', href: asset('apple-touch-icon.png') }]
  ],
  sitemap: {
    // 结尾斜杠必须保留：VitePress 把 hostname 当 base URL 解析相对路径，
    // 少了斜杠页面 URL 会错
    hostname: 'https://ai4s.link/'
  },
  themeConfig: {
    // 导航左上角图标：取自完整 logo 左侧的螺旋标记（已去白底）
    logo: { src: '/logo-mark.png', alt: '科学涌现', width: 28, height: 24 },
    nav: [
      { text: '科研资源', link: '/resources/' },
      {
        text: '交叉论坛',
        link: 'https://github.com/jasonYhui/ai4s-link/discussions',
        target: '_blank',
        rel: 'noopener noreferrer'
      },
      { text: '学术招聘', link: '/jobs/' }
    ],
    footer: {
      // 页脚 message 支持 HTML
      message: '欢迎加入 <a href="https://github.com/jasonYhui/ai4s-link/discussions" target="_blank" rel="noopener">科学涌现社区志愿者团队</a>',
      copyright: ''
    },
    sidebar: {
      '/qa/': [
        {
          text: '常见问题',
          collapsed: false,
          items: [
            { text: 'CARSI 要不要单独申请', link: '/qa/carsi-apply' },
            // 后续添加更多问答页面
          ]
        }
      ],
      '/jobs/': [
        {
          text: '学术招聘',
          collapsed: false,
          items: [
            { text: '招聘信息', link: '/jobs/' }
          ]
        }
      ]
    }
  }
})
