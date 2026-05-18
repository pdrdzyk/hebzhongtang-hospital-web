import Link from "next/link";
import { footerInstitutional } from "@/lib/portal-content";
import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t-4 border-mayo-blue bg-mayo-navy text-white">
      <div className="border-b border-white/15">
        <div className="inst-container flex flex-col gap-4 py-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[18px] font-bold">{site.name}</p>
            <p className="mt-1 text-[13px] text-white/70">{site.brandFull}</p>
          </div>
          <div className="lg:text-right">
            <a href={`tel:${site.phoneRaw}`} className="font-serif text-[26px] font-semibold hover:text-white/90">
              {site.phone}
            </a>
            <p className="mt-1 text-[12px] text-white/55">{site.hours}</p>
            <Link
              href="/contact#appointment"
              className="mt-3 inline-block border border-white/35 px-4 py-2 text-[13px] font-semibold hover:bg-white/10"
            >
              预约门诊
            </Link>
          </div>
        </div>
      </div>

      <div className="inst-container py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {footerInstitutional.map((col) => (
            <div key={col.title}>
              <p className="text-[12px] font-bold uppercase tracking-wide text-white/50">{col.title}</p>
              <ul className="mt-3 space-y-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-[13px] text-white/85 hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-2 border-t border-white/10 pt-6 text-[12px] text-white/45 sm:grid-cols-3">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <p>{site.address}</p>
          <p>网站信息仅供参考，不能替代诊疗建议。</p>
        </div>
      </div>
    </footer>
  );
}
