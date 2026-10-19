"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import InfluencerHeader from "../../../components/layout/InfluencerHeader";
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

const navigation = [
  { label: "Dashboard", icon: "▦", href: "/influencer/dashboard" },
  { label: "Discover Campaigns", icon: "⌕", href: "/campaigns" },
  { label: "My Applications", icon: "▤", href: "/influencer/applications" },
  { label: "My Profile", icon: "◎", href: "/influencer/profile" },
];

export default function InfluencerDashboardPage() {
const [search, setSearch] = useState("");
const [activeNav, setActiveNav] = useState("Dashboard");
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Search across the four campaigns displayed on the dashboard.
  const displayedCampaigns = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return campaigns;

    return campaigns.filter(
      (campaign) =>
        campaign.title.toLowerCase().includes(query) ||
        campaign.brand.toLowerCase().includes(query) ||
        campaign.category.toLowerCase().includes(query) ||
        campaign.platform.toLowerCase().includes(query)
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

        {/* Main dashboard */}
        <section className="flex min-w-0 flex-1 flex-col">
          {/* Header */}
    
{/* Header */}
<InfluencerHeader title="Influencer Dashboard" />

          {/* Dashboard content */}
          <div className="mx-auto w-full max-w-7xl flex-1 space-y-8 px-4 py-7 pb-10 sm:px-8 sm:py-9 lg:px-10">
            {/* Welcome banner */}
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

            {/* Overview cards */}
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

            {/* Discover campaigns */}
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
                    Explore a selection of collaborations from brands in
                    Ethiopia.
                  </p>
                </div>

                <Link
                  href="/campaigns"
                  className="inline-flex w-fit items-center justify-center gap-2 rounded-xl bg-[#F97316] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#EA580C]"
                >
                  View all campaigns <span>→</span>
                </Link>
              </div>

              {/* Search only: category filters removed */}
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
                    placeholder="Search campaigns or brands..."
                    className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>

              <p className="mt-4 text-sm font-semibold text-gray-500">
                {search.trim()
                  ? `${displayedCampaigns.length} matching campaigns`
                  : "4 selected campaigns"}
              </p>

              {/* Four sample campaign cards */}
              <div className="mt-4 grid gap-5 xl:grid-cols-2">
                {displayedCampaigns.map((campaign) => (
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

                      <Link
                        href={`/campaigns/${campaign.id}`}
                        className="inline-flex items-center justify-center rounded-xl bg-[#F97316] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#EA580C]"
                      >
                        View campaign →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {displayedCampaigns.length === 0 && (
                <div className="mt-5 rounded-2xl border border-dashed border-orange-200 bg-white px-5 py-12 text-center">
                  <div className="text-3xl">🔎</div>

                  <h3 className="mt-3 font-bold">No campaigns found</h3>

                  <p className="mt-2 text-sm text-gray-500">
                    Try searching for a different campaign or brand.
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

              <div className="mt-7 flex justify-center">
                <Link
                  href="/campaigns"
                  className="inline-flex items-center gap-2 rounded-xl border border-orange-200 bg-white px-6 py-3 text-sm font-bold text-[#EA580C] transition hover:bg-orange-50"
                >
                  Browse all campaigns <span>→</span>
                </Link>
              </div>
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

    </main>
  );
}
