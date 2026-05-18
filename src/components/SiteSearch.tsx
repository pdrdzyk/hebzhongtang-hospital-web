"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SiteSearch({ className = "" }: { className?: string }) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = query.trim();
    if (q) {
      router.push(`/education?q=${encodeURIComponent(q)}`);
    } else {
      router.push("/education");
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-1 ${className}`} role="search">
      <label htmlFor="site-search" className="sr-only">
        搜索健康知识
      </label>
      <input
        id="site-search"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="搜索疾病、症状、健康管理…"
        className="min-w-0 flex-1 border border-mayo-border bg-white px-4 py-2.5 text-[15px] text-mayo-text placeholder:text-mayo-text-light focus:border-mayo-blue focus:outline-none focus:ring-1 focus:ring-mayo-blue"
      />
      <button
        type="submit"
        className="shrink-0 bg-mayo-blue px-5 py-2.5 text-[14px] font-semibold text-white hover:bg-mayo-blue-hover"
      >
        搜索
      </button>
    </form>
  );
}
