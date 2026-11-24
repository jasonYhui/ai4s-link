<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()

/** 资源页头部信息全部来自 frontmatter，组件只管渲染 */
const f = computed(() => frontmatter.value as Record<string, any>)

const steps = computed(() => {
  const raw = (f.value.steps || []) as any[]
  return raw.map((s) => (typeof s === 'string' ? { text: s } : s))
})

const tone = computed(() => f.value.thumbTone || 'work')
</script>

<template>
  <div class="rd">
    <nav class="rd-crumb" aria-label="面包屑">
      <a href="/">首页</a>
      <span class="rd-sep">›</span>
      <a href="/resources/">科研资源</a>
      <span class="rd-sep">›</span>
      <span>{{ f.category }}</span>
      <span class="rd-sep">›</span>
      <em>{{ f.title }}</em>
    </nav>

    <header class="rd-head">
      <div class="rd-thumb" :class="f.logo ? 'rd-thumb--logo' : `rd-thumb--${tone}`">
        <img v-if="f.logo" :src="f.logo" :alt="f.title" />
        <template v-else>{{ f.thumbChar || '研' }}</template>
      </div>
      <div class="rd-info">
        <h1 class="rd-title">{{ f.title }}</h1>
        <div class="rd-tags">
          <span class="rd-tag rd-tag--free">完全免费</span>
          <span class="rd-tag">{{ f.category }}</span>
        </div>
        <div class="rd-quota">
          {{ f.quota }}<em v-if="f.quotaNote">（{{ f.quotaNote }}）</em>
        </div>
        <div class="rd-meta">
          <span class="rd-src">{{ f.source }}</span>
          <i>·</i>
          <span>验证 {{ f.verified }}</span>
        </div>
      </div>
    </header>

    <section v-if="steps.length" class="rd-card">
      <div class="rd-card-head">
        <h2>上手步骤</h2>
        <span class="rd-badge">简单几步</span>
      </div>
      <ol class="rd-steps">
        <li v-for="(s, i) in steps" :key="i">
          <span class="rd-num">{{ i + 1 }}</span>
          <div class="rd-step">
            <span v-if="s.label" class="rd-step-label">{{ s.label }}</span>
            <span class="rd-step-text" v-html="s.text" />
          </div>
        </li>
      </ol>
      <a v-if="f.officialUrl" class="rd-cta" :href="f.officialUrl" target="_blank" rel="noopener">
        {{ f.officialLabel || '打开官网' }}
      </a>
    </section>
  </div>
</template>
