import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import CtaBand from "@/components/CtaBand";
import { milestones, site, trustPoints } from "@/lib/content";

export const metadata: Metadata = { title: "关于" };

export default function AboutPage() {
  return (
    <PageShell
      title="关于医院"
      intro={`${site.name} · ${site.brandFull}。成立于 ${site.founded} 年。`}
      breadcrumbs={[{ label: "关于" }]}
    >
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
        <div className="max-w-3xl space-y-6 prose-calm text-[15px] text-ink-muted">
          <p>
            石家庄糖尿病医院是一所大型糖尿病专科医院。王钢柱主任医师创立「疏肝调气法」及
            「疏肝调气、六位一体」防治糖尿病及并发症体系，涵盖预防、确诊、治疗、饮食、运动与情志调理。
          </p>
          <p>
            医院开设预防保健、内科（肾病学、内分泌）、眼科、医学检验与影像、中医等科目，
            并设立足病、肾病、眼病、神经病变、脂肪肝肥胖等并发症专科。
          </p>
        </div>

        <section id="credentials" className="scroll-mt-28 mt-16">
          <h2 className="font-serif text-2xl text-ink">资质与特点</h2>
          <ul className="mt-8 space-y-6">
            {trustPoints.map((t) => (
              <li key={t.title} className="border-l-2 border-blue-medical/30 pl-6">
                <h3 className="font-medium text-ink">{t.title}</h3>
                <p className="prose-calm mt-1 text-sm text-ink-muted">{t.desc}</p>
              </li>
            ))}
            <li className="border-l-2 border-blue-medical/30 pl-6">
              <h3 className="font-medium text-ink">医保定点</h3>
              <p className="prose-calm mt-1 text-sm text-ink-muted">河北省、石家庄市医保定点医院。</p>
            </li>
          </ul>
        </section>

        <h2 className="mt-20 font-serif text-2xl text-ink">发展历程</h2>
        <ol className="mt-8 divide-y divide-line border-y border-line">
          {milestones.map((m) => (
            <li key={m.year} className="grid gap-4 py-8 sm:grid-cols-[5rem_1fr]">
              <span className="font-serif text-ink-faint">{m.year}</span>
              <div>
                <h3 className="font-medium text-ink">{m.title}</h3>
                <p className="prose-calm mt-1 text-sm text-ink-muted">{m.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <CtaBand />
    </PageShell>
  );
}
