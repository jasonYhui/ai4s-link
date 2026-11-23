/**
 * 站外讨论入口配置
 *
 * 讨论全部放在 GitHub Discussions，站内不做 UGC（评论内容不渲染、不存储），
 * 这样站点是纯静态内容，不涉及用户生成内容的管理义务。
 */
export const discussLinks = {
  /** 讨论列表 */
  list: 'https://github.com/jasonYhui/ai4s-link/discussions',
  /** 直接新建一个 Q&A 讨论 */
  create: 'https://github.com/jasonYhui/ai4s-link/discussions/new?category=q-a',
  /** 仓库 Issues（用于报错、资源信息过期等） */
  issues: 'https://github.com/jasonYhui/ai4s-link/issues/new'
}
