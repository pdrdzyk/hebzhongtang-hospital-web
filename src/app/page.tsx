import Link from "next/link";
import MetabolicVisual from "@/components/MetabolicVisual";
import {
  careSystem,
  metabolicDomains,
  site,
  trustSignals,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* —— Hero —— */}
      <section className="hero-mesh min-h-[92vh] pt-24 lg:pt-28">
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 pb-24 lg:grid-cols-2 lg:gap-8 lg:px-10 lg:pb-32">
          <div className="animate-fade-in max-w-xl">
            <p className="text-[11px] font-medium tracking-[0.2em] text-ink-faint uppercase">
              {site.brandFull}
            </p>
            <h1 className="mt-8 font-serif text-[2rem] font-medium leading-[1.2] tracking-tight text-ink md:text-[2.75rem] lg:text-5xl">
              {site.mission}
            </h1>
            <p className="mt-6 text-lg font-light tracking-wide text-ink-muted">
              {site.missionEn}
            </p>
            <p className="prose-calm mt-8 max-w-md text-[15px] text-ink-muted">
              从治疗到长期健康管理。我们关注的不仅是血糖数字，而是代谢系统本身的稳定与可预期。
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-8">
              <Link
                href="/services"
                className="text-[13px] text-ink underline-offset-[6px] hover:underline"
              >
                了解诊疗体系
              </Link>
              <Link
                href="/contact"
                className="text-[13px] text-ink-muted underline-offset-[6px] hover:text-ink hover:underline"
              >
                联系
              </Link>
            </div>
          </div>

          
          <div className="relative flex justify-center lg:justify-end">
            <MetabolicVisual className="h-[min(70vw,420px)] w-[min(70vw,420px)] opacity-90" />
          </div>
        </div>
      </section>

      {/* —— Chronic disease philosophy —— */}
      <section className="border-t border-line bg-paper-warm py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-[11px] font-medium tracking-[0.2em] text-ink-faint uppercase">
              慢病哲学
            </p>
            <h2 className="mt-4 font-serif text-3xl font-medium leading-snug text-ink md:text-4xl">
              慢性代谢病是一个系统问题
            </h2>
            <p className="prose-calm mt-6 text-[15px] text-ink-muted">
              血糖升高往往是全身代谢、神经、微循环与靶器官受累的综合表现。
              有效的管理需要理解各系统如何相互影响，而非孤立地处理单一指标。
            </p>
          </div>

          <div className="system-grid mt-20 border-t border-line pt-1">
            <div className="grid gap-px bg-line md:grid-cols-2 lg:grid-cols-3">
              {metabolicDomains.map((d) => (
                <article
                  key={d.id}
                  className="bg-paper-warm p-8 lg:p-10 transition-colors hover:bg-paper"
                >
                  <h3 className="text-[15px] font-medium text-ink">{d.label}</h3>
                  <p className="prose-calm mt-4 text-sm text-ink-muted">{d.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* —— ZhongTang methodology —— */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <p className="text-[11px] font-medium tracking-[0.2em] text-ink-faint uppercase">
                中唐体系
              </p>
              <h2 className="mt-4 font-serif text-3xl font-medium text-ink md:text-4xl">
                不只是降糖
              </h2>
              <p className="prose-calm mt-6 text-[15px] text-ink-muted">
                疏肝调气、六位一体 — 覆盖预防、干预、并发症管理、康复、追踪与整合照护的完整路径。
              </p>
              <Link
                href="/services"
                className="mt-8 inline-block text-[13px] text-blue-medical underline-offset-4 hover:underline"
              >
                完整诊疗体系
              </Link>
            </div>

            <div className="lg:col-span-8">
              <ol className="divide-y divide-line border-y border-line">
                {careSystem.map((item) => (
                  <li
                    key={item.step}
                    className="grid grid-cols-[3rem_1fr] gap-6 py-8 first:pt-10 last:pb-10 md:grid-cols-[4rem_1fr] md:gap-10"
                  >
                    <span className="font-serif text-sm text-ink-faint">{item.step}</span>
                    <div>
                      <h3 className="text-[15px] font-medium text-ink">{item.title}</h3>
                      <p className="prose-calm mt-2 text-sm text-ink-muted">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* —— Trust —— */}
      <section className="border-t border-line bg-blue-soft/40 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="max-w-xl">
            <p className="text-[11px] font-medium tracking-[0.2em] text-ink-faint uppercase">
              机构
            </p>
            <h2 className="mt-4 font-serif text-3xl font-medium text-ink">
              稳定的临床与学术积累
            </h2>
            <p className="prose-calm mt-4 text-[15px] text-ink-muted">
              无需喧哗。三十年专科实践、规范医保资质与系统化并发症学科，构成可验证的信任基础。
            </p>
          </div>

          <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-14">
            {trustSignals.map((t) => (
              <div key={t.title} className="border-t border-ink/10 pt-6">
                <p className="text-[11px] tracking-widest text-ink-faint uppercase">{t.label}</p>
                <h3 className="mt-3 text-[15px] font-medium text-ink">{t.title}</h3>
                <p className="prose-calm mt-2 text-sm text-ink-muted">{t.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-line pt-12 sm:flex-row sm:items-center">
            <p className="text-sm text-ink-muted">{site.name}</p>
            <a
              href={`tel:${site.phoneRaw}`}
              className="font-serif text-xl text-ink transition hover:text-blue-medical"
            >
              {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
