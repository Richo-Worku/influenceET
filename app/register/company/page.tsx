"use client";

import Link from "next/link";
import { useState } from "react";

export default function CompanyRegisterPage() {
const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);
const [error, setError] = useState("");

function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
event.preventDefault();
setError("");

const formData = new FormData(event.currentTarget);
const password = formData.get("password") as string;
const confirmPassword = formData.get("confirmPassword") as string;

if (password !== confirmPassword) {
  setError("Passwords do not match. Please try again.");
  return;
}

alert(
  "Your company registration form is ready! Account creation will be connected later."
);

}

return ( <main className="flex min-h-screen items-center justify-center bg-[#FFFAF6] px-4 py-10"> <div className="w-full max-w-lg"> <Link
       href="/"
       className="mb-8 flex items-center justify-center gap-2.5"
     > <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F97316] text-2xl font-extrabold text-white shadow-md shadow-orange-200">
i </span> <span className="text-2xl font-extrabold tracking-tight text-gray-900">
influ<span className="text-[#F97316]">link</span> </span> </Link>

```
    <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-xl shadow-orange-100/50 sm:p-9">
      <div className="mb-7 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-2xl">
          🏢
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
          Join as a Company
        </h1>

        <p className="mt-3 text-sm leading-6 text-gray-500">
          Create your company account and start building brand campaigns.
        </p>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="companyName"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Company or brand name
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            autoComplete="organization"
            placeholder="Enter your company name"
            required
            className="w-full rounded-xl border border-gray-200 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#F97316] focus:ring-4 focus:ring-orange-100"
          />
        </div>

        <div>
          <label
            htmlFor="contactName"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Contact person's full name
          </label>
          <input
            id="contactName"
            name="contactName"
            type="text"
            autoComplete="name"
            placeholder="Enter the contact person's name"
            required
            className="w-full rounded-xl border border-gray-200 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#F97316] focus:ring-4 focus:ring-orange-100"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Company email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="name@company.com"
            required
            className="w-full rounded-xl border border-gray-200 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#F97316] focus:ring-4 focus:ring-orange-100"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              placeholder="Create a password"
              minLength={8}
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-3.5 pr-20 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#F97316] focus:ring-4 focus:ring-orange-100"
            />
            <button
              type="button"
              onClick={() => setShowPassword((previous) => !previous)}
              className="absolute inset-y-0 right-4 text-sm font-semibold text-gray-500 hover:text-[#EA580C]"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <p className="mt-2 text-xs text-gray-400">
            Use at least 8 characters.
          </p>
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Confirm password
          </label>
          <div className="relative">
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              autoComplete="new-password"
              placeholder="Enter your password again"
              minLength={8}
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-3.5 pr-20 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#F97316] focus:ring-4 focus:ring-orange-100"
            />
            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword((previous) => !previous)
              }
              className="absolute inset-y-0 right-4 text-sm font-semibold text-gray-500 hover:text-[#EA580C]"
              aria-label={
                showConfirmPassword ? "Hide password" : "Show password"
              }
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {error && (
          <p
            role="alert"
            className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
          >
            {error}
          </p>
        )}

        <div className="flex items-start gap-2">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            required
            className="mt-1 h-4 w-4 shrink-0 rounded border-gray-300 accent-[#F97316]"
          />
          <label
            htmlFor="terms"
            className="text-sm leading-5 text-gray-600"
          >
            I agree to the{" "}
            <Link
              href="/terms"
              className="font-semibold text-[#EA580C] hover:underline"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="font-semibold text-[#EA580C] hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </label>
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-[#F97316] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5 hover:bg-[#EA580C] focus:outline-none focus:ring-4 focus:ring-orange-200 active:translate-y-0"
        >
          Create company account
        </button>
      </form>

      <p className="mt-7 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-bold text-[#EA580C] hover:underline"
        >
          Sign in
        </Link>
      </p>

      <p className="mt-4 text-center text-sm text-gray-500">
        Registering as an influencer instead?{" "}
        <Link
          href="/register/influencer"
          className="font-semibold text-[#EA580C] hover:underline"
        >
          Join as an influencer
        </Link>
      </p>
    </div>

    <Link
      href="/register"
      className="mt-6 flex items-center justify-center gap-2 text-sm font-medium text-gray-500 transition hover:text-[#EA580C]"
    >
      <span aria-hidden="true">←</span>
      Choose account type
    </Link>

    <p className="mt-7 text-center text-xs text-gray-400">
      © 2026 Influlink. All rights reserved.
    </p>
  </div>
</main>

);
}
