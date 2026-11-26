import { defineConfig } from 'vitepress'

// 站点部署路径。
// 绑定自定义域名后在根路径运行，必须是 '/'
// （之前用 用户名.github.io/仓库名/ 时是 '/ai4s-link/'）
const base = '/'

// head 里的静态资源链接不会自动带上 base，统一在这里拼，避免换域名时漏改
const asset = (p: string) => `${base}${p}`

export default defineConfig({
  base,
  // 关闭深色模式：导航栏只保留 logo，不显示明暗切换开关，
  // 站点固定浅色（否则访客系统是深色时会自动变暗，却没有开关可切回）
  appearance: false,
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
    // 导航栏显示完整 logo（螺旋标记 + 渐变字标），隐藏重复的文字站名
    // 宽高按图片实际比例（476:92）给出，避免首屏占位跳动；实际显示高度由 style.css 控制
    logo: { src: '/logo-full.png', alt: '科学涌现', width: 101, height: 19.5 },
    siteTitle: false,
    // 导航只留「论坛」「招聘」、靠右显示：首页本身就是资源库，回资源库点左上角 logo
    nav: [
      {
        text: '论坛',
        link: 'https://github.com/jasonYhui/ai4s-link/discussions',
        target: '_blank',
        rel: 'noopener noreferrer'
      },
      { text: '招聘', link: '/jobs/' }
    ],
    footer: {
      // 页脚 message 支持 HTML；链接放在动作「点击加入」上
      message: '<a href="https://github.com/jasonYhui/ai4s-link/discussions" target="_blank" rel="noopener">点击加入</a>，欢迎成为科学涌现社区成员',
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
