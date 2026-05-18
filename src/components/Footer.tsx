import Link from "next/link";
import { footerInstitutional, patientTaskBar } from "@/lib/portal-content";
import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t-4 border-mayo-blue bg-mayo-navy text-white">
      <div className="border-b border-white/15 bg-[#001a33]">
        <div className="mx-auto max-w-[1400px] px-4 py-6 lg:flex lg:items-center lg:justify-between lg:px-6">
          <div>
            <p className="text-[18px] font-bold">{site.name}</p>
            <p className="mt-1 text-[13px] text-white/70">{site.brandFull}</p>
          </div>
          <div className="mt-4 lg:mt-0 lg:text-right">
            <a href={`tel:${site.phoneRaw}`} className="text-[28px] font-bold">
              {site.phone}
            </a>
            <p className="mt-1 text-[12px] text-white/55">{site.hours}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-4 py-8 lg:px-6">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-wide text-white/45">患者快速入口</p>
        <div className="mb-8 flex flex-wrap gap-2">
          {patientTaskBar.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="border border-white/25 px-3 py-1.5 text-[12px] text-white/85 hover:bg-white/10"
            >
              {t.label}
            </Link>
          ))}
        </div>

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
