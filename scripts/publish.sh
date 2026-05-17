#!/usr/bin/env bash
# 与 tang-life-sim 相同：push 到 GitHub 后，Vercel 会自动构建并上线。
set -euo pipefail
cd "$(dirname "$0")/.."

export PATH="/opt/homebrew/bin:/usr/local/bin:$PATH"

if ! git remote get-url origin &>/dev/null; then
  echo "请先设置 GitHub 远程仓库，例如："
  echo "  git remote add origin git@github.com:pdrdzyk/hebzhongtang-hospital-web.git"
  exit 1
fi

if [[ -n "$(git status --porcelain)" ]]; then
  git add -A
  git commit -m "${1:-chore: update site}" || true
fi

git push origin main
echo "已推送到 GitHub。若 Vercel 已关联此仓库，约 1–2 分钟后线上会自动更新。"
