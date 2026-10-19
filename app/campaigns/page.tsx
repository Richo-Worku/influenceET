"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import InfluencerHeader from "../../components/layout/InfluencerHeader";

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
  },
  {
    id: 5,
    brand: "Addis Beauty",
    initials: "AB",
    color: "bg-purple-100 text-purple-700",
    title: "Beauty and Skincare Stories",
    category: "Beauty",
    budget: "3,000–7,000 ETB",
    platform: "Instagram",
    followers: "4K+",
    location: "Addis Ababa",
    daysLeft: 10,
    description:
      "Create authentic beauty content featuring skincare and everyday beauty routines.",
  },
  {
    id: 6,
    brand: "Ethiopian Eats",
    initials: "EE",
    color: "bg-orange-100 text-orange-700",
    title: "Discover Local Food Spots",
    category: "Food & Beverage",
    budget: "2,500–6,000 ETB",
    platform: "TikTok",
    followers: "3K+",
    location: "Adama",
    daysLeft: 7,
    description:
      "Introduce your audience to local restaurants, delicious dishes, and food experiences.",
  },
  {
    id: 7,
    brand: "Explore Ethiopia",
    initials: "EX",
    color: "bg-cyan-100 text-cyan-700",
    title: "Travel and Culture Creators",
    category: "Travel",
    budget: "4,000–9,000 ETB",
    platform: "YouTube",
    followers: "5K+",
    location: "Ethiopia",
    daysLeft: 14,
    description:
      "Showcase Ethiopian destinations, cultural experiences, and places worth discovering.",
  },
  {
    id: 8,
    brand: "Fit Life Ethiopia",
    initials: "FL",
    color: "bg-lime-100 text-lime-800",
    title: "Healthy Living Campaign",
    category: "Fitness",
    budget: "2,000–5,000 ETB",
    platform: "Instagram",
    followers: "2K+",
    location: "Hawassa",
    daysLeft: 9,
    description:
      "Share fitness routines and practical healthy-living tips with your audience.",
  },
];

const navigation = [
  { label: "Dashboard", icon: "▦", href: "/influencer/dashboard" },
  { label: "Discover Campaigns", icon: "⌕", href: "/campaigns" },
  { label: "My Applications", icon: "▤", href: "/influencer/applications" },
  { label: "My Profile", icon: "◎", href: "/influencer/profile" },
];

export default function CampaignsPage() {
  const [search, setSearch] = useState("");
  const [activeNav, setActiveNav] = useState("Discover Campaigns");

  const filteredCampaigns = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return campaigns;

    return campaigns.filter((campaign) =>
      [
        campaign.title,
        campaign.brand,
        campaign.category,
        campaign.platform,
        campaign.location,
      ].some((value) => value.toLowerCase().includes(query))
    );
  }, [search]);

  return (
    <main className="min-h-screen bg-[#FFFAF6] text-gray-900">
      <div className="flex min-h-screen">
        {/* Desktop sidebar */}
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
                <span className="w-5 text-center text-lg">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto rounded-2xl bg-[#FFF4EA] p-4">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-xl">
              ✨
            </div>
            <h3 className="text-sm font-bold">Find your next opportunity</h3>
            <p className="mt-2 text-xs leading-5 text-gray-600">
              Discover brands looking to collaborate with Ethiopian creators.
            </p>
            <Link
              href="/influencer/profile"
              className="mt-4 inline-flex text-sm font-bold text-[#EA580C] hover:underline"
            >
              View your profile →
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
        <section className="flex min-w-0 flex-1 flex-col">
          {/* Header */}
       <InfluencerHeader title="Influencer Dashboard" />
       

          <div className="mx-auto w-full max-w-7xl flex-1 space-y-8 px-4 py-7 pb-10 sm:px-8 sm:py-9 lg:px-10">
            {/* Introduction */}
            <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 to-[#F97316] p-6 text-white sm:p-9">
              <div className="relative z-[1] max-w-2xl">
                <p className="text-sm font-semibold text-orange-50">
                  YOUR NEXT COLLABORATION STARTS HERE
                </p>
                <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
                  Find campaigns that
                  <br className="hidden sm:block" /> fit your creativity.
                </h2>
                <p className="mt-3 max-w-lg text-sm leading-6 text-orange-50 sm:text-base">
                  Explore opportunities from brands in Ethiopia, discover
                  products you love, and find your next collaboration.
                </p>
              </div>
              <div className="pointer-events-none absolute -right-10 -top-16 h-64 w-64 rounded-full border-[35px] border-white/10" />
              <div className="pointer-events-none absolute -bottom-28 right-28 h-64 w-64 rounded-full bg-white/10" />
            </section>

            {/* Campaign list heading */}
            <section>
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <p className="text-sm font-bold text-[#EA580C]">
                    CAMPAIGN OPPORTUNITIES
                  </p>
                  <h2 className="mt-1 text-2xl font-extrabold">
                    Available campaigns
                  </h2>
                  <p className="mt-2 text-sm text-gray-500">
                    Find your next brand partnership.
                  </p>
                </div>

                <Link
                  href="/influencer/dashboard"
                  className="inline-flex w-fit items-center gap-2 rounded-xl border border-orange-200 bg-white px-4 py-3 text-sm font-bold text-[#EA580C] transition hover:bg-orange-50"
                >
                  ← Back to dashboard
                </Link>
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
                    placeholder="Search by campaign, brand, platform, or city..."
                    className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                  />
                  {search && (
                    <button
                      type="button"
                      onClick={() => setSearch("")}
                      className="shrink-0 text-sm font-semibold text-gray-500 hover:text-[#EA580C]"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-600">
                  {filteredCampaigns.length}{" "}
                  {filteredCampaigns.length === 1 ? "campaign" : "campaigns"}{" "}
                  found
                </p>
                <p className="text-xs text-gray-400">Budget shown in ETB</p>
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

                      <span className="shrink-0 rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700">
                        Open
                      </span>
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

                      <Link
                        href={`/campaigns/${campaign.id}`}
                        className="inline-flex items-center justify-center rounded-xl bg-[#F97316] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#EA580C]"
                      >
                        View details →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {filteredCampaigns.length === 0 && (
                <div className="mt-5 rounded-2xl border border-dashed border-orange-200 bg-white px-5 py-12 text-center">
                  <div className="text-3xl">🔎</div>
                  <h3 className="mt-3 font-bold">No campaigns found</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Try another search term.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    className="mt-4 text-sm font-bold text-[#EA580C] hover:underline"
                  >
                    Clear search
                  </button>
                </div>
              )}
            </section>
          </div>

          {/* Footer */}
          <footer className="mt-auto border-t border-orange-100 bg-white px-4 py-7 sm:px-8 lg:px-10">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
              <Link href="/" className="text-lg font-extrabold tracking-tight">
                Influence<span className="text-[#F97316]">ET</span>
              </Link>
              <p className="text-xs text-gray-500">
                © 2026 InfluenceET. All rights reserved.
              </p>
              <Link
                href="/"
                className="text-sm font-medium text-gray-500 transition hover:text-[#EA580C]"
              >
                Back to website
              </Link>
            </div>
          </footer>
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
