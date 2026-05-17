# 石家庄糖尿病医院 · 官方网站

基于 [hebzhongtang.com](http://www.hebzhongtang.com/) 官方信息重构的高端医疗品牌官网。技术栈：Next.js 15、React 19、Tailwind CSS 4。

## 本地开发

```bash
npm install
npm run dev
```

浏览器打开 [http://localhost:3000](http://localhost:3000)。

## 和 tang-life-sim 一样的自动更新方式

`tang-life-sim` 能「改完就上线」，是因为这条链路已经打通：

```
本地改代码 → git push 到 GitHub → Vercel 监听仓库 → 自动构建并发布
```

对应关系：

| tang-life-sim | 本医院官网 |
|---------------|------------|
| 仓库 `pdrdzyk/life-sim-game-tang` | 仓库 `pdrdzyk/hebzhongtang-hospital-web`（待创建） |
| 线上 `life-sim-game-tang.vercel.app` | 例如 `hebzhongtang-hospital-web.vercel.app` |

**只需配置一次**，之后你不需要再连 Vercel、不用手动 Deploy；我（或你）`git push` 后约 1–2 分钟线上就会更新。

### 一次性配置（约 5 分钟）

在项目目录执行：

```bash
cd ~/Desktop/hebzhongtang-hospital-web
./scripts/one-time-setup.sh
```

脚本会：登录 GitHub → 创建仓库并推送 → 提示你在 Vercel 导入该仓库（和当初导入 `life-sim-game-tang` 一样）。

Vercel 导入步骤：

1. 打开 [vercel.com/new](https://vercel.com/new)
2. **Import** → 选 `hebzhongtang-hospital-web`
3. 框架识别为 **Next.js**，直接 **Deploy**

### 以后的日常（和 tang-life-sim 一样）

```bash
./scripts/publish.sh "更新：改了首页文案"
```

或普通 `git push origin main` 即可，Vercel 会自动重新构建。

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
