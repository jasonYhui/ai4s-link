---
title: arXiv API
description: 官方预印本查询接口，完全免费无需注册，限流每 3 秒最多 1 个请求
---

# arXiv API

## 是什么

arXiv 官方的查询接口，可按作者、分类、关键词检索预印本元数据，返回 Atom XML 格式。

## 怎么用

1. 直接请求，不需要注册或密钥：

```bash
curl "http://export.arxiv.org/api/query?search_query=all:quantum&max_results=5"
```

2. 用 `search_query` + `start` + `max_results` 组合分页
3. 解析返回的 `<entry>`，里面有标题、作者、摘要和 PDF 链接

## 免费额度

- **完全免费**，无需注册、无需密钥
- **限流：每 3 秒不超过 1 个请求，同一时间只允许 1 个连接**
- 官方明确要求不得通过增加机器来绕过限流

## 适合场景

- 追踪某个方向的最新预印本
- 批量取标题与摘要做主题聚类
- 给个人文献库做增量更新

## 验证日期

2026-11-23（依据 arXiv 官方 API 使用条款）
