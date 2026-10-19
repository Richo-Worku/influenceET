
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type InfluencerHeaderProps = {
  title: string;
};

const navigation = [
  {
    label: "Dashboard",
    icon: "▦",
    href: "/influencer/dashboard",
  },
  {
    label: "Discover Campaigns",
    icon: "⌕",
    href: "/campaigns",
  },
  {
    label: "My Applications",
    icon: "▤",
    href: "/influencer/applications",
  },
  {
    label: "My Profile",
    icon: "◎",
    href: "/influencer/profile",
  },
];

export default function InfluencerHeader({
  title,
}: InfluencerHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-orange-100 bg-white/95 px-4 py-4 backdrop-blur sm:px-8 lg:px-10">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <Link
            href="/"
            className="text-xs font-medium text-gray-500"
          >
            InfluenceET / Creator workspace
          </Link>

          <h1 className="mt-1 text-lg font-extrabold sm:text-xl">
            {title}
          </h1>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <span className="hidden rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700 sm:inline-flex">
            🇪🇹 Ethiopia
          </span>

          <div
            className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 font-bold text-[#C2410C]"
            aria-label="Influencer profile"
          >
            IN
          </div>

          <button
            type="button"
            onClick={() =>
              setMobileMenuOpen((open) => !open)
            }
            aria-label={
              mobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-200 text-2xl text-[#EA580C] transition hover:bg-orange-50"
          >
            {mobileMenuOpen ? "×" : "☰"}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          aria-label="Influencer navigation"
          className="mt-4 space-y-1 border-t border-orange-100 pt-3"
        >
          {navigation.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href === "/campaigns" &&
                pathname.startsWith("/campaigns/"));

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={
                  pathname === item.href ? "page" : undefined
                }
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  isActive
                    ? "bg-orange-50 text-[#EA580C]"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <span className="w-6 text-center text-xl">
                  {item.icon}
                </span>

                {item.label}

                {isActive && (
                  <span className="ml-auto text-[#EA580C]">
                    ✓
                  </span>
                )}
              </Link>
            );
          })}

          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span className="w-6 text-center text-xl">
              ←
            </span>
            Back to website
          </Link>
        </nav>
      )}
    </header>
  );
}
