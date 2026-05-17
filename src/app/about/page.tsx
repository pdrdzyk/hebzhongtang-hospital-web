import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { milestones, site, trustSignals } from "@/lib/content";

export const metadata: Metadata = { title: "关于" };

export default function AboutPage() {
  return (
    <PageShell
      label="About"
      title={site.name}
      intro={`成立于 ${site.founded} 年。河北省、石家庄市医保定点医院。三十年代谢病专科实践。`}
    >
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="max-w-2xl space-y-6 prose-calm text-[15px] text-ink-muted">
            <p>
              石家庄糖尿病医院由王钢柱主任医师创立「疏肝调气法」防治糖尿病理论，
              并发展出覆盖预防、确诊、治疗、饮食、运动与情志调理的六位一体体系。
            </p>
            <p>
              医院开设预防保健、内科（肾病学、内分泌）、眼科、医学检验与影像、中医等科目，
              并设立足病、肾病、眼病、神经病变、脂肪肝肥胖等并发症专科。
            </p>
          </div>

          <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {trustSignals.slice(0, 3).map((t) => (
              <div key={t.title} className="border-t border-line pt-6">
                <p className="text-[11px] tracking-widest text-ink-faint uppercase">{t.label}</p>
                <h2 className="mt-2 text-[15px] font-medium text-ink">{t.title}</h2>
                <p className="prose-calm mt-2 text-sm text-ink-muted">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper-warm py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <h2 className="font-serif text-2xl text-ink">发展历程</h2>
          <ol className="mt-12 space-y-0">
            {milestones.map((m) => (
              <li
                key={m.year}
                className="grid gap-4 border-t border-line py-8 sm:grid-cols-[5rem_1fr]"
              >
                <span className="font-serif text-lg text-ink-faint">{m.year}</span>
                <div>
                  <h3 className="text-[15px] font-medium text-ink">{m.title}</h3>
                  <p className="prose-calm mt-2 text-sm text-ink-muted">{m.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </PageShell>
  );
}
