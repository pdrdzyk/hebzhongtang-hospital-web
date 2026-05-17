import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import CtaBand from "@/components/CtaBand";
import { careSystem, complicationAreas, diabetesCareAreas, sixPillars } from "@/lib/content";

export const metadata: Metadata = { title: "就诊服务" };

export default function ServicesPage() {
  return (
    <PageShell
      title="就诊服务"
      intro="门诊、并发症专科与长期管理 — 中唐六位一体整合照护体系。"
      breadcrumbs={[{ label: "就诊服务" }]}
    >
      <section id="outpatient" className="scroll-mt-28 border-b border-line py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="font-serif text-2xl text-ink">门诊与核心服务</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {diabetesCareAreas.map((a) => (
              <div key={a.title} className="border border-line p-6">
                <h3 className="font-medium text-ink">{a.title}</h3>
                <p className="prose-calm mt-2 text-sm text-ink-muted">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="methodology" className="scroll-mt-28 border-b border-line bg-paper-warm py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="font-serif text-2xl text-ink">六位一体</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sixPillars.map((p) => (
              <div key={p.title}>
                <h3 className="text-[15px] font-medium text-ink">{p.title}</h3>
                <p className="prose-calm mt-2 text-sm text-ink-muted">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="follow-up" className="scroll-mt-28 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="font-serif text-2xl text-ink">照护路径</h2>
          <ol className="mt-8 divide-y divide-line border-y border-line">
            {careSystem.map((c) => (
              <li key={c.step} className="grid grid-cols-[3rem_1fr] gap-6 py-6">
                <span className="text-sm text-ink-faint">{c.step}</span>
                <div>
                  <h3 className="font-medium text-ink">{c.title}</h3>
                  <p className="prose-calm mt-1 text-sm text-ink-muted">{c.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-line bg-paper-warm py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="font-serif text-2xl text-ink">并发症专科</h2>
          <ul className="mt-8 divide-y divide-line">
            {complicationAreas.map((c) => (
              <li key={c.title} className="py-4 text-sm">
                <span className="font-medium text-ink">{c.title}</span>
                <span className="text-ink-muted"> — {c.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </PageShell>
  );
}
