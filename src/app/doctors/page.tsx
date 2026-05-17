import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import CtaBand from "@/components/CtaBand";
import { doctors } from "@/lib/content";

export const metadata: Metadata = { title: "医护团队" };

export default function DoctorsPage() {
  return (
    <PageShell
      title="医护团队"
      intro="临床专家与专科骨干。具体出诊安排请电话咨询预约。"
      breadcrumbs={[{ label: "医护团队" }]}
    >
<div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((d) => (
            <article key={d.name} className="border border-line p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-soft font-serif text-xl text-blue-medical">{d.name.slice(0,1)}</div>
              <h2 className="mt-6 text-lg font-medium text-ink">{d.name}</h2>
              <p className="text-sm text-blue-medical">{d.title} · {d.role}</p>
              <p className="prose-calm mt-4 text-sm text-ink-muted">{d.bio}</p>
            </article>
          ))}
        </div>
        <p className="prose-calm mt-12 max-w-2xl text-sm text-ink-faint">
          更多医师信息将陆续更新。就诊请以当日门诊安排为准。
        </p>
      </div>
      <CtaBand />
    </PageShell>
  );
}
