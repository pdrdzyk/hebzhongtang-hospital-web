import Link from "next/link";
import { site } from "@/lib/content";

export default function CtaBand({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`border-y border-line bg-blue-soft/50 ${compact ? "py-10" : "py-14 lg:py-16"}`}>
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 lg:flex-row lg:items-center lg:px-10">
        <div>
          <p className="text-[11px] font-medium tracking-widest text-ink-faint uppercase">预约与咨询</p>
          <p className="mt-2 font-serif text-xl text-ink md:text-2xl">如需就诊，请提前电话预约</p>
          <p className="mt-2 text-sm text-ink-muted">{site.hours}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a
            href={`tel:${site.phoneRaw}`}
            className="inline-flex items-center justify-center border border-ink/20 bg-paper px-6 py-3 text-[13px] font-medium text-ink transition hover:border-ink/40"
          >
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-ink px-6 py-3 text-[13px] font-medium text-paper transition hover:bg-ink/90"
          >
            联系与到院指引
          </Link>
        </div>
      </div>
    </div>
  );
}
