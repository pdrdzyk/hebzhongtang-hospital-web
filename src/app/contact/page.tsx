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
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
        <div className="grid gap-16 lg:grid-cols-2">
          <dl className="space-y-10">
            <div>
              <dt className="text-[11px] font-medium tracking-widest text-ink-faint uppercase">全国咨询热线</dt>
              <dd className="mt-3">
                <a href={`tel:${site.phoneRaw}`} className="font-serif text-3xl text-ink hover:text-blue-medical">
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-medium tracking-widest text-ink-faint uppercase">主院区</dt>
              <dd className="prose-calm mt-3 text-[15px] text-ink">{site.address}</dd>
            </div>
            <div>
              <dt className="text-[11px] font-medium tracking-widest text-ink-faint uppercase">裕华院区</dt>
              <dd className="prose-calm mt-3 text-[15px] text-ink">{site.addressAlt}</dd>
            </div>
            <div>
              <dt className="text-[11px] font-medium tracking-widest text-ink-faint uppercase">邮箱</dt>
              <dd className="mt-3">
                <a href={`mailto:${site.email}`} className="text-ink-muted hover:text-ink">{site.email}</a>
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-medium tracking-widest text-ink-faint uppercase">在线客服 QQ</dt>
              <dd className="mt-3 text-ink-muted">{site.qq}</dd>
            </div>
          </dl>
          <div className="border border-line bg-paper-warm p-8">
            <h2 className="font-serif text-xl text-ink">就诊提示</h2>
            <ul className="prose-calm mt-6 space-y-4 text-sm text-ink-muted">
              <li>请携带身份证、医保卡、既往病历与用药清单</li>
              <li>{site.hours}</li>
              <li>我院为河北省、石家庄市医保定点医院</li>
              <li>网站信息仅供参考，具体诊疗请遵医嘱</li>
            </ul>
          </div>
        </div>
      </div>
      <CtaBand />
    </PageShell>
  );
}
