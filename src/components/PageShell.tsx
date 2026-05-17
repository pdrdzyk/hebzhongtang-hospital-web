import Breadcrumbs from "@/components/Breadcrumbs";

type Crumb = { label: string; href?: string };

type Props = {
  title: string;
  intro?: string;
  breadcrumbs: Crumb[];
  children: React.ReactNode;
};

export default function PageShell({ title, intro, breadcrumbs, children }: Props) {
  return (
    <>
      <div className="border-b border-line bg-paper-warm pt-8 pb-12 lg:pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="mt-6 max-w-3xl font-serif text-3xl font-medium text-ink md:text-4xl">
            {title}
          </h1>
          {intro && (
            <p className="prose-calm mt-5 max-w-2xl text-[15px] text-ink-muted">{intro}</p>
          )}
        </div>
      </div>
      {children}
    </>
  );
}
