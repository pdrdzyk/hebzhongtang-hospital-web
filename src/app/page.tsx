
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import SectionIntro from "@/components/SectionIntro";
import {
  articles,
  complicationSpecialties,
  credibilityItems,
  diabetesCareSystem,
  doctors,
  methodologySteps,
  patientEntryCards,
  patientGuideHome,
  site,
  stats,
} from "@/lib/content";

function EntryIcon({ type }: { type: string }) {
  const paths: Record<string, string> = {
    glucose: "M12 4v16M4 12h16",
    shield: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622",
    nerve: "M13 10V3L4 14h7v7l9-11h-7z",
    track: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10",
    guide: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
  };
  return (
    <svg className="h-5 w-5 text-blue-medical" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d={paths[type] ?? paths.guide} />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      {/* 2. Hero */}
      <section className="hero-institutional">
                <div className="mx-auto max-w-[1280px] px-4 py-12 lg:px-8 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="text-[12px] font-medium uppercase tracking-widest text-blue-medical">
                {site.brandFull} · 成立于 {site.founded} 年
              </p>
              <h1 className="mt-4 font-serif text-4xl font-medium leading-tight text-ink lg:text-[2.75rem]">
                {site.mission}
              </h1>
              <p className="prose-calm mt-5 text-lg text-ink-muted">{site.missionSub}</p>
              <p className="prose-calm mt-4 max-w-2xl text-[15px] text-ink-muted">{site.heroDetail}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact#appointment" className="bg-blue-deep px-6 py-3 text-[13px] font-medium text-white hover:bg-blue-medical">
                  预约咨询
                </Link>
                <Link href="/services#methodology" className="border border-line bg-white px-6 py-3 text-[13px] font-medium text-ink hover:border-blue-medical/40">
                  了解糖尿病管理体系
                </Link>
                <Link href="/patient-guide" className="border border-transparent px-6 py-3 text-[13px] font-medium text-blue-medical underline-offset-4 hover:underline">
                  查看就诊指南
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
                            <div className="grid grid-cols-2 gap-3">
                {stats.map((s) => (
                  <div key={s.label} className="card-institutional p-5">
                    <p className="font-serif text-2xl text-blue-deep">{s.value}</p>
                    <p className="mt-1 text-[12px] text-ink-faint">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Patient entry */}
      <section className="section-pad border-b border-line bg-white">
        <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
          <SectionIntro
            eyebrow="患者入口"
            title="您需要什么帮助？"
            description="根据您的情况选择路径，快速找到相关专科与服务说明。"
          />
                              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {patientEntryCards.map((card) => (
              <Link key={card.title} href={card.href} className="card-institutional group flex flex-col p-5">
                <EntryIcon type={card.icon} />
                <h3 className="mt-4 text-[15px] font-semibold text-ink group-hover:text-blue-medical">{card.title}</h3>
                <p className="prose-calm mt-2 flex-1 text-sm text-ink-muted">{card.desc}</p>
                <span className="mt-4 text-[12px] font-medium text-blue-medical">进入 →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Diabetes care system */}
      <section className="section-pad bg-paper-warm">
        <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
          <SectionIntro
            eyebrow="糖尿病照护体系"
            title="核心照护领域"
            description="糖尿病管理不仅是降糖，而是覆盖生活方式、用药、筛查与随访的系统工程。"
            href="/care/diabetes"
            linkLabel="糖尿病诊疗详情"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {diabetesCareSystem.map((item, i) => (
              <Link key={item.title} href={item.href} className="card-institutional group p-6 lg:p-7">
                <span className="text-[11px] font-medium text-ink-faint">0{i + 1}</span>
                <h3 className="mt-2 text-lg font-medium text-ink group-hover:text-blue-medical">{item.title}</h3>
                <p className="prose-calm mt-3 text-sm text-ink-muted">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Complications */}
      <section className="section-pad border-y border-line bg-white">
        <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionIntro
                eyebrow="并发症专科"
                title="糖尿病不只是血糖问题"
                description="长期高血糖可损害神经、肾脏、视网膜、足部与心脑血管。我院设立独立专科进行筛查与干预。"
                href="/care/complications"
              />
            </div>
            <div className="lg:col-span-8">
              <ul className="divide-y divide-line border border-line bg-paper">
                {complicationSpecialties.map((c) => (
                  <li key={c.title}>
                    <Link href={c.href} className="flex flex-col gap-2 p-6 transition hover:bg-paper-warm sm:flex-row sm:items-start sm:justify-between">
                      <span className="font-medium text-ink">{c.title}</span>
                      <span className="text-sm text-ink-muted sm:max-w-md sm:text-right">{c.desc}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Methodology */}
      <section id="methodology" className="section-pad bg-paper-warm">
        <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
          <SectionIntro
            eyebrow="中唐体系"
            title="疏肝调气 · 六位一体"
            description="结构化慢病管理路径 — 从预防到长期追踪，而非单一口号。"
            href="/services#methodology"
          />
          <div className="mt-10 overflow-hidden border border-line bg-white">
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
              {methodologySteps.map((m) => (
                <div key={m.step} className="border-b border-r border-line p-6 last:border-b-0 md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0">
                  <span className="font-serif text-sm text-blue-medical">{m.step}</span>
                  <h3 className="mt-2 font-medium text-ink">{m.title}</h3>
                  <p className="prose-calm mt-2 text-sm text-ink-muted">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />

      {/* 7. Doctors */}
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
          <SectionIntro eyebrow="医护团队" title="临床专家" href="/doctors" linkLabel="查看全部医师" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {doctors.map((d) => (
              <article key={d.name} className="card-institutional flex flex-col p-6">
                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-soft font-serif text-xl text-blue-deep">
                  {d.name.slice(0, 1)}
                </div>
                <h3 className="mt-4 font-medium text-ink">{d.name}</h3>
                <p className="text-sm text-blue-medical">{d.title}</p>
                <p className="mt-1 text-[12px] font-medium text-ink-faint">{d.specialty}</p>
                <p className="mt-2 text-[13px] text-ink-muted">{d.focus}</p>
                <Link href="/contact#appointment" className="mt-auto pt-4 text-[12px] font-medium text-blue-medical hover:underline">
                  预约咨询 →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Education */}
      <section className="section-pad border-t border-line bg-paper-warm">
        <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
          <SectionIntro
            eyebrow="健康教育"
            title="慢病健康知识中心"
            description="由临床团队整理的患者教育资源，帮助您理解糖尿病与并发症。"
            href="/education"
            linkLabel="进入知识中心"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {articles.map((a) => (
              <article key={a.title} className="card-institutional p-6">
                <p className="text-[11px] text-ink-faint">{a.category} · {a.date}</p>
                <h3 className="mt-3 font-serif text-xl text-ink">
                  <Link href={a.href} className="hover:text-blue-medical">{a.title}</Link>
                </h3>
                <p className="prose-calm mt-3 text-sm text-ink-muted">{a.excerpt}</p>
                <Link href={a.href} className="mt-4 inline-block text-[13px] font-medium text-blue-medical">阅读 →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Trust */}
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
          <SectionIntro
            eyebrow="机构与信誉"
            title="临床与学术积累"
            description="安静呈现可验证的专业基础 — 非营销口号。"
            href="/research"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {credibilityItems.map((c) => (
              <div key={c.title} className="border-l-4 border-blue-medical/40 bg-paper-warm p-6 pl-5">
                <h3 className="font-medium text-ink">{c.title}</h3>
                <p className="prose-calm mt-2 text-sm text-ink-muted">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Patient guide */}
      <section className="section-pad border-t border-line bg-paper-warm">
        <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
          <SectionIntro eyebrow="患者指南" title="就诊实用信息" href="/patient-guide" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {patientGuideHome.map((g) => (
              <Link key={g.title} href={g.href} className="card-institutional block p-6">
                <h3 className="font-medium text-ink">{g.title}</h3>
                <p className="prose-calm mt-2 text-sm text-ink-muted">{g.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Location */}
      <section className="section-pad border-t border-line bg-white">
        <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <SectionIntro eyebrow="到院指引" title="院区与联系" />
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="card-institutional p-6">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-faint">主院区</p>
                <p className="mt-2 text-ink">{site.address}</p>
              </div>
              <div className="card-institutional p-6">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-faint">裕华院区</p>
                <p className="mt-2 text-ink">{site.addressAlt}</p>
              </div>
              <div className="card-institutional p-6 sm:col-span-2">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-faint">全国咨询热线</p>
                <a href={`tel:${site.phoneRaw}`} className="mt-2 block font-serif text-3xl text-blue-deep hover:text-blue-medical">
                  {site.phone}
                </a>
                <p className="mt-2 text-sm text-ink-muted">{site.hours}</p>
                <Link href="/contact" className="mt-4 inline-block text-[13px] font-medium text-blue-medical">完整联系方式 →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
