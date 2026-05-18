import Link from "next/link";
import {
  articles,
  complicationSpecialties,
  doctors,
  patientEntryCards,
  patientGuideHome,
  site,
} from "@/lib/content";
import {
  careSystemPillars,
  clinicalNotices,
  institutionalFacts,
  operationalPathway,
  portalIdentity,
  patientTaskBar,
  serviceDirectory,
  specialtyDirectory,
} from "@/lib/portal-content";

function DenseLinkList({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div className="portal-panel">
      <h3 className="portal-panel-title">{title}</h3>
      <ul className="portal-link-list">
        {items.map((item) => (
          <li key={item.href + item.label}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="portal-home">
      {/* Compact institutional strip — NOT a hero */}
      <section className="portal-strip border-b border-mayo-border bg-mayo-gray">
        <div className="mx-auto max-w-[1400px] px-4 py-4 lg:px-6">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <h1 className="text-[20px] font-bold text-mayo-navy lg:text-[22px]">
                {portalIdentity.title}
              </h1>
              <p className="mt-1 text-[14px] text-mayo-text-muted">{portalIdentity.subtitle}</p>
              <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[12px] text-mayo-text-light">
                {portalIdentity.credentials.map((c) => (
                  <span key={c}>{c}</span>
                ))}
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-2">
              <Link href="/contact#appointment" className="portal-btn-primary">
                预约门诊
              </Link>
              <Link href="/doctors" className="portal-btn-secondary">
                查找医生
              </Link>
              <a href={`tel:${site.phoneRaw}`} className="portal-btn-secondary">
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Patient task bar */}
      <section className="border-b border-mayo-border bg-white">
        <div className="mx-auto max-w-[1400px] px-4 py-3 lg:px-6">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-mayo-text-light">
            患者快速入口
          </p>
          <div className="flex flex-wrap gap-1.5">
            {patientTaskBar.map((task) => (
              <Link key={task.href} href={task.href} className="portal-task-chip">
                {task.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical notices */}
      <section className="border-b border-mayo-border bg-[#fff8e6]">
        <div className="mx-auto max-w-[1400px] px-4 py-3 lg:px-6">
          <p className="mb-2 text-[11px] font-bold uppercase text-mayo-navy">就诊提示</p>
          <div className="grid gap-3 md:grid-cols-2">
            {clinicalNotices.map((n) => (
              <div key={n.title} className="text-[13px]">
                <Link href={n.href} className="font-semibold text-mayo-link hover:underline">
                  {n.title}
                </Link>
                <span className="mx-2 text-mayo-text-light">|</span>
                <span className="text-mayo-text-muted">{n.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main 3-column operational directory */}
      <section className="border-b border-mayo-border bg-white py-5">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
          <div className="grid gap-4 lg:grid-cols-3">
            {serviceDirectory.map((block) => (
              <DenseLinkList key={block.title} title={block.title} items={block.items} />
            ))}
          </div>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {specialtyDirectory.map((block) => (
              <DenseLinkList key={block.title} title={block.title} items={block.items} />
            ))}
          </div>
        </div>
      </section>

      {/* Care pathway + appointment box */}
      <section className="border-b border-mayo-border bg-mayo-gray py-5">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
          <div className="grid gap-4 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h2 className="portal-section-title">慢病诊疗路径</h2>
              <p className="mt-1 text-[13px] text-mayo-text-muted">
                从预约到长期随访的标准就诊流程
              </p>
              <ol className="mt-4 space-y-0 border border-mayo-border bg-white">
                {operationalPathway.map((step, i) => (
                  <li
                    key={step.step}
                    className={`flex gap-4 border-b border-mayo-border p-4 last:border-b-0 ${
                      i % 2 === 1 ? "bg-mayo-gray/50" : ""
                    }`}
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-mayo-navy text-[13px] font-bold text-white">
                      {step.step}
                    </span>
                    <div className="min-w-0 flex-1">
                      <Link
                        href={step.href}
                        className="text-[15px] font-bold text-mayo-navy hover:text-mayo-blue"
                      >
                        {step.title}
                      </Link>
                      <p className="mt-1 text-[13px] text-mayo-text-muted">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-[12px] font-semibold text-mayo-text-muted">六位一体：</span>
                {careSystemPillars.map((p) => (
                  <Link key={p.label} href={p.href} className="portal-task-chip text-[12px]">
                    {p.label}
                  </Link>
                ))}
                <Link href="/services#methodology" className="text-[12px] font-semibold text-mayo-link">
                  完整体系 →
                </Link>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="portal-panel h-full border-mayo-navy bg-mayo-navy text-white">
                <h3 className="text-[15px] font-bold">预约与到院信息</h3>
                <dl className="mt-4 space-y-3 text-[13px]">
                  <div>
                    <dt className="text-white/60">全国热线</dt>
                    <dd>
                      <a href={`tel:${site.phoneRaw}`} className="text-lg font-bold text-white">
                        {site.phone}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-white/60">门诊时间</dt>
                    <dd className="text-white/90">{site.hours}</dd>
                  </div>
                  <div>
                    <dt className="text-white/60">主院区</dt>
                    <dd className="text-white/90">{site.address}</dd>
                  </div>
                  <div>
                    <dt className="text-white/60">裕华院区</dt>
                    <dd className="text-white/90">{site.addressAlt}</dd>
                  </div>
                </dl>
                <div className="mt-5 flex flex-col gap-2">
                  <Link href="/contact#appointment" className="bg-white py-2.5 text-center text-[13px] font-bold text-mayo-navy">
                    预约门诊
                  </Link>
                  <Link
                    href="/patient-guide"
                    className="border border-white/40 py-2.5 text-center text-[13px] font-semibold text-white"
                  >
                    患者指南
                  </Link>
                  <Link
                    href="/contact#locations"
                    className="border border-white/40 py-2.5 text-center text-[13px] font-semibold text-white"
                  >
                    交通与地图
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Find care by need */}
      <section className="border-b border-mayo-border bg-white py-5">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
          <h2 className="portal-section-title">按需求查找诊疗</h2>
          <table className="portal-table mt-3">
            <thead>
              <tr>
                <th>您的需求</th>
                <th>说明</th>
                <th className="w-24">入口</th>
              </tr>
            </thead>
            <tbody>
              {patientEntryCards.map((card) => (
                <tr key={card.title}>
                  <td className="font-semibold text-mayo-navy">{card.title}</td>
                  <td className="text-mayo-text-muted">{card.desc}</td>
                  <td>
                    <Link href={card.href} className="text-mayo-link font-semibold hover:underline">
                      进入
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Complications table */}
      <section className="border-b border-mayo-border bg-mayo-gray py-5">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="portal-section-title">并发症专科</h2>
            <Link href="/care/complications" className="text-[13px] font-semibold text-mayo-link">
              专科总览 →
            </Link>
          </div>
          <table className="portal-table mt-3">
            <thead>
              <tr>
                <th>专科</th>
                <th>诊疗范围</th>
                <th className="w-24">详情</th>
              </tr>
            </thead>
            <tbody>
              {complicationSpecialties.map((c) => (
                <tr key={c.title}>
                  <td className="font-semibold text-mayo-navy">{c.title}</td>
                  <td className="text-mayo-text-muted">{c.desc}</td>
                  <td>
                    <Link href={c.href} className="font-semibold text-mayo-link hover:underline">
                      查看
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Doctors table */}
      <section className="border-b border-mayo-border bg-white py-5">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="portal-section-title">医护团队</h2>
            <Link href="/doctors" className="text-[13px] font-semibold text-mayo-link">
              全部医师 →
            </Link>
          </div>
          <table className="portal-table mt-3">
            <thead>
              <tr>
                <th>姓名</th>
                <th>职称</th>
                <th>专科</th>
                <th>临床方向</th>
                <th className="w-24">预约</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((d) => (
                <tr key={d.name}>
                  <td className="font-semibold text-mayo-navy">{d.name}</td>
                  <td>{d.title}</td>
                  <td>{d.specialty}</td>
                  <td className="text-mayo-text-muted">{d.focus}</td>
                  <td>
                    <Link
                      href="/contact#appointment"
                      className="font-semibold text-mayo-link hover:underline"
                    >
                      预约
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Health library — dense list */}
      <section className="border-b border-mayo-border bg-mayo-gray py-5">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="portal-section-title">慢病健康知识库</h2>
            <Link href="/education" className="text-[13px] font-semibold text-mayo-link">
              全部文章 →
            </Link>
          </div>
          <table className="portal-table mt-3">
            <thead>
              <tr>
                <th className="w-28">分类</th>
                <th>标题</th>
                <th className="w-24">日期</th>
                <th className="w-24">阅读</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((a) => (
                <tr key={a.href}>
                  <td className="text-[12px] text-mayo-text-light">{a.category}</td>
                  <td>
                    <Link href={a.href} className="font-semibold text-mayo-navy hover:text-mayo-blue">
                      {a.title}
                    </Link>
                    <p className="mt-0.5 text-[12px] text-mayo-text-muted">{a.excerpt}</p>
                  </td>
                  <td className="text-[12px] text-mayo-text-light">{a.date}</td>
                  <td>
                    <Link href={a.href} className="font-semibold text-mayo-link hover:underline">
                      阅读
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Patient guide table */}
      <section className="border-b border-mayo-border bg-white py-5">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="portal-section-title">患者与访客信息</h2>
            <Link href="/patient-guide" className="text-[13px] font-semibold text-mayo-link">
              完整指南 →
            </Link>
          </div>
          <table className="portal-table mt-3">
            <thead>
              <tr>
                <th className="w-40">项目</th>
                <th>说明</th>
                <th className="w-24">详情</th>
              </tr>
            </thead>
            <tbody>
              {patientGuideHome.map((g) => (
                <tr key={g.title}>
                  <td className="font-semibold text-mayo-navy">{g.title}</td>
                  <td className="text-mayo-text-muted">{g.desc}</td>
                  <td>
                    <Link href={g.href} className="font-semibold text-mayo-link hover:underline">
                      查看
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Institutional facts bar */}
      <section className="bg-mayo-navy py-4 text-white">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {institutionalFacts.map((f) => (
              <div key={f.label} className="text-center lg:text-left">
                <p className="text-[11px] uppercase tracking-wide text-white/55">{f.label}</p>
                <p className="mt-1 text-[18px] font-bold">{f.value}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 border-t border-white/15 pt-4 text-center text-[12px] text-white/60 lg:text-left">
            本页信息供患者就诊参考，不能替代医师诊断与治疗建议。急症请拨打 120。
            <Link href="/about" className="ml-3 text-white/80 underline hover:text-white">
              关于医院
            </Link>
            <Link href="/research" className="ml-3 text-white/80 underline hover:text-white">
              科研学术
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
