"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { mainNav, site, utilityLinks } from "@/lib/content";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper">
      <div className="hidden border-b border-line bg-paper-warm lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-[12px] text-ink-faint lg:px-10">
              <div className="flex gap-6">
            {utilityLinks.map((u) => (
              <Link key={u.label} href={u.href} className="hover:text-ink-muted">{u.label}</Link>
            ))}
          </div>
          <a href={`tel:${site.phoneRaw}`} className="hover:text-ink">{site.phone}</a>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-10">
        <Link href="/" className="shrink-0">
          <span className="block text-[14px] font-medium tracking-wide text-ink">{site.brand}</span>
          <span className="block text-[11px] text-ink-faint">{site.name}</span>
        </Link>

        <nav className="hidden flex-1 justify-center xl:flex">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {mainNav.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-[13px] whitespace-nowrap ${active ? "font-medium text-ink" : "text-ink-muted hover:text-ink"}`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden shrink-0 items-center gap-3 sm:flex">
          <Link
            href="/contact"
            className="border border-ink/15 px-4 py-2 text-[13px] text-ink transition hover:border-ink/30"
          >
            预约咨询
          </Link>
        </div>

        <button type="button" aria-label="菜单" className="p-2 text-ink xl:hidden" onClick={() => setOpen(!open)}>
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
            {open ? <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-paper px-6 py-4 xl:hidden">
          {mainNav.map((link) => (
            <Link key={link.href} href={link.href} className="block py-3 text-[15px] text-ink-muted" onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="mt-2 block py-3 text-[15px] font-medium text-ink" onClick={() => setOpen(false)}>预约咨询</Link>
          <a href={`tel:${site.phoneRaw}`} className="block py-2 text-[13px] text-blue-medical">{site.phone}</a>
        </nav>
      )}
    </header>
  );
}
