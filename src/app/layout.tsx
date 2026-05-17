import type { Metadata } from "next";
import { Inter, Noto_Serif_SC } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/content";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSerif = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-noto-serif",
  display: "swap",
});

export const metadata: Metadata = {
  icons: { icon: "/favicon.svg" },
  title: {
    default: `${site.name} · ${site.brand}慢病医疗`,
    template: `%s · ${site.name}`,
  },
  description:
    "石家庄糖尿病医院 — 三十年糖尿病及并发症专科。糖尿病诊疗、并发症防治、患者指南与健康教育。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${inter.variable} ${notoSerif.variable}`}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
