"use client";

import Link from "next/link";

export default function RegisterPage() {
return ( <main className="flex min-h-screen items-center justify-center bg-[#FFFAF6] px-4 py-10"> <div className="w-full max-w-2xl">
{/* Logo */} <Link
       href="/"
       className="mb-9 flex items-center justify-center gap-2.5"
     > <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F97316] text-2xl font-extrabold text-white shadow-md shadow-orange-200">
i </span> <span className="text-2xl font-extrabold tracking-tight text-gray-900">
influ<span className="text-[#F97316]">link</span> </span> </Link>

    {/* Heading */}
    <div className="mb-8 text-center">
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Join Influlink
      </h1>
      <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
        Choose how you want to use Influlink and start connecting.
      </p>
    </div>

    {/* Account type cards */}
    <div className="grid gap-5 sm:grid-cols-2">
      <Link
        href="/register/influencer"
        className="group rounded-3xl border border-orange-100 bg-white p-7 shadow-lg shadow-orange-100/40 transition hover:-translate-y-1 hover:border-[#F97316] hover:shadow-xl sm:p-8"
      >
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-3xl transition group-hover:bg-orange-100">
          📸
        </div>

        <h2 className="text-xl font-extrabold text-gray-900">
          I'm an Influencer
        </h2>

        <p className="mt-3 text-sm leading-6 text-gray-500">
          Discover brand campaigns, collaborate with companies, and earn
          from your content.
        </p>

        <div className="mt-7 flex items-center justify-between">
          <span className="text-sm font-bold text-[#EA580C]">
            Join as an influencer
          </span>
          <span className="text-xl text-[#EA580C] transition group-hover:translate-x-1">
            →
          </span>
        </div>
      </Link>

      <Link
        href="/register/company"
        className="group rounded-3xl border border-orange-100 bg-white p-7 shadow-lg shadow-orange-100/40 transition hover:-translate-y-1 hover:border-[#F97316] hover:shadow-xl sm:p-8"
      >
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-3xl transition group-hover:bg-orange-100">
          🏢
        </div>

        <h2 className="text-xl font-extrabold text-gray-900">
          I'm a Company
        </h2>

        <p className="mt-3 text-sm leading-6 text-gray-500">
          Promote your brand, create campaigns, and connect with the right
          influencers.
        </p>

        <div className="mt-7 flex items-center justify-between">
          <span className="text-sm font-bold text-[#EA580C]">
            Join as a company
          </span>
          <span className="text-xl text-[#EA580C] transition group-hover:translate-x-1">
            →
          </span>
        </div>
      </Link>
    </div>

    {/* Sign in */}
    <p className="mt-8 text-center text-sm text-gray-600">
      Already have an account?{" "}
      <Link
        href="/login"
        className="font-bold text-[#EA580C] transition hover:text-[#C2410C] hover:underline"
      >
        Sign in
      </Link>
    </p>

    <Link
      href="/"
      className="mt-6 flex items-center justify-center gap-2 text-sm font-medium text-gray-500 transition hover:text-[#EA580C]"
    >
      <span aria-hidden="true">←</span>
      Back to home
    </Link>

    <p className="mt-7 text-center text-xs text-gray-400">
      © 2026 Influlink. All rights reserved.
    </p>
  </div>
</main>

);
}
