# 石家庄糖尿病医院 · 官方网站

基于 [hebzhongtang.com](http://www.hebzhongtang.com/) 官方信息重构的高端医疗品牌官网。技术栈：Next.js 15、React 19、Tailwind CSS 4。

## 本地开发

```bash
npm install
npm run dev
```

浏览器打开 [http://localhost:3000](http://localhost:3000)。

## 部署到 Vercel（连接 GitHub）

1. 在 GitHub 新建仓库，将本项目推送上去：

```bash
cd hebzhongtang-hospital-web
git add .
git commit -m "feat: 石家庄糖尿病医院官网"
git branch -M main
git remote add origin https://github.com/你的用户名/hebzhongtang-hospital-web.git
git push -u origin main
```

2. 登录 [Vercel](https://vercel.com)，点击 **Add New Project**。
3. 选择刚创建的 GitHub 仓库，框架会自动识别为 **Next.js**。
4. 保持默认构建设置（Build Command: `next build`，Output: 默认），点击 **Deploy**。
5. 部署完成后可获得 `*.vercel.app` 域名；在 Vercel 项目 **Settings → Domains** 中绑定自有域名（如 `www.hebzhongtang.com`）。

每次推送到 `main` 分支，Vercel 会自动重新构建并发布。

## 项目结构

- `src/app/` — 页面路由（首页、医院介绍、治疗特色、医师团队、联系我们）
- `src/components/` — 导航、页脚、区块标题等组件
- `src/lib/content.ts` — 医院文案与数据（电话、地址、专家、科室等）

## 内容说明

网站信息来源于石家庄糖尿病医院官网，包括：

- 全国咨询热线：400-812-1608
- 疏肝调气、六位一体防治模式
- 医师团队与特色科室
- 河北省 / 石家庄市医保定点资质

如需更新文案，请编辑 `src/lib/content.ts`。
