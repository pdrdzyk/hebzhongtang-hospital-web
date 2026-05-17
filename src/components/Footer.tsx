import Link from "next/link";
import { navLinks, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper-warm">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-start">
          <div className="max-w-sm">
            <p className="text-[13px] font-medium tracking-[0.12em] text-ink uppercase">
              {site.brand}
            </p>
            <p className="mt-2 font-serif text-lg text-ink">{site.name}</p>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              成立于 {site.founded} 年 · 河北省、石家庄市医保定点
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="text-[11px] font-medium tracking-widest text-ink-faint uppercase">
                导航
              </p>
              <ul className="mt-4 space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-muted transition hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-medium tracking-widest text-ink-faint uppercase">
                联系
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                <li>
                  <a href={`tel:${site.phoneRaw}`} className="hover:text-ink">
                    {site.phone}
                  </a>
                </li>
                <li>{site.address}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-line pt-8 text-[12px] text-ink-faint sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <p>本网站信息仅供参考，具体诊疗请遵医嘱。</p>
        </div>
      </div>
    </footer>
  );
}
