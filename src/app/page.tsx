import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import SectionIntro from "@/components/SectionIntro";
import MetabolicVisual from "@/components/MetabolicVisual";
import {
  articles,
  complicationAreas,
  diabetesCareAreas,
  doctors,
  patientGuideItems,
  patientJourney,
  researchHighlights,
  site,
  trustPoints,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-mesh border-b border-line">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-24">
          <div className="max-w-xl">
            <p className="text-[11px] font-medium tracking-[0.18em] text-ink-faint uppercase">
              {site.brandFull} · 成立于 {site.founded} 年
            </p>
            <h1 className="mt-6 font-serif text-4xl font-medium leading-tight text-ink md:text-5xl">
              {site.mission}
            </h1>
            <p className="prose-calm mt-6 text-lg text-ink-muted">{site.missionSub}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex bg-ink px-6 py-3 text-[13px] font-medium text-paper hover:bg-ink/90"
              >
                预约咨询
              </Link>
              <Link
                href="/care/diabetes"
                className="inline-flex border border-ink/20 px-6 py-3 text-[13px] text-ink hover:border-ink/40"
              >
                了解糖尿病诊疗
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <MetabolicVisual className="h-[min(60vw,380px)] w-[min(60vw,380px)] opacity-80" />
          </div>
        </div>
      </section>

      {/* Patient journey */}
      <section className="border-b border-line bg-paper-warm py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-center text-[11px] font-medium tracking-widest text-ink-faint uppercase">
            就诊流程
          </p>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {patientJourney.map((j) => (
              <li key={j.step}>
                <span className="font-serif text-sm text-ink-faint">{j.step}</span>
                <h2 className="mt-2 text-[15px] font-medium text-ink">{j.title}</h2>
                <p className="prose-calm mt-2 text-sm text-ink-muted">{j.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Trust */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <SectionIntro
              eyebrow="为何选择我们"
              title="专注慢病，系统照护"
              description="三十年糖尿病专科实践。我们提供可预期的长期管理路径，而非单次就诊营销。"
              href="/about"
            />
            <ul className="space-y-6 border-l border-line pl-8">
              {trustPoints.map((t) => (
                <li key={t.title}>
                  <h3 className="text-[15px] font-medium text-ink">{t.title}</h3>
                  <p className="prose-calm mt-1 text-sm text-ink-muted">{t.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand compact />

      {/* Diabetes care */}
      <section className="border-t border-line bg-paper-warm py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionIntro
            eyebrow="糖尿病诊疗"
            title="糖尿病核心照护领域"
            description="从门诊评估到长期随访，覆盖代谢管理的关键环节。"
            href="/care/diabetes"
            linkLabel="糖尿病诊疗详情"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {diabetesCareAreas.map((a) => (
              <Link
                key={a.title}
                href={a.href}
                className="group block border border-line bg-paper p-6 transition hover:border-blue-medical/30"
              >
                <h3 className="text-[15px] font-medium text-ink group-hover:text-blue-medical">
                  {a.title}
                </h3>
                <p className="prose-calm mt-2 text-sm text-ink-muted">{a.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Complications */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionIntro
            eyebrow="并发症专科"
            title="并发症系统化防治"
            description="独立专科设置，针对靶器官损害进行筛查、干预与长期随访。"
            href="/care/complications"
            linkLabel="并发症专科一览"
          />
          <ul className="mt-12 divide-y divide-line border-y border-line">
            {complicationAreas.map((a) => (
              <li key={a.title}>
                <Link
                  href={a.href}
                  className="flex flex-col gap-2 py-5 transition hover:bg-paper-warm/80 sm:flex-row sm:items-center sm:justify-between sm:px-4"
                >
                  <span className="text-[15px] font-medium text-ink">{a.title}</span>
                  <span className="text-sm text-ink-muted sm:max-w-md sm:text-right">{a.desc}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Doctors */}
      <section className="border-t border-line bg-paper-warm py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionIntro
            eyebrow="医护团队"
            title="临床专家"
            description="学科带头人领衔，糖尿病及并发症专科诊疗团队。"
            href="/doctors"
            linkLabel="查看团队"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {doctors.map((d) => (
              <div key={d.name} className="border border-line bg-paper p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-soft text-sm font-medium text-blue-medical">
                  {d.name.slice(0, 1)}
                </div>
                <h3 className="mt-4 font-medium text-ink">{d.name}</h3>
                <p className="text-sm text-blue-medical">{d.title}</p>
                <p className="mt-1 text-xs text-ink-faint">{d.role}</p>
                <p className="prose-calm mt-3 text-sm text-ink-muted">{d.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient guide */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionIntro
            eyebrow="患者指南"
            title="就诊前，您需要了解什么"
            href="/patient-guide"
            linkLabel="完整患者指南"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {patientGuideItems.map((g) => (
              <Link key={g.title} href={g.href} className="block border-l-2 border-blue-medical/40 py-2 pl-6 hover:border-blue-medical">
                <h3 className="text-[15px] font-medium text-ink">{g.title}</h3>
                <p className="prose-calm mt-2 text-sm text-ink-muted">{g.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="border-t border-line bg-paper-warm py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionIntro
            eyebrow="健康教育"
            title="科普与患者资源"
            href="/education"
            linkLabel="健康教育资源库"
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {articles.map((a) => (
              <article key={a.title} className="flex flex-col border-t border-ink/15 pt-6">
                <p className="text-[11px] text-ink-faint">{a.category} · {a.date}</p>
                <h3 className="mt-3 font-serif text-lg text-ink">
                  <Link href={a.href} className="hover:text-blue-medical">{a.title}</Link>
                </h3>
                <p className="prose-calm mt-2 flex-1 text-sm text-ink-muted">{a.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionIntro
            eyebrow="科研学术"
            title="临床研究与学术传承"
            description="科研鉴定、专著出版与持续教学培训，支撑临床决策的可信度。"
            href="/research"
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {researchHighlights.map((r) => (
              <div key={r.title} className="flex gap-6">
                <span className="w-14 shrink-0 font-serif text-lg text-ink-faint">{r.year}</span>
                <div>
                  <h3 className="text-[15px] font-medium text-ink">{r.title}</h3>
                  <p className="prose-calm mt-2 text-sm text-ink-muted">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="border-t border-line bg-paper-warm py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2">
            <SectionIntro eyebrow="到院指引" title="院区与联系方式" />
            <div className="space-y-6 text-[15px] text-ink-muted">
              <div>
                <p className="text-[11px] font-medium tracking-widest text-ink-faint uppercase">主院区</p>
                <p className="mt-2 text-ink">{site.address}</p>
              </div>
              <div>
                <p className="text-[11px] font-medium tracking-widest text-ink-faint uppercase">裕华院区</p>
                <p className="mt-2 text-ink">{site.addressAlt}</p>
              </div>
              <div>
                <p className="text-[11px] font-medium tracking-widest text-ink-faint uppercase">咨询热线</p>
                <a href={`tel:${site.phoneRaw}`} className="mt-2 block font-serif text-2xl text-ink hover:text-blue-medical">
                  {site.phone}
                </a>
              </div>
              <Link href="/contact" className="inline-block text-[13px] font-medium text-blue-medical underline-offset-4 hover:underline">
                查看完整联系信息 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
