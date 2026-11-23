<script setup lang="ts">
import { useData, useRoute } from 'vitepress'
import { discussLinks } from './site-links'

const route = useRoute()
const { frontmatter } = useData()

/** 首页不显示；单页可用 frontmatter `discuss: false` 关掉 */
function visible() {
  const isHome = route.path === '/' || frontmatter.value?.layout === 'home'
  if (isHome) return false
  if (frontmatter.value?.discuss === false) return false
  return true
}
</script>

<template>
  <div v-if="visible()" class="discuss-section">
    <h2 id="discuss" class="discuss-heading">提问 / 讨论</h2>
    <p class="discuss-tip">
      讨论统一在 GitHub Discussions 进行，本站不承载评论内容。
      需要 GitHub 账号，才能发帖和回复。
    </p>

    <div class="discuss-actions">
      <a class="discuss-btn discuss-btn--primary" :href="discussLinks.create" target="_blank" rel="noopener">
        提一个新问题
      </a>
      <a class="discuss-btn" :href="discussLinks.list" target="_blank" rel="noopener">
        看已有讨论
      </a>
      <a class="discuss-btn discuss-btn--ghost" :href="discussLinks.issues" target="_blank" rel="noopener">
        报告资源过期 / 报错
      </a>
    </div>

    <p class="discuss-note">
      提问请写清楚：所在机构、资源或工具名称、卡在哪一步、报错原文。
      信息齐全的问题更容易被回答。
    </p>
  </div>
</template>

<style scoped>
.discuss-section {
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--vp-c-divider);
}
.discuss-heading {
  font-size: 1.35rem;
  font-weight: 700;
  border-top: none;
  padding-top: 0;
  margin-top: 0;
}
.discuss-tip {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  margin-bottom: 1.2rem;
  line-height: 1.7;
}
.discuss-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 1rem;
}
.discuss-btn {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-soft);
  transition: border-color 0.2s, background-color 0.2s;
}
.discuss-btn:hover {
  border-color: var(--vp-c-brand-1);
}
.discuss-btn--primary {
  background: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  color: #fff;
}
.discuss-btn--primary:hover {
  background: var(--vp-c-brand-2);
  border-color: var(--vp-c-brand-2);
}
.discuss-btn--ghost {
  background: transparent;
  color: var(--vp-c-text-2);
}
.discuss-note {
  color: var(--vp-c-text-3);
  font-size: 0.82rem;
  line-height: 1.7;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 0.8rem 1rem;
}
</style>
