/**
 * Giscus 配置
 *
 * 需要从 https://giscus.app 依次完成：
 *   1. 仓库公开 ✓（已满足）
 *   2. 安装 Giscus App 到本仓库
 *   3. 仓库 Settings → General → Features 勾选 Discussions
 *   4. 在仓库 Discussions 里建一个 Q&A 分类
 *   5. 回到 giscus.app 填入仓库名，页面会生成 repo / repoId / category / categoryId
 *
 * repo / repoId 已填好；categoryId 需要上面第 4 步之后才能拿到。
 * 四项齐全后把 enabled 改成 true，评论框就会出现在每篇内容页底部。
 */
export const giscusConfig = {
  enabled: true,

  /** 形如 owner/repo */
  repo: 'jasonYhui/ai4s-link',
  /** 仓库的 node_id，公开可查 */
  repoId: 'R_kgDOV3XvwA',

  /** Discussions 里的分类名，建议只开一个 Q&A */
  category: 'Q&A',
  /** 分类 ID，形如 DIC_kwDOV3XvwM4... （在 giscus.app 生成） */
  categoryId: 'DIC_kwDOV3XvwM4DLvAk',

  /** 页面与 discussion 的映射方式：pathname 最省心 */
  mapping: 'pathname',
  reactionsEnabled: '1',
  inputPosition: 'top',
  lang: 'zh-CN',
  theme: 'preferred_color_scheme'
}

export type GiscusConfig = typeof giscusConfig
