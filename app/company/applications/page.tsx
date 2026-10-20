
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import CompanyHeader from "@/components/layout/CompanyHeader";

type ApplicationStatus =
  | "New"
  | "Under review"
  | "Accepted"
  | "Rejected";

type Application = {
  id: number;
  influencer: string;
  initials: string;
  category: string;
  followers: string;
  platform: string;
  campaign: string;
  campaignId: number;
  appliedDate: string;
  proposedRate: number;
  status: ApplicationStatus;
  message: string;
};

const initialApplications: Application[] = [
  {
    id: 1,
    influencer: "Meron Tadesse",
    initials: "MT",
    category: "Lifestyle & Food",
    followers: "24.5K",
    platform: "TikTok",
    campaign: "Coffee Brand Awareness",
    campaignId: 1,
    appliedDate: "Oct 19, 2026",
    proposedRate: 4500,
    status: "New",
    message:
      "I create lifestyle content and would love to introduce your coffee brand to my Ethiopian audience.",
  },
  {
    id: 2,
    influencer: "Dawit Bekele",
    initials: "DB",
    category: "Technology",
    followers: "52K",
    platform: "TikTok",
    campaign: "New Product Launch",
    campaignId: 2,
    appliedDate: "Oct 19, 2026",
    proposedRate: 8000,
    status: "Under review",
    message:
      "My audience enjoys discovering new products. I can create an engaging product demonstration.",
  },
  {
    id: 3,
    influencer: "Hana Alemu",
    initials: "HA",
    category: "Beauty & Fashion",
    followers: "18.2K",
    platform: "Instagram",
    campaign: "Coffee Brand Awareness",
    campaignId: 1,
    appliedDate: "Oct 18, 2026",
    proposedRate: 3500,
    status: "New",
    message:
      "I would love to create an original reel highlighting your product and brand story.",
  },
  {
    id: 4,
    influencer: "Yonas Girma",
    initials: "YG",
    category: "Technology",
    followers: "36K",
    platform: "TikTok",
    campaign: "Social Media Awareness",
    campaignId: 3,
    appliedDate: "Oct 18, 2026",
    proposedRate: 6000,
    status: "Accepted",
    message:
      "I can help communicate your digital services in a simple and engaging way.",
  },
  {
    id: 5,
    influencer: "Sara Mekonnen",
    initials: "SM",
    category: "Fashion",
    followers: "12.8K",
    platform: "Instagram",
    campaign: "New Product Launch",
    campaignId: 2,
    appliedDate: "Oct 17, 2026",
    proposedRate: 3000,
    status: "Rejected",
    message:
      "I am interested in working with your brand and creating product-focused content.",
  },
];

const statusStyles: Record<ApplicationStatus, string> = {
  New: "bg-orange-50 text-orange-700 ring-orange-200",
  "Under review": "bg-amber-50 text-amber-700 ring-amber-200",
  Accepted: "bg-green-50 text-green-700 ring-green-200",
  Rejected: "bg-red-50 text-red-700 ring-red-200",
};

const filters = [
  "All",
  "New",
  "Under review",
  "Accepted",
  "Rejected",
] as const;

export default function CompanyApplicationsPage() {
  const [applications, setApplications] =
    useState<Application[]>(initialApplications);
  const [search, setSearch] = useState("");
  const [selectedStatus, setSelectedStatus] =
    useState<(typeof filters)[number]>("All");

  const filteredApplications = useMemo(() => {
    const query = search.trim().toLowerCase();

    return applications.filter((application) => {
      const matchesSearch =
        application.influencer.toLowerCase().includes(query) ||
        application.campaign.toLowerCase().includes(query) ||
        application.platform.toLowerCase().includes(query) ||
        application.category.toLowerCase().includes(query);

      const matchesStatus =
        selectedStatus === "All" ||
        application.status === selectedStatus;

      return matchesSearch && matchesStatus;
    });
  }, [applications, search, selectedStatus]);

  function updateStatus(
    id: number,
    status: ApplicationStatus,
  ) {
    setApplications((current) =>
      current.map((application) =>
        application.id === id
          ? { ...application, status }
          : application,
      ),
    );
  }

  const newCount = applications.filter(
    (application) => application.status === "New",
  ).length;

  const reviewCount = applications.filter(
    (application) => application.status === "Under review",
  ).length;

  const acceptedCount = applications.filter(
    (application) => application.status === "Accepted",
  ).length;

  return (
    <div className="min-h-screen bg-[#FFFDFC] text-gray-900">
      <CompanyHeader title="Applications" />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-8 lg:px-10">
        {/* Page introduction */}
        <section>
          <Link
            href="/company/dashboard"
            className="text-sm font-semibold text-[#EA580C] hover:underline"
          >
            ← Back to dashboard
          </Link>

          <p className="mt-6 text-sm font-bold tracking-wide text-[#EA580C]">
            CREATOR MANAGEMENT
          </p>

          <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
            Influencer applications
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500">
            Review creators who have applied to your campaigns and
            decide who is the best fit for your brand.
          </p>
        </section>

        {/* Summary cards */}
        <section className="mt-8 grid grid-cols-2 gap-4 xl:grid-cols-4">
          <SummaryCard
            label="Total applications"
            value={applications.length}
            description="All received applications"
            color="text-gray-900"
          />

          <SummaryCard
            label="New applications"
            value={newCount}
            description="Waiting for review"
            color="text-[#EA580C]"
          />

          <SummaryCard
            label="Under review"
            value={reviewCount}
            description="Currently reviewing"
            color="text-amber-600"
          />

          <SummaryCard
            label="Accepted"
            value={acceptedCount}
            description="Selected creators"
            color="text-green-600"
          />
        </section>

        {/* Search and status filters */}
        <section className="mt-8 rounded-2xl border border-orange-100 bg-white p-5 shadow-sm sm:p-6">
          <label
            htmlFor="application-search"
            className="mb-2 block text-sm font-semibold"
          >
            Search applications
          </label>

          <input
            id="application-search"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search by influencer, campaign, platform..."
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100"
          />

          <div className="mt-5">
            <p className="mb-3 text-sm font-semibold">
              Application status
            </p>

            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setSelectedStatus(filter)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    selectedStatus === filter
                      ? "bg-[#EA580C] text-white"
                      : "border border-gray-200 bg-white text-gray-600 hover:border-orange-300 hover:text-[#EA580C]"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Applications list */}
        <section className="mt-8">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-extrabold">
                Received applications
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Showing {filteredApplications.length} of{" "}
                {applications.length} applications
              </p>
            </div>

            <Link
              href="/company/campaigns"
              className="text-sm font-bold text-[#EA580C] hover:underline"
            >
              View campaigns →
            </Link>
          </div>

          {filteredApplications.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-orange-200 bg-white px-6 py-14 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-2xl">
                ⌕
              </div>

              <h4 className="mt-4 font-bold">
                No applications found
              </h4>

              <p className="mt-2 text-sm text-gray-500">
                Try a different search term or status filter.
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
            <div className="space-y-4">
              {filteredApplications.map((application) => (
                <article
                  key={application.id}
                  className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm transition hover:border-orange-200 sm:p-6"
                >
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    {/* Influencer information */}
                    <div className="flex min-w-0 gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-orange-100 text-base font-extrabold text-[#C2410C]">
                        {application.initials}
                      </div>

                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="font-extrabold">
                            {application.influencer}
                          </h4>

                          <span
                            className={`rounded-full px-3 py-1 text-xs font-bold ring-1 ring-inset ${statusStyles[application.status]}`}
                          >
                            {application.status}
                          </span>
                        </div>

                        <p className="mt-1 text-sm text-gray-500">
                          {application.category}
                        </p>

                        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-600">
                          <span>
                            <strong>{application.followers}</strong>{" "}
                            followers
                          </span>
                          <span>{application.platform}</span>
                          <span>Applied {application.appliedDate}</span>
                        </div>

                        <div className="mt-4 rounded-xl bg-gray-50 p-4">
                          <p className="text-xs font-bold uppercase tracking-wide text-gray-500">
                            Applied to
                          </p>

                          <Link
                            href={`/company/campaigns/${application.campaignId}`}
                            className="mt-1 inline-block text-sm font-bold text-[#EA580C] hover:underline"
                          >
                            {application.campaign} →
                          </Link>

                          <p className="mt-3 text-xs font-bold uppercase tracking-wide text-gray-500">
                            Creator's message
                          </p>

                          <p className="mt-1 text-sm leading-6 text-gray-600">
                            {application.message}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Rate and actions */}
                    <div className="flex shrink-0 flex-col gap-3 border-t border-gray-100 pt-4 lg:min-w-48 lg:border-t-0 lg:pt-0 lg:text-right">
                      <div>
                        <p className="text-xs text-gray-500">
                          Proposed rate
                        </p>

                        <p className="mt-1 text-xl font-extrabold">
                          {application.proposedRate.toLocaleString(
                            "en-US",
                          )}{" "}
                          <span className="text-sm font-semibold text-gray-500">
                            ETB
                          </span>
                        </p>
                      </div>

                      <Link
                        href={`/company/applications/${application.id}`}
                        className="rounded-xl border border-orange-200 px-4 py-2.5 text-center text-sm font-bold text-[#EA580C] transition hover:bg-orange-50"
                      >
                        View application
                      </Link>

                      {application.status !== "Accepted" &&
                        application.status !== "Rejected" && (
                          <div className="flex gap-2 lg:flex-col">
                            <button
                              type="button"
                              onClick={() =>
                                updateStatus(application.id, "Accepted")
                              }
                              className="flex-1 rounded-xl bg-green-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-green-700"
                            >
                              Accept
                            </button>

                            <button
                              type="button"
                              onClick={() =>
                                updateStatus(application.id, "Rejected")
                              }
                              className="flex-1 rounded-xl border border-red-200 px-4 py-2.5 text-sm font-bold text-red-600 transition hover:bg-red-50"
                            >
                              Reject
                            </button>
                          </div>
                        )}

                      {(application.status === "Accepted" ||
                        application.status === "Rejected") && (
                        <button
                          type="button"
                          onClick={() =>
                            updateStatus(application.id, "Under review")
                          }
                          className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-600 hover:bg-gray-50"
                        >
                          Reopen review
                        </button>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        <div className="mt-8 rounded-2xl border border-orange-100 bg-orange-50/60 p-5">
          <p className="text-sm leading-6 text-gray-600">
            <strong className="text-gray-900">Frontend preview:</strong>{" "}
            Application data is sample data. Accepting or rejecting
            applications changes the current page state only; the changes
            are not saved permanently.
          </p>
        </div>
      </main>

      <footer className="mt-8 border-t border-orange-100 bg-white px-4 py-6 text-center text-xs text-gray-500">
        © 2026 InfluenceET. All rights reserved.
      </footer>
    </div>
  );
}

function SummaryCard({
  label,
  value,
  description,
  color,
}: {
  label: string;
  value: number;
  description: string;
  color: string;
}) {
  return (
    <div className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-gray-500">{label}</p>

      <p className={`mt-3 text-3xl font-extrabold ${color}`}>
        {value.toLocaleString("en-US")}
      </p>

      <p className="mt-1 text-xs text-gray-500">{description}</p>
    </div>
  );
}
