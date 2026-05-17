import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { site } from "@/lib/content";

export const metadata: Metadata = { title: "联系" };

export default function ContactPage() {
  return (
    <PageShell
      label="Contact"
      title="联系"
      intro="欢迎来电咨询。建议提前电话预约，以便为您安排合适的就诊时间。"
    >
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <dl className="max-w-lg space-y-10">
            <div>
              <dt className="text-[11px] font-medium tracking-widest text-ink-faint uppercase">
                电话
              </dt>
              <dd className="mt-3">
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="font-serif text-2xl text-ink hover:text-blue-medical"
                >
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-medium tracking-widest text-ink-faint uppercase">
                地址
              </dt>
              <dd className="prose-calm mt-3 text-[15px] text-ink-muted">
                {site.address}
                <br />
                <span className="text-ink-faint">裕华院区 · {site.addressAlt}</span>
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-medium tracking-widest text-ink-faint uppercase">
                邮箱
              </dt>
              <dd className="mt-3">
                <a
                  href={`mailto:${site.email}`}
                  className="text-[15px] text-ink-muted hover:text-ink"
                >
                  {site.email}
                </a>
              </dd>
            </div>
          </dl>

          <p className="prose-calm mt-16 max-w-md text-sm text-ink-faint">
            就诊请携带既往病历、检查报告及用药清单。本页信息仅供参考，具体诊疗请遵医嘱。
          </p>
        </div>
      </section>
    </PageShell>
  );
}
