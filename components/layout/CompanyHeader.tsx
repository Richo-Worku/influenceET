
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CompanyHeader({
  title,
}: {
  title: string;
}) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = [
    { label: "Dashboard", href: "/company/dashboard" },
    { label: "My Campaigns", href: "/company/campaigns" },
    { label: "Applications", href: "/company/applications" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-orange-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-8 lg:px-10">
        <div className="min-w-0">
          <Link
            href="/"
            className="text-sm font-extrabold tracking-tight text-[#EA580C]"
          >
            InfluenceET
          </Link>

          <p className="mt-0.5 text-xs text-gray-500">
            Company workspace
          </p>

          <h1 className="mt-1 truncate text-lg font-extrabold text-gray-900 sm:text-xl">
            {title}
          </h1>
        </div>

        <nav className="hidden items-center gap-2 lg:flex">
          {navigation.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/company/dashboard" &&
                pathname.startsWith(`${item.href}/`));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-orange-50 text-[#EA580C]"
                    : "text-gray-600 hover:bg-gray-50 hover:text-[#EA580C]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <span className="hidden rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700 sm:inline-flex">
            Ethiopia
          </span>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 font-bold text-[#C2410C]">
            CO
          </div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-xl text-gray-700 hover:bg-orange-50 lg:hidden"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-orange-100 bg-white px-4 py-3 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navigation.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/company/dashboard" &&
                  pathname.startsWith(`${item.href}/`));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-lg px-4 py-3 text-sm font-semibold ${
                    active
                      ? "bg-orange-50 text-[#EA580C]"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-semibold text-gray-500 hover:bg-gray-50"
            >
              Back to website
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
