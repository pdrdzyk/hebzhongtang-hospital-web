"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { institutionalNav } from "@/lib/portal-content";

export default function MegaMenuNav() {
  const pathname = usePathname();
  const [openSection, setOpenSection] = useState<string | null>(null);

  function isActive(href?: string) {
    if (!href) return false;
    const base = href.split("#")[0];
    return pathname === base || (base !== "/" && pathname.startsWith(base));
  }

  return (
    <nav className="hidden border-b border-mayo-border bg-white lg:block" aria-label="机构主导航">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
        <ul className="flex flex-wrap">
          {institutionalNav.map((section) => {
            const active = isActive(section.href);
            const open = openSection === section.label;
            return (
              <li
                key={section.label}
                className="relative"
                onMouseEnter={() => setOpenSection(section.label)}
                onMouseLeave={() => setOpenSection(null)}
              >
                <Link
                  href={section.href ?? "#"}
                  className={`block border-b-[3px] px-4 py-3 text-[13px] font-semibold transition-colors ${
                    active || open
                      ? "border-mayo-blue text-mayo-blue"
                      : "border-transparent text-mayo-navy hover:border-mayo-gray-dark hover:text-mayo-blue"
                  }`}
                >
                  {section.label}
                </Link>
                {open && (
                  <div className="absolute left-0 top-full z-50 border border-mayo-border bg-white shadow-lg">
                    <div
                      className="grid gap-0 p-4"
                      style={{
                        gridTemplateColumns: `repeat(${Math.min(section.columns.length, 3)}, minmax(200px, 1fr))`,
                      }}
                    >
                      {section.columns.map((col) => (
                        <div key={col.title} className="min-w-[200px] px-3 py-2">
                          <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-mayo-text-light">
                            {col.title}
                          </p>
                          <ul className="space-y-1">
                            {col.links.map((link) => (
                              <li key={link.href + link.label}>
                                <Link
                                  href={link.href}
                                  className="block py-1 text-[13px] text-mayo-navy hover:text-mayo-blue"
                                >
                                  <span className="font-medium">{link.label}</span>
                                  {link.note && (
                                    <span className="ml-1 text-[11px] text-mayo-text-light">
                                      — {link.note}
                                    </span>
                                  )}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
