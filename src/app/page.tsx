import Link from "next/link";
import HealthcareImage from "@/components/home/HealthcareImage";
import HomePhotoCard from "@/components/home/HomePhotoCard";
import {
  articles,
  complicationSpecialties,
  credibilityItems,
  doctors,
  patientActions,
  patientGuideHome,
  site,
} from "@/lib/content";
import {
  articleThumbnails,
  complicationVisuals,
  doctorPortraits,
  homeImages,
  visualCareModules,
} from "@/lib/home-images";
import {
  clinicalIntro,
  institutionalFacts,
  operationalPathway,
  portalIdentity,
  patientTaskBar,
} from "@/lib/portal-content";

function SectionHeader({
  title,
  description,
  href,
  linkLabel,
  light,
}: {
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
  light?: boolean;
}) {
  return (
    <div className={`inst-section-header ${light ? "hc-section-header--light" : ""}`}>
      <div>
        <h2 className={`inst-section-title ${light ? "text-white" : ""}`}>{title}</h2>
        {description && (
          <p className={`inst-section-desc ${light ? "text-white/80" : ""}`}>{description}</p>
        )}
      </div>
      {href && linkLabel && (
        <Link href={href} className={light ? "text-white/90 hover:text-white" : "inst-section-link"}>
          {linkLabel} →
        </Link>
      )}
    </div>
  );
}

function complicationImage(href: string) {
  const match = complicationVisuals.find((v) => href.includes(`#${v.key}`));
  return match?.image ?? homeImages.examination;
}

export default function HomePage() {
  return (
    <div className="hc-home">
      {/* 1. Photo hero */}
      <section className="hc-hero">
        <div className="hc-hero-bg" aria-hidden>
          <HealthcareImage
            src={homeImages.hero.src}
            alt={homeImages.hero.alt}
            priority
            sizes="100vw"
            className="hc-hero-img"
          />
          <div className="hc-hero-gradient" />
        </div>
        <div className="inst-container relative z-10">
          <div className="hc-hero-grid">
            <div className="hc-hero-content">
              <p className="hc-hero-eyebrow">{portalIdentity.credentials.slice(0, 3).join(" · ")}</p>
              <h1 className="hc-hero-title">{portalIdentity.title}</h1>
              <p className="hc-hero-lead">{clinicalIntro.lead}</p>
              <p className="hc-hero-body">{clinicalIntro.body}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact#appointment" className="hc-btn-white">
                  预约门诊
                </Link>
                <Link href="/doctors" className="hc-btn-ghost">
                  查找医生
                </Link>
                <Link href="/patient-guide" className="hc-btn-ghost-text">
                  患者指南
                </Link>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {patientActions.map((a) => (
                  <Link key={a.href} href={a.href} className="hc-hero-action">
                    <span className="font-semibold">{a.label}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="hc-hero-collage" aria-hidden>
              <div className="hc-hero-collage-main">
                <HealthcareImage
                  src={homeImages.consultation.src}
                  alt={homeImages.consultation.alt}
                  sizes="(max-width: 1024px) 0px, 400px"
                />
              </div>
              <div className="hc-hero-collage-sub">
                <HealthcareImage
                  src={homeImages.heroAccent.src}
                  alt={homeImages.heroAccent.alt}
                  sizes="(max-width: 1024px) 0px, 200px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Patient path strip */}
      <section className="hc-strip">
        <div className="inst-container">
          <div className="hc-strip-inner">
            {patientTaskBar.map((t) => (
              <Link key={t.href} href={t.href} className="hc-strip-link">
                {t.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Full-bleed campus band */}
      <section className="hc-band">
        <div className="hc-band-media">
          <HealthcareImage src={homeImages.campus.src} alt={homeImages.campus.alt} sizes="100vw" />
          <div className="hc-band-overlay" />
        </div>
        <div className="inst-container relative z-10 py-16 lg:py-20">
          <div className="max-w-xl">
            <p className="text-[12px] font-bold uppercase tracking-widest text-white/70">专科医疗体系</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-white lg:text-4xl">
              三十年糖尿病及并发症防治实践
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-white/85">
              河北省、石家庄市医保定点医院。门诊、并发症专科、患者教育与长期随访构成完整慢病照护路径。
            </p>
            <Link href="/about" className="mt-6 inline-block font-semibold text-white underline-offset-4 hover:underline">
              了解医院与资质 →
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Photo care cards */}
      <section className="inst-section">
        <div className="inst-container">
          <SectionHeader
            title="查找医疗服务"
            description="按专科进入相应诊疗页面，了解门诊、筛查与长期管理。"
            href="/services"
            linkLabel="全部就诊服务"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {visualCareModules.map((m) => (
              <HomePhotoCard key={m.title} title={m.title} desc={m.desc} href={m.href} image={m.image} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Split: diabetes photo + clinical content */}
      <section className="hc-split-section">
        <div className="hc-split-photo">
          <HealthcareImage
            src={homeImages.diabetesCare.src}
            alt={homeImages.diabetesCare.alt}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="hc-split-content inst-section !py-12 lg:!py-16">
          <div className="inst-container max-w-none px-6 lg:px-12">
            <SectionHeader
              title="糖尿病整合照护"
              description="血糖、生活方式、用药与并发症筛查的系统管理。"
              href="/care/diabetes"
              linkLabel="糖尿病诊疗"
            />
            <div className="mt-8 space-y-4">
              <p className="text-[15px] leading-relaxed text-mayo-text-muted">
                糖尿病是一组以血糖代谢异常为特征的慢性疾病。长期高血糖可损害神经、肾脏、视网膜、
                足部与心脑血管。我院提供个体化评估、规范治疗与长期随访，帮助患者稳定控糖并降低并发症风险。
              </p>
              <Link href="/care/diabetes#when-to-see" className="font-semibold text-mayo-link hover:underline">
                何时应考虑专科就诊？ →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Complications — photo grid */}
      <section className="inst-section band-gray">
        <div className="inst-container">
          <SectionHeader
            title="并发症专科"
            description="独立专科进行筛查、干预与长期风险管理。"
            href="/care/complications"
            linkLabel="专科总览"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {complicationSpecialties.slice(0, 3).map((c) => (
              <Link key={c.title} href={c.href} className="hc-complication-card group">
                <div className="hc-complication-media">
                  <HealthcareImage
                    src={complicationImage(c.href).src}
                    alt={complicationImage(c.href).alt}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="hc-complication-body">
                  <h3 className="font-semibold text-mayo-navy group-hover:text-mayo-blue">{c.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-mayo-text-muted">{c.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <ul className="mt-8 divide-y divide-mayo-border border border-mayo-border bg-white">
            {complicationSpecialties.map((c) => (
              <li key={c.title}>
                <Link
                  href={c.href}
                  className="flex flex-col gap-1 px-5 py-4 transition hover:bg-white sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="font-medium text-mayo-navy">{c.title}</span>
                  <span className="text-[14px] text-mayo-text-muted">{c.desc}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. Pathway with photo background */}
      <section className="hc-pathway">
        <div className="hc-pathway-bg" aria-hidden>
          <HealthcareImage
            src={homeImages.interior.src}
            alt={homeImages.interior.alt}
            sizes="100vw"
            className="opacity-40"
          />
          <div className="hc-pathway-tint" />
        </div>
        <div className="inst-container relative z-10 inst-section">
          <SectionHeader
            title="就诊与长期管理流程"
            description="从预约到随访，帮助您了解每一步。"
            href="/patient-guide"
            linkLabel="患者指南"
          />
          <ol className="mt-10 grid gap-4 md:grid-cols-5">
            {operationalPathway.map((step) => (
              <li key={step.step} className="hc-pathway-step">
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

      {/* 8. Doctors with portraits */}
      <section className="inst-section">
        <div className="inst-container">
          <SectionHeader
            title="医护团队"
            description="糖尿病及并发症专科医师。"
            href="/doctors"
            linkLabel="全部医师"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {doctors.map((d, i) => (
              <article key={d.name} className="hc-doctor-card">
                <div className="hc-doctor-photo">
                  <HealthcareImage
                    src={doctorPortraits[i % doctorPortraits.length]}
                    alt={`${d.name} 医师`}
                    sizes="(max-width: 640px) 50vw, 200px"
                    className="grayscale-[15%]"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-mayo-navy">{d.name}</h3>
                  <p className="text-[14px] font-medium text-mayo-blue">{d.title}</p>
                  <p className="mt-1 text-[12px] text-mayo-text-light">{d.specialty}</p>
                  <p className="mt-2 text-[14px] text-mayo-text-muted">{d.focus}</p>
                  <Link href="/contact#appointment" className="mt-4 inline-block text-[13px] font-semibold text-mayo-link">
                    预约咨询 →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Education with thumbnails */}
      <section className="inst-section band-gray">
        <div className="inst-container">
          <SectionHeader
            title="患者健康教育"
            description="临床团队整理的疾病知识与自我管理建议。"
            href="/education"
            linkLabel="知识中心"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {articles.map((a, i) => (
              <article key={a.href} className="hc-article-card group">
                <div className="hc-article-thumb">
                  <HealthcareImage
                    src={articleThumbnails[i % articleThumbnails.length]}
                    alt={a.title}
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                </div>
                <div className="hc-article-body">
                  <p className="text-[12px] text-mayo-text-light">
                    {a.category} · {a.date}
                  </p>
                  <h3 className="mt-2 font-serif text-xl font-semibold text-mayo-navy">
                    <Link href={a.href} className="group-hover:text-mayo-blue">
                      {a.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-mayo-text-muted">{a.excerpt}</p>
                  <Link href={a.href} className="mt-3 inline-block text-[14px] font-semibold text-mayo-link">
                    阅读全文 →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Trust split */}
      <section className="hc-trust-split">
        <div className="hc-trust-photo">
          <HealthcareImage
            src={homeImages.patientSupport.src}
            alt={homeImages.patientSupport.alt}
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </div>
        <div className="hc-trust-content inst-section">
          <div className="max-w-xl">
            <SectionHeader
              title="为什么选择我院"
              description="可验证的专科积累与规范诊疗路径。"
              href="/about"
              linkLabel="关于医院"
            />
            <div className="mt-8 space-y-5">
              {credibilityItems.slice(0, 3).map((item) => (
                <div key={item.title} className="border-l-4 border-mayo-blue pl-4">
                  <h3 className="font-semibold text-mayo-navy">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-mayo-text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {institutionalFacts.slice(0, 6).map((f) => (
                <div key={f.label}>
                  <p className="text-[11px] font-medium text-mayo-text-light">{f.label}</p>
                  <p className="text-lg font-bold text-mayo-navy">{f.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. Campus + patient info */}
      <section className="inst-section">
        <div className="inst-container">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="hc-campus-feature">
                <HealthcareImage
                  src={homeImages.campus.src}
                  alt={homeImages.campus.alt}
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="hc-campus-caption">
                  <p className="font-semibold text-white">主院区 · 裕华院区</p>
                  <p className="mt-1 text-[13px] text-white/80">石家庄经济技术开发区 · 裕华东路</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <SectionHeader title="患者与到院" href="/patient-guide" linkLabel="完整指南" />
              <ul className="mt-6 space-y-3">
                {patientGuideHome.slice(0, 4).map((g) => (
                  <li key={g.title}>
                    <Link href={g.href} className="inst-card block p-4 inst-card-hover">
                      <p className="font-semibold text-mayo-navy">{g.title}</p>
                      <p className="mt-1 text-[14px] text-mayo-text-muted">{g.desc}</p>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="inst-aside mt-6">
                <p className="text-[13px] text-white/75">全国咨询热线</p>
                <a href={`tel:${site.phoneRaw}`} className="mt-2 block font-serif text-2xl font-bold">
                  {site.phone}
                </a>
                <Link href="/contact#appointment" className="inst-aside-btn-light mt-4">
                  预约门诊
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Homepage pre-footer — operational density */}
      <section className="hc-prefooter">
        <div className="hc-prefooter-bg" aria-hidden>
          <HealthcareImage src={homeImages.interior.src} alt="" sizes="100vw" />
          <div className="hc-prefooter-overlay" />
        </div>
        <div className="inst-container relative z-10 py-14">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-[12px] font-bold uppercase tracking-widest text-white/55">准备就诊</p>
              <h2 className="mt-2 font-serif text-2xl font-semibold text-white">我们随时为您提供帮助</h2>
              <a href={`tel:${site.phoneRaw}`} className="mt-4 block text-2xl font-bold text-white">
                {site.phone}
              </a>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
              <div>
                <p className="text-[12px] font-bold uppercase text-white/50">就诊</p>
                <ul className="mt-3 space-y-2 text-[14px]">
                  <li><Link href="/contact#appointment" className="text-white/85 hover:text-white">预约门诊</Link></li>
                  <li><Link href="/patient-guide#outpatient" className="text-white/85 hover:text-white">门诊流程</Link></li>
                  <li><Link href="/doctors" className="text-white/85 hover:text-white">查找医生</Link></li>
                </ul>
              </div>
              <div>
                <p className="text-[12px] font-bold uppercase text-white/50">专科</p>
                <ul className="mt-3 space-y-2 text-[14px]">
                  <li><Link href="/care/diabetes" className="text-white/85 hover:text-white">糖尿病诊疗</Link></li>
                  <li><Link href="/care/complications" className="text-white/85 hover:text-white">并发症专科</Link></li>
                  <li><Link href="/education" className="text-white/85 hover:text-white">健康科普</Link></li>
                </ul>
              </div>
              <div>
                <p className="text-[12px] font-bold uppercase text-white/50">院区</p>
                <p className="mt-3 text-[14px] text-white/80">{site.address}</p>
                <p className="mt-2 text-[14px] text-white/80">{site.addressAlt}</p>
              </div>
            </div>
          </div>
          <p className="inst-disclaimer mt-10 border-white/20 text-white/50">
            本网站内容仅供健康教育参考，不能替代医师面诊。急症请拨打 120。页面摄影为医疗环境示意，请以实际到院为准。
          </p>
        </div>
      </section>
    </div>
  );
}
