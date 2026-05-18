"use client";

import Link from "next/link";
import { useState } from "react";
import MegaMenuNav from "@/components/MegaMenuNav";
import SiteSearch from "@/components/SiteSearch";
import { institutionalNav, patientTaskBar } from "@/lib/portal-content";
import { site, utilityLinks, utilityNav } from "@/lib/content";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_1px_4px_rgba(0,0,0,0.1)]">
      <div className="bg-mayo-navy text-[12px] text-white/90">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-2 px-4 py-2 lg:px-6">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            {utilityLinks.map((u) => (
              <Link key={u.label} href={u.href} className="hover:text-white">
                {u.label}
              </Link>
            ))}
            <span className="hidden text-white/40 sm:inline">|</span>
            <span className="hidden sm:inline">成立于 {site.founded} 年</span>
          </div>
          <a href={`tel:${site.phoneRaw}`} className="font-semibold text-white hover:underline">
            {site.phone}
          </a>
        </div>
      </div>

      <div className="border-b border-mayo-border">
        <div className="mx-auto max-w-[1400px] px-4 py-3 lg:flex lg:items-center lg:gap-5 lg:px-6 lg:py-4">
          <Link href="/" className="mb-3 block shrink-0 lg:mb-0">
            <span className="block text-[22px] font-bold leading-tight text-mayo-navy lg:text-[24px]">
              {site.name}
            </span>
            <span className="block text-[12px] text-mayo-text-muted">
              {site.brandFull} · {site.brand}
            </span>
          </Link>
          <div className="hidden min-w-0 flex-1 lg:block">
            <SiteSearch />
          </div>
          <div className="flex items-center gap-2 lg:shrink-0">
            <Link
              href="/contact#appointment"
              className="flex-1 bg-mayo-blue px-5 py-2.5 text-center text-[13px] font-bold text-white hover:bg-mayo-blue-hover lg:flex-none"
            >
              预约门诊
            </Link>
            <button
              type="button"
              className="border border-mayo-border p-2.5 lg:hidden"
              aria-label="打开菜单"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        <div className="border-t border-mayo-border px-4 pb-3 lg:hidden">
          <SiteSearch />
        </div>
      </div>

      <MegaMenuNav />

      {mobileOpen && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-mayo-border bg-white lg:hidden">
          <div className="grid grid-cols-2 gap-1 border-b border-mayo-border bg-mayo-gray p-3">
            {patientTaskBar.slice(0, 6).map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="border border-mayo-border bg-white px-2 py-2.5 text-center text-[12px] font-semibold text-mayo-navy"
                onClick={() => setMobileOpen(false)}
              >
                {t.label}
              </Link>
            ))}
          </div>
          {institutionalNav.map((section) => (
            <details key={section.label} className="border-b border-mayo-border">
              <summary className="cursor-pointer px-4 py-3 text-[14px] font-semibold text-mayo-navy">
                {section.label}
              </summary>
              <div className="bg-mayo-gray px-4 pb-3">
                {section.columns.map((col) => (
                  <div key={col.title} className="mt-3">
                    <p className="text-[11px] font-bold uppercase text-mayo-text-light">{col.title}</p>
                    <ul className="mt-1 space-y-1">
                      {col.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="block py-1 text-[13px] text-mayo-link"
                            onClick={() => setMobileOpen(false)}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </details>
          ))}
          <div className="flex flex-wrap gap-2 p-3">
            {utilityNav.map((u) => (
              <Link
                key={u.href}
                href={u.href}
                className="text-[12px] text-mayo-text-muted underline"
                onClick={() => setMobileOpen(false)}
              >
                {u.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
