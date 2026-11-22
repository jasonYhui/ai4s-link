# 科研搭子

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

站点路径由 `docs/.vitepress/config.mts` 里的 `base` 决定：

- 绑定自定义域名 `ai4s.link` 时 → `'/'`
- 用 `jasonyhui.github.io/ai4s-wiki/` 时 → `'/ai4s-wiki/'`

## 新增一条资源

在 `docs/resources/` 下建 `资源名.md`，按四段式写，然后在 `config.mts` 的 sidebar 里登记一条。

## 贡献

欢迎提交 Issue 或 Pull Request。
