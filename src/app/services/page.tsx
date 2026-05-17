import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { departments, sixPillars, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "治疗特色",
};

const features = [
  {
    num: "01",
    title: "疏肝调气、六位一体防治模式",
    desc: "以王钢柱主任医师创立的理论为核心，将预防、确诊、治疗、饮食、运动、情志调理融为一体，实现糖尿病及并发症的系统防治。",
  },
  {
    num: "02",
    title: "并发症特色专科",
    desc: "设立足病、肾病、眼病、周围神经病变、脂肪肝肥胖等多个特色科室，针对并发症进行专科化、精准化诊疗。",
  },
  {
    num: "03",
    title: "疏糖康复操",
    desc: "中唐特色运动疗法，安全适宜糖尿病患者，有助于改善代谢、增强体质，是六位一体防治体系的重要组成部分。",
  },
  {
    num: "04",
    title: "科学调糖 · 走出误区",
    desc: "通过健康教育帮助患者纠正饮食、用药等常见误区，实现科学、平稳、可持续的血糖管理。",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="治疗特色"
        subtitle="疏肝调气 · 六位一体 · 中西医结合慢病管理"
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {features.map((f) => (
              <div
                key={f.num}
                className="card-lift rounded-2xl border border-slate-200 bg-white p-8"
              >
                <span className="font-serif text-3xl font-bold text-teal-600/30">{f.num}</span>
                <h2 className="mt-2 font-serif text-xl font-semibold text-navy-900">{f.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            label="Six Pillars"
            title="六位一体防治体系"
            subtitle="覆盖糖尿病管理全周期的六个科学维度。"
            light
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sixPillars.map((p, i) => (
              <div
                key={p.title}
                className="rounded-xl border border-white/10 bg-white/5 p-6"
              >
                <span className="text-xs font-semibold text-gold-400">0{i + 1}</span>
                <h3 className="mt-2 font-serif text-lg text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading label="Departments" title="特色科室一览" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((d) => (
              <div key={d.name} className="rounded-xl border border-slate-200 bg-cream-50 p-6">
                <h3 className="font-serif font-semibold text-navy-900">{d.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{d.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href={`tel:${site.phoneRaw}`}
              className="inline-block rounded-full bg-teal-600 px-8 py-3 text-sm font-medium text-white hover:bg-teal-500"
            >
              咨询治疗方案 · {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
