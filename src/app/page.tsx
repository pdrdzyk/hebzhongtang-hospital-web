import Link from "next/link";
import HealthcareImage from "@/components/home/HealthcareImage";
import {
  brandHero,
  careEcosystem,
  complicationSystem,
  patientJourneyBrand,
} from "@/lib/brand-home";
import { doctors, researchHighlights, site, stats } from "@/lib/content";
import { homeImages } from "@/lib/home-images";
import "./brand-home.css";

export default function HomePage() {
  const leadPhysicians = doctors.slice(0, 4);

  return (
    <div className="brand-home">
      {/* 1. Full-screen editorial hero */}
      <section className="brand-hero">
        <div className="brand-hero-media" aria-hidden>
          <HealthcareImage
            src={homeImages.heroEditorial.src}
            alt={homeImages.heroEditorial.alt}
            priority
            sizes="100vw"
          />
        </div>
        <div className="brand-hero-inner">
          <p className="brand-eyebrow">{brandHero.eyebrow}</p>
          <h1 className="brand-hero-title">
            {brandHero.title}
            <span className="brand-hero-accent">{brandHero.titleAccent}</span>
          </h1>
          <p className="brand-hero-lead">{brandHero.lead}</p>
          <p className="brand-hero-body">{brandHero.body}</p>
          <div className="brand-hero-actions">
            <Link href="/contact#appointment" className="brand-btn-primary">
              预约评估
            </Link>
            <Link href="/services#methodology" className="brand-btn-text">
              了解医疗体系 →
            </Link>
          </div>
        </div>
      </section>

      {/* Stats — quiet credibility */}
      <section className="brand-section brand-section--light" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="brand-container">
          <div className="brand-stats">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="brand-stat-value">{s.value}</p>
                <p className="brand-stat-label">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Six-domain complication system */}
      <section className="brand-section brand-section--light">
        <div className="brand-container">
          <p className="brand-label">COMPLICATION SYSTEM</p>
          <h2 className="brand-h2">六大并发症域 · 系统化干预</h2>
          <p className="brand-intro">
            以代谢为中心，覆盖神经、眼底、肾脏、足部与心脑血管等靶器官风险 — 非分散科室导航，而是可追踪的医学体系。
          </p>
          <div className="brand-system-grid">
            {complicationSystem.map((cell) => (
              <Link key={cell.code} href={cell.href} className="brand-system-cell">
                <p className="brand-system-code">{cell.code}</p>
                <p className="brand-system-domain">{cell.domain}</p>
                <h3 className="brand-system-title">{cell.title}</h3>
                <p className="brand-system-desc">{cell.desc}</p>
              </Link>
            ))}
          </div>
          <p className="mt-10">
            <Link href="/care/complications" className="brand-physician-link">
              并发症体系总览 →
            </Link>
          </p>
        </div>
      </section>

      {/* 3. Care ecosystem */}
      <section className="brand-section brand-section--dark">
        <div className="brand-container">
          <p className="brand-label">INTEGRATED CARE</p>
          <h2 className="brand-h2">医疗体系</h2>
          <p className="brand-intro">
            专科医疗、长期随访、科研平台与患者教育 — 构成慢病管理的完整能力闭环。
          </p>
          <div className="brand-eco-list">
            {careEcosystem.map((item) => (
              <Link key={item.title} href={item.href} className="brand-eco-item">
                <p className="brand-eco-sub">{item.subtitle}</p>
                <h3 className="brand-eco-title">{item.title}</h3>
                <p className="brand-eco-desc">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Research */}
      <section className="brand-section brand-section--light">
        <div className="brand-container">
          <p className="brand-label">RESEARCH</p>
          <h2 className="brand-h2">科研与国家项目</h2>
          <p className="brand-intro">
            省级科研鉴定、学术专著与持续教学培训 — 临床能力背后是可验证的学术与科研积累。
          </p>
          <div className="brand-research-list">
            {researchHighlights.map((r) => (
              <div key={r.year + r.title} className="brand-research-item">
                <p className="brand-research-year">{r.year}</p>
                <div>
                  <h3 className="brand-research-title">{r.title}</h3>
                  <p className="brand-research-desc">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8">
            <Link href="/research" className="brand-physician-link">
              科研学术 →
            </Link>
          </p>
        </div>
      </section>

      {/* 5. Physicians */}
      <section className="brand-section" style={{ background: "var(--brand-cream)" }}>
        <div className="brand-container">
          <p className="brand-label">PHYSICIANS</p>
          <h2 className="brand-h2">专家团队</h2>
          <p className="brand-intro">
            专科医师长期参与慢病管理与并发症评估，强调个体化方案与可延续的随访关系。
          </p>
          <div>
            {leadPhysicians.map((d) => (
              <div key={d.name} className="brand-physician">
                <p className="brand-physician-name">{d.name}</p>
                <p className="brand-physician-meta">
                  {d.title} · {d.specialty}
                  <br />
                  <span className="text-[13px] text-[var(--brand-ink-faint)]">{d.focus}</span>
                </p>
                <Link href="/contact#appointment" className="brand-physician-link">
                  预约 →
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-6">
            <Link href="/doctors" className="brand-physician-link">
              全部医师 →
            </Link>
          </p>
        </div>
      </section>

      {/* 6. Patient journey */}
      <section className="brand-section brand-section--light">
        <div className="brand-container">
          <p className="brand-label">CARE PATHWAY</p>
          <h2 className="brand-h2">患者长期管理路径</h2>
          <p className="brand-intro">
            从基线评估到长期追踪 — 清晰、可预期的慢病管理节奏。
          </p>
          <div className="brand-journey">
            {patientJourneyBrand.map((step) => (
              <div key={step.step} className="brand-journey-step">
                <p className="brand-journey-num">{step.step}</p>
                <p className="brand-journey-title">{step.title}</p>
                <p className="brand-journey-desc">{step.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-10">
            <Link href="/patient-guide" className="brand-physician-link">
              患者指南 →
            </Link>
          </p>
        </div>
      </section>

      {/* 7. Environment */}
      <section className="brand-env">
        <div className="absolute inset-0" aria-hidden>
          <HealthcareImage
            src={homeImages.environment.src}
            alt={homeImages.environment.alt}
            sizes="100vw"
          />
        </div>
        <div className="brand-env-overlay" aria-hidden />
        <div className="brand-env-caption">
          <p className="brand-label" style={{ color: "rgba(232,180,168,0.85)" }}>
            ENVIRONMENT
          </p>
          <h2 className="brand-env-title">医院环境</h2>
          <p className="brand-env-desc">
            明亮、安静、有秩序的诊疗空间 — 支持长期医患关系与系统化慢病管理。
          </p>
          <Link
            href="/contact#locations"
            className="mt-6 inline-block text-[14px] font-medium text-white/90 underline-offset-4 hover:text-white"
          >
            院区与交通 →
          </Link>
        </div>
      </section>

      {/* Homepage CTA */}
      <section className="brand-cta-strip">
        <div className="brand-container">
          <p className="brand-label" style={{ color: "rgba(232,180,168,0.7)" }}>
            CONTACT
          </p>
          <p className="font-serif text-2xl font-normal text-white md:text-3xl">
            把控糖这件事，交给专业三十年的我们
          </p>
          <a href={`tel:${site.phoneRaw}`} className="brand-cta-phone">
            {site.phone}
          </a>
          <p className="mt-2 text-[14px] text-white/55">{site.hours}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact#appointment" className="brand-btn-primary">
              在线预约
            </Link>
            <Link href="/about#credentials" className="brand-btn-text">
              资质与医保 →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
