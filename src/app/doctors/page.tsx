import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { doctors, site } from "@/lib/content";

export const metadata: Metadata = { title: "医师团队" };

export default function DoctorsPage() {
  return (
    <>
      <PageHero title="医师团队" subtitle="资深专家领衔 · 糖尿病及并发症专科诊疗" />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doc) => (
              <div key={doc.name} className={`card-lift overflow-hidden rounded-2xl border bg-white ${doc.featured ? "border-teal-200" : "border-slate-200"}`}>
                <div className={`h-1.5 ${doc.featured ? "bg-gradient-to-r from-gold-500 via-teal-500 to-teal-600" : "bg-slate-100"}`} />
                <div className="p-8">
                  {doc.featured && <span className="mb-4 inline-block rounded-full bg-gold-500/10 px-3 py-1 text-xs font-medium text-gold-600">学科带头人</span>}
                  <h2 className="font-serif text-2xl font-semibold text-navy-900">{doc.name}</h2>
                  <p className="mt-1 text-teal-600">{doc.title}</p>
                  <p className="text-sm text-slate-500">{doc.role}</p>
                  <p className="mt-4 leading-relaxed text-slate-600">{doc.bio}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 rounded-2xl bg-navy-900 px-8 py-10 text-center">
            <p className="text-slate-300">预约专家门诊 · 全国咨询热线</p>
            <a href={`tel:${site.phoneRaw}`} className="mt-3 inline-block font-serif text-3xl font-semibold text-white hover:text-teal-300">{site.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}
