---
title: arXiv API
description: 官方预印本查询接口，完全免费无需注册，限流每 3 秒最多 1 个请求
category: 数据
thumbChar: 预
thumbTone: data
quota: 完全免费 · 每 3 秒 1 请求
quotaNote: 无需注册
source: arXiv
verified: "2026-11-23"
officialUrl: https://info.arxiv.org/help/api/index.html
officialLabel: 查看 API 文档
steps:
  - label: 直接请求
    text: 无需注册或密钥，GET <code>export.arxiv.org/api/query</code> 即可
  - label: 组合分页
    text: 用 <code>search_query</code> + <code>start</code> + <code>max_results</code> 组合分页
  - label: 解析结果
    text: 返回 Atom XML，读 <code>&lt;entry&gt;</code> 里的标题、作者、摘要和 PDF 链接
---

<ResourceHeader />

## 是什么

arXiv 官方的查询接口，可按作者、分类、关键词检索预印本元数据，返回 Atom XML 格式。

## 调用示例

```bash
curl "http://export.arxiv.org/api/query?search_query=all:quantum&max_results=5"
```

## 适合场景

- 追踪某个方向的最新预印本
- 批量取标题与摘要做主题聚类
- 给个人文献库做增量更新

## 限制与注意事项

- **限流：每 3 秒不超过 1 个请求，同一时间只允许 1 个连接**
- 官方明确要求不得通过增加机器来绕过限流
- 摘要字段可能带换行和 LaTeX 残留，入库前要清洗
