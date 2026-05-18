"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SiteSearch from "@/components/SiteSearch";
import {
  mayoPrimaryNav,
  patientActions,
  site,
  utilityLinks,
  utilityNav,
} from "@/lib/content";

function ActionIcon({ name }: { name: string }) {
  const cls = "mx-auto h-8 w-8 text-mayo-blue";
  if (name === "calendar")
    return (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
        <path strokeLinecap="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    );
  if (name === "doctor")
    return (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
        <path strokeLinecap="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    );
  if (name === "guide")
    return (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
        <path strokeLinecap="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    );
  return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
      <path strokeLinecap="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
      {/* Tier 1 — utility */}
      <div className="bg-mayo-navy text-[12px] text-white/90 lg:hidden">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-2">
          <a href={`tel:${site.phoneRaw}`} className="font-semibold text-white">
            {site.phone}
          </a>
          <Link href="/contact#appointment" className="font-medium hover:text-white">
            预约就诊
          </Link>
        </div>
      </div>
      <div className="hidden bg-mayo-navy text-[12px] text-white/90 lg:block">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-2 lg:px-6">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            {utilityLinks.map((u) => (
              <Link key={u.label} href={u.href} className="hover:text-white">
                {u.label}
              </Link>
            ))}
            <span className="text-white/40">|</span>
            <span>成立于 {site.founded} 年</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${site.phoneRaw}`} className="font-semibold text-white hover:underline">
              {site.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Tier 2 — logo + search + appointment */}
      <div className="border-b border-mayo-border">
        <div className="mx-auto max-w-[1400px] px-4 py-4 lg:flex lg:items-center lg:gap-6 lg:px-6 lg:py-5">
          <Link href="/" className="mb-4 block shrink-0 lg:mb-0">
            <span className="block font-serif text-[26px] font-semibold leading-tight text-mayo-navy lg:text-[30px]">
              {site.brand}
            </span>
            <span className="mt-0.5 block text-[13px] font-medium text-mayo-text-muted">
              {site.name}
            </span>
            <span className="block text-[11px] text-mayo-text-light">{site.brandFull}</span>
          </Link>

          <div className="hidden min-w-0 flex-1 lg:block">
            <SiteSearch />
          </div>

          <div className="flex items-center gap-3 lg:shrink-0">
            <Link
              href="/contact#appointment"
              className="flex-1 bg-mayo-blue px-6 py-3 text-center text-[14px] font-bold uppercase tracking-wide text-white hover:bg-mayo-blue-hover lg:flex-none"
            >
              预约就诊
            </Link>
            <button
              type="button"
              className="border border-mayo-border p-3 lg:hidden"
              aria-label="菜单"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        <div className="border-t border-mayo-border px-4 pb-4 lg:hidden">
          <SiteSearch />
        </div>
      </div>

      {/* Tier 3 — primary nav tabs */}
      <nav
        className="hidden border-b-2 border-mayo-border bg-mayo-gray lg:block"
        aria-label="主导航"
      >
        <div className="mx-auto flex max-w-[1400px] px-4 lg:px-6">
          {mayoPrimaryNav.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href.split("#")[0]));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`border-b-[3px] px-5 py-3.5 text-[14px] font-semibold transition-colors ${
                  active
                    ? "border-mayo-blue bg-white text-mayo-blue"
                    : "border-transparent text-mayo-text-muted hover:border-mayo-border hover:bg-white/60 hover:text-mayo-navy"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="max-h-[85vh] overflow-y-auto border-t border-mayo-border bg-white lg:hidden">
          <div className="grid grid-cols-2 gap-2 border-b border-mayo-border bg-mayo-gray p-4">
            {patientActions.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="action-tile text-left"
                onClick={() => setMobileOpen(false)}
              >
                <ActionIcon name={a.icon} />
                <p className="mt-2 text-[14px] font-bold text-mayo-navy">{a.label}</p>
              </Link>
            ))}
          </div>
          <div className="p-4">
            <p className="mb-2 text-[11px] font-bold uppercase text-mayo-text-light">快速链接</p>
            <div className="flex flex-wrap gap-2">
              {utilityNav.map((u) => (
                <Link
                  key={u.href}
                  href={u.href}
                  className="rounded border border-mayo-border bg-white px-3 py-2 text-[13px]"
                  onClick={() => setMobileOpen(false)}
                >
                  {u.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 border-t border-mayo-border pt-4">
              {mayoPrimaryNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block border-b border-mayo-gray py-3 text-[15px] font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
