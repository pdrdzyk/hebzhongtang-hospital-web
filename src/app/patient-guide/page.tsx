import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import CtaBand from "@/components/CtaBand";
import { patientGuideHome, site } from "@/lib/content";

export const metadata: Metadata = { title: "患者指南" };

const detailSections = [
  {
    id: "first-visit",
    title: "首次就诊",
    content:
      "请携带身份证、医保卡、既往病历、近期检查报告、血糖记录及正在使用的药物清单（含剂量）。建议提前电话预约。",
  },
  {
    id: "outpatient",
    title: "门诊流程",
    content:
      "挂号 → 专科评估 → 开具检查 → 制定治疗方案 → 取药并预约下次复查。复诊请携带近期监测数据。",
  },
  {
    id: "inpatient",
    title: "住院流程",
    content:
      "适用于血糖难以控制、急性并发症或需强化治疗的患者。住院安排请通过咨询热线与医生沟通。",
  },
  {
    id: "insurance",
    title: "医保与费用",
    content: "我院为河北省、石家庄市医保定点医院。报销范围以当地政策为准。",
  },
  {
    id: "follow-up",
    title: "随访与监测",
    content: "按医嘱定期复查糖化血红蛋白及并发症筛查项目，记录血糖日志。",
  },
  {
    id: "remote",
    title: "远程咨询",
    content: "出院后可通过远程咨询中心获取健康管理指导。",
  },
];

export default function PatientGuidePage() {
  return (
    <PageShell
      title="患者指南"
      intro="就诊前、就诊中与长期管理所需信息。"
      breadcrumbs={[{ label: "患者指南" }]}
    >
      <div className="mx-auto max-w-[1280px] px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {patientGuideHome.map((g) => (
            <a key={g.title} href={g.href} className="card-institutional block p-6">
              <h2 className="font-medium text-ink">{g.title}</h2>
              <p className="prose-calm mt-2 text-sm text-ink-muted">{g.desc}</p>
            </a>
          ))}
        </div>
        <div className="mt-16 max-w-3xl space-y-12">
          {detailSections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-28 border-t border-line pt-10">
              <h2 className="font-serif text-2xl text-ink">{s.title}</h2>
              <p className="prose-calm mt-4 text-[15px] text-ink-muted">{s.content}</p>
            </section>
          ))}
        </div>
        <p className="mt-12 text-sm text-ink-muted">
          预约：
          <a href={`tel:${site.phoneRaw}`} className="text-blue-medical">
            {site.phone}
          </a>
        </p>
      </div>
      <CtaBand />
    </PageShell>
  );
}
