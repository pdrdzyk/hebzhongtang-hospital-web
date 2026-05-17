import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { credentials, milestones, site } from "@/lib/content";

export const metadata: Metadata = { title: "医院介绍" };

export default function AboutPage() {
  return (
    <>
      <PageHero title="医院介绍" subtitle={`${site.name} · 成立于 ${site.founded} 年 · 糖尿病专科医疗机构`} />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <SectionHeading label="About" title="医院简介" centered={false} />
              <div className="mt-8 space-y-5 text-base leading-relaxed text-slate-600">
                <p>石家庄糖尿病医院成立于 {site.founded} 年，是一所大型糖尿病专科医院，由王钢柱主任医师创立「疏肝调气法」防治糖尿病理论，并发展出「疏肝调气、六位一体」防治糖尿病及并发症的系统模式。</p>
                <p>医院开设预防保健科、内科（肾病学、内分泌专业）、眼科、急诊医学科、医学检验科、医学影像科及中医科等诊疗科目，是河北省医保定点医院、石家庄市医保定点医院。</p>
                <p>三十余年来，医院坚持中西医结合、慢病全周期管理理念，在糖尿病预防、确诊、治疗、饮食、运动与情志调理等方面形成特色，服务广大患者。</p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="font-serif text-lg font-semibold text-navy-900">资质认证</h3>
                <ul className="mt-6 space-y-3">{credentials.map((c) => (<li key={c} className="flex items-center gap-3 text-sm text-slate-600"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-50 text-teal-600">✓</span>{c}</li>))}</ul>
                <div className="mt-8 rounded-xl bg-navy-900 p-6 text-center">
                  <p className="text-xs text-slate-400">全国咨询热线</p>
                  <a href={`tel:${site.phoneRaw}`} className="mt-2 block font-serif text-2xl font-semibold text-white">{site.phone}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-cream-100 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading label="History" title="发展历程" />
          <div className="mt-16">{milestones.map((m) => (
            <div key={m.year} className="relative flex gap-8 border-l border-teal-300 pb-12 pl-8 last:pb-0">
              <span className="absolute -left-2 top-1 h-4 w-4 rounded-full bg-teal-600 ring-4 ring-cream-100" />
              <div className="w-16 flex-shrink-0 font-serif text-xl font-bold text-teal-700">{m.year}</div>
              <div><h3 className="font-serif text-lg font-semibold text-navy-900">{m.title}</h3><p className="mt-2 text-sm text-slate-600">{m.desc}</p></div>
            </div>
          ))}</div>
        </div>
      </section>
    </>
  );
}
