---
title: 智谱 GLM 免费模型
description: GLM-4.7-Flash 与 GLM-4.6V-Flash 输入输出全免费，200K 上下文，适合整篇论文塞进去读
---

# 智谱 GLM 免费模型

## 是什么

智谱开放平台的两个**完全免费** API 模型：文本模型 GLM-4.7-Flash（200K 上下文）和视觉模型 GLM-4.6V-Flash。官方定价页写明两者输入、输出、缓存全部免费。

## 怎么用

1. 注册 <https://open.bigmodel.cn>
2. 控制台创建 API Key
3. 用 OpenAI 兼容格式调用，模型名填 `glm-4.7-flash` 或 `glm-4.6v-flash`

```bash
curl https://open.bigmodel.cn/api/paas/v4/chat/completions \
  -H "Authorization: Bearer $ZHIPU_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model":"glm-4.7-flash","messages":[{"role":"user","content":"你好"}]}'
```

## 免费额度

- GLM-4.7-Flash：输入免费、输出免费、缓存免费
- GLM-4.6V-Flash：输入免费、输出免费、缓存免费
- 官方写的是「免费」，未标 token 上限；实际仍有并发与频率限制，以控制台文档为准

## 适合场景

- 批量读论文摘要、抽结构化信息（200K 上下文能整篇塞进去）
- 图表、截图理解（GLM-4.6V-Flash）
- 学生项目里当兜底模型，不烧钱

## 验证日期

2026-11-23（依据智谱开放平台定价页原文）
