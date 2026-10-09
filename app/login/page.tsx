"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
const [showPassword, setShowPassword] = useState(false);

return ( <main className="flex min-h-screen items-center justify-center bg-[#FFFAF6] px-4 py-10"> <div className="w-full max-w-md">
{/* Logo */} <Link
       href="/"
       className="mb-9 flex items-center justify-center gap-2.5"
     > <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F97316] text-2xl font-extrabold text-white shadow-md shadow-orange-200">
i </span> <span className="text-2xl font-extrabold tracking-tight text-gray-900">
influence<span className="text-[#F97316]">Et</span> </span> </Link>

    {/* Login card */}
    <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-xl shadow-orange-100/50 sm:p-9">
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-2xl">
          👋
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
          Welcome back
        </h1>

        <p className="mt-3 text-sm leading-6 text-gray-500">
          Sign in to discover campaigns and connect with brands.
        </p>
      </div>

      {/* Login form — UI only */}
      <form
        className="space-y-5"
        onSubmit={(event) => {
          event.preventDefault();
          alert(
            "Your login interface is ready! Authentication will be connected later."
          );
        }}
      >
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Email address
          </label>

          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#F97316] focus:ring-4 focus:ring-orange-100"
          />
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between gap-3">
            <label
              htmlFor="password"
              className="text-sm font-semibold text-gray-700"
            >
              Password
            </label>

            <button
              type="button"
              onClick={() =>
                alert("Password recovery will be added later.")
              }
              className="text-sm font-semibold text-[#EA580C] transition hover:text-[#C2410C] hover:underline"
            >
              Forgot password?
            </button>
          </div>

          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              placeholder="Enter your password"
              required
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 pr-20 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#F97316] focus:ring-4 focus:ring-orange-100"
            />

            <button
              type="button"
              onClick={() => setShowPassword((previous) => !previous)}
              className="absolute inset-y-0 right-4 text-sm font-semibold text-gray-500 transition hover:text-[#EA580C]"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input
            id="remember"
            name="remember"
            type="checkbox"
            className="h-4 w-4 cursor-pointer rounded border-gray-300 accent-[#F97316]"
          />

          <label
            htmlFor="remember"
            className="cursor-pointer text-sm text-gray-600"
          >
            Remember me
          </label>
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-[#F97316] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5 hover:bg-[#EA580C] focus:outline-none focus:ring-4 focus:ring-orange-200 active:translate-y-0"
        >
          Sign in
        </button>
      </form>

      {/* Registration link */}
      <div className="mt-7 text-center">
        <p className="text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-bold text-[#EA580C] transition hover:text-[#C2410C] hover:underline"
          >
            Create an account
          </Link>
        </p>
      </div>

      <div className="my-7 flex items-center gap-4">
        <div className="h-px flex-1 bg-gray-100" />
        <span className="text-xs text-gray-400">INFLULINK COMMUNITY</span>
        <div className="h-px flex-1 bg-gray-100" />
      </div>

      <p className="text-center text-xs leading-5 text-gray-400">
        By continuing, you agree to our{" "}
        <Link href="/terms" className="underline hover:text-gray-600">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="/privacy" className="underline hover:text-gray-600">
          Privacy Policy
        </Link>
        .
      </p>
    </div>

    {/* Back to home */}
    <Link
      href="/"
      className="mt-7 flex items-center justify-center gap-2 text-sm font-medium text-gray-500 transition hover:text-[#EA580C]"
    >
      <span aria-hidden="true">←</span>
      Back to home
    </Link>

    <p className="mt-8 text-center text-xs text-gray-400">
      © 2026 Influlink. All rights reserved.
    </p>
  </div>
</main>

);
}
