
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import InfluencerHeader from "@/components/layout/InfluencerHeader";

type ApplicationStatus =
  | "Pending"
  | "Accepted"
  | "Rejected"
  | "Completed";

type Application = {
  id: number;
  campaignId: number;
  campaign: string;
  company: string;
  category: string;
  appliedDate: string;
  payment: number;
  status: ApplicationStatus;
};

const applications: Application[] = [
  {
    id: 1,
    campaignId: 1,
    campaign: "Habesha Coffee Brand Promotion",
    company: "Habesha Coffee",
    category: "Food & Beverage",
    appliedDate: "Oct 12, 2026",
    payment: 5000,
    status: "Pending",
  },
  {
    id: 2,
    campaignId: 2,
    campaign: "Telebirr Digital Awareness",
    company: "Telebirr",
    category: "Technology",
    appliedDate: "Oct 10, 2026",
    payment: 8000,
    status: "Accepted",
  },
  {
    id: 3,
    campaignId: 3,
    campaign: "Fashion Collection Launch",
    company: "Addis Style",
    category: "Fashion",
    appliedDate: "Oct 8, 2026",
    payment: 6500,
    status: "Rejected",
  },
  {
    id: 4,
    campaignId: 4,
    campaign: "Ethiopian Travel Experience",
    company: "Explore Ethiopia",
    category: "Travel",
    appliedDate: "Oct 5, 2026",
    payment: 10000,
    status: "Completed",
  },
  {
    id: 5,
    campaignId: 5,
    campaign: "Beauty Product Review",
    company: "Liya Beauty",
    category: "Beauty",
    appliedDate: "Oct 3, 2026",
    payment: 4000,
    status: "Pending",
  },
];

const statusStyles: Record<ApplicationStatus, string> = {
  Pending: "bg-amber-50 text-amber-700 ring-amber-200",
  Accepted: "bg-green-50 text-green-700 ring-green-200",
  Rejected: "bg-red-50 text-red-700 ring-red-200",
  Completed: "bg-blue-50 text-blue-700 ring-blue-200",
};

const filters = [
  "All",
  "Pending",
  "Accepted",
  "Rejected",
  "Completed",
];

export default function ApplicationsPage() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredApplications = useMemo(() => {
    const query = search.trim().toLowerCase();

    return applications.filter((application) => {
      const matchesSearch =
        application.campaign.toLowerCase().includes(query) ||
        application.company.toLowerCase().includes(query) ||
        application.category.toLowerCase().includes(query);

      const matchesStatus =
        activeFilter === "All" ||
        application.status === activeFilter;

      return matchesSearch && matchesStatus;
    });
  }, [search, activeFilter]);

  const countByStatus = (status: string) =>
    status === "All"
      ? applications.length
      : applications.filter(
          (application) => application.status === status,
        ).length;

  const stats = [
    {
      label: "Total Applications",
      value: applications.length,
      icon: "▤",
      color: "bg-orange-50 text-orange-600",
    },
    {
      label: "Pending",
      value: countByStatus("Pending"),
      icon: "◷",
      color: "bg-amber-50 text-amber-600",
    },
    {
      label: "Accepted",
      value: countByStatus("Accepted"),
      icon: "✓",
      color: "bg-green-50 text-green-600",
    },
    {
      label: "Rejected",
      value: countByStatus("Rejected"),
      icon: "×",
      color: "bg-red-50 text-red-600",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFDFC] text-gray-900">
      <InfluencerHeader title="My Applications" />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-8 lg:px-10">
        {/* Page introduction */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-[#EA580C]">
              CREATOR WORKSPACE
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
              My Applications
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
              Track your campaign applications and see which
              brands are ready to work with you.
            </p>
          </div>

          <Link
            href="/campaigns"
            className="inline-flex w-fit items-center justify-center gap-2 rounded-xl bg-[#EA580C] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#C2410C]"
          >
            Discover campaigns <span>→</span>
          </Link>
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
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
                  className={`flex h-10 w-10 items-center justify-center rounded-xl text-xl font-bold ${stat.color}`}
                >
                  {stat.icon}
                </span>
              </div>

              <p className="mt-4 text-3xl font-extrabold">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Applications section */}
        <section className="mt-8 overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm">
          <div className="border-b border-gray-100 p-5 sm:p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h3 className="text-lg font-extrabold">
                  Your applications
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Review the status of each campaign you applied to.
                </p>
              </div>

              <div className="relative w-full lg:max-w-sm">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-lg text-gray-400">
                  ⌕
                </span>
                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search campaigns or companies..."
                  aria-label="Search applications"
                  className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                />
              </div>
            </div>

            {/* Status filters */}
            <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={activeFilter === filter}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
                    activeFilter === filter
                      ? "bg-[#EA580C] text-white"
                      : "border border-gray-200 bg-white text-gray-600 hover:border-orange-200 hover:bg-orange-50"
                  }`}
                >
                  {filter}
                  <span className="ml-2 opacity-80">
                    {countByStatus(filter)}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Desktop table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[760px] text-left">
              <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
                <tr>
                  <th className="px-6 py-4 font-semibold">
                    Campaign
                  </th>
                  <th className="px-6 py-4 font-semibold">
                    Applied on
                  </th>
                  <th className="px-6 py-4 font-semibold">
                    Offered payment
                  </th>
                  <th className="px-6 py-4 font-semibold">
                    Status
                  </th>
                  <th className="px-6 py-4 font-semibold">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {filteredApplications.map((application) => (
                  <tr
                    key={application.id}
                    className="transition hover:bg-orange-50/30"
                  >
                    <td className="px-6 py-5">
                      <p className="font-bold">
                        {application.campaign}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        {application.company} · {application.category}
                      </p>
                    </td>

                    <td className="px-6 py-5 text-sm text-gray-600">
                      {application.appliedDate}
                    </td>

                    <td className="px-6 py-5">
                      <span className="font-bold">
                        {application.payment.toLocaleString("en-US")} ETB
                      </span>
                    </td>

                    <td className="px-6 py-5">
                      <span
                        className={`inline-flex rounded-full px-3 py-1.5 text-xs font-bold ring-1 ring-inset ${statusStyles[application.status]}`}
                      >
                        {application.status}
                      </span>
                    </td>

                    <td className="px-6 py-5">
                      <Link
                        href={`/campaigns/${application.campaignId}`}
                        className="text-sm font-bold text-[#EA580C] hover:underline"
                      >
                        View campaign →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile application cards */}
          <div className="divide-y divide-gray-100 md:hidden">
            {filteredApplications.map((application) => (
              <article
                key={application.id}
                className="p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="font-bold leading-5">
                      {application.campaign}
                    </h4>
                    <p className="mt-1 text-sm text-gray-500">
                      {application.company}
                    </p>
                  </div>

                  <span
                    className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-bold ring-1 ring-inset ${statusStyles[application.status]}`}
                  >
                    {application.status}
                  </span>
                </div>

                <p className="mt-3 text-sm text-gray-500">
                  {application.category} · Applied {application.appliedDate}
                </p>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs text-gray-500">
                      Offered payment
                    </p>
                    <p className="mt-1 font-extrabold">
                      {application.payment.toLocaleString("en-US")} ETB
                    </p>
                  </div>

                  <Link
                    href={`/campaigns/${application.campaignId}`}
                    className="rounded-lg border border-orange-200 px-3 py-2 text-sm font-bold text-[#EA580C] transition hover:bg-orange-50"
                  >
                    View campaign →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Empty state */}
          {filteredApplications.length === 0 && (
            <div className="px-6 py-16 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-2xl text-[#EA580C]">
                ⌕
              </div>

              <h4 className="mt-4 font-bold">
                No applications found
              </h4>

              <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-gray-500">
                Try another search term or status filter to find
                your applications.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveFilter("All");
                }}
                className="mt-4 text-sm font-bold text-[#EA580C] hover:underline"
              >
                Clear search and filters
              </button>
            </div>
          )}

        
        </section>

        {/* Bottom call to action */}
        <div className="mt-8 rounded-2xl bg-gradient-to-r from-orange-50 to-white p-6 ring-1 ring-orange-100 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div>
            <h3 className="font-extrabold">
              Ready for your next collaboration?
            </h3>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Explore new opportunities and connect with Ethiopian brands.
            </p>
          </div>

          <Link
            href="/campaigns"
            className="mt-4 inline-flex shrink-0 items-center justify-center rounded-xl bg-[#EA580C] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#C2410C] sm:mt-0"
          >
            Explore campaigns →
          </Link>
        </div>
      </main>

      <footer className="border-t border-orange-100 bg-white px-4 py-6 text-center text-xs text-gray-500">
        © 2026 InfluenceET. All rights reserved.
      </footer>
    </div>
  );
}
