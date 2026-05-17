type Props = {
  title: string;
  subtitle?: string;
};

export default function PageHero({ title, subtitle }: Props) {
  return (
    <section className="hero-gradient border-b border-white/10 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <h1 className="font-serif text-3xl font-semibold text-white md:text-4xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
