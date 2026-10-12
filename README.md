# Yuxuan 的独立站运营求职网站

基于 Astro、TypeScript、Tailwind CSS 和 Markdown Content Collections 的静态个人网站，展示工作经历、技能与项目。使用 GitHub Actions 部署到 GitHub Pages。

网站仅公开称呼 **Yuxuan** 和邮箱 `iris0914ovo@gmail.com`。请勿把完整简历、手机号、微信、个人照片、公司或店铺敏感资料放进仓库或 `public/`；这里的文件会随网站公开。项目图片目前均为原创示意图，不是真实店铺或后台截图。

## 本地开发与检查

需要 Node.js 24、npm 11 或兼容版本。首次安装依赖：

```bash
npm ci
npm run dev
```

开发服务器默认在 `http://localhost:4321`。提交前运行：

```bash
npm run check
npm run build
```

生产文件生成在 `dist/`，可用 `npm run preview` 本地预览。

## 内容在哪里修改

| 内容 | 文件 |
| --- | --- |
| 公开称呼、邮箱、职业简介、技能、经历 | `src/data.ts` |
| 首页介绍 | `src/components/sections/Hero.astro` |
| 关于我 | `src/pages/about.astro` |
| 联系方式 | `src/components/sections/ContactSection.astro`、`src/pages/contact.astro` |
| 项目列表与详情 | `src/content/projects/*.md` |
| 社交分享图 | `public/images/og-cover.svg` |
| 全站配色与排版 | `src/styles/global.css` |

网站采用可复用 Section 架构：`src/components/sections/` 中每个组件负责一个区块，首页在 `src/pages/index.astro` 组合它们。新增区块时在该目录建立组件，再在页面中引入即可。不要把私人资料写入 SEO 描述、图片文字、替代文本或页面源代码。

## 添加或修改项目

每个 Markdown 文件对应一个项目，文件名就是详情页路径，例如 `src/content/projects/new-project.md` 对应 `/projects/new-project/`。可复制已有文件，按以下结构填写：

```yaml
---
title: "项目标题"
summary: "简短介绍"
category: "建站与体验"
services: ["Shopify", "产品上架"]
year: "项目类型或年份"
client: "匿名项目描述"
role: "实际承担的职责"
duration: "项目周期"
cover: "/images/projects/example-cover.webp"
gallery: ["/images/projects/example-01.webp"]
outcomes:
  - "真实且可公开的项目记录"
featured: true
order: 4
---

## 项目介绍

用 Markdown 写项目背景、自己的工作、使用的工具、截图说明、实际成果和总结。
```

`category` 可填写 `建站与体验`、`增长与投放`、`SEO 与内容` 或 `AI 自动化`。`featured: true` 会让项目出现在首页；`order` 越小越靠前。现有三个项目已根据个人提供的信息撰写，店铺均匿名；配图仍为示意图。修改业绩前应核对统计周期和口径，尤其不要把成熟店铺整体数据写成个人带来的增量。

### ROI 的计算口径

女士假发兼职项目由本人独立运营。网站仅展示 2026 年 9 月的估算 ROI，不公开营收和成本明细。不要把 ROAS（销售额 ÷ 广告费）误写为 ROI。当前 ROI 将销售额扣除提现折损后，以参考汇率换算成人民币，再减去广告、商品、运费和平台费用，差额除以这些费用之和；该周期无退款。因为缺少实际结汇金额，页面明确标注估算与所用汇率。以后若有真实到账记录，请重新计算并更新口径。

## 替换图片

把获得授权的图片放入 `public/images/projects/`，并更新对应 Markdown 的 `cover` 和 `gallery` 路径。建议压缩为 WebP，封面宽度至少 1600px。发布截图前检查店铺名、账户 ID、订单、客户信息、支付资料及内部指标是否需要遮盖。用户提供的原始后台和店铺截图未加入网站。现有 SVG 图片均标注为示意图。

## 发布到 GitHub Pages

1. 在分支上修改并运行 `npm run check && npm run build`。
2. 创建 Pull Request，审核内容与隐私后合并到 `main`。
3. 在仓库 **Settings → Pages → Build and deployment** 确认 Source 为 **GitHub Actions**。
4. 在 **Actions** 中确认 `Deploy to GitHub Pages` 构建与部署成功，再访问 `https://iris0914ovo.github.io/`。

工作流位于 `.github/workflows/deploy.yml`，推送 `main` 后自动使用 `npm ci`、类型检查和生产构建，并把 `dist/` 上传部署。站点地址配置位于 `astro.config.mjs`。如改为自定义域名，应同时修改 `site` 和 Pages 设置。

发布前再次检查：只公开 Yuxuan 与邮箱；所有项目数字有明确来源、周期和归属；图片与文字不泄露公司或个人信息；生产构建通过。
