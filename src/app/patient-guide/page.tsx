import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import CtaBand from "@/components/CtaBand";
import { patientGuideItems, site } from "@/lib/content";

export const metadata: Metadata = { title: "患者指南" };

const sections = [
  {
    id: "first-visit",
    title: "首次就诊",
    content:
      "请携带身份证、医保卡（如有）、既往病历、近期血糖监测记录、化验与影像报告，以及正在使用的药物清单（含名称与剂量）。建议提前电话预约。",
  },
  {
    id: "insurance",
    title: "医保与费用",
    content:
      "我院为河北省、石家庄市医保定点医院。具体报销比例与范围以当地医保政策及您的参保类型为准，就诊时可向窗口咨询。",
  },
  {
    id: "follow-up",
    title: "随访与监测",
    content:
      "慢性代谢病需要长期管理。请按医嘱复查糖化血红蛋白、并发症相关指标，并记录血糖变化，便于医生调整方案。",
  },
  {
    id: "remote",
    title: "远程咨询",
    content:
      "出院后可通过全国咨询热线或远程咨询中心获取健康管理指导，延伸院内诊疗服务。",
  },
];

export default function PatientGuidePage() {
  return (
    <PageShell
      title="患者指南"
      intro="帮助您顺利就诊并参与长期慢病管理。"
      breadcrumbs={[{ label: "患者指南" }]}
    >
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:max-w-4xl">
          {patientGuideItems.map((g) => (
            <div key={g.title} className="border border-line bg-paper-warm p-6">
              <h2 className="text-[15px] font-medium text-ink">{g.title}</h2>
              <p className="prose-calm mt-2 text-sm text-ink-muted">{g.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 max-w-3xl space-y-12">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-28">
              <h2 className="font-serif text-xl text-ink">{s.title}</h2>
              <p className="prose-calm mt-4 text-[15px] text-ink-muted">{s.content}</p>
            </section>
          ))}
        </div>
        <p className="mt-12 text-sm text-ink-muted">
          咨询预约：<a href={`tel:${site.phoneRaw}`} className="text-blue-medical">{site.phone}</a>
        </p>
      </div>
      <CtaBand />
    </PageShell>
  );
}
