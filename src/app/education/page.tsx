import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { articles } from "@/lib/content";

export const metadata: Metadata = { title: "健康教育" };

export default function EducationPage() {
  return (
    <PageShell
      title="健康教育"
      intro="由临床团队整理的糖尿病管理知识，帮助您更理解慢病照护。"
      breadcrumbs={[{ label: "健康教育" }]}
    >
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
        <p className="max-w-2xl text-sm text-ink-faint">
          以下内容仅供健康教育，不能替代诊疗。如有不适请及时就医。
        </p>
        <div className="mt-12 divide-y divide-line border-y border-line">
          {articles.map((a, i) => (
            <article key={a.title} id={`article-${i + 1}`} className="scroll-mt-28 py-10">
              <p className="text-[11px] text-ink-faint">{a.category} · {a.date}</p>
              <h2 className="mt-3 font-serif text-2xl text-ink">{a.title}</h2>
              <p className="prose-calm mt-4 max-w-2xl text-[15px] text-ink-muted">{a.excerpt}</p>
              <p className="prose-calm mt-4 max-w-2xl text-[15px] text-ink-muted">
                建议与主治医生讨论您的个体情况，制定适合的监测与用药方案。出院后应关注饮食、运动、情绪与用药依从性，避免血糖大幅波动。
              </p>
              <Link href="/contact" className="mt-4 inline-block text-[13px] text-blue-medical hover:underline">
                需要咨询？联系我们
              </Link>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
