# 赛灵社区

AI4S 交叉学科资源与互助问答 · https://ai4s.link

把散落在各处的免费算力、数据与工具收集起来，也把踩过的坑写下来。

## 目录结构

```
docs/
├── index.md                    # 首页
├── resources/                  # 资源库（是什么/怎么用/免费额度/验证日期）
└── qa/                         # 互助问答
```

## 本地开发

```bash
npm install
npm run docs:dev      # 本地预览 http://localhost:5173
npm run docs:build    # 构建到 docs/.vitepress/dist
```

## 部署

推送到 `main` 即自动构建部署到 GitHub Pages，由 `.github/workflows/deploy.yml` 驱动。

站点地址：https://ai4s.link

站点路径由 `docs/.vitepress/config.mts` 里的 `base` 决定：

- 绑定自定义域名 `ai4s.link` 时 → `'/'`
- 用 `jasonyhui.github.io/ai4s-link/` 时 → `'/ai4s-link/'`
- 当前已绑定自定义域名 `ai4s.link` → `'/'`

## 为什么托管在 GitHub（2026-11-23 决定）

**决定：维持 GitHub 仓库 + GitHub Actions + GitHub Pages，不做国内托管迁移；讨论放 GitHub Discussions，站内只做入口跳转。**

理由：

- **零成本**：仓库、CI、静态托管、HTTPS 证书全部免费
- **无备案**：境外托管不需要 ICP 备案，也就不承担境内站点的内容管理义务
- **写作即发布**：Markdown 写完 push 就上线

已知代价（接受）：

- **国内访问不稳定**：`ai4s.link` 与 `github.io` 都解析到 GitHub 的 `185.199.x.x`，国内直连实测可达 17 秒、偶发连接重置
- **讨论门槛**：讨论在 GitHub Discussions 进行，访客需要有 GitHub 账号

如果将来流量大到必须解决国内访问，路径是：ICP 备案（1–4 周）→ 阿里云 OSS/COS + CDN → 评论换 Twikoo。注意两点：

1. 备案信息要与实际内容一致，**开放评论区属于交互式服务，可能触发备案变更**
2. 有用户评论就产生 UGC 内容管理义务（审核机制、举报入口、日志留存 6 个月），这是比钱更贵的成本

**为什么不用 Gitee Pages**：需实名认证、自定义域名要付费 Pro 版、服务状态不透明，不适合作为长期托管方案。

## 新增一条资源

在 `docs/resources/` 下建 `资源名.md`，按四段式写，然后在 `config.mts` 的 sidebar 里登记一条。

## 讨论入口（站外）

站内**不承载任何评论内容**，只在每篇内容页底部放一个入口卡片，点出去到 GitHub Discussions：

- 「提一个新问题」→ `discussions/new?category=q-a`
- 「看已有讨论」→ `discussions`
- 「报告资源过期 / 报错」→ `issues/new`

链接集中在 [`docs/.vitepress/theme/site-links.ts`](docs/.vitepress/theme/site-links.ts)，改地址只改这一处。

**为什么不在站内嵌评论（曾经用 Giscus，已移除）**：

1. 嵌评论意味着站内承载用户生成内容（UGC），运营者要承担内容管理义务——审核机制、举报入口、日志留存，成本远高于收益
2. 如果把站点托管到国内（备案），UGC 还会牵涉备案信息变更
3. 站内纯静态 = 无 UGC 义务，备案和托管选择都更自由

单页想关掉这个入口，在 frontmatter 加 `discuss: false`。

种子帖草稿与已发布记录见 [`.github/discussions-seeds.md`](.github/discussions-seeds.md)。
## 贡献

欢迎提交 Issue 或 Pull Request。
