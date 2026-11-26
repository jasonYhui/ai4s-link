<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

/**
 * 首页轮播广告位
 *
 * 两条内容，顺序即轮播顺序：第一帧是社区自我介绍（含「加入社区」），第二帧是赞助商（智谱）。
 * 换广告时改下面的 slides 即可；高度由 .ad-carousel 的 min-height 控制
 * （style.css 里是 242px，即原 161px 的 1.5 倍）。
 */
interface Slide {
  /** 'card'：logo + 文案 + 按钮；'statement'：居中大标题 + 胶囊（无 logo/按钮） */
  layout?: 'card' | 'statement'
  /** 左上角标签，赞助内容写「广告」，自有内容写「关于我们」 */
  tag?: string
  theme: 'sponsor' | 'community' | 'intro'
  logo?: string
  logoAlt?: string
  kicker?: string
  /** 允许内联标记，例如用 <span class="ad-model"> 防止模型名被拆行 */
  headline: string
  sub?: string
  chips?: string[]
  cta?: string
  /** 不填则这一帧只做展示、不可点击 */
  href?: string
  /** 站外链接加 target="_blank" */
  external?: boolean
}

const slides: Slide[] = [
  {
    layout: 'statement',
    theme: 'intro',
    headline:
      '科学涌现聚焦 AI4S 交叉学科，汇聚免费科研资源供研究人员便捷取用，并为交叉学科研究者搭建交流平台，推动科学突破。',
    chips: ['免费资源', '跨学科交流', 'AI 赋能', '开放共享']
  },
  {
    tag: '广告',
    theme: 'sponsor',
    logo: '/logos/zhipu.png',
    logoAlt: '智谱 AI',
    kicker: '智谱 AI · 开放平台',
    headline:
      '<span class="ad-model">GLM-4.7-Flash</span> 与 <span class="ad-model">GLM-4.6V-Flash</span>，输入 / 输出 / 缓存全免费',
    sub: '200K 上下文能把整篇论文塞进去读，OpenAI 兼容格式、改个模型名就能跑。',
    chips: ['200K 上下文', '视觉理解可选', 'OpenAI 兼容'],
    cta: '查看免费额度',
    href: '/resources/zhipu-free-models'
  }
]

const index = ref(0)
const paused = ref(false)
const reduceMotion = ref(false)
let timer: ReturnType<typeof setInterval> | undefined

const current = computed(() => slides[index.value])

function go(i: number) {
  index.value = (i + slides.length) % slides.length
}

onMounted(() => {
  reduceMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion.value || slides.length < 2) return
  timer = setInterval(() => {
    if (!paused.value) go(index.value + 1)
  }, 6500)
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <section
    class="ad-carousel"
    role="region"
    aria-roledescription="轮播"
    :aria-label="`广告轮播，第 ${index + 1} 张，共 ${slides.length} 张：${current.kicker || current.headline}`"
    @mouseenter="paused = true"
    @mouseleave="paused = false"
    @focusin="paused = true"
    @focusout="paused = false"
  >
    <div class="ad-carousel-track">
      <component
        :is="s.href ? 'a' : 'div'"
        v-for="(s, i) in slides"
        :key="s.kicker"
        class="ad-slide"
        :class="[`ad-slide--${s.theme}`, `ad-slide--${s.layout || 'card'}`, { 'is-active': i === index, 'is-static': !s.href }]"
        :href="s.href || undefined"
        :target="s.href && s.external ? '_blank' : undefined"
        :rel="s.href && s.external ? 'noopener noreferrer' : undefined"
        :tabindex="s.href && i === index ? 0 : undefined"
        :aria-hidden="i !== index"
      >
        <template v-if="s.layout === 'statement'">
          <img class="ad-watermark" src="/favicon.svg" alt="" aria-hidden="true" loading="lazy" />
          <span class="ad-statement">
            <span class="ad-statement-text" v-html="s.headline"></span>
            <span class="ad-chips ad-chips--pills">
              <span v-for="(c, ci) in s.chips" :key="c" :class="`ad-pill ad-pill--${ci + 1}`">{{ c }}</span>
            </span>
          </span>
        </template>
        <template v-else>
          <img class="ad-logo" :src="s.logo" :alt="s.logoAlt" width="64" height="64" loading="lazy" />
          <span class="ad-body">
            <span class="ad-kicker"><span class="ad-tag">{{ s.tag }}</span>{{ s.kicker }}</span>
            <span class="ad-headline" v-html="s.headline"></span>
            <span class="ad-sub">{{ s.sub }}</span>
            <span class="ad-chips">
              <span v-for="c in s.chips" :key="c">{{ c }}</span>
            </span>
          </span>
          <span class="ad-cta">{{ s.cta }} →</span>
        </template>
      </component>
    </div>

    <div class="ad-carousel-dots" role="tablist" aria-label="切换广告">
      <button
        v-for="(s, i) in slides"
        :key="s.kicker"
        type="button"
        class="ad-dot"
        :class="{ 'is-active': i === index }"
        role="tab"
        :aria-selected="i === index"
        :aria-label="`第 ${i + 1} 张：${s.kicker}`"
        @click="go(i)"
      ></button>
    </div>
  </section>
</template>
