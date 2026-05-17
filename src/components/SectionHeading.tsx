type Props = {
  label: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
};

export default function SectionHeading({
  label,
  title,
  subtitle,
  light = false,
  centered = true,
}: Props) {
  return (
    <div className={centered ? "text-center" : ""}>
      <p
        className={`mb-3 text-xs font-semibold tracking-[0.25em] uppercase ${
          light ? "text-teal-400" : "text-teal-600"
        }`}
      >
        {label}
      </p>
      <div className={`accent-line ${centered ? "mx-auto" : ""} mb-5`} />
      <h2
        className={`font-serif text-3xl font-semibold tracking-tight md:text-4xl ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${light ? "text-slate-300" : "text-slate-600"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
