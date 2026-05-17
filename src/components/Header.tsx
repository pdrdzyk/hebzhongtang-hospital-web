"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { mainNav, site, utilityLinks, utilityNav } from "@/lib/content";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white shadow-sm shadow-ink/5">
      {/* Utility bar — patient quick links */}
      <div className="hidden border-b border-line bg-paper-warm lg:block">
        <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
          <div className="flex min-h-[36px] items-center justify-between gap-4 text-[12px]">
            <nav aria-label="患者快捷入口" className="flex flex-wrap items-center gap-x-1">
              {utilityNav.map((link, i) => (
                <span key={link.href} className="flex items-center">
                  {i > 0 && <span className="mx-2 text-line">|</span>}
                  <Link href={link.href} className="whitespace-nowrap text-ink-muted hover:text-blue-medical">
                    {link.label}
                  </Link>
                </span>
              ))}
            </nav>
            <div className="flex shrink-0 items-center gap-4 text-ink-faint">
              {utilityLinks.map((u) => (
                <Link key={u.label} href={u.href} className="hidden xl:inline hover:text-ink-muted">
                  {u.label}
                </Link>
              ))}
              <a href={`tel:${site.phoneRaw}`} className="font-medium text-ink hover:text-blue-medical">
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-3 lg:px-8">
        <Link href="/" className="shrink-0 pr-4">
          <span className="block font-serif text-lg font-medium text-ink">{site.brand}</span>
          <span className="block text-[11px] text-ink-faint">{site.name}</span>
        </Link>

        <nav className="hidden flex-1 justify-center 2xl:flex" aria-label="主导航">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
            {mainNav.map((link) => {
              const active =
                pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-[13px] whitespace-nowrap py-1 ${
                      active
                        ? "font-semibold text-blue-deep"
                        : "text-ink-muted hover:text-ink"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href={`tel:${site.phoneRaw}`}
            className="hidden text-[13px] text-ink-muted hover:text-ink md:inline"
          >
            电话咨询
          </a>
          <Link
            href="/contact#appointment"
            className="bg-blue-deep px-4 py-2.5 text-[13px] font-medium text-white hover:bg-blue-medical"
          >
            预约咨询
          </Link>
        </div>

        <button
          type="button"
          aria-label="打开菜单"
          className="p-2 text-ink 2xl:hidden"
          onClick={() => setOpen(!open)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
            {open ? (
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="max-h-[70vh] overflow-y-auto border-t border-line bg-white px-4 py-4 2xl:hidden">
          <p className="mb-2 text-[11px] font-medium uppercase tracking-wider text-ink-faint">患者入口</p>
          <div className="mb-4 grid grid-cols-2 gap-2">
            {utilityNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded border border-line bg-paper-warm px-3 py-2 text-[13px] text-ink-muted"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="mb-2 text-[11px] font-medium uppercase tracking-wider text-ink-faint">网站导航</p>
          {mainNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block border-b border-line py-3 text-[15px] text-ink"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
