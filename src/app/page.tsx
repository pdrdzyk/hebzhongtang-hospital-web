import Link from "next/link";
import HealthcareImage from "@/components/home/HealthcareImage";
import HomePhotoCard from "@/components/home/HomePhotoCard";
import {
  articles,
  complicationSpecialties,
  credibilityItems,
  doctors,
  featuredCareAreas,
  site,
  stats,
  utilityNav,
} from "@/lib/content";
import {
  articleThumbnails,
  complicationVisuals,
  doctorPortraits,
  homeImages,
} from "@/lib/home-images";
import { clinicalIntro, portalIdentity, patientTaskBar } from "@/lib/portal-content";

function SectionTitle({
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
    <div className="flex flex-col gap-4 border-b border-mayo-border pb-4 md:flex-row md:items-end md:justify-between">
      <div>
        <h2 className="font-serif text-[28px] font-semibold leading-tight text-mayo-navy md:text-[32px]">
          {title}
        </h2>
        {description && (
          <p className="mt-3 text-[15px] leading-relaxed text-mayo-text-muted">
            {description}
          </p>
        )}
      </div>
      {href && linkLabel && (
        <Link href={href} className="shrink-0 text-[14px] font-semibold text-mayo-link hover:underline">
          {linkLabel} →
        </Link>
      )}
    </div>
  );
}

function imageForComplicationHref(href: string) {
  const key = href.split("#")[1] ?? "";
  const match = complicationVisuals.find((v) => v.key === key);
  return match?.image ?? homeImages.examination;
}

export default function HomePage() {
  const featuredDoctors = doctors.filter((d) => d.featured).slice(0, 3);
  const diabetesOutpatient = featuredCareAreas.find((a) => a.title === "糖尿病门诊");

  const trustCards = [
    {
      title: "医保定点机构",
      desc: credibilityItems.find((i) => i.title === "医保定点")?.desc ?? "医保结算路径规范透明。",
      href: "/about#credentials",
    },
    {
      title: "科研与学术背景",
      desc:
        credibilityItems.find((i) => i.title === "科研与学术")?.desc ?? "长期参与学术与科研支持。",
      href: "/research",
    },
    {
      title: "名医坐诊与专科会诊",
      desc: featuredDoctors.length
        ? `由专科医师长期参与慢病管理与并发症评估，为患者提供会诊支持与长期随访。`
        : "由专科医师参与慢病管理与并发症评估，提供会诊支持与长期随访。",
      href: "/doctors",
    },
  ];

  const specialtyCards = [
    {
      title: "糖尿病门诊",
      desc: diabetesOutpatient?.desc ?? "初诊、复诊与长期血糖管理。",
      href: diabetesOutpatient?.href ?? "/services#outpatient",
      image: homeImages.diabetesCare,
    },
    ...complicationSpecialties.map((c) => ({
      title: c.title,
      desc: c.desc,
      href: c.href,
      image: imageForComplicationHref(c.href),
    })),
  ].slice(0, 6);

  const educationCards = articles.slice(0, 3);

  return (
    <div className="hc-home">
      {/* 1) Hero: national-level chronic disease center vibe */}
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
              <p className="hc-hero-eyebrow">
                {portalIdentity.credentials.slice(0, 2).join(" · ")}
              </p>
              <h1 className="hc-hero-title">{portalIdentity.title}</h1>
              <p className="hc-hero-lead">{clinicalIntro.lead}</p>
              <p className="hc-hero-body">{clinicalIntro.body}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact#appointment" className="hc-btn-white">
                  在线预约挂号
                </Link>
                <Link href="/doctors" className="hc-btn-ghost">
                  查找医生
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label} className="border border-white/20 bg-white/10 px-4 py-4">
                    <p className="font-serif text-2xl font-semibold text-white">{s.value}</p>
                    <p className="mt-1 text-[12px] text-white/75">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hc-hero-collage" aria-hidden>
              <div className="hc-hero-collage-main">
                <HealthcareImage
                  src={homeImages.consultation.src}
                  alt={homeImages.consultation.alt}
                  sizes="(max-width: 1024px) 0px, 420px"
                />
              </div>
              <div className="hc-hero-collage-sub">
                <HealthcareImage
                  src={homeImages.heroAccent.src}
                  alt={homeImages.heroAccent.alt}
                  sizes="(max-width: 1024px) 0px, 220px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) Trust triad */}
      <section className="inst-section">
        <div className="inst-container">
          <div className="grid gap-5 lg:grid-cols-3">
            {trustCards.map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="group inst-card inst-card-hover p-6 transition"
              >
                <h3 className="font-serif text-[18px] font-semibold text-mayo-navy">{c.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-mayo-text-muted">{c.desc}</p>
                <span className="mt-4 inline-block text-[13px] font-semibold text-mayo-link group-hover:underline">
                  了解更多 →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3) Specialty imaging cards (6 items) */}
      <section className="inst-section band-gray">
        <div className="inst-container">
          <SectionTitle
            title="六大并发症专科"
            description="围绕糖尿病常见并发症设立专科诊室，形成筛查—干预—随访的长期管理路径。"
            href="/care/complications"
            linkLabel="专科总览"
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {specialtyCards.map((c) => (
              <HomePhotoCard
                key={c.href}
                title={c.title}
                desc={c.desc}
                href={c.href}
                image={c.image}
                tall
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4) Clinical approach (image + module bullets) */}
      <section className="hc-split-section">
        <div className="hc-split-photo">
          <HealthcareImage src={homeImages.labScience.src} alt={homeImages.labScience.alt} sizes="100vw" />
        </div>
        <div className="hc-split-content inst-section !py-12 lg:!py-16">
          <div className="inst-container max-w-none px-6 lg:px-12">
            <SectionTitle
              title="中西合璧 · 精准施治"
              description="以客观检查与长期随访为基础，结合中唐六位一体照护思路，降低并发症风险。"
              href="/services#methodology"
              linkLabel="六位一体体系"
            />

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              <div className="inst-card p-5">
                <h3 className="font-semibold text-mayo-navy">个体化评估</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-mayo-text-muted">
                  分层管理血糖目标与并发症筛查计划。
                </p>
              </div>
              <div className="inst-card p-5">
                <h3 className="font-semibold text-mayo-navy">并发症早筛</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-mayo-text-muted">
                  眼底、神经传导、肾功能与足部风险评估。
                </p>
              </div>
              <div className="inst-card p-5">
                <h3 className="font-semibold text-mayo-navy">长期随访</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-mayo-text-muted">
                  出院后追踪与远程健康管理闭环。
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact#appointment" className="portal-btn-primary">
                预约多学科会诊
              </Link>
              <Link href="/patient-guide#outpatient" className="portal-btn-secondary">
                先看门诊流程
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5) Doctors */}
      <section className="inst-section">
        <div className="inst-container">
          <SectionTitle
            title="名医坐诊"
            description="专科医师长期参与慢病管理与并发症评估。"
            href="/doctors"
            linkLabel="查看全部"
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredDoctors.map((d, i) => (
              <article key={d.name} className="hc-doctor-card">
                <div className="hc-doctor-photo">
                  <HealthcareImage
                    src={doctorPortraits[i % doctorPortraits.length]}
                    alt={`${d.name} 医师`}
                    sizes="(max-width: 640px) 50vw, 260px"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-mayo-navy">{d.name}</h3>
                  <p className="mt-1 text-[14px] font-medium text-mayo-blue">{d.title}</p>
                  <p className="mt-1 text-[12px] font-medium text-mayo-text-light">{d.specialty}</p>
                  <p className="mt-3 text-[14px] leading-relaxed text-mayo-text-muted">{d.focus}</p>
                  <Link
                    href="/contact#appointment"
                    className="mt-4 inline-block text-[13px] font-semibold text-mayo-link hover:underline"
                  >
                    预约咨询 →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6) Environment */}
      <section className="hc-band">
        <div className="hc-band-media" aria-hidden>
          <HealthcareImage src={homeImages.campus.src} alt={homeImages.campus.alt} sizes="100vw" />
          <div className="hc-band-overlay" />
        </div>
        <div className="inst-container relative z-10 py-14 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-[12px] font-bold uppercase tracking-widest text-white/70">医院环境</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-white lg:text-4xl">
              明亮通透的诊疗空间
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-white/85">
              规范化医疗流程与舒适就诊体验，让患者在每一次到访中更安心、更明确下一步。
            </p>
          </div>
        </div>
      </section>

      {/* 7) Education */}
      <section className="inst-section band-gray">
        <div className="inst-container">
          <SectionTitle
            title="糖友健康知识"
            description="由临床团队整理的健康教育内容，帮助您理解疾病、读懂指标并建立可执行的自我管理计划。"
            href="/education"
            linkLabel="更多资讯"
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {educationCards.map((a, i) => (
              <Link key={a.href} href={a.href} className="hc-article-card group">
                <div className="hc-article-thumb">
                  <HealthcareImage
                    src={articleThumbnails[i % articleThumbnails.length]}
                    alt={a.title}
                    sizes="(max-width: 1024px) 100vw, 320px"
                  />
                </div>
                <div className="hc-article-body">
                  <p className="text-[12px] font-medium text-mayo-text-light">
                    {a.category} · {a.date}
                  </p>
                  <h3 className="mt-2 font-serif text-xl font-semibold text-mayo-navy">
                    <span className="group-hover:text-mayo-blue">{a.title}</span>
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-mayo-text-muted">{a.excerpt}</p>
                  <span className="mt-4 inline-block text-[14px] font-semibold text-mayo-link group-hover:underline">
                    阅读全文 →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8) Pre-footer operational density */}
      <section className="hc-prefooter">
        <div className="hc-prefooter-bg" aria-hidden>
          <HealthcareImage src={homeImages.interior.src} alt="" sizes="100vw" />
          <div className="hc-prefooter-overlay" />
        </div>
        <div className="inst-container relative z-10 py-14">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-[12px] font-bold uppercase tracking-widest text-white/55">全国咨询热线</p>
              <a href={`tel:${site.phoneRaw}`} className="mt-3 block font-serif text-3xl font-semibold text-white">
                {site.phone}
              </a>
              <p className="mt-2 text-[13px] text-white/70">{site.hours}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/contact#appointment"
                  className="bg-white px-4 py-2 text-[13px] font-bold text-mayo-navy hover:bg-mayo-gray"
                >
                  在线预约挂号
                </Link>
                <Link
                  href="/contact#locations"
                  className="border border-white/40 px-4 py-2 text-[13px] font-semibold text-white hover:bg-white/10"
                >
                  来院导航
                </Link>
              </div>
            </div>

            <div className="lg:col-span-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <p className="text-[12px] font-bold uppercase tracking-wide text-white/50">就医服务</p>
                <ul className="mt-3 space-y-2 text-[14px]">
                  {patientTaskBar.slice(0, 6).map((t) => (
                    <li key={t.href}>
                      <Link href={t.href} className="text-white/85 hover:text-white">
                        {t.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-[12px] font-bold uppercase tracking-wide text-white/50">了解中唐</p>
                <ul className="mt-3 space-y-2 text-[14px]">
                  <li>
                    <Link href="/about" className="text-white/85 hover:text-white">
                      医院介绍
                    </Link>
                  </li>
                  <li>
                    <Link href="/doctors" className="text-white/85 hover:text-white">
                      专家团队
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#methodology" className="text-white/85 hover:text-white">
                      特色疗法
                    </Link>
                  </li>
                  <li>
                    <Link href="/research" className="text-white/85 hover:text-white">
                      科研学术
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-[12px] font-bold uppercase tracking-wide text-white/50">院区信息</p>
                <p className="mt-3 text-[14px] text-white/80">{site.address}</p>
                <p className="mt-2 text-[14px] text-white/80">{site.addressAlt}</p>
                <div className="mt-5">
                  <p className="text-[12px] font-bold uppercase tracking-wide text-white/50">医疗声明</p>
                  <p className="mt-2 text-[13px] text-white/70">
                    本网站内容仅供健康教育参考，不能替代医师面诊与个体化诊疗建议。急症请拨打 120。
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden lg:block lg:col-span-12">
              <div className="mt-8 border-t border-white/20 pt-6 text-[12px] text-white/55">
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {utilityNav.map((u) => (
                    <Link key={u.href} href={u.href} className="hover:text-white">
                      {u.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

