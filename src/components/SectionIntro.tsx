import Link from "next/link";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
  className?: string;
};

export default function SectionIntro({
  eyebrow,
  title,
  description,
  href,
  linkLabel = "了解更多",
  className = "",
}: Props) {
  return (
    <div className={`max-w-2xl ${className}`}>
      {eyebrow && (
        <p className="text-[11px] font-medium tracking-[0.18em] text-ink-faint uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className={`font-serif text-2xl font-medium text-ink md:text-3xl ${eyebrow ? "mt-3" : ""}`}>
        {title}
      </h2>
      {description && (
        <p className="prose-calm mt-4 text-[15px] text-ink-muted">{description}</p>
      )}
      {href && (
        <Link
          href={href}
          className="mt-6 inline-block text-[13px] font-medium text-blue-medical underline-offset-4 hover:underline"
        >
          {linkLabel} →
        </Link>
      )}
    </div>
  );
}
