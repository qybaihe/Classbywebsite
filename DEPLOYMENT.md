# Classby 官网部署指南

## 📋 部署前准备

### 1. 确保代码已推送到 GitHub

```bash
# 在 Classby 根目录下
cd /Users/baihe/Documents/Classby

# 添加所有文件
git add website/

# 提交
git commit -m "feat: add official website"

# 推送到 GitHub
git push origin main
```

### 2. 安装依赖（如果尚未安装）

```bash
cd website
npm install
```

### 3. 本地测试

```bash
# 开发模式
npm run dev

# 生产构建测试
npm run build
```

## 🚀 Vercel 部署步骤

### 方法 A: Vercel Dashboard（推荐）

1. **登录 Vercel**
   - 访问 [https://vercel.com](https://vercel.com)
   - 使用 GitHub 账号登录

2. **导入项目**
   - 点击 "New Project"
   - 选择 Classby 仓库
   - 如果找不到，点击 "Import Third-Party Git Repository"

3. **配置项目**
   ```
   Framework Preset: Next.js
   Root Directory: website
   Build Command: npm run build (自动检测)
   Output Directory: (留空，使用默认)
   Install Command: npm install (自动检测)
   ```

4. **环境变量**
   - 当前无需配置环境变量
   - 如需添加，在 "Environment Variables" 区域添加

5. **部署**
   - 点击 "Deploy"
   - 等待构建完成（约 2-3 分钟）
   - 获取部署 URL

### 方法 B: Vercel CLI

1. **安装 Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **登录**
   ```bash
   vercel login
   ```

3. **部署**
   ```bash
   cd /Users/baihe/Documents/Classby/website
   vercel
   ```

4. **首次部署配置**
   ```
   ? Set up and deploy "~/Documents/Classby/website"? [Y/n] y
   ? Which scope do you want to deploy to? [Your Account]
   ? Link to existing project? [y/N] n
   ? What's your project's name? classby-website
   ? In which directory is your code located? ./
   ```

5. **生产环境部署**
   ```bash
   vercel --prod
   ```

### 方法 C: GitHub Actions 自动部署

创建 `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches:
      - main
    paths:
      - 'website/**'

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Install Vercel CLI
        run: npm install --global vercel@latest
      
      - name: Pull Vercel Environment Information
        run: vercel pull --yes --environment=production --token=${{ secrets.VERCEL_TOKEN }}
        working-directory: ./website
      
      - name: Build Project Artifacts
        run: vercel build --prod --token=${{ secrets.VERCEL_TOKEN }}
        working-directory: ./website
      
      - name: Deploy Project Artifacts to Vercel
        run: vercel deploy --prebuilt --prod --token=${{ secrets.VERCEL_TOKEN }}
        working-directory: ./website
```

需要在 GitHub 仓库设置中添加 Secret:
- `VERCEL_TOKEN`: 从 Vercel Dashboard → Settings → Tokens 获取

## 🌐 自定义域名

### 1. 在 Vercel 添加域名

1. 进入项目设置
2. 点击 "Domains"
3. 输入域名（例如：`www.classby.app` 或 `classby.app`）
4. 点击 "Add"

### 2. 配置 DNS

在域名提供商处添加以下 DNS 记录：

#### 对于根域名 (classby.app)
```
Type: A
Name: @
Value: 76.76.21.21
```

#### 对于 www 子域名 (www.classby.app)
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

#### 验证域名
```
Type: TXT
Name: _vercel
Value: (Vercel 提供的值)
```

### 3. 等待 DNS 生效

- DNS 传播通常需要 24-48 小时
- 可以使用 `dig` 命令检查：
  ```bash
  dig classby.app
  dig www.classby.app
  ```

## 🔧 高级配置

### 自定义构建配置

编辑 `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "out",
  "framework": "nextjs",
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

### 重定向配置

如需添加重定向，在 `vercel.json` 中添加：

```json
{
  "redirects": [
    {
      "source": "/old-path",
      "destination": "/new-path",
      "permanent": true
    }
  ]
}
```

## 📊 部署后检查清单

- [ ] 网站可以正常访问
- [ ] 首页内容显示正确
- [ ] 隐私政策页面可访问
- [ ] 支持页面可访问
- [ ] 移动端显示正常
- [ ] 导航链接工作正常
- [ ] 邮件链接可点击
- [ ] 动画效果流畅
- [ ] 黑色主题显示正确

## 🐛 常见问题

### 问题 1: 构建失败

**原因**: 依赖安装失败或代码错误

**解决**:
```bash
# 本地测试构建
cd website
npm run build

# 查看错误日志
```

### 问题 2: 页面显示空白

**原因**: 静态导出配置问题

**解决**:
检查 `next.config.mjs` 确保包含：
```javascript
output: 'export',
images: {
  unoptimized: true,
}
```

### 问题 3: 路由不工作

**原因**: 静态站点需要手动处理路由

**解决**:
在 `vercel.json` 添加：
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### 问题 4: 样式丢失

**原因**: Tailwind CSS 未正确构建

**解决**:
```bash
# 清除缓存重新构建
rm -rf .next out
npm run build
```

## 📈 性能优化建议

1. **启用 Vercel Analytics**
   - 在 Vercel Dashboard 中启用
   - 监控页面性能和访问量

2. **优化图片**
   - 添加实际的 App 截图
   - 使用 WebP 格式
   - 压缩图片大小

3. **CDN 缓存**
   - Vercel 自动提供全球 CDN
   - 静态资源自动优化

4. **Lighthouse 测试**
   ```bash
   # 安装 Lighthouse
   npm install -g lighthouse

   # 运行测试
   lighthouse https://你的域名.vercel.app
   ```

## 🔄 更新网站

### 通过 Git 推送自动部署

```bash
# 修改文件后
git add website/
git commit -m "update: 更新网站内容"
git push origin main

# Vercel 自动检测并部署
```

### 回滚到上一个版本

1. 在 Vercel Dashboard 找到项目
2. 点击 "Deployments"
3. 找到之前的部署
4. 点击 "..." 菜单
5. 选择 "Promote to Production"

## 📞 获取帮助

- Vercel 文档: https://vercel.com/docs
- Next.js 文档: https://nextjs.org/docs
- GitHub Issues: 在仓库中提交问题

---

**准备好了吗？让我们开始部署！** 🚀
