import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import CtaBand from "@/components/CtaBand";
import { doctors } from "@/lib/content";

export const metadata: Metadata = { title: "医护团队" };

export default function DoctorsPage() {
  return (
    <PageShell
      title="医护团队"
      intro="糖尿病及并发症专科临床团队。出诊安排请电话咨询预约。"
      breadcrumbs={[{ label: "医护团队" }]}
    >
      <div className="mx-auto max-w-[1280px] px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((d) => (
            <article key={d.name} className="card-institutional flex flex-col p-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-soft font-serif text-2xl text-blue-deep">
                {d.name.slice(0, 1)}
              </div>
              <h2 className="mt-6 text-xl font-medium text-ink">{d.name}</h2>
              <p className="text-sm font-medium text-blue-medical">{d.title}</p>
              <p className="mt-2 text-[12px] uppercase tracking-wide text-ink-faint">{d.specialty}</p>
              <p className="mt-3 text-[14px] text-ink-muted">{d.focus}</p>
              <p className="prose-calm mt-3 flex-1 text-sm text-ink-muted">{d.bio}</p>
              <Link
                href="/contact#appointment"
                className="mt-6 text-[13px] font-medium text-blue-medical hover:underline"
              >
                预约咨询 →
              </Link>
            </article>
          ))}
        </div>
      </div>
      <CtaBand />
    </PageShell>
  );
}
