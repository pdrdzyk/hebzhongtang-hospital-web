import type { Metadata } from "next";
import { Noto_Serif_SC } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/content";
import "./globals.css";

const notoSerif = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  icons: { icon: "/favicon.svg" },
  title: {
    default: `${site.name} | ${site.brand} · 糖尿病慢病专科`,
    template: `%s | ${site.name}`,
  },
  description:
    "石家庄糖尿病医院成立于1992年，专注糖尿病及并发症防治三十余年。疏肝调气、六位一体防治模式，河北省医保定点医院。",
  keywords: [
    "石家庄糖尿病医院",
    "糖尿病治疗",
    "河北中唐",
    "慢病管理",
    "六位一体",
    "疏肝调气",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${notoSerif.variable} antialiased`}>
        <Header />
        <main className="min-h-screen pt-[72px]">{children}</main>
        <Footer />
        <a
          href={`tel:${site.phoneRaw}`}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-teal-600 px-5 py-3 text-sm font-medium text-white shadow-xl shadow-teal-600/30 transition hover:bg-teal-500 md:hidden"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          咨询热线
        </a>
      </body>
    </html>
  );
}
