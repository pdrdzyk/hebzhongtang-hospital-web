
import Link from "next/link";
import { site } from "@/lib/content";

export default function CtaBand() {
  return (
    <section className="border-y border-line bg-blue-deep text-paper">
      <div className="mx-auto max-w-[1280px] px-4 py-10 lg:flex lg:items-center lg:justify-between lg:px-8 lg:py-12">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-widest text-paper/60">预约与咨询</p>
          <p className="mt-2 font-serif text-2xl">准备就诊？我们可协助您安排</p>
          <p className="mt-2 text-sm text-paper/75">{site.hours}</p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3 lg:mt-0">
          <a href={`tel:${site.phoneRaw}`} className="border border-paper/30 px-6 py-3 text-[13px] font-medium hover:bg-paper/10">
            致电 {site.phone}
          </a>
          <Link href="/contact#appointment" className="bg-paper px-6 py-3 text-[13px] font-medium text-ink hover:bg-paper-warm">
            预约与到院指引
          </Link>
          <Link href="/patient-guide" className="px-6 py-3 text-[13px] text-paper/90 underline-offset-4 hover:underline">
            患者指南
          </Link>
        </div>
      </div>
    </section>
  );
}
