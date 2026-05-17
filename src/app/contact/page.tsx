import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/content";

export const metadata: Metadata = { title: "联系我们" };

export default function ContactPage() {
  return (
    <>
      <PageHero title="联系我们" subtitle="欢迎来电咨询或到院就诊" />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
              <h2 className="font-serif text-2xl font-semibold text-navy-900">{site.name}</h2>
              <p className="mt-2 text-sm text-teal-600">{site.brand}</p>
              <dl className="mt-10 space-y-8">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">全国咨询热线</dt>
                  <dd className="mt-2"><a href={`tel:${site.phoneRaw}`} className="font-serif text-3xl font-semibold text-teal-600">{site.phone}</a></dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">医院地址</dt>
                  <dd className="mt-2 text-slate-700">{site.address}</dd>
                  <dd className="mt-1 text-sm text-slate-500">裕华院区：{site.addressAlt}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">电子邮箱</dt>
                  <dd className="mt-2"><a href={`mailto:${site.email}`} className="text-teal-600">{site.email}</a></dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">在线客服 QQ</dt>
                  <dd className="mt-2 text-slate-700">{site.qq}</dd>
                </div>
              </dl>
            </div>
            <div className="flex flex-col justify-center rounded-2xl hero-gradient p-10 text-white">
              <h3 className="font-serif text-xl font-semibold">就诊提示</h3>
              <ul className="mt-6 space-y-4 text-sm text-slate-300">
                <li className="flex gap-3"><span className="text-teal-400">01</span>请携带既往病历、检查报告及正在使用的药物清单</li>
                <li className="flex gap-3"><span className="text-teal-400">02</span>建议提前电话预约，减少等候时间</li>
                <li className="flex gap-3"><span className="text-teal-400">03</span>我院为河北省、石家庄市医保定点医院</li>
              </ul>
              <a href={`tel:${site.phoneRaw}`} className="mt-10 inline-flex justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-navy-900">立即拨打 {site.phone}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
