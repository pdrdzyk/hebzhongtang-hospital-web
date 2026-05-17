type Props = {
  label: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
};

export default function PageShell({ label, title, intro, children }: Props) {
  return (
    <>
      <section className="border-b border-line pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <p className="text-[11px] font-medium tracking-[0.2em] text-ink-faint uppercase">
            {label}
          </p>
          <h1 className="mt-4 max-w-2xl font-serif text-3xl font-medium text-ink md:text-4xl">
            {title}
          </h1>
          {intro && (
            <p className="prose-calm mt-6 max-w-xl text-[15px] text-ink-muted">{intro}</p>
          )}
        </div>
      </section>
      {children}
    </>
  );
}
