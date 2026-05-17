import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { milestones, researchHighlights } from "@/lib/content";

export const metadata: Metadata = { title: "科研学术" };

export default function ResearchPage() {
  return (
    <PageShell
      title="科研学术"
      intro="临床研究与学术传承支撑我院的慢病管理体系，而非营销话术。"
      breadcrumbs={[{ label: "科研学术" }]}
    >
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2">
          {researchHighlights.map((r) => (
            <div key={r.title} className="border border-line p-8">
              <span className="font-serif text-lg text-ink-faint">{r.year}</span>
              <h2 className="mt-2 text-[15px] font-medium text-ink">{r.title}</h2>
              <p className="prose-calm mt-2 text-sm text-ink-muted">{r.desc}</p>
            </div>
          ))}
        </div>
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
    </PageShell>
  );
}
