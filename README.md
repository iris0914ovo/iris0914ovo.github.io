# Shopify 独立站运营个人作品集

一个面向求职与专业展示的中文个人作品集，使用 **Astro + TypeScript + Tailwind CSS + Markdown Content Collections** 构建，并通过 GitHub Actions 自动部署至 GitHub Pages。

网站聚焦 Shopify 建站、独立站运营、Google / Meta 广告、SEO、自然流量增长与 AI 运营自动化。设计采用暖白、深灰和鼠尾草绿的编辑风格，支持响应式布局、深色模式、基础 SEO 和无障碍动效降级。

> 当前姓名、邮箱、公司、教育背景、简历和项目成果均为占位内容。发布前请按本文清单替换，并确认客户资料和业务数据已获授权。

## 技术栈

- Astro 7（静态站点生成）
- TypeScript 6（严格模式）
- Tailwind CSS 4（Vite 集成）
- Astro Content Collections（Markdown 项目管理与字段校验）
- GitHub Actions + GitHub Pages（持续部署）

## 本地运行

需要 Node.js 24 和 npm 11 或更高版本。

```bash
npm install
npm run dev
```

开发服务器默认运行在 `http://localhost:4321`。

常用命令：

```bash
npm run check     # Astro / TypeScript 严格检查
npm run build     # 检查并生成生产文件到 dist/
npm run preview   # 本地预览生产构建
```

依赖版本由 `package-lock.json` 锁定。CI 和其他机器建议使用 `npm ci`。

## 目录结构

```text
src/
├── components/
│   ├── layout/       # Header、Footer
│   ├── sections/     # 类似 Shopify 主题的可复用页面区块
│   └── ui/           # ProjectCard、SectionHeading 等基础组件
├── content/projects/ # 每个项目一个 Markdown 文件
├── layouts/          # 全站布局、SEO 和主题初始化
├── pages/            # 首页、项目、关于、联系和 404
├── styles/           # 全局视觉变量与排版规则
├── content.config.ts # 项目字段模型与校验规则
└── data.ts           # 个人资料、能力和工作经历
public/
├── images/projects/  # 项目封面和画廊图片
└── resume/           # 可下载简历
```

每个首页区块都是独立 Astro 组件。以后需要 AI 新增或修改区块时，优先在 `src/components/sections/` 新建组件，再在页面中按顺序引入，避免把所有内容堆进单一文件。

## 发布前必须修改的内容

### 1. 个人信息

编辑 `src/data.ts`：

- `name`：姓名或对外使用的英文名
- `role`：职位定位
- `email`：公开联系邮箱
- `location`：所在城市与协作方式
- `description`：用于首页和搜索结果的职业摘要
- `availability`：当前求职或合作状态
- `capabilities`：核心能力说明
- `experience`：真实工作经历

导航左上角的 `Y/N` 是姓名缩写占位，位于 `src/components/layout/Header.astro`。页脚 LinkedIn 目前为 `#`，请在 `src/components/layout/Footer.astro` 中替换为真实链接。

### 2. About 页面

编辑 `src/pages/about.astro`，替换个人故事、照片占位区域、教育背景和简历下载链接。

将正式简历放到 `public/resume/resume.pdf`，然后把页面中的：

```astro
href="/resume/resume-placeholder.txt"
```

改为：

```astro
href="/resume/resume.pdf"
```

公开前请再次检查手机号、住址、客户名称、账户信息和内部数据。

### 3. SEO 与站点地址

默认部署地址是 `https://iris0914ovo.github.io`，配置在 `astro.config.mjs`。如果使用自定义域名，请修改 `site`，并按 GitHub Pages 要求增加 `public/CNAME`。

默认社交分享图是 `public/images/og-cover.svg`，建议替换为 1200 × 630 的 PNG 或 JPG，同时更新 `src/layouts/BaseLayout.astro` 中的默认图片路径。

### 4. 颜色和视觉

全站视觉变量位于 `src/styles/global.css`：

```css
--paper: #f8f7f4;
--ink: #202320;
--sage: #718774;
```

同一文件包含深色模式变量、排版、按钮、标签和 Markdown 正文样式。建议优先修改变量，不要在各组件中重复写颜色。

## 添加一个项目

复制任意 `src/content/projects/*.md` 文件并改名，例如 `src/content/projects/new-market-launch.md`，文件名会成为网址 `/projects/new-market-launch/`。

项目文件的完整字段如下：

```yaml
---
title: "项目标题"
summary: "一到两句项目摘要"
category: "建站与体验"
services: ["Shopify", "CRO", "数据分析"]
year: "2026"
client: "经授权公开的客户名，或匿名描述"
role: "你的职责"
duration: "8 周"
cover: "/images/projects/example-cover.webp"
gallery:
  - "/images/projects/example-01.webp"
  - "/images/projects/example-02.webp"
outcomes:
  - "一条真实、可核验且可公开的成果"
  - "另一条真实成果"
featured: true
order: 1
---

## 项目背景

用 Markdown 编写项目详情……
```

`category` 必须是以下四项之一：

- `建站与体验`
- `增长与投放`
- `SEO 与内容`
- `AI 自动化`

`featured: true` 会让项目出现在首页，`order` 数字越小排序越靠前。字段缺失或分类填写错误时，`npm run check` 会直接报错。

写案例时建议说明背景、约束、你的职责、关键判断、实施过程、验证方法与复盘。不要只放结果截图，也不要为了完整感编造数字。

## 替换项目图片

将图片放进 `public/images/projects/`，再修改 Markdown 中的 `cover` 和 `gallery` 路径。

建议：

- 封面使用 4:3 或 16:10 比例，宽度至少 1600px
- 详情图片尽量保持同一项目的视觉比例一致
- 优先使用 WebP 或经过压缩的 JPG / PNG
- 为后台、订单、广告账户和用户数据截图脱敏
- 未获得品牌授权时，用抽象图、局部图或重新制作的数据示意图

示例 SVG 全部是原创占位图，可直接删除或替换。

## GitHub Pages 自动部署

仓库已包含 `.github/workflows/deploy.yml`。部署前：

1. 将本地改动提交并推送到 `main` 分支。
2. 打开 GitHub 仓库的 **Settings → Pages**。
3. 在 **Build and deployment** 中把 Source 设为 **GitHub Actions**。
4. 打开 **Actions** 页面，等待 `Deploy to GitHub Pages` 工作流完成。
5. 访问 `https://iris0914ovo.github.io`。

以后每次推送到 `main`，Actions 都会运行 `npm ci`、严格检查、生产构建并部署 `dist/`。也可以在 Actions 页面手动运行工作流。

如果部署失败，优先查看 Actions 中的 `Build site` 步骤；在本地运行 `npm ci && npm run build` 通常可以复现同一问题。

## 内容安全检查清单

发布前确认：

- 姓名、邮箱、社交链接和简历均已替换
- 示例公司、学校和项目文案已替换或明确保留为示例
- 所有业绩数字真实、口径明确，并获得公开授权
- 图片不含订单号、客户姓名、邮箱、广告账户 ID 或内部后台信息
- 所有项目封面与画廊图片拥有使用权
- `npm run build` 成功完成

## License

网站代码可按个人需要修改。项目文案、个人资料和图片的版权及披露责任由内容发布者自行确认。
