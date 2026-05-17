import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import {
  articles,
  credentials,
  departments,
  doctors,
  milestones,
  sixPillars,
  site,
  stats,
} from "@/lib/content";

const pillarIcons: Record<string, string> = {
  shield: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  search: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  heart: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  leaf: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
  activity: "M13 10V3L4 14h7v7l9-11h-7z",
  mind: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pattern-grid relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="animate-fade-up">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm text-teal-300">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                河北省 · 石家庄市医保定点医院
              </div>
              <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-[3.25rem]">
                {site.name}
                <span className="mt-2 block text-2xl font-normal text-teal-300/90 md:text-3xl">
                  慢病全周期 · 可信赖的专科医疗
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
                自 {site.founded} 年成立以来，我们以「疏肝调气、六位一体」为核心，
                为糖尿病患者提供预防、诊疗、康复与心身调护的一体化专业服务。
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-gradient-to-r from-teal-500 to-teal-600 px-8 py-3.5 text-sm font-medium text-white shadow-lg shadow-teal-500/25 transition hover:brightness-110"
                >
                  预约咨询
                </Link>
                <Link
                  href="/about"
                  className="rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
                >
                  了解医院
                </Link>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <p className="text-sm font-medium text-gold-400">全国咨询热线</p>
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="mt-2 block font-serif text-4xl font-semibold tracking-wide text-white hover:text-teal-300"
                >
                  {site.phone}
                </a>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {stats.map((s) => (
                  ))}
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl border border-white/10 bg-navy-900/50 p-4"
                    >
                      <p className="font-serif text-2xl font-semibold text-white">
                        {s.value}
                        <span className="text-lg text-teal-400">{s.suffix}</span>
                      </p>
                      <p className="mt-1 text-xs text-slate-400">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile stats */}
      <section className="border-b border-slate-200 bg-white lg:hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-slate-200">
          {stats.map((s) => (
            <div key={s.label} className="bg-white px-6 py-6 text-center">
              <p className="font-serif text-2xl font-semibold text-navy-900">
                {s.value}
                <span className="text-teal-600">{s.suffix}</span>
              </p>
              <p className="mt-1 text-xs text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-cream-100 py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-6">
          {credentials.map((c) => (
            <span
              key={c}
              className="flex items-center gap-2 text-sm text-slate-600"
            >
              <svg className="h-4 w-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* Six pillars */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            label="核心防治体系"
            title="疏肝调气 · 六位一体"
            subtitle="王钢柱主任医师创立的系统化糖尿病及并发症防治模式，覆盖预防到康复的全周期管理。"
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sixPillars.map((p, i) => (
              <div
                key={p.title}
                className="card-lift group rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600 transition group-hover:bg-teal-600 group-hover:text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={pillarIcons[p.icon] ?? pillarIcons.heart}
                    />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-gold-500">
                  0{i + 1}
                </span>
                <h3 className="mt-2 font-serif text-xl font-semibold text-navy-900">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-teal-600 hover:text-teal-700"
            >
              了解治疗特色
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="bg-navy-900 py-20 md:py-28 pattern-grid">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            label="特色科室"
            title="并发症专科 · 精准防治"
            subtitle="设立多个糖尿病并发症特色科室，多学科协作，为患者提供针对性诊疗。"
            light
          />
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {departments.map((d) => (
            ))}
            {departments.map((d) => (
            ))}
            {departments.map((d) => (
              <div
                key={d.name}
                className="card-lift rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <h3 className="font-serif text-lg font-medium text-white">{d.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors preview */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            label="医师团队"
            title="资深专家 · 悉心照护"
            subtitle="由学科带头人王钢柱主任医师领衔，经验丰富的医疗团队为您提供专业诊疗。"
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.slice(0, 6).map((doc) => (
              <div
                key={doc.name}
                className={`card-lift overflow-hidden rounded-2xl border bg-white ${
                  doc.featured
                    ? "border-teal-200 ring-1 ring-teal-100 lg:col-span-1"
                    : "border-slate-200"
                }`}
              >
                <div
                  className={`h-2 ${
                    doc.featured
                      ? "bg-gradient-to-r from-gold-500 via-teal-500 to-teal-600"
                      : "bg-slate-100"
                  }`}
                />
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-navy-900">
                        {doc.name}
                      </h3>
                      <p className="text-sm text-teal-600">{doc.title}</p>
                    </div>
                    {doc.featured && (
                      <span className="rounded-full bg-gold-500/10 px-3 py-1 text-xs font-medium text-gold-600">
                        学科带头人
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs text-slate-500">{doc.role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">{doc.bio}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/doctors"
              className="inline-flex items-center gap-2 text-sm font-medium text-teal-600 hover:text-teal-700"
            >
              查看全部医师
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-cream-100 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            label="发展历程"
            title="三十载中唐磨砺"
            subtitle="从1992年创立至今，持续深耕糖尿病防治领域，学术与临床并进。"
          />
          <div className="mt-16 space-y-0">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className="relative flex gap-8 border-l border-teal-200 pb-12 pl-8 last:pb-0"
              >
                <span className="absolute -left-2 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-teal-600 ring-4 ring-cream-100" />
                <div className="flex-shrink-0 font-serif text-2xl font-bold text-teal-600">
                  {m.year}
                </div>
                <div className={i < milestones.length - 1 ? "" : ""}>
                  <h3 className="font-serif text-lg font-semibold text-navy-900">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{m.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/about" className="text-sm font-medium text-teal-600 hover:text-teal-700">
              阅读完整医院介绍 →
            </Link>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            label="健康科普"
            title="中唐 · 科普专栏"
            subtitle="科学控糖，走出误区。由专业团队撰写的糖尿病健康管理知识。"
          />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {articles.map((a) => (
              <article
                key={a.title}
                className="card-lift group flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden"
              >
                <div className="h-1 bg-gradient-to-r from-teal-500 to-teal-400" />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="rounded-full bg-teal-50 px-3 py-1 font-medium text-teal-700">
                      {a.category}
                    </span>
                    <time>{a.date}</time>
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-navy-900 group-hover:text-teal-700 transition-colors">
                    {a.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                    {a.excerpt}
                  </p>
                  <span className="mt-4 text-sm font-medium text-teal-600">阅读更多 →</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-white md:text-4xl">
            开启您的慢病健康管理之旅
          </h2>
          <p className="mt-4 text-slate-300">
            拨打全国咨询热线，或在线预约，我们的专业团队将为您提供详细解答。
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${site.phoneRaw}`}
              className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-navy-900 shadow-lg transition hover:bg-cream-50"
            >
              {site.phone}
            </a>
            <Link
              href="/contact"
              className="rounded-full border border-white/30 px-8 py-3.5 text-sm font-medium text-white transition hover:bg-white/10"
            >
              查看联系方式
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
