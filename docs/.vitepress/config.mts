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
  title: '赛灵社区',
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
      message: '资源政策会变，请以官方页面为准；每条资源都标注了验证日期。',
      copyright: '赛灵社区 · ai4s.link'
    },
    sidebar: {
      '/resources/': [
        {
          text: '科研工作台',
          collapsed: false,
          items: [
            { text: '书生·端砚 Intern InkStone', link: '/resources/intern-inkstone' }
          ]
        },
        {
          text: '算力',
          collapsed: false,
          items: [
            { text: '魔搭社区免费算力', link: '/resources/modelscope-free-compute' }
          ]
        },
        {
          text: '文献与数据',
          collapsed: false,
          items: [
            { text: 'CARSI 资源共享门户', link: '/resources/carsi-portal' },
            { text: 'OpenAlex 文献数据 API', link: '/resources/openalex-api' },
            { text: 'arXiv API', link: '/resources/arxiv-api' }
          ]
        },
        {
          text: '模型 API',
          collapsed: false,
          items: [
            { text: '智谱 GLM 免费模型', link: '/resources/zhipu-free-models' }
          ]
        }
      ],
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
