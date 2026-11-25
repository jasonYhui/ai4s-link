<script setup lang="ts">
import { computed, ref } from 'vue'
import { resources, categories } from './resources'

/** 当前选中的分类；null 表示「全部」 */
const active = ref<string | null>(null)

/** 搜索关键词；空串表示不筛选 */
const keyword = ref('')

const tabs = computed(() => [
  { key: null as string | null, label: '全部', count: resources.length },
  ...categories.map((c) => ({
    key: c as string | null,
    label: c,
    count: resources.filter((r) => r.category === c).length
  }))
])

/** 关键词在标题、定位、额度、提供方、分类里匹配，忽略大小写与首尾空格 */
const visible = computed(() => {
  const kw = keyword.value.trim().toLowerCase()
  return resources.filter((r) => {
    if (active.value !== null && r.category !== active.value) return false
    if (!kw) return true
    return [r.title, r.desc, r.quota, r.source, r.category, r.char]
      .join(' ')
      .toLowerCase()
      .includes(kw)
  })
})
</script>

<template>
  <div class="res-search">
    <svg class="res-search-icon" viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="8.5" cy="8.5" r="5.5" fill="none" stroke="currentColor" stroke-width="1.6" />
      <path d="M12.8 12.8 17 17" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
    </svg>
    <input
      v-model="keyword"
      type="search"
      class="res-search-input"
      aria-label="搜索资源"
      placeholder="搜索资源，如「算力」「arXiv」"
      autocomplete="off"
    />
    <button
      v-if="keyword"
      type="button"
      class="res-search-clear"
      aria-label="清空搜索"
      @click="keyword = ''"
    >×</button>
  </div>

  <nav class="res-tabs" aria-label="资源分类">
    <button
      v-for="t in tabs"
      :key="t.label"
      type="button"
      class="res-tab"
      :class="{ 'is-active': active === t.key }"
      :aria-pressed="active === t.key"
      @click="active = t.key"
    >
      {{ t.label }}
      <span class="res-tab-count">{{ t.count }}</span>
    </button>
  </nav>

  <div v-if="visible.length" class="rlist">
    <a v-for="r in visible" :key="r.slug" class="ritem" :href="`./${r.slug}`">
      <div class="rthumb" :class="r.logo ? 'rthumb--logo' : `rthumb--${r.tone}`">
        <img v-if="r.logo" :src="r.logo" :alt="r.title" loading="lazy" />
        <template v-else>{{ r.char }}</template>
      </div>
      <div class="rmain">
        <div class="rtitle"><span class="rtag">{{ r.category }}</span>{{ r.title }}</div>
        <div class="rquota">{{ r.quota }}</div>
        <p class="rdesc">{{ r.desc }}</p>
        <div class="rfoot">
          <span>{{ r.source }}</span><i>·</i><span>验证 {{ r.verified }}</span>
          <span class="rbtn">免费领取 ›</span>
        </div>
      </div>
    </a>
  </div>

  <p v-else class="rlist-empty">
    没有匹配「{{ keyword.trim() }}」的资源。换个关键词，或切到「全部」再看看。
  </p>
</template>
