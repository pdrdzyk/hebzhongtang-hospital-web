import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import CtaBand from "@/components/CtaBand";
import { site } from "@/lib/content";

export const metadata: Metadata = { title: "联系" };

export default function ContactPage() {
  return (
    <PageShell
      title="联系与预约"
      intro="建议提前电话预约。请携带既往病历与检查资料就诊。"
      breadcrumbs={[{ label: "联系" }]}
    >
      <div className="mx-auto max-w-[1280px] px-4 py-12 lg:px-8 lg:py-16">
        <section id="appointment" className="scroll-mt-28">
          <h2 className="font-serif text-2xl text-ink">预约咨询</h2>
          <p className="prose-calm mt-4 max-w-2xl text-ink-muted">
            请拨打全国咨询热线预约门诊。{site.hours}
          </p>
          <a
            href={`tel:${site.phoneRaw}`}
            className="mt-6 inline-block font-serif text-4xl text-blue-deep hover:text-blue-medical"
          >
            {site.phone}
          </a>
        </section>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <dl className="space-y-8">
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-wider text-ink-faint">邮箱</dt>
              <dd className="mt-2">
                <a href={`mailto:${site.email}`} className="text-ink-muted hover:text-ink">{site.email}</a>
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-wider text-ink-faint">在线客服 QQ</dt>
              <dd className="mt-2 text-ink-muted">{site.qq}</dd>
            </div>
          </dl>
          <div className="card-institutional p-8">
            <h2 className="font-serif text-xl text-ink">就诊提示</h2>
            <ul className="prose-calm mt-6 list-disc space-y-3 pl-5 text-sm text-ink-muted">
              <li>携带身份证、医保卡、既往病历与用药清单</li>
              <li>慢性病患者建议定期复查并记录血糖</li>
              <li>网站信息仅供参考，具体诊疗请遵医嘱</li>
            </ul>
          </div>
        </div>

        <section id="locations" className="scroll-mt-28 mt-16">
          <h2 className="font-serif text-2xl text-ink">院区地址</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="card-institutional p-6">
              <p className="text-[11px] font-semibold uppercase text-ink-faint">主院区</p>
              <p className="mt-2 text-lg text-ink">{site.address}</p>
            </div>
            <div className="card-institutional p-6">
              <p className="text-[11px] font-semibold uppercase text-ink-faint">裕华院区</p>
              <p className="mt-2 text-lg text-ink">{site.addressAlt}</p>
            </div>
          </div>
        </section>
      </div>
      <CtaBand />
    </PageShell>
  );
}
