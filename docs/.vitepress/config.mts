import { defineConfig } from 'vitepress'

// 站点部署的子路径。
// 用 用户名.github.io/仓库名/ 时保持 '/ai4s-wiki/'；绑定自定义域名后改成 '/'
const base = '/ai4s-wiki/'

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
    // 结尾斜杠必须保留：VitePress 把它当 base URL 解析相对路径，
    // 少了斜杠 /ai4s-wiki 会被当成文件名，页面 URL 会掉到根目录
    hostname: 'https://jasonyhui.github.io/ai4s-wiki/'
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
      ]
    }
  }
})
