import Link from "next/link";
import {
  articles,
  complicationSpecialties,
  credibilityItems,
  diabetesCareSystem,
  doctors,
  featuredCareAreas,
  healingColumns,
  healthBrowseChips,
  idLikeToLinks,
  locations,
  methodologySteps,
  patientActions,
  patientGuideHome,
  site,
  stats,
} from "@/lib/content";

function PatientActionIcon({ name }: { name: string }) {
  const cls = "mx-auto h-9 w-9 text-mayo-blue";
  if (name === "calendar")
    return (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
        <path strokeLinecap="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    );
  if (name === "doctor")
    return (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
        <path strokeLinecap="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    );
  if (name === "guide")
    return (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
        <path strokeLinecap="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    );
  return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
      <path strokeLinecap="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function SectionHeading({
  title,
  description,
  href,
  linkLabel,
}: {
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="flex flex-col gap-4 border-b border-mayo-border pb-4 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-3xl">
        <h2 className="font-serif text-[28px] font-semibold leading-tight text-mayo-navy lg:text-[32px]">
          {title}
        </h2>
        {description && (
          <p className="mt-3 text-[15px] leading-relaxed text-mayo-text-muted">{description}</p>
        )}
      </div>
      {href && linkLabel && (
        <Link
          href={href}
          className="shrink-0 text-[14px] font-semibold text-mayo-link hover:underline"
        >
          {linkLabel} →
        </Link>
      )}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero — institutional mission band */}
      <section className="mayo-hero">
        <div className="mx-auto max-w-[1400px] px-4 py-10 lg:px-6 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <p className="text-[12px] font-semibold uppercase tracking-widest text-white/75">
                {site.brandFull} · 成立于 {site.founded} 年 · 河北省医保定点
              </p>
              <h1 className="mt-4 font-serif text-[32px] font-semibold leading-tight text-white lg:text-[42px]">
                {site.mission}
              </h1>
              <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-white/90">
                {site.missionSub}
              </p>
              <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-white/75">
                {site.heroDetail}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact#appointment"
                  className="bg-white px-7 py-3.5 text-[14px] font-bold text-mayo-navy hover:bg-mayo-gray"
                >
                  预约就诊
                </Link>
                <Link
                  href="/doctors"
                  className="border border-white/50 px-7 py-3.5 text-[14px] font-semibold text-white hover:bg-white/10"
                >
                  查找医生
                </Link>
                <Link
                  href="/patient-guide"
                  className="px-4 py-3.5 text-[14px] font-medium text-white/90 underline-offset-4 hover:underline"
                >
                  患者指南
                </Link>
                <Link
                  href="/services"
                  className="px-4 py-3.5 text-[14px] font-medium text-white/90 underline-offset-4 hover:underline"
                >
                  查找医疗服务
                </Link>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="grid grid-cols-2 gap-3">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="border border-white/20 bg-white/10 px-4 py-5 backdrop-blur-sm"
                  >
                    <p className="font-serif text-2xl font-semibold text-white">{s.value}</p>
                    <p className="mt-1 text-[12px] text-white/75">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient actions — Mayo appointment / find doctor row */}
      <section className="border-b border-mayo-border bg-mayo-gray">
        <div className="mx-auto max-w-[1400px] px-4 py-6 lg:px-6">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {patientActions.map((a) => (
              <Link key={a.href} href={a.href} className="action-tile group">
                <PatientActionIcon name={a.icon} />
                <p className="mt-3 text-[16px] font-bold text-mayo-navy group-hover:text-mayo-blue">
                  {a.label}
                </p>
                <p className="mt-0.5 text-[11px] uppercase tracking-wide text-mayo-text-light">
                  {a.sub}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured care areas */}
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
          <SectionHeading
            title="查找专科与医疗服务"
            description="糖尿病诊疗、并发症防治、营养运动与长期随访 — 按您的需求选择专科入口。"
            href="/services"
            linkLabel="查看全部就诊服务"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredCareAreas.map((area) => (
              <Link key={area.title} href={area.href} className="mayo-card mayo-card-link p-5">
                <h3 className="text-[16px] font-bold text-mayo-navy">{area.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-mayo-text-muted">{area.desc}</p>
                <span className="mt-4 inline-block text-[13px] font-semibold text-mayo-link">
                  了解更多 →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Healing starts here — trust columns */}
      <section className="band-gray section-pad">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
          <SectionHeading
            title="有效照护从这里开始"
            description="通过结构化诊疗路径与长期随访，帮助患者管理血糖并预防并发症。"
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {healingColumns.map((col) => (
              <article key={col.title} className="mayo-card p-6 lg:p-8">
                <h3 className="font-serif text-xl font-semibold text-mayo-navy">{col.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-mayo-text-muted">{col.desc}</p>
                <Link
                  href={col.link.href}
                  className="mt-5 inline-block text-[14px] font-semibold text-mayo-link hover:underline"
                >
                  {col.link.label} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Diabetes care system */}
      <section className="section-pad border-t border-mayo-border bg-white">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
          <SectionHeading
            title="糖尿病整合照护"
            description="血糖管理不仅是降糖，而是覆盖生活方式、用药、筛查与随访的系统工程。"
            href="/care/diabetes"
            linkLabel="糖尿病诊疗详情"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {diabetesCareSystem.map((item, i) => (
              <Link key={item.title} href={item.href} className="mayo-card mayo-card-link p-6">
                <span className="text-[12px] font-bold text-mayo-text-light">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-[17px] font-bold text-mayo-navy">{item.title}</h3>
                <p className="mt-2 text-[14px] text-mayo-text-muted">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Complications — information-rich list */}
      <section className="band-gray section-pad">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading
                title="并发症专科"
                description="长期高血糖可损害神经、肾脏、视网膜、足部与心脑血管。设立独立专科进行筛查与干预。"
                href="/care/complications"
                linkLabel="并发症专科总览"
              />
            </div>
            <div className="lg:col-span-8">
              <ul className="mayo-card divide-y divide-mayo-border">
                {complicationSpecialties.map((c) => (
                  <li key={c.title}>
                    <Link
                      href={c.href}
                      className="flex flex-col gap-2 p-5 transition hover:bg-mayo-gray sm:flex-row sm:items-center sm:justify-between lg:p-6"
                    >
                      <span className="text-[15px] font-semibold text-mayo-navy">{c.title}</span>
                      <span className="text-[14px] text-mayo-text-muted sm:max-w-md sm:text-right">
                        {c.desc}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
          <SectionHeading
            title="中唐六位一体慢病管理体系"
            description="疏肝调气 · 预防、干预、诊疗、康复、追踪与长期管理 — 结构化路径，非单一口号。"
            href="/services#methodology"
            linkLabel="了解就诊服务体系"
          />
          <div className="mt-8 grid border border-mayo-border bg-white md:grid-cols-2 lg:grid-cols-3">
            {methodologySteps.map((m) => (
              <div
                key={m.step}
                className="border-b border-r border-mayo-border p-6 last:border-b-0 md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0"
              >
                <span className="text-[13px] font-bold text-mayo-blue">{m.step}</span>
                <h3 className="mt-2 text-[16px] font-bold text-mayo-navy">{m.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-mayo-text-muted">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment CTA band */}
      <section className="band-navy">
        <div className="mx-auto max-w-[1400px] px-4 py-10 lg:flex lg:items-center lg:justify-between lg:px-6 lg:py-12">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-widest text-white/60">
              预约与咨询
            </p>
            <p className="mt-2 font-serif text-[26px] text-white">准备就诊？我们可协助您安排</p>
            <p className="mt-2 text-[14px] text-white/75">{site.hours}</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 lg:mt-0">
            <a
              href={`tel:${site.phoneRaw}`}
              className="border border-white/40 px-6 py-3 text-[14px] font-semibold text-white hover:bg-white/10"
            >
              致电 {site.phone}
            </a>
            <Link
              href="/contact#appointment"
              className="bg-white px-6 py-3 text-[14px] font-bold text-mayo-navy hover:bg-mayo-gray"
            >
              在线预约指引
            </Link>
            <Link
              href="/patient-guide"
              className="px-6 py-3 text-[14px] font-medium text-white/90 underline-offset-4 hover:underline"
            >
              患者指南
            </Link>
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="section-pad band-gray">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
          <SectionHeading
            title="医护团队"
            description="糖尿病及并发症专科医师 — 临床经验丰富，注重长期管理而非单次就诊。"
            href="/doctors"
            linkLabel="查看全部医师"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {doctors.map((d) => (
              <article key={d.name} className="mayo-card flex flex-col p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-mayo-gray font-serif text-xl font-semibold text-mayo-navy">
                  {d.name.slice(0, 1)}
                </div>
                <h3 className="mt-4 text-[16px] font-bold text-mayo-navy">{d.name}</h3>
                <p className="text-[14px] font-semibold text-mayo-blue">{d.title}</p>
                <p className="mt-1 text-[12px] font-medium text-mayo-text-light">{d.specialty}</p>
                <p className="mt-2 flex-1 text-[13px] text-mayo-text-muted">{d.focus}</p>
                <Link
                  href="/contact#appointment"
                  className="mt-4 text-[13px] font-semibold text-mayo-link hover:underline"
                >
                  预约咨询 →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Health library */}
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
          <SectionHeading
            title="慢病健康知识库"
            description="由临床团队整理的患者教育资源 — 帮助您理解糖尿病、并发症与日常管理。"
            href="/education"
            linkLabel="进入知识中心"
          />
          <p className="mt-6 text-[13px] font-bold uppercase tracking-wide text-mayo-text-light">
            按主题浏览
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {healthBrowseChips.map((chip) => (
              <Link key={chip.label} href={chip.href} className="alpha-chip">
                {chip.label}
              </Link>
            ))}
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {articles.map((a) => (
              <article key={a.title} className="mayo-card p-6">
                <p className="text-[12px] text-mayo-text-light">
                  {a.category} · {a.date}
                </p>
                <h3 className="mt-3 font-serif text-xl font-semibold text-mayo-navy">
                  <Link href={a.href} className="hover:text-mayo-blue">
                    {a.title}
                  </Link>
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-mayo-text-muted">{a.excerpt}</p>
                <Link
                  href={a.href}
                  className="mt-4 inline-block text-[14px] font-semibold text-mayo-link hover:underline"
                >
                  阅读全文 →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="band-gray section-pad">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
          <SectionHeading
            title="临床与学术积累"
            description="可验证的专业基础 — 非营销口号。"
            href="/research"
            linkLabel="科研学术"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {credibilityItems.map((c) => (
              <div
                key={c.title}
                className="border-l-4 border-mayo-blue bg-white p-6 pl-5 shadow-sm"
              >
                <h3 className="text-[16px] font-bold text-mayo-navy">{c.title}</h3>
                <p className="mt-2 text-[14px] text-mayo-text-muted">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient guide */}
      <section className="section-pad border-t border-mayo-border bg-white">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
          <SectionHeading
            title="患者实用指南"
            description="初次就诊、门诊流程、医保与远程咨询 — 就诊前请先了解。"
            href="/patient-guide"
            linkLabel="完整患者指南"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {patientGuideHome.map((g) => (
              <Link key={g.title} href={g.href} className="mayo-card mayo-card-link block p-6">
                <h3 className="text-[16px] font-bold text-mayo-navy">{g.title}</h3>
                <p className="mt-2 text-[14px] text-mayo-text-muted">{g.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="band-gray section-pad">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
          <SectionHeading title="院区与到院指引" description="两个院区服务石家庄及周边患者。" />
          <div className="mt-8 grid gap-6 lg:grid-cols-12">
            {locations.map((loc) => (
              <div key={loc.name} className="mayo-card p-6 lg:col-span-5">
                <p className="text-[12px] font-bold uppercase tracking-wide text-mayo-text-light">
                  {loc.name}
                </p>
                <p className="mt-3 text-[15px] font-medium text-mayo-navy">{loc.address}</p>
                <Link
                  href={loc.href}
                  className="mt-4 inline-block text-[14px] font-semibold text-mayo-link hover:underline"
                >
                  交通与联系方式 →
                </Link>
              </div>
            ))}
            <div className="mayo-card bg-mayo-navy p-6 text-white lg:col-span-2">
              <p className="text-[12px] font-bold uppercase tracking-wide text-white/60">
                全国咨询热线
              </p>
              <a
                href={`tel:${site.phoneRaw}`}
                className="mt-3 block font-serif text-3xl font-semibold hover:text-mayo-gray"
              >
                {site.phone}
              </a>
              <p className="mt-2 text-[14px] text-white/75">{site.hours}</p>
              <Link
                href="/contact"
                className="mt-5 inline-block text-[14px] font-semibold text-white underline-offset-4 hover:underline"
              >
                完整联系方式 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* I'd like to… */}
      <section className="border-t border-mayo-border bg-white py-8">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
          <p className="text-[13px] font-bold uppercase tracking-wide text-mayo-text-light">
            我想…
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
            {idLikeToLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[15px] font-semibold text-mayo-link hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
