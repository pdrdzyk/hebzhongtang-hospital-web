import Link from "next/link";
import {
  articles,
  complicationSpecialties,
  credibilityItems,
  doctors,
  featuredCareAreas,
  patientActions,
  patientGuideHome,
  site,
} from "@/lib/content";
import { clinicalIntro, institutionalFacts, operationalPathway, portalIdentity } from "@/lib/portal-content";

function SectionHeader({
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
    <div className="inst-section-header">
      <div>
        <h2 className="inst-section-title">{title}</h2>
        {description && <p className="inst-section-desc">{description}</p>}
      </div>
      {href && linkLabel && (
        <Link href={href} className="inst-section-link">
          {linkLabel} →
        </Link>
      )}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="inst-home">
      {/* Modest hero — Cleveland/Mayo: clear identity + patient actions, not slogan billboard */}
      <section className="inst-hero">
        <div className="inst-container">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-start">
            <div className="lg:col-span-7">
              <p className="inst-eyebrow">
                {portalIdentity.credentials.slice(0, 3).join(" · ")}
              </p>
              <h1 className="inst-title">{portalIdentity.title}</h1>
              <p className="inst-lead">{clinicalIntro.lead}</p>
              <p className="inst-body">{clinicalIntro.body}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact#appointment" className="inst-btn-primary">
                  预约门诊
                </Link>
                <Link href="/doctors" className="inst-btn-outline">
                  查找医生
                </Link>
                <Link href="/patient-guide" className="inst-btn-text">
                  患者指南
                </Link>
              </div>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-5 lg:mt-0">
              {patientActions.map((action) => (
                <Link key={action.href} href={action.href} className="inst-action-card">
                  <span className="inst-action-label">{action.label}</span>
                  <span className="inst-action-sub">{action.sub}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Find care — service cards */}
      <section className="inst-section band-gray">
        <div className="inst-container">
          <SectionHeader
            title="查找医疗服务"
            description="按专科与诊疗需求进入相应页面，了解门诊、筛查与长期管理内容。"
            href="/services"
            linkLabel="全部就诊服务"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredCareAreas.map((area) => (
              <Link key={area.title} href={area.href} className="inst-card inst-card-hover">
                <h3 className="inst-card-title">{area.title}</h3>
                <p className="inst-card-desc">{area.desc}</p>
                <span className="inst-card-link">了解更多</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Diabetes + complications — medical content, two columns */}
      <section className="inst-section">
        <div className="inst-container">
          <div className="lg:grid lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <SectionHeader
                title="糖尿病整合照护"
                description="血糖管理不仅是降糖，还包括生活方式、用药、筛查与长期随访。"
                href="/care/diabetes"
                linkLabel="糖尿病诊疗"
              />
              <div className="mt-8 space-y-4">
                <div className="inst-card p-6">
                  <h3 className="font-semibold text-mayo-navy">何时应考虑专科就诊？</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-mayo-text-muted">
                    新出现多饮多尿、体重下降或血糖异常；已确诊但控制不佳；或需要系统筛查神经、肾脏、
                    眼底与足部等并发症时，建议尽早专科评估。
                  </p>
                  <Link href="/care/diabetes#when-to-see" className="mt-4 inline-block text-[14px] font-semibold text-mayo-link">
                    了解诊疗评估 →
                  </Link>
                </div>
                <ul className="divide-y divide-mayo-border border border-mayo-border bg-white">
                  {complicationSpecialties.map((c) => (
                    <li key={c.title}>
                      <Link
                        href={c.href}
                        className="flex flex-col gap-1 p-5 transition hover:bg-mayo-gray/60 sm:flex-row sm:items-center sm:justify-between"
                      >
                        <span className="font-semibold text-mayo-navy">{c.title}</span>
                        <span className="text-[14px] text-mayo-text-muted sm:max-w-md sm:text-right">
                          {c.desc}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href="/care/complications" className="text-[14px] font-semibold text-mayo-link">
                  并发症专科总览 →
                </Link>
              </div>
            </div>

            <aside className="mt-10 lg:col-span-5 lg:mt-0">
              <div className="inst-aside">
                <h3 className="text-[17px] font-bold">预约与到院</h3>
                <p className="mt-2 text-[14px] text-white/80">
                  建议提前电话预约，携带身份证、医保卡及既往检查报告。
                </p>
                <a href={`tel:${site.phoneRaw}`} className="mt-5 block font-serif text-[28px] font-semibold">
                  {site.phone}
                </a>
                <p className="mt-2 text-[13px] text-white/70">{site.hours}</p>
                <dl className="mt-6 space-y-4 border-t border-white/20 pt-6 text-[14px]">
                  <div>
                    <dt className="text-white/55">主院区</dt>
                    <dd className="mt-1">{site.address}</dd>
                  </div>
                  <div>
                    <dt className="text-white/55">裕华院区</dt>
                    <dd className="mt-1">{site.addressAlt}</dd>
                  </div>
                </dl>
                <div className="mt-6 flex flex-col gap-2">
                  <Link href="/contact#appointment" className="inst-aside-btn-light">
                    预约门诊
                  </Link>
                  <Link href="/contact#locations" className="inst-aside-btn-ghost">
                    交通与联系方式
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Care pathway — spaced steps */}
      <section className="inst-section band-gray">
        <div className="inst-container">
          <SectionHeader
            title="就诊与长期管理流程"
            description="从预约到随访的标准路径，帮助您了解每一步将发生什么。"
            href="/patient-guide"
            linkLabel="患者指南"
          />
          <ol className="mt-10 grid gap-4 md:grid-cols-5">
            {operationalPathway.map((step) => (
              <li key={step.step} className="inst-step-card">
                <span className="inst-step-num">{step.step}</span>
                <Link href={step.href} className="mt-3 block font-semibold text-mayo-navy hover:text-mayo-blue">
                  {step.title}
                </Link>
                <p className="mt-2 text-[13px] leading-relaxed text-mayo-text-muted">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Physicians */}
      <section className="inst-section">
        <div className="inst-container">
          <SectionHeader
            title="医护团队"
            description="糖尿病及并发症专科医师，注重长期管理而非单次就诊。"
            href="/doctors"
            linkLabel="查看全部医师"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {doctors.map((d) => (
              <article key={d.name} className="inst-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-mayo-gray font-serif text-lg font-semibold text-mayo-navy">
                  {d.name.slice(0, 1)}
                </div>
                <h3 className="mt-4 font-semibold text-mayo-navy">{d.name}</h3>
                <p className="text-[14px] font-medium text-mayo-blue">{d.title}</p>
                <p className="mt-1 text-[12px] text-mayo-text-light">{d.specialty}</p>
                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-mayo-text-muted">{d.focus}</p>
                <Link href="/contact#appointment" className="mt-4 text-[13px] font-semibold text-mayo-link">
                  预约咨询 →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Health library */}
      <section className="inst-section band-gray">
        <div className="inst-container">
          <SectionHeader
            title="患者健康教育"
            description="由临床团队整理的疾病知识与自我管理建议，供您就诊前后参考。"
            href="/education"
            linkLabel="健康知识中心"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {articles.map((a) => (
              <article key={a.href} className="inst-card inst-card-hover">
                <p className="text-[12px] font-medium text-mayo-text-light">
                  {a.category} · {a.date}
                </p>
                <h3 className="mt-2 font-serif text-xl font-semibold text-mayo-navy">
                  <Link href={a.href} className="hover:text-mayo-blue">
                    {a.title}
                  </Link>
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-mayo-text-muted">{a.excerpt}</p>
                <Link href={a.href} className="mt-4 inline-block text-[14px] font-semibold text-mayo-link">
                  阅读全文 →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="inst-section">
        <div className="inst-container">
          <SectionHeader
            title="为什么选择我院"
            description="可验证的专科积累与规范诊疗路径，是长期慢病管理的基础。"
            href="/about"
            linkLabel="关于医院"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {credibilityItems.slice(0, 3).map((item) => (
              <div key={item.title} className="inst-trust-card">
                <h3 className="font-semibold text-mayo-navy">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-mayo-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-mayo-border pt-10 sm:grid-cols-3 lg:grid-cols-6">
            {institutionalFacts.map((f) => (
              <div key={f.label}>
                <p className="text-[12px] font-medium text-mayo-text-light">{f.label}</p>
                <p className="mt-1 text-[20px] font-bold text-mayo-navy">{f.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient guide + locations */}
      <section className="inst-section band-gray">
        <div className="inst-container">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12">
            <div>
              <SectionHeader title="患者实用信息" href="/patient-guide" linkLabel="完整指南" />
              <ul className="mt-8 space-y-3">
                {patientGuideHome.slice(0, 4).map((g) => (
                  <li key={g.title}>
                    <Link href={g.href} className="inst-card block p-5 inst-card-hover">
                      <p className="font-semibold text-mayo-navy">{g.title}</p>
                      <p className="mt-1 text-[14px] text-mayo-text-muted">{g.desc}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeader title="院区位置" href="/contact#locations" linkLabel="联系方式" />
              <div className="mt-8 space-y-4">
                <div className="inst-card p-6">
                  <p className="text-[12px] font-bold uppercase text-mayo-text-light">主院区</p>
                  <p className="mt-2 text-[15px] text-mayo-navy">{site.address}</p>
                </div>
                <div className="inst-card p-6">
                  <p className="text-[12px] font-bold uppercase text-mayo-text-light">裕华院区</p>
                  <p className="mt-2 text-[15px] text-mayo-navy">{site.addressAlt}</p>
                </div>
              </div>
            </div>
          </div>
          <p className="inst-disclaimer">
            本网站内容仅供健康教育参考，不能替代医师面诊与个体化诊疗方案。如有急症，请拨打 120。
          </p>
        </div>
      </section>
    </div>
  );
}
