
import Link from "next/link";
import { footerColumns, site, utilityNav } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-paper">
      <div className="border-b border-paper/10 bg-blue-deep/30">
        <div className="mx-auto max-w-[1280px] px-4 py-8 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div>
              <p className="font-serif text-xl">{site.name}</p>
              <p className="mt-1 text-sm text-paper/70">{site.brandFull}</p>
            </div>
            <a href={`tel:${site.phoneRaw}`} className="text-2xl font-light tracking-wide hover:text-blue-soft">
              {site.phone}
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1280px] px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-paper/50">{col.title}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-paper/80 hover:text-paper">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-paper/10 pt-8 text-[12px] text-paper/50">
          {utilityNav.map((u) => (
            <Link key={u.href} href={u.href} className="hover:text-paper/80">{u.label}</Link>
          ))}
        </div>
          <div className="mt-8 flex flex-col gap-2 text-[12px] text-paper/45 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name} · 保留所有权利</p>
          <p>{site.address}</p>
          <p>本网站信息仅供参考，不能替代诊疗建议。</p>
        </div>
      </div>
    </footer>
  );
}
