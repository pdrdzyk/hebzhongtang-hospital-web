import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import CtaBand from "@/components/CtaBand";
import { diabetesPageSections, site } from "@/lib/content";

export const metadata: Metadata = { title: "糖尿病诊疗" };

export default function DiabetesCarePage() {
  return (
    <PageShell
      title="糖尿病诊疗"
      intro="了解糖尿病、识别就医时机，以及我院的中唐整合照护方式。"
      breadcrumbs={[{ label: "糖尿病诊疗" }]}
    >
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
        <div className="grid gap-16 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <nav className="sticky top-28 space-y-1 border-l border-line pl-4 text-[13px]">
              {diabetesPageSections.map((s) => (
                <a key={s.id} href={`#${s.id}`} className="block py-2 text-ink-muted hover:text-ink">{s.title}</a>
              ))}
              <a href="/contact" className="mt-4 block py-2 font-medium text-blue-medical">预约咨询</a>
            </nav>
          </aside>
          <div className="lg:col-span-9">
            <p className="rounded border border-blue-medical/20 bg-blue-soft/30 px-4 py-3 text-sm text-ink-muted">
              本页内容仅供健康教育参考，不能替代专业医疗建议。如有症状请及时就医。
            </p>
            {diabetesPageSections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-28 border-b border-line py-10 last:border-0">
                <h2 className="font-serif text-2xl text-ink">{s.title}</h2>
                <p className="prose-calm mt-4 text-[15px] text-ink-muted">{s.content}</p>
              </section>
            ))}
            <div className="mt-8 rounded border border-line bg-paper-warm p-6">
              <h3 className="text-[15px] font-medium text-ink">在中唐接受糖尿病照护</h3>
              <p className="prose-calm mt-2 text-sm text-ink-muted">
                专科门诊、六位一体管理与并发症学科协作。电话 {site.phone} 可咨询预约。
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                <Link href="/services" className="text-[13px] text-blue-medical hover:underline">就诊服务</Link>
                <Link href="/care/complications" className="text-[13px] text-blue-medical hover:underline">并发症专科</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CtaBand />
    </PageShell>
  );
}
