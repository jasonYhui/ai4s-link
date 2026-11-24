---
title: OpenAlex 文献数据 API
description: 开放学术知识图谱，数据与基础 API 免费，无需密钥即可查询，免费申请 Key 后每日额度提升 10 倍
category: 数据
thumbChar: 数
thumbTone: data
quota: 无密钥可用 · 免费 Key 额度 ×10
quotaNote: 基础翻页限 1 万条
source: OurResearch
verified: "2026-11-23"
officialUrl: https://docs.openalex.org
officialLabel: 查看官方文档
steps:
  - label: 直接请求
    text: 不需要注册，也不带密钥，直接 GET <code>api.openalex.org/works</code>
  - label: 申请 Key
    text: 要大规模取数时去官网<strong>免费申请 API Key</strong>，请求里带 <code>api_key=</code>
  - label: 游标翻页
    text: 结果超过 10000 条时，必须改用 cursor paging，这一步需要 Key
---

<ResourceHeader />

## 是什么

开放学术知识图谱，把论文、作者、机构、期刊、基金等实体连成一张可查询的网。官方文档明确说明：数据免费，基础的 API 调用也免费，**不带密钥就能发起查询**。

## 调用示例

```bash
curl "https://api.openalex.org/works?search=graph%20neural%20network&per-page=5"
```

## 适合场景

- 文献计量、作者与机构合作网络分析
- 写综述时批量取元数据（标题、摘要、引用关系）
- 给自己领域建一个可检索的本地知识库

## 限制与注意事项

- 单次 `per_page` 上限 **100**；基础翻页最多取到 **10000** 条结果
- 超过 10000 条必须用游标翻页，而游标翻页需要 Key
- 官方要求礼貌使用，不要做整库批量下载
