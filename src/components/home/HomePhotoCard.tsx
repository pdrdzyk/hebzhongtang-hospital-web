import Link from "next/link";
import HealthcareImage from "@/components/home/HealthcareImage";
import type { HomeImage } from "@/lib/home-images";

type HomePhotoCardProps = {
  title: string;
  desc: string;
  href: string;
  image: HomeImage;
  tall?: boolean;
};

export default function HomePhotoCard({ title, desc, href, image, tall }: HomePhotoCardProps) {
  return (
    <Link href={href} className={`hc-photo-card group ${tall ? "hc-photo-card--tall" : ""}`}>
      <div className="hc-photo-card-media">
        <HealthcareImage src={image.src} alt={image.alt} sizes="(max-width: 640px) 100vw, 25vw" />
        <div className="hc-photo-card-overlay" aria-hidden />
      </div>
      <div className="hc-photo-card-body">
        <h3 className="hc-photo-card-title">{title}</h3>
        <p className="hc-photo-card-desc">{desc}</p>
        <span className="hc-photo-card-cta">了解更多 →</span>
      </div>
    </Link>
  );
}
