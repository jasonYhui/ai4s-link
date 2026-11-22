<script setup lang="ts">
import { onMounted, nextTick, watch } from 'vue'
import { useData, useRoute } from 'vitepress'
import { giscusConfig } from './giscus.config'

/** 只有本地开发时才显示“未配置”提示，线上不打扰访客 */
const isDev = import.meta.env.DEV

const route = useRoute()
const { frontmatter } = useData()

/**
 * 首页不显示评论。
 * 注意：VitePress 1.6 的 useData() 不返回 isHome，这里自己判断。
 */
function isHomePage() {
  return route.path === '/' || frontmatter.value?.layout === 'home'
}

/** 单页可用 frontmatter `comment: false` 关掉；未配置时线上不渲染任何东西 */
function visible() {
  if (isHomePage() || frontmatter.value?.comment === false) return false
  return configured() || isDev
}

/** 配置齐全才真正挂载 giscus */
function configured() {
  return (
    giscusConfig.enabled &&
    Boolean(giscusConfig.repo) &&
    Boolean(giscusConfig.repoId) &&
    Boolean(giscusConfig.categoryId)
  )
}

function mount() {
  if (!configured() || !visible()) return
  const host = document.getElementById('giscus-host')
  if (!host) return

  host.innerHTML = ''
  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.async = true
  script.crossOrigin = 'anonymous'

  const attrs: Record<string, string> = {
    'data-repo': giscusConfig.repo,
    'data-repo-id': giscusConfig.repoId,
    'data-category': giscusConfig.category,
    'data-category-id': giscusConfig.categoryId,
    'data-mapping': giscusConfig.mapping,
    'data-strict': '0',
    'data-reactions-enabled': giscusConfig.reactionsEnabled,
    'data-emit-metadata': '0',
    'data-input-position': giscusConfig.inputPosition,
    'data-theme': giscusConfig.theme,
    'data-lang': giscusConfig.lang,
    'data-loading': 'lazy'
  }
  Object.entries(attrs).forEach(([k, v]) => script.setAttribute(k, v))
  host.appendChild(script)
}

onMounted(() => nextTick(mount))
// 站内跳转是 SPA 路由切换，需要重新挂载
watch(() => route.path, () => nextTick(mount))
</script>

<template>
  <div v-if="visible()" class="giscus-section">
    <h2 id="discussion" class="giscus-heading">提问 / 讨论</h2>
    <p class="giscus-tip">
      用 GitHub 账号登录即可提问或回复。问题没被收录进资源库的，写在这里。
    </p>
    <div v-if="configured()" id="giscus-host"></div>
    <p v-else-if="isDev" class="giscus-unconfigured">
      评论区尚未启用：需要先在仓库开启 Discussions 并安装 Giscus App，
      再把 <code>docs/.vitepress/theme/giscus.config.ts</code> 里的
      <code>categoryId</code> 填上、<code>enabled</code> 改成 <code>true</code>。
    </p>
  </div>
</template>

<style scoped>
.giscus-section {
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--vp-c-divider);
}
.giscus-heading {
  font-size: 1.35rem;
  font-weight: 700;
  border-top: none;
  padding-top: 0;
  margin-top: 0;
}
.giscus-tip {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  margin-bottom: 1.2rem;
}
.giscus-unconfigured {
  color: var(--vp-c-text-3);
  font-size: 0.85rem;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 0.9rem 1rem;
  line-height: 1.7;
}
.giscus-unconfigured code {
  font-size: 0.82rem;
}
</style>
