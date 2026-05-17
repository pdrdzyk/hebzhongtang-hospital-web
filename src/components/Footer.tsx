import Link from "next/link";
import { navLinks, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal-600">
                <span className="font-serif text-lg font-bold text-white">中</span>
              </div>
              <div>
                <p className="font-serif text-lg font-semibold text-white">{site.name}</p>
                <p className="text-sm text-teal-400">{site.brand}</p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
              成立于 {site.founded} 年，专注糖尿病及并发症防治三十余年。河北省、石家庄市医保定点医院。
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
              快速导航
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-teal-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
              联系我们
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="text-slate-500">咨询热线</span>
                <br />
                <a href={`tel:${site.phoneRaw}`} className="text-teal-400 hover:text-teal-300">
                  {site.phone}
                </a>
              </li>
              <li>
                <span className="text-slate-500">地址</span>
                <br />
                {site.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name} · 保留所有权利</p>
          <p>河北省医保定点 · 石家庄市医保定点</p>
        </div>
      </div>
    </footer>
  );
}
