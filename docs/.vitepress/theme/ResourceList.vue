<script setup lang="ts">
import { computed, ref } from 'vue'
import { resources, categories } from './resources'

/** 当前选中的分类；null 表示「全部」 */
const active = ref<string | null>(null)

const tabs = computed(() => [
  { key: null as string | null, label: '全部', count: resources.length },
  ...categories.map((c) => ({
    key: c as string | null,
    label: c,
    count: resources.filter((r) => r.category === c).length
  }))
])

const visible = computed(() =>
  active.value === null
    ? resources
    : resources.filter((r) => r.category === active.value)
)
</script>

<template>
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

  <div class="rlist">
    <a v-for="r in visible" :key="r.slug" class="ritem" :href="`./${r.slug}`">
      <div class="rthumb" :class="`rthumb--${r.tone}`">{{ r.char }}</div>
      <div class="rmain">
        <div class="rtitle"><span class="rtag">{{ r.category }}</span>{{ r.title }}</div>
        <div class="rquota">{{ r.quota }}</div>
        <p class="rdesc">{{ r.desc }}</p>
        <div class="rfoot">
          <span>{{ r.source }}</span><i>·</i><span>验证 {{ r.verified }}</span>
          <span class="rbtn">查看详情 ›</span>
        </div>
      </div>
    </a>
  </div>
</template>
