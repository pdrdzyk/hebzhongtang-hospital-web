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
    default: `${site.brand} · 慢性代谢病整合照护`,
    template: `%s · ${site.brand}`,
  },
  description:
    "中唐慢病医疗体系 — 三十年代谢病专科实践。系统性慢性代谢病管理，而非单次降糖治疗。",
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
