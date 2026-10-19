
"use client";

import Link from "next/link";
import CompanyHeader from "@/components/layout/CompanyHeader";

type CampaignStatus = "Active" | "Pending" | "Completed" | "Draft";

type CompanyCampaign = {
  id: number;
  title: string;
  category: string;
  budget: number;
  applications: number;
  status: CampaignStatus;
  startDate: string;
};

type RecentApplication = {
  id: number;
  influencer: string;
  initials: string;
  campaign: string;
  followers: string;
  appliedDate: string;
  status: "New" | "Under review" | "Accepted";
};

const campaigns: CompanyCampaign[] = [
  {
    id: 2,
    title: "New Product Launch",
    category: "Beauty",
    budget: 40000,
    applications: 26,
    status: "Active",
    startDate: "Oct 28, 2026",
  },
  {
    id: 5,
    title: "Holiday Campaign",
    category: "Lifestyle",
    budget: 20000,
    applications: 0,
    status: "Draft",
    startDate: "Nov 15, 2026",
  },
  {
    id: 3,
    title: "Social Media Awareness",
    category: "Technology",
    budget: 15000,
    applications: 12,
    status: "Pending",
    startDate: "Nov 2, 2026",
  },
  {
    id: 1,
    title: "Coffee Brand Awareness",
    category: "Food & Beverage",
    budget: 25000,
    applications: 18,
    status: "Active",
    startDate: "Oct 25, 2026",
  },
  {
    id: 4,
    title: "Summer Collection Promotion",
    category: "Fashion",
    budget: 30000,
    applications: 21,
    status: "Completed",
    startDate: "Sep 20, 2026",
  },
];

const recentApplications: RecentApplication[] = [
  {
    id: 1,
    influencer: "Meron Tadesse",
    initials: "MT",
    campaign: "Coffee Brand Awareness",
    followers: "24.5K followers",
    appliedDate: "Today",
    status: "New",
  },
  {
    id: 2,
    influencer: "Dawit Bekele",
    initials: "DB",
    campaign: "New Product Launch",
    followers: "52K followers",
    appliedDate: "Today",
    status: "Under review",
  },
  {
    id: 3,
    influencer: "Hana Alemu",
    initials: "HA",
    campaign: "Coffee Brand Awareness",
    followers: "18.2K followers",
    appliedDate: "Yesterday",
    status: "New",
  },
  {
    id: 4,
    influencer: "Yonas Girma",
    initials: "YG",
    campaign: "Social Media Awareness",
    followers: "36K followers",
    appliedDate: "Yesterday",
    status: "Accepted",
  },
];

const campaignStatusStyles: Record<CampaignStatus, string> = {
  Active: "bg-green-50 text-green-700 ring-green-200",
  Pending: "bg-amber-50 text-amber-700 ring-amber-200",
  Completed: "bg-blue-50 text-blue-700 ring-blue-200",
  Draft: "bg-gray-100 text-gray-600 ring-gray-200",
};

const applicationStatusStyles: Record<
  RecentApplication["status"],
  string
> = {
  New: "bg-orange-50 text-orange-700",
  "Under review": "bg-amber-50 text-amber-700",
  Accepted: "bg-green-50 text-green-700",
};

export default function CompanyDashboardPage() {
  const totalApplications = campaigns.reduce(
    (total, campaign) => total + campaign.applications,
    0,
  );

  const stats = [
    {
      label: "Total Campaigns",
      value: campaigns.length,
      detail: "All campaigns",
      icon: "▦",
      color: "bg-orange-50 text-orange-600",
    },
    {
      label: "Active Campaigns",
      value: campaigns.filter((c) => c.status === "Active").length,
      detail: "Currently running",
      icon: "◉",
      color: "bg-green-50 text-green-600",
    },
    {
      label: "Total Applications",
      value: totalApplications,
      detail: "Across all campaigns",
      icon: "▤",
      color: "bg-blue-50 text-blue-600",
    },
    {
      label: "Completed Campaigns",
      value: campaigns.filter((c) => c.status === "Completed").length,
      detail: "Finished campaigns",
      icon: "✓",
      color: "bg-purple-50 text-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFDFC] text-gray-900">
      {/* Company header */}
        <CompanyHeader title="My Campaigns" />
   
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-8 lg:px-10">
        {/* Welcome banner */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#EA580C] to-[#F97316] p-6 text-white sm:p-8 lg:p-10">
          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-orange-100">
                COMPANY WORKSPACE
              </p>

              <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
                Welcome back, Company!
              </h2>

              <p className="mt-3 text-sm leading-6 text-orange-50 sm:text-base">
                Connect with Ethiopian creators, manage your campaigns,
                and grow your brand through authentic collaborations.
              </p>
            </div>

            <Link
              href="/company/campaigns/create"
              className="inline-flex w-fit shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-[#C2410C] shadow-sm transition hover:bg-orange-50"
            >
              <span className="text-xl">+</span>
              Create campaign
            </Link>
          </div>

          <div className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full border-[36px] border-white/10" />
          <div className="pointer-events-none absolute -bottom-28 right-40 h-64 w-64 rounded-full bg-white/5" />
        </section>

        {/* Overview cards */}
        <section className="mt-8">
          <div className="mb-4">
            <h3 className="text-lg font-extrabold">
              Campaign overview
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              A quick look at your campaign performance.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center justify-between gap-2">
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
                  {stat.value.toLocaleString("en-US")}
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Recent campaigns: four only */}
        <section className="mt-10 overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm">
          <div className="flex flex-col gap-3 border-b border-gray-100 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <h3 className="text-lg font-extrabold">
                Recent campaigns
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Your four most recent campaigns.
              </p>
            </div>

            <Link
              href="/company/campaigns"
              className="inline-flex w-fit items-center gap-2 text-sm font-bold text-[#EA580C] hover:underline"
            >
              See all campaigns <span>→</span>
            </Link>
          </div>

          <div className="divide-y divide-gray-100">
            {campaigns.slice(0, 4).map((campaign) => (
              <article
                key={campaign.id}
                className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:px-6"
              >
                <div className="min-w-0">
                  <h4 className="font-bold">{campaign.title}</h4>

                  <p className="mt-1 text-sm text-gray-500">
                    {campaign.category}
                  </p>

                  <p className="mt-2 text-xs text-gray-500">
                    Starts {campaign.startDate}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 sm:justify-end">
                  <div>
                    <p className="text-xs text-gray-500">Budget</p>
                    <p className="mt-1 font-bold">
                      {campaign.budget.toLocaleString("en-US")} ETB
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">
                      Applications
                    </p>
                    <p className="mt-1 font-bold">
                      {campaign.applications}
                    </p>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1.5 text-xs font-bold ring-1 ring-inset ${campaignStatusStyles[campaign.status]}`}
                  >
                    {campaign.status}
                  </span>

                  <Link
                    href={`/company/campaigns/${campaign.id}`}
                    className="text-sm font-bold text-[#EA580C] hover:underline"
                  >
                    View →
                  </Link>
                </div>
              </article>
            ))}
          </div>

        
        </section>

        {/* Recent applications: four only */}
        <section className="mt-10 overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm">
          <div className="flex flex-col gap-3 border-b border-gray-100 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <h3 className="text-lg font-extrabold">
                Recent applications
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                The four most recent influencer applications.
              </p>
            </div>

            <Link
              href="/company/applications"
              className="inline-flex w-fit items-center gap-2 text-sm font-bold text-[#EA580C] hover:underline"
            >
              See all applications <span>→</span>
            </Link>
          </div>

          <div className="divide-y divide-gray-100">
            {recentApplications.slice(0, 4).map((application) => (
              <div
                key={application.id}
                className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:px-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-extrabold text-[#C2410C]">
                    {application.initials}
                  </div>

                  <div>
                    <p className="font-bold">
                      {application.influencer}
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      {application.followers}
                    </p>

                    <p className="mt-1 text-sm text-gray-600">
                      Applied to {application.campaign}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 sm:justify-end">
                  <div className="sm:text-right">
                    <span
                      className={`inline-flex rounded-full px-3 py-1.5 text-xs font-bold ${applicationStatusStyles[application.status]}`}
                    >
                      {application.status}
                    </span>

                    <p className="mt-1 text-xs text-gray-500">
                      {application.appliedDate}
                    </p>
                  </div>

                  <Link
                    href={`/company/applications/${application.id}`}
                    className="rounded-lg border border-orange-200 px-3 py-2 text-sm font-semibold text-[#EA580C] transition hover:bg-orange-50"
                  >
                    Review
                  </Link>
                </div>
              </div>
            ))}
          </div>

      
        </section>

        {/* Bottom call to action */}
        <section className="mt-8 rounded-2xl border border-orange-100 bg-orange-50/60 p-5 sm:p-6">
          <h3 className="font-extrabold">
            Grow your brand with creators
          </h3>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-600">
            Create clear campaign briefs, set realistic ETB budgets,
            and review creator applications to find the right
            collaborators for your brand.
          </p>

          <Link
            href="/company/campaigns/create"
            className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#EA580C] hover:underline"
          >
            Create your next campaign →
          </Link>
        </section>
      </main>

      <footer className="border-t border-orange-100 bg-white px-4 py-6 text-center text-xs text-gray-500">
        © 2026 InfluenceET. All rights reserved.
      </footer>
    </div>
  );
}
