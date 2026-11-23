# 科研搭子 SciMate

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

**决定：维持 GitHub 仓库 + GitHub Actions + GitHub Pages + Giscus，不做国内托管迁移。**

理由：

- **零成本**：仓库、CI、静态托管、HTTPS 证书全部免费
- **无备案**：境外托管不需要 ICP 备案，也就不承担境内站点的内容管理义务
- **写作即发布**：Markdown 写完 push 就上线

已知代价（接受）：

- **国内访问不稳定**：`ai4s.link` 与 `github.io` 都解析到 GitHub 的 `185.199.x.x`，国内直连实测可达 17 秒、偶发连接重置
- **评论区门槛**：Giscus 依赖 GitHub Discussions，访客需要有 GitHub 账号

如果将来流量大到必须解决国内访问，路径是：ICP 备案（1–4 周）→ 阿里云 OSS/COS + CDN → 评论换 Twikoo。注意两点：

1. 备案信息要与实际内容一致，**开放评论区属于交互式服务，可能触发备案变更**
2. 有用户评论就产生 UGC 内容管理义务（审核机制、举报入口、日志留存 6 个月），这是比钱更贵的成本

**为什么不用 Gitee Pages**：需实名认证、自定义域名要付费 Pro 版、服务状态不透明，不适合作为长期托管方案。

## 新增一条资源

在 `docs/resources/` 下建 `资源名.md`，按四段式写，然后在 `config.mts` 的 sidebar 里登记一条。

## 评论区（Giscus）

评论组件已写好，挂在每篇内容页底部（首页除外）。要启用还需三步人工操作：

1. 仓库 Settings → General → Features 勾选 **Discussions**
2. 在 Discussions 里建一个 **Q&A** 分类
3. 到 <https://giscus.app> 安装 App、填入仓库名，拿到 `categoryId`

然后把 `docs/.vitepress/theme/giscus.config.ts` 里的 `categoryId` 填上、`enabled` 改成 `true`。

`repo` 与 `repoId` 已填好（`repoId` = 仓库 node_id，公开可查）。
配置不全时线上不会渲染任何东西，本地开发会显示一条提示。

种子帖草稿见 `.github/discussions-seeds.md`。

单页想关掉评论，在 frontmatter 加 `comment: false`。

## 贡献

欢迎提交 Issue 或 Pull Request。
