# Classby Official Website

🎓 Classby 官方网站 - 课堂录音与 AI 笔记助手

## ✨ 特性

- 🎨 现代化黑色主题设计
- ⚡️ Next.js 14 + React 18 + TypeScript
- 🎭 Framer Motion 流畅动画
- 🎯 TailwindCSS 响应式布局
- 📱 完全移动端适配
- 🚀 静态导出，支持 Vercel 一键部署

## 🏗️ 项目结构

```
website/
├── app/                    # Next.js App Router
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   ├── privacy/           # 隐私政策页
│   └── support/           # 支持页
├── public/                # 静态资源
├── package.json           # 依赖配置
├── tailwind.config.ts     # Tailwind 配置
├── tsconfig.json          # TypeScript 配置
└── next.config.mjs        # Next.js 配置

```

## 🚀 快速开始

### 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 本地开发

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
npm run build
```

构建后的静态文件将输出到 `out/` 目录。

### 本地预览生产版本

```bash
npm run build
npm run start
```

## 📦 部署到 Vercel

### 方式一：通过 Vercel CLI

1. 安装 Vercel CLI:
```bash
npm i -g vercel
```

2. 登录 Vercel:
```bash
vercel login
```

3. 部署:
```bash
vercel
```

### 方式二：通过 GitHub

1. 将代码推送到 GitHub 仓库

2. 在 [Vercel](https://vercel.com) 导入项目

3. 配置如下：
   - **Framework Preset**: Next.js
   - **Root Directory**: website
   - **Build Command**: `npm run build`
   - **Output Directory**: 留空（使用默认）

4. 点击 **Deploy** 即可完成部署

### 方式三：一键部署按钮

点击下方按钮一键部署到 Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/你的用户名/Classby&project-name=classby-website&repository-name=classby-website&root-directory=website)

> 注意：需要先将代码推送到 GitHub，并替换上面链接中的 `你的用户名`

## 🎨 设计特色

### 黑色主题
- 纯黑背景 (#000000)
- 高对比度文本
- 渐变色点缀（蓝色到紫色）
- 毛玻璃效果导航栏

### 动画效果
- 页面进入淡入动画
- 滚动触发内容显示
- 流畅的交互反馈
- 渐变悬停效果

### 响应式设计
- 移动端优先
- 平板和桌面端完美适配
- 触摸友好的交互元素

## 📝 页面说明

### 首页 (/)
- Hero 区域：主标题和 CTA
- 功能特性：6 大核心功能展示
- 使用流程：3 步使用说明
- 隐私保护：隐私承诺说明
- 支持联系：帮助和联系方式

### 隐私政策 (/privacy)
- 数据收集说明
- 数据用途说明
- 权限说明
- 数据保护措施

### 支持页 (/support)
- 联系方式
- 常见问题解答
- 快速帮助链接

## 🛠️ 技术栈

- **框架**: [Next.js 14](https://nextjs.org/)
- **UI 库**: [React 18](https://reactjs.org/)
- **语言**: [TypeScript](https://www.typescriptlang.org/)
- **样式**: [TailwindCSS](https://tailwindcss.com/)
- **动画**: [Framer Motion](https://www.framer.com/motion/)
- **图标**: [Lucide React](https://lucide.dev/)

## 📄 许可

© 2025 Classby. All rights reserved.

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📮 联系方式

- 邮箱: review@classby.app
- 网站: [https://classby.app](https://classby.app)
