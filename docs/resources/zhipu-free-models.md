---
title: 智谱 GLM 免费模型
description: GLM-4.7-Flash 与 GLM-4.6V-Flash 输入输出全免费，200K 上下文，适合整篇论文塞进去读
category: 模型
thumbChar: 智
logo: '/logos/zhipu.png'
thumbTone: model
quota: 输入 / 输出 / 缓存全免费
quotaNote: 有并发限制
source: 智谱 AI
verified: "2026-11-23"
officialUrl: https://open.bigmodel.cn/pricing
officialLabel: 查看定价页
steps:
  - label: 注册
    text: 打开 <a href="https://open.bigmodel.cn" target="_blank" rel="noopener">open.bigmodel.cn</a> 注册账号
  - label: 建 Key
    text: 控制台创建 API Key
  - label: 调用
    text: 用 OpenAI 兼容格式，模型名填 <code>glm-4.7-flash</code> 或 <code>glm-4.6v-flash</code>
---

<ResourceHeader />

## 是什么

智谱开放平台的两个**完全免费** API 模型：文本模型 GLM-4.7-Flash（200K 上下文）和视觉模型 GLM-4.6V-Flash。官方定价页写明两者输入、输出、缓存全部免费。

## 调用示例

```bash
curl https://open.bigmodel.cn/api/paas/v4/chat/completions \
  -H "Authorization: Bearer $ZHIPU_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model":"glm-4.7-flash","messages":[{"role":"user","content":"你好"}]}'
```

## 适合场景

- 批量读论文摘要、抽结构化信息（200K 上下文能整篇塞进去）
- 图表、截图理解（GLM-4.6V-Flash）
- 学生项目里当兜底模型，不烧钱

## 限制与注意事项

- 官方写的是「免费」，但**未标 token 上限**；实际仍有并发与频率限制，以控制台文档为准
- 200K 上下文是上限，塞太长会让单次响应变慢
- 付费模型的缓存存储有「限时免费」活动，别当成长期免费
