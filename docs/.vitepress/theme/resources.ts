/**
 * 资源库数据源
 *
 * 单一数据源：列表、分类筛选、以后的统计都从这里读。
 * 新增资源时在数组里加一条，并把对应页面放到 docs/resources/<slug>.md。
 */
export interface ResourceItem {
  /** 页面文件名（不含 .md），用于生成链接 */
  slug: string
  title: string
  /** 分类名，必须出现在 categories 里 */
  category: string
  /** 缩略图单字 */
  char: string
  /** 缩略图配色档：work / compute / doc / data / model（无 logo 时显示色块+文字） */
  tone: 'work' | 'compute' | 'doc' | 'data' | 'model'
  /** 官方 logo 路径，放在 docs/public 下 */
  logo: string
  /** 免费额度（卡片上最显眼的一行） */
  quota: string
  /** 一句话定位，建议 40–60 字 */
  desc: string
  /** 提供方 */
  source: string
  /** 验证日期 */
  verified: string
}

/** 分类顺序即导航显示顺序 */
export const categories = ['工作台', '算力', '文献', '数据', '模型'] as const

export const resources: ResourceItem[] = [
  {
    slug: 'intern-inkstone',
    logo: '/logos/inkstone.svg',
    title: '书生·端砚 Intern InkStone',
    category: '工作台',
    char: '端',
    tone: 'work',
    quota: '每月 10,000 墨点',
    desc: '上海人工智能实验室的 AI 科研工作台。论文精读、课题空间、开发机都在一个界面里，整篇 PDF 也能塞进去读。',
    source: '上海 AI 实验室',
    verified: '2026-11-23'
  },
  {
    slug: 'modelscope-free-compute',
    logo: '/logos/modelscope.png',
    title: '魔搭社区免费算力',
    category: '算力',
    char: '算',
    tone: 'compute',
    quota: 'CPU 长期免费 · GPU 限额免费',
    desc: '阿里系模型社区，提供在线 Notebook 算力。跑通一个 demo、验证想法够用，不用为自己买卡。',
    source: '阿里巴巴',
    verified: '2026-11-23'
  },
  {
    slug: 'carsi-portal',
    logo: '/logos/carsi.png',
    title: 'CARSI 资源共享门户',
    category: '文献',
    char: '文',
    tone: 'doc',
    quota: '15 个长期免费资源',
    desc: '一个入口访问各家给高校的资源。校园网账号认证，不用挂 VPN 回校内网，也不用逐个网站找学校入口。',
    source: 'CARSI',
    verified: '2026-11-23'
  },
  {
    slug: 'openalex-api',
    logo: '/logos/openalex.png',
    title: 'OpenAlex 文献数据 API',
    category: '数据',
    char: '数',
    tone: 'data',
    quota: '无密钥可用 · 免费 Key 额度 ×10',
    desc: '开放学术知识图谱，论文、作者、机构、引用关系连成一张可查询的网。做文献计量和综述取数很省事。',
    source: 'OurResearch',
    verified: '2026-11-23'
  },
  {
    slug: 'arxiv-api',
    logo: '/logos/arxiv.png',
    title: 'arXiv API',
    category: '数据',
    char: '预',
    tone: 'data',
    quota: '完全免费 · 每 3 秒 1 请求',
    desc: '官方预印本查询接口，按作者、分类、关键词检索元数据。限流明确，适合给方向建增量文献库。',
    source: 'arXiv',
    verified: '2026-11-23'
  },
  {
    slug: 'zhipu-free-models',
    logo: '/logos/zhipu.png',
    title: '智谱 GLM 免费模型',
    category: '模型',
    char: '智',
    tone: 'model',
    quota: '输入 / 输出 / 缓存全免费',
    desc: '两个完全免费的 API 模型，200K 上下文能把整篇论文塞进去读。OpenAI 兼容格式，改个模型名就能跑。',
    source: '智谱 AI',
    verified: '2026-11-23'
  }
]
