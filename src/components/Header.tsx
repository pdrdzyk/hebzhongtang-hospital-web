"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { navLinks, site } from "@/lib/content";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-line bg-paper/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:h-[4.5rem] lg:px-10">
        <Link href="/" className="group flex flex-col">
          <span className="text-[13px] font-medium tracking-[0.12em] text-ink uppercase">
            {site.brand}
          </span>
          <span className="text-[11px] text-ink-faint">{site.brandFull}</span>
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] tracking-wide transition-colors ${
                  active ? "text-ink" : "text-ink-muted hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-8 lg:flex">
          <a
            href={`tel:${site.phoneRaw}`}
            className="text-[13px] text-ink-muted transition hover:text-ink"
          >
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="text-[13px] text-blue-medical underline-offset-4 hover:underline"
          >
            联系
          </Link>
        </div>

        <button
          type="button"
          aria-label="菜单"
          className="flex h-10 w-10 items-center justify-center text-ink lg:hidden"
          onClick={() => setOpen(!open)}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
            {open ? (
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-paper px-6 py-6 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 text-[15px] text-ink-muted"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a href={`tel:${site.phoneRaw}`} className="mt-4 block text-[13px] text-blue-medical">
            {site.phone}
          </a>
        </div>
      )}
    </header>
  );
}
