"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const campaigns = [
  {
    id: 1,
    brand: "Habesha Coffee",
    initials: "HC",
    color: "bg-amber-100 text-amber-800",
    title: "Promote Ethiopian Coffee Culture",
    category: "Food & Beverage",
    budget: "5,000–12,000 ETB",
    platform: "Instagram",
    followers: "5K+",
    location: "Addis Ababa",
    daysLeft: 8,
    description:
      "Create engaging content showcasing Ethiopian coffee traditions and our new coffee collection.",
    featured: true,
  },
  {
    id: 2,
    brand: "Ethio Fashion",
    initials: "EF",
    color: "bg-pink-100 text-pink-700",
    title: "Modern Ethiopian Fashion",
    category: "Fashion",
    budget: "3,000–8,000 ETB",
    platform: "TikTok",
    followers: "10K+",
    location: "Ethiopia",
    daysLeft: 12,
    description:
      "Show your audience how traditional Ethiopian styles meet modern fashion.",
    featured: true,
  },
  {
    id: 3,
    brand: "Awash Lifestyle",
    initials: "AL",
    color: "bg-emerald-100 text-emerald-700",
    title: "Everyday Lifestyle Stories",
    category: "Lifestyle",
    budget: "2,000–6,000 ETB",
    platform: "Instagram",
    followers: "3K+",
    location: "Addis Ababa",
    daysLeft: 5,
    description:
      "Share authentic lifestyle content featuring products made for everyday life.",
    featured: false,
  },
  {
    id: 4,
    brand: "Tech Ethiopia",
    initials: "TE",
    color: "bg-blue-100 text-blue-700",
    title: "Discover Smart Technology",
    category: "Technology",
    budget: "4,000–10,000 ETB",
    platform: "YouTube",
    followers: "2K+",
    location: "Ethiopia",
    daysLeft: 15,
    description:
      "Review useful technology products and explain how they can help your audience.",
    featured: false,
  },
];

const categories = [
  "All",
  "Fashion",
  "Food & Beverage",
  "Lifestyle",
  "Technology",
];

const navigation = [
  { label: "Dashboard", icon: "▦", href: "/influencer/dashboard" },
  { label: "Discover Campaigns", icon: "⌕", href: "/campaigns" },
  { label: "My Applications", icon: "▤", href: "/influencer/applications" },
  { label: "My Profile", icon: "◎", href: "/influencer/profile" },
];

export default function InfluencerDashboardPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeNav, setActiveNav] = useState("Dashboard");

  const filteredCampaigns = useMemo(() => {
    return campaigns.filter((campaign) => {
      const matchesSearch =
        campaign.title.toLowerCase().includes(search.toLowerCase()) ||
        campaign.brand.toLowerCase().includes(search.toLowerCase()) ||
        campaign.category.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        activeCategory === "All" ||
        campaign.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <main className="min-h-screen bg-[#FFFAF6] text-gray-900">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="hidden w-64 shrink-0 border-r border-orange-100 bg-white px-5 py-7 lg:flex lg:flex-col">
          <Link href="/" className="mb-10 flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F97316] text-xl font-extrabold text-white">
              E
            </span>
            <span className="text-xl font-extrabold tracking-tight">
              Influence<span className="text-[#F97316]">ET</span>
            </span>
          </Link>

          <p className="mb-3 px-3 text-xs font-bold uppercase tracking-wider text-gray-400">
            Creator workspace
          </p>

          <nav className="space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setActiveNav(item.label)}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  activeNav === item.label
                    ? "bg-orange-50 text-[#EA580C]"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <span className="w-5 text-center text-lg">
                  {item.icon}
                </span>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto rounded-2xl bg-[#FFF4EA] p-4">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-xl">
              ✨
            </div>
            <h3 className="text-sm font-bold">Grow your influence</h3>
            <p className="mt-2 text-xs leading-5 text-gray-600">
              Complete your profile to help Ethiopian brands discover you.
            </p>
            <Link
              href="/influencer/profile"
              className="mt-4 inline-flex text-sm font-bold text-[#EA580C] hover:underline"
            >
              Complete profile →
            </Link>
          </div>

          <Link
            href="/"
            className="mt-5 rounded-xl px-4 py-3 text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            ← Back to website
          </Link>
        </aside>

        {/* Main content */}
        <section className="min-w-0 flex-1">
          {/* Header */}
          <header className="sticky top-0 z-10 flex items-center justify-between border-b border-orange-100 bg-white/95 px-4 py-4 backdrop-blur sm:px-8 lg:px-10">
            <div>
              <p className="text-xs font-medium text-gray-500">
                InfluenceET / Creator workspace
              </p>
              <h1 className="mt-1 text-lg font-extrabold sm:text-xl">
                Influencer Dashboard
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700 sm:inline-flex">
                🇪🇹 Ethiopia
              </span>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 font-bold text-[#C2410C]">
                IN
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-7xl space-y-8 px-4 py-7 sm:px-8 sm:py-9 lg:px-10">
            {/* Welcome */}
            <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 to-[#F97316] p-6 text-white sm:p-9">
              <div className="relative z-[1] max-w-2xl">
                <p className="text-sm font-semibold text-orange-50">
                  YOUR CREATOR JOURNEY STARTS HERE
                </p>
                <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
                  Discover your next
                  <br className="hidden sm:block" /> brand collaboration.
                </h2>
                <p className="mt-3 max-w-lg text-sm leading-6 text-orange-50 sm:text-base">
                  Find campaigns from Ethiopian brands, showcase your
                  creativity, and turn your influence into opportunity.
                </p>
                <a
                  href="#discover-campaigns"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#EA580C] transition hover:bg-orange-50"
                >
                  Explore campaigns <span>→</span>
                </a>
              </div>

              <div className="pointer-events-none absolute -right-10 -top-16 h-64 w-64 rounded-full border-[35px] border-white/10" />
              <div className="pointer-events-none absolute -bottom-28 right-28 h-64 w-64 rounded-full bg-white/10" />
            </section>

            {/* Stats */}
            <section>
              <div className="mb-4">
                <h2 className="text-lg font-extrabold">Your overview</h2>
                <p className="mt-1 text-sm text-gray-500">
                  A quick look at your creator activity.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {[
                  {
                    label: "Available campaigns",
                    value: "12",
                    icon: "◈",
                    note: "Opportunities to explore",
                    color: "bg-orange-50 text-orange-600",
                  },
                  {
                    label: "Applications sent",
                    value: "0",
                    icon: "↗",
                    note: "Your campaign applications",
                    color: "bg-blue-50 text-blue-600",
                  },
                  {
                    label: "Accepted applications",
                    value: "0",
                    icon: "✓",
                    note: "Campaigns won",
                    color: "bg-green-50 text-green-600",
                  },
                  {
                    label: "Profile completion",
                    value: "35%",
                    icon: "◎",
                    note: "Keep improving your profile",
                    color: "bg-purple-50 text-purple-600",
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-orange-100 bg-white p-5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-sm font-medium text-gray-500">
                        {stat.label}
                      </p>
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xl font-bold ${stat.color}`}
                      >
                        {stat.icon}
                      </span>
                    </div>
                    <p className="mt-4 text-3xl font-extrabold">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-xs text-gray-400">
                      {stat.note}
                    </p>
                  </div>
                ))}
              </div>
          
            </section>

            {/* Campaign discovery */}
            <section id="discover-campaigns" className="scroll-mt-24">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <p className="text-sm font-bold text-[#EA580C]">
                    FIND YOUR NEXT OPPORTUNITY
                  </p>
                  <h2 className="mt-1 text-2xl font-extrabold">
                    Discover campaigns
                  </h2>
                  <p className="mt-2 text-sm text-gray-500">
                    Explore collaborations from brands in Ethiopia.
                  </p>
                </div>
                <span className="text-sm font-semibold text-gray-500">
                  {filteredCampaigns.length} campaigns shown
                </span>
              </div>

              {/* Search */}
              <div className="mt-6">
                <label htmlFor="campaignSearch" className="sr-only">
                  Search campaigns
                </label>
                <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 focus-within:border-[#F97316] focus-within:ring-4 focus-within:ring-orange-100">
                  <span className="text-xl text-gray-400">⌕</span>
                  <input
                    id="campaignSearch"
                    type="search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search campaigns, brands, or categories..."
                    className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Filters */}
              <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
                      activeCategory === category
                        ? "bg-[#F97316] text-white"
                        : "border border-gray-200 bg-white text-gray-600 hover:border-orange-200 hover:text-[#EA580C]"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Campaign cards */}
              <div className="mt-5 grid gap-5 xl:grid-cols-2">
                {filteredCampaigns.map((campaign) => (
                  <article
                    key={campaign.id}
                    className="rounded-2xl border border-orange-100 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-100/50 sm:p-6"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex min-w-0 items-center gap-3">
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-sm font-extrabold ${campaign.color}`}
                        >
                          {campaign.initials}
                        </div>
                        <div className="min-w-0">
                          <h3 className="truncate font-bold">
                            {campaign.brand}
                          </h3>
                          <p className="mt-1 text-xs text-gray-500">
                            {campaign.location}, Ethiopia
                          </p>
                        </div>
                      </div>

                      {campaign.featured && (
                        <span className="shrink-0 rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-[#EA580C]">
                          Featured
                        </span>
                      )}
                    </div>

                    <div className="mt-5">
                      <h4 className="text-lg font-extrabold">
                        {campaign.title}
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-gray-500">
                        {campaign.description}
                      </p>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      <span className="rounded-lg bg-gray-50 px-3 py-1.5 text-xs font-semibold text-gray-600">
                        {campaign.category}
                      </span>
                      <span className="rounded-lg bg-gray-50 px-3 py-1.5 text-xs font-semibold text-gray-600">
                        {campaign.platform}
                      </span>
                      <span className="rounded-lg bg-gray-50 px-3 py-1.5 text-xs font-semibold text-gray-600">
                        {campaign.followers} followers
                      </span>
                    </div>

                    <div className="mt-5 flex flex-col justify-between gap-4 border-t border-gray-100 pt-5 sm:flex-row sm:items-end">
                      <div>
                        <p className="text-xs font-medium text-gray-500">
                          Campaign budget
                        </p>
                        <p className="mt-1 text-lg font-extrabold text-[#EA580C]">
                          {campaign.budget}
                        </p>
                        <p className="mt-1 text-xs text-gray-400">
                          Closes in {campaign.daysLeft} days
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          alert(
                            "The campaign details and application flow will be built next."
                          )
                        }
                        className="rounded-xl bg-[#F97316] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#EA580C]"
                      >
                        View campaign →
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              {filteredCampaigns.length === 0 && (
                <div className="mt-5 rounded-2xl border border-dashed border-orange-200 bg-white px-5 py-12 text-center">
                  <div className="text-3xl">🔎</div>
                  <h3 className="mt-3 font-bold">No campaigns found</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Try another search term or select a different category.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearch("");
                      setActiveCategory("All");
                    }}
                    className="mt-4 text-sm font-bold text-[#EA580C] hover:underline"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </section>

            {/* Footer */}
            <footer className="border-t border-orange-100 py-6 text-center text-xs text-gray-400">
              © 2026 InfluenceET. All rights reserved.
            </footer>
          </div>
        </section>
      </div>

      {/* Mobile navigation */}
      <nav className="fixed inset-x-0 bottom-0 z-20 grid grid-cols-4 border-t border-orange-100 bg-white px-1 py-2 lg:hidden">
        {navigation.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setActiveNav(item.label)}
            className={`flex flex-col items-center gap-1 rounded-lg px-1 py-2 text-center text-[10px] font-semibold ${
              activeNav === item.label
                ? "text-[#EA580C]"
                : "text-gray-500"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="h-20 lg:hidden" />
    </main>
  );
}