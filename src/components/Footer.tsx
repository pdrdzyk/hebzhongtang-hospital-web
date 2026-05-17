import Link from "next/link";
import { footerColumns, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-[13px] font-medium tracking-wide">{site.brand}</p>
            <p className="mt-2 font-serif text-xl">{site.name}</p>
            <p className="mt-4 text-sm leading-relaxed text-paper/70">{site.brandFull}</p>
            <p className="mt-6 text-sm text-paper/70">成立于 {site.founded} 年</p>
            <a href={`tel:${site.phoneRaw}`} className="mt-4 block text-lg text-paper hover:text-blue-soft">{site.phone}</a>
          </div>
          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <p className="text-[11px] font-medium tracking-widest text-paper/50 uppercase">{col.title}</p>
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
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-paper/10 pt-8 text-[12px] text-paper/50 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <p>{site.address}</p>
          <p>本网站信息仅供参考，具体诊疗请遵医嘱。</p>
        </div>
      </div>
    </footer>
  );
}
