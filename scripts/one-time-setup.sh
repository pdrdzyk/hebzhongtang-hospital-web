#!/usr/bin/env bash
# 一次性配置：完成后，以后只需 git push（或运行 ./scripts/publish.sh）即可自动在 Vercel 看到更新。
set -euo pipefail
cd "$(dirname "$0")/.."
export PATH="/opt/homebrew/bin:/usr/local/bin:$PATH"

REPO="${GITHUB_REPO:-pdrdzyk/hebzhongtang-hospital-web}"

echo "=== 石家庄糖尿病医院官网 · 一次性部署配置 ==="
echo ""

if ! gh auth status &>/dev/null; then
  echo "第 1 步：登录 GitHub（浏览器会打开，按提示完成）"
  gh auth login -h github.com -p ssh -w
fi

echo ""
echo "第 2 步：在 GitHub 创建仓库并推送代码"
if gh repo view "$REPO" &>/dev/null; then
  echo "仓库已存在: https://github.com/$REPO"
else
  gh repo create "$REPO" --public --source=. --remote=origin --push
  echo "已创建并推送: https://github.com/$REPO"
  exit 0
fi

git remote add origin "git@github.com:${REPO}.git" 2>/dev/null || \
  git remote set-url origin "git@github.com:${REPO}.git"
git push -u origin main

echo ""
echo "第 3 步：关联 Vercel（只需做一次）"
echo "  1. 打开 https://vercel.com/new"
echo "  2. 选择 Import Git Repository → $REPO"
echo "  3. Framework 选 Next.js，直接 Deploy"
echo ""
echo "完成后，每次执行 ./scripts/publish.sh 或 git push，Vercel 会自动更新线上网站。"
