import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import CtaBand from "@/components/CtaBand";
import { complicationAreas } from "@/lib/content";

export const metadata: Metadata = { title: "并发症专科" };

const sections = [
  { id: "foot", ...complicationAreas[0] },
  { id: "kidney", ...complicationAreas[1] },
  { id: "eye", ...complicationAreas[2] },
  { id: "nerve", ...complicationAreas[3] },
  { id: "obesity", ...complicationAreas[4] },
  { id: "cardio", ...complicationAreas[5] },
];

export default function ComplicationsPage() {
  return (
    <PageShell
      title="并发症专科"
      intro="糖尿病并发症需要专科化、长期化的筛查与干预。我院设立独立学科，针对主要靶器官损害提供系统防治。"
      breadcrumbs={[{ label: "并发症专科" }]}
    >
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
        <div className="max-w-3xl">
          <p className="prose-calm text-[15px] text-ink-muted">
            长期高血糖可损害神经、肾脏、视网膜、足部微循环及心脑血管系统。早期筛查与规范随访可显著降低致残风险。
          </p>
        </div>
        <div className="mt-12 space-y-0 divide-y divide-line border-y border-line">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-28 py-10">
              <h2 className="font-serif text-xl text-ink">{s.title}</h2>
              <p className="prose-calm mt-3 max-w-2xl text-[15px] text-ink-muted">{s.desc}</p>
            </section>
          ))}
        </div>
      </div>
      <CtaBand />
    </PageShell>
  );
}
