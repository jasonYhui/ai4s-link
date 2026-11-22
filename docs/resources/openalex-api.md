---
title: OpenAlex 文献数据 API
description: 开放学术知识图谱，数据与基础 API 免费，无需密钥即可查询，免费申请 Key 后每日额度提升 10 倍
---

# OpenAlex 文献数据 API

## 是什么

开放学术知识图谱，把论文、作者、机构、期刊、基金等实体连成一张可查询的网。官方文档明确说明：数据免费，基础的 API 调用也免费，**不带密钥就能发起查询**。

## 怎么用

1. 直接请求，不需要任何注册：

```bash
curl "https://api.openalex.org/works?search=graph%20neural%20network&per-page=5"
```

2. 要大规模取数时，去官网免费申请 API Key，请求时带上 `api_key=` 参数
3. 结果超过 10000 条要翻页时，必须改用游标翻页（cursor paging），这需要 Key

## 免费额度

- 数据与基础 API 调用：**免费，无密钥可用**
- 免费申请的 API Key：每日额度提升到 10 倍，并解锁游标翻页
- 单次 `per_page` 上限 100；基础翻页最多取到 10000 条结果
- 官方要求礼貌使用，不要做整库批量下载

## 适合场景

- 文献计量、作者与机构合作网络分析
- 写综述时批量取元数据（标题、摘要、引用关系）
- 给自己领域建一个可检索的本地知识库

## 验证日期

2026-11-23（依据 OpenAlex 官方文档 Rate limits and authentication 页）
