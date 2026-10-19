
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import CompanyHeader from "@/components/layout/CompanyHeader";
type CampaignStatus = "Active" | "Pending" | "Completed" | "Draft";

type Campaign = {
  id: number;
  title: string;
  category: string;
  budget: number;
  applications: number;
  status: CampaignStatus;
  startDate: string;
  endDate: string;
  platform: string;
  description: string;
};

const initialCampaigns: Campaign[] = [
  {
    id: 2,
    title: "New Product Launch",
    category: "Beauty",
    budget: 40000,
    applications: 26,
    status: "Active",
    startDate: "Oct 28, 2026",
    endDate: "Nov 15, 2026",
    platform: "TikTok",
    description: "Promote our latest product to Ethiopian audiences.",
  },
  {
    id: 5,
    title: "Holiday Campaign",
    category: "Lifestyle",
    budget: 20000,
    applications: 0,
    status: "Draft",
    startDate: "Nov 15, 2026",
    endDate: "Nov 30, 2026",
    platform: "Instagram",
    description: "A holiday promotion campaign for lifestyle creators.",
  },
  {
    id: 3,
    title: "Social Media Awareness",
    category: "Technology",
    budget: 15000,
    applications: 12,
    status: "Pending",
    startDate: "Nov 2, 2026",
    endDate: "Nov 20, 2026",
    platform: "TikTok",
    description: "Increase awareness of our digital services.",
  },
  {
    id: 1,
    title: "Coffee Brand Awareness",
    category: "Food & Beverage",
    budget: 25000,
    applications: 18,
    status: "Active",
    startDate: "Oct 25, 2026",
    endDate: "Nov 10, 2026",
    platform: "TikTok",
    description: "Work with local creators to introduce our coffee brand.",
  },
  {
    id: 4,
    title: "Summer Collection Promotion",
    category: "Fashion",
    budget: 30000,
    applications: 21,
    status: "Completed",
    startDate: "Sep 20, 2026",
    endDate: "Oct 5, 2026",
    platform: "Instagram",
    description: "Showcase our latest fashion collection.",
  },
];

const statusStyles: Record<CampaignStatus, string> = {
  Active: "bg-green-50 text-green-700 ring-green-200",
  Pending: "bg-amber-50 text-amber-700 ring-amber-200",
  Completed: "bg-blue-50 text-blue-700 ring-blue-200",
  Draft: "bg-gray-100 text-gray-600 ring-gray-200",
};

const filters = ["All", "Active", "Pending", "Completed", "Draft"] as const;

export default function CompanyCampaignsPage() {
  const [campaigns] = useState<Campaign[]>(initialCampaigns);
  const [search, setSearch] = useState("");
  const [selectedStatus, setSelectedStatus] =
    useState<(typeof filters)[number]>("All");

  const filteredCampaigns = useMemo(() => {
    const query = search.trim().toLowerCase();

    return campaigns.filter((campaign) => {
      const matchesSearch =
        campaign.title.toLowerCase().includes(query) ||
        campaign.category.toLowerCase().includes(query) ||
        campaign.platform.toLowerCase().includes(query);

      const matchesStatus =
        selectedStatus === "All" || campaign.status === selectedStatus;

      return matchesSearch && matchesStatus;
    });
  }, [campaigns, search, selectedStatus]);

  const totalBudget = campaigns.reduce(
    (total, campaign) => total + campaign.budget,
    0,
  );

  return (
    <div className="min-h-screen bg-[#FFFDFC] text-gray-900">
      {/* Header */}
     <CompanyHeader title="My Campaigns" />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-8 lg:px-10">
        {/* Page introduction */}
        <section className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-[#EA580C]">
              CAMPAIGN MANAGEMENT
            </p>

            <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
              All campaigns
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
              Manage your campaigns, track applications, and find the
              right Ethiopian creators for your brand.
            </p>
          </div>

          <Link
            href="/company/campaigns/create"
            className="inline-flex w-fit items-center justify-center gap-2 rounded-xl bg-[#EA580C] px-5 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#C2410C]"
          >
            <span className="text-xl">+</span>
            Create campaign
          </Link>
        </section>

        {/* Summary cards */}
        <section className="mt-8 grid grid-cols-2 gap-4 xl:grid-cols-4">
          <div className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Total campaigns</p>
            <p className="mt-3 text-3xl font-extrabold">
              {campaigns.length}
            </p>
          </div>

          <div className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Active campaigns</p>
            <p className="mt-3 text-3xl font-extrabold text-green-600">
              {campaigns.filter((c) => c.status === "Active").length}
            </p>
          </div>

          <div className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Awaiting approval</p>
            <p className="mt-3 text-3xl font-extrabold text-amber-600">
              {campaigns.filter((c) => c.status === "Pending").length}
            </p>
          </div>

          <div className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Combined budgets</p>
            <p className="mt-3 text-2xl font-extrabold">
              {totalBudget.toLocaleString("en-US")}{" "}
              <span className="text-sm font-semibold text-gray-500">ETB</span>
            </p>
          </div>
        </section>

        {/* Search and filters */}
        <section className="mt-8 rounded-2xl border border-orange-100 bg-white p-5 shadow-sm sm:p-6">
          <label
            htmlFor="campaign-search"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Search campaigns
          </label>

          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              ⌕
            </span>

            <input
              id="campaign-search"
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by campaign name, category, or platform..."
              className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100"
            />
          </div>

          <div className="mt-5">
            <p className="mb-3 text-sm font-semibold text-gray-700">
              Filter by status
            </p>

            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => {
                const active = selectedStatus === filter;

                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setSelectedStatus(filter)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      active
                        ? "bg-[#EA580C] text-white"
                        : "border border-gray-200 bg-white text-gray-600 hover:border-orange-300 hover:text-[#EA580C]"
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Campaign results */}
        <section className="mt-8">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-extrabold">Campaign list</h3>
              <p className="mt-1 text-sm text-gray-500">
                Showing {filteredCampaigns.length} of {campaigns.length} campaigns
              </p>
            </div>
          </div>

          {filteredCampaigns.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-orange-200 bg-white px-6 py-14 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-2xl">
                ⌕
              </div>

              <h4 className="mt-4 font-bold">No campaigns found</h4>

              <p className="mt-2 text-sm text-gray-500">
                Try a different search term or select another status.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setSelectedStatus("All");
                }}
                className="mt-5 text-sm font-bold text-[#EA580C] hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid gap-4 lg:grid-cols-2">
              {filteredCampaigns.map((campaign) => (
                <article
                  key={campaign.id}
                  className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm transition hover:border-orange-200 hover:shadow-md sm:p-6"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#EA580C]">
                        {campaign.category}
                      </p>

                      <h4 className="mt-2 text-lg font-extrabold">
                        {campaign.title}
                      </h4>
                    </div>

                    <span
                      className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-bold ring-1 ring-inset ${statusStyles[campaign.status]}`}
                    >
                      {campaign.status}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {campaign.description}
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-4 rounded-xl bg-gray-50 p-4">
                    <div>
                      <p className="text-xs text-gray-500">Campaign budget</p>
                      <p className="mt-1 font-extrabold">
                        {campaign.budget.toLocaleString("en-US")} ETB
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">Applications</p>
                      <p className="mt-1 font-extrabold">
                        {campaign.applications}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">Platform</p>
                      <p className="mt-1 text-sm font-semibold">
                        {campaign.platform}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">Start date</p>
                      <p className="mt-1 text-sm font-semibold">
                        {campaign.startDate}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-4">
                    <p className="text-xs text-gray-500">
                      Ends {campaign.endDate}
                    </p>

                    <Link
                      href={`/company/campaigns/${campaign.id}`}
                      className="inline-flex items-center gap-2 rounded-lg border border-orange-200 px-4 py-2.5 text-sm font-bold text-[#EA580C] transition hover:bg-orange-50"
                    >
                      View campaign <span>→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

   
      </main>

      <footer className="mt-8 border-t border-orange-100 bg-white px-4 py-6 text-center text-xs text-gray-500">
        © 2026 InfluenceET. All rights reserved.
      </footer>
    </div>
  );
}
