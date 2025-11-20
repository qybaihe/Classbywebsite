# GitHub 和 Vercel 一键部署设置指南

## 🎯 目标

将 Classby 官网推送到 GitHub 并配置 Vercel 一键部署按钮。

## 📦 步骤 1: 推送到 GitHub

### 1.1 确认 Git 仓库状态

```bash
cd /Users/baihe/Documents/Classby

# 查看当前状态
git status

# 查看远程仓库
git remote -v
```

### 1.2 添加并提交网站代码

```bash
# 添加所有网站文件
git add website/

# 查看将要提交的文件
git status

# 提交
git commit -m "feat: add official website with black theme

- Modern black theme design
- Next.js 14 + React + TypeScript
- Responsive layout with TailwindCSS
- Framer Motion animations
- Privacy policy and support pages
- Vercel deployment ready"

# 推送到 GitHub
git push origin main
```

### 1.3 如果还没有 GitHub 仓库

如果这是一个新项目，需要先在 GitHub 创建仓库：

1. 访问 https://github.com/new
2. 仓库名称：`Classby`
3. 描述：`课堂录音与 AI 笔记助手`
4. 选择 Public 或 Private
5. 不要初始化 README（因为本地已有代码）
6. 点击 "Create repository"

然后在本地关联并推送：

```bash
cd /Users/baihe/Documents/Classby

# 如果已有远程仓库，先移除
git remote remove origin

# 添加新的远程仓库（替换 YOUR_USERNAME）
git remote add origin https://github.com/YOUR_USERNAME/Classby.git

# 推送代码
git branch -M main
git push -u origin main
```

## 🚀 步骤 2: Vercel 部署

### 2.1 方式 A: 通过 Vercel Dashboard（推荐）

1. **访问 Vercel**
   - 打开 https://vercel.com
   - 使用 GitHub 账号登录

2. **导入项目**
   - 点击 "New Project"
   - 从列表中选择 "Classby" 仓库
   - 如果没有看到，点击 "Adjust GitHub App Permissions"

3. **配置项目**
   ```
   Project Name: classby-website
   Framework Preset: Next.js
   Root Directory: website
   Build Command: npm run build (自动检测)
   Output Directory: out (自动检测)
   Install Command: npm install (自动检测)
   Development Command: npm run dev (自动检测)
   ```

4. **环境变量**（可选）
   - 当前无需配置
   - 如需要，后续可在 Settings → Environment Variables 添加

5. **部署**
   - 点击 "Deploy" 按钮
   - 等待 2-3 分钟构建完成
   - 获取部署 URL (例如: `classby-website.vercel.app`)

### 2.2 方式 B: 通过 Vercel CLI

```bash
# 安装 Vercel CLI（如未安装）
npm i -g vercel

# 登录
vercel login

# 进入网站目录
cd /Users/baihe/Documents/Classby/website

# 部署（首次会询问配置）
vercel

# 部署到生产环境
vercel --prod
```

## 🔘 步骤 3: 配置一键部署按钮

### 3.1 获取仓库信息

确认你的 GitHub 仓库 URL，格式应为：
```
https://github.com/YOUR_USERNAME/Classby
```

### 3.2 创建部署按钮

一键部署按钮的格式：

```markdown
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/Classby&project-name=classby-website&repository-name=classby-website&root-directory=website)
```

**参数说明：**
- `repository-url`: GitHub 仓库地址
- `project-name`: Vercel 项目名称
- `repository-name`: 新克隆仓库的名称
- `root-directory`: 项目根目录（website）

### 3.3 更新 README.md

在主 README 中添加部署按钮：

```markdown
## 🌐 官方网站

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/Classby&project-name=classby-website&repository-name=classby-website&root-directory=website)

访问官方网站: [https://classby.app](https://classby.app) (或你的 Vercel 部署 URL)

### 本地运行官网

\`\`\`bash
cd website
npm install
npm run dev
\`\`\`

网站将在 http://localhost:3000 启动
```

## 📋 步骤 4: 验证部署

### 4.1 检查网站功能

访问部署的网站，确认：

- [ ] 首页正常加载
- [ ] 黑色主题显示正确
- [ ] 导航栏功能正常
- [ ] 隐私政策页面可访问 (`/privacy`)
- [ ] 支持页面可访问 (`/support`)
- [ ] 邮件链接可点击
- [ ] 动画效果流畅
- [ ] 移动端显示正确

### 4.2 测试响应式设计

打开浏览器开发者工具：
- iPhone SE (375x667)
- iPad (768x1024)
- Desktop (1920x1080)

### 4.3 性能测试

使用 Lighthouse 测试：

```bash
# 安装 Lighthouse（如未安装）
npm install -g lighthouse

# 运行测试
lighthouse https://你的部署URL.vercel.app --view
```

目标分数：
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: > 90

## 🔧 步骤 5: 配置自动部署

### 5.1 Vercel 自动部署

Vercel 默认会自动部署：
- ✅ 推送到 main 分支 → 生产环境
- ✅ 创建 Pull Request → 预览环境
- ✅ 推送到其他分支 → 预览环境

### 5.2 配置部署钩子（可选）

如需自定义部署行为，在 Vercel Dashboard:

1. 进入项目设置
2. 点击 "Git"
3. 配置：
   - Production Branch: `main`
   - 自动部署: ✅
   - Preview Deployments: ✅

### 5.3 通知设置

配置部署通知：

1. 进入 Settings → Notifications
2. 选择通知渠道：
   - Email
   - Slack
   - Discord
   - Webhook

## 🌍 步骤 6: 配置自定义域名（可选）

### 6.1 添加域名

1. 在 Vercel Dashboard 进入项目
2. 点击 "Settings" → "Domains"
3. 输入你的域名（例如: `classby.app`）
4. 点击 "Add"

### 6.2 配置 DNS

在你的域名提供商处添加记录：

**A 记录（根域名）：**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600
```

**CNAME 记录（www 子域名）：**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

### 6.3 SSL 证书

Vercel 会自动为你的域名配置 SSL 证书，无需手动操作。

## 📊 步骤 7: 监控和分析

### 7.1 启用 Vercel Analytics

1. 在 Vercel Dashboard 进入项目
2. 点击 "Analytics" 标签
3. 点击 "Enable Analytics"
4. 免费套餐包含基础分析功能

### 7.2 监控指标

重点关注：
- Page Views
- Unique Visitors
- Performance Metrics
- Error Rate

## 🎉 完成！

现在你的 Classby 官网已经：

✅ 托管在 GitHub  
✅ 部署到 Vercel  
✅ 配置自动部署  
✅ 支持一键克隆部署  
✅ 优化的性能和 SEO  
✅ 全球 CDN 加速  

## 📞 获取帮助

遇到问题？

- 查看 [Vercel 文档](https://vercel.com/docs)
- 查看 [Next.js 文档](https://nextjs.org/docs)
- 在 GitHub 仓库提交 Issue

---

**🎊 恭喜！你的官网已经上线！** 

分享你的网站：
- 生产环境: https://你的域名.vercel.app
- 隐私政策: https://你的域名.vercel.app/privacy
- 支持页面: https://你的域名.vercel.app/support
