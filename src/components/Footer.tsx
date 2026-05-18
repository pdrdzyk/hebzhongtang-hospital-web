import Link from "next/link";
import { footerColumns, idLikeToLinks, site, utilityNav } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t-4 border-mayo-blue bg-mayo-navy text-white">
      <div className="border-b border-white/15 bg-[#001a33]">
        <div className="mx-auto max-w-[1400px] px-4 py-8 lg:flex lg:items-center lg:justify-between lg:px-6 lg:py-10">
          <div>
            <p className="font-serif text-[24px] font-semibold">{site.name}</p>
            <p className="mt-1 text-[14px] text-white/70">{site.brandFull}</p>
            <p className="mt-2 text-[13px] text-white/55">
              成立于 {site.founded} 年 · 河北省、石家庄市医保定点
            </p>
          </div>
          <div className="mt-6 lg:mt-0 lg:text-right">
            <p className="text-[12px] font-bold uppercase tracking-widest text-white/50">
              全国咨询热线
            </p>
            <a
              href={`tel:${site.phoneRaw}`}
              className="mt-2 block font-serif text-[32px] font-semibold hover:text-white/90"
            >
              {site.phone}
            </a>
            <Link
              href="/contact#appointment"
              className="mt-3 inline-block border border-white/40 px-5 py-2.5 text-[13px] font-semibold hover:bg-white/10"
            >
              预约就诊
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-4 py-12 lg:px-6 lg:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className="text-[12px] font-bold uppercase tracking-widest text-white/50">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-[14px] text-white/85 hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-white/15 pt-8">
          <p className="text-[12px] font-bold uppercase tracking-wide text-white/45">我想…</p>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
            {idLikeToLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-[13px] text-white/80 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/10 pt-6">
          {utilityNav.map((u) => (
            <Link key={u.href} href={u.href} className="text-[12px] text-white/55 hover:text-white/85">
              {u.label}
            </Link>
          ))}
        </div>

        <div className="mt-8 grid gap-3 border-t border-white/10 pt-8 text-[12px] text-white/45 sm:grid-cols-2 lg:grid-cols-3">
          <p>© {new Date().getFullYear()} {site.name} · 保留所有权利</p>
          <p>{site.address}</p>
          <p>本网站信息仅供参考，不能替代专业诊疗建议。急症请拨打 120。</p>
        </div>
      </div>
    </footer>
  );
}
