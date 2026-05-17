import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { careSystem, departments, sixPillars, site } from "@/lib/content";

export const metadata: Metadata = { title: "诊疗体系" };

export default function ServicesPage() {
  return (
    <PageShell
      label="Care System"
      title="整合代谢照护体系"
      intro="疏肝调气、六位一体 — 覆盖慢病全周期的结构化路径，而非单次门诊治疗。"
    >
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <ol className="divide-y divide-line border-y border-line">
            {careSystem.map((item) => (
              <li
                key={item.step}
                className="grid grid-cols-[3rem_1fr] gap-6 py-10 md:grid-cols-[4rem_1fr]"
              >
                <span className="text-sm text-ink-faint">{item.step}</span>
                <div>
                  <h2 className="text-[15px] font-medium text-ink">{item.title}</h2>
                  <p className="prose-calm mt-2 text-sm text-ink-muted">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-line bg-paper-warm py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <h2 className="font-serif text-2xl text-ink">六位一体</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {sixPillars.map((p) => (
              <div key={p.title}>
                <h3 className="text-[15px] font-medium text-ink">{p.title}</h3>
                <p className="prose-calm mt-2 text-sm text-ink-muted">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <h2 className="font-serif text-2xl text-ink">并发症专科</h2>
          <ul className="mt-12 divide-y divide-line border-y border-line">
            {departments.map((d) => (
              <li key={d.name} className="flex flex-col gap-1 py-6 sm:flex-row sm:justify-between">
                <span className="text-[15px] text-ink">{d.name}</span>
                <span className="text-sm text-ink-muted sm:max-w-md sm:text-right">{d.desc}</span>
              </li>
            ))}
          </ul>
          <p className="mt-12 text-sm text-ink-muted">
            <a href={`tel:${site.phoneRaw}`} className="text-ink underline-offset-4 hover:underline">
              {site.phone}
            </a>
          </p>
        </div>
      </section>
    </PageShell>
  );
}
