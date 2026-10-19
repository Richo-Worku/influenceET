
"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

type Campaign = {
  id: number;
  brand: string;
  initials: string;
  brandColor: string;
  category: string;
  title: string;
  description: string;
  budget: string;
  platform: string;
  followers: string;
  location: string;
  daysLeft: number;
  deliverables: string[];
  requirements: string[];
};

const campaigns: Campaign[] = [
  {
    id: 1,
    brand: "Habesha Coffee",
    initials: "HC",
    brandColor: "bg-amber-100 text-amber-800",
    category: "Food & Beverage",
    title: "Share the taste of Ethiopian coffee",
    description:
      "We are looking for creative Ethiopian influencers to introduce our coffee to a wider audience. Create authentic content that captures the culture, flavor, and experience of enjoying Habesha Coffee.",
    budget: "5,000–12,000 ETB",
    platform: "Instagram",
    followers: "5K+",
    location: "Addis Ababa",
    daysLeft: 8,
    deliverables: [
      "Create one Instagram Reel featuring our coffee.",
      "Publish at least three Instagram Stories.",
      "Tag our official brand account.",
      "Include the campaign hashtag in your content.",
    ],
    requirements: [
      "Have at least 5,000 Instagram followers.",
      "Create food, lifestyle, or culture-related content.",
      "Have an audience primarily based in Ethiopia.",
      "Be able to visit or receive the product as agreed.",
    ],
  },
  {
    id: 2,
    brand: "Ethio Fashion",
    initials: "EF",
    brandColor: "bg-pink-100 text-pink-700",
    category: "Fashion",
    title: "Show your style with Ethio Fashion",
    description:
      "Help us showcase modern Ethiopian fashion. We want creators who can style our collection, express their personality, and inspire their audience with authentic fashion content.",
    budget: "3,000–8,000 ETB",
    platform: "TikTok",
    followers: "10K+",
    location: "Ethiopia",
    daysLeft: 12,
    deliverables: [
      "Publish two TikTok videos featuring our collection.",
      "Show at least two different outfit combinations.",
      "Tag the official Ethio Fashion account.",
      "Keep the content available for the agreed period.",
    ],
    requirements: [
      "Have at least 10,000 TikTok followers.",
      "Create fashion or lifestyle content.",
      "Have an engaged Ethiopian audience.",
      "Follow the campaign's brand guidelines.",
    ],
  },
  {
    id: 3,
    brand: "Awash Lifestyle",
    initials: "AL",
    brandColor: "bg-emerald-100 text-emerald-700",
    category: "Lifestyle",
    title: "Everyday living, made inspiring",
    description:
      "Partner with Awash Lifestyle to create relatable content about everyday routines, personal experiences, and the little things that make life better.",
    budget: "2,000–6,000 ETB",
    platform: "Instagram",
    followers: "3K+",
    location: "Addis Ababa",
    daysLeft: 5,
    deliverables: [
      "Publish one Instagram Reel.",
      "Share two Instagram Stories.",
      "Mention Awash Lifestyle in the content.",
    ],
    requirements: [
      "Have at least 3,000 Instagram followers.",
      "Create lifestyle or daily routine content.",
      "Maintain an authentic and active profile.",
    ],
  },
  {
    id: 4,
    brand: "Tech Ethiopia",
    initials: "TE",
    brandColor: "bg-blue-100 text-blue-700",
    category: "Technology",
    title: "Make technology easy to understand",
    description:
      "We are looking for technology creators who can explain useful products, apps, and digital experiences in a simple and engaging way for Ethiopian audiences.",
    budget: "4,000–10,000 ETB",
    platform: "YouTube",
    followers: "2K+",
    location: "Ethiopia",
    daysLeft: 15,
    deliverables: [
      "Publish one YouTube review or demonstration.",
      "Include the campaign link in the description.",
      "Explain the product's key benefits.",
    ],
    requirements: [
      "Have at least 2,000 YouTube subscribers.",
      "Create technology or educational content.",
      "Provide clear audio and video.",
    ],
  },
  {
    id: 5,
    brand: "Addis Beauty",
    initials: "AB",
    brandColor: "bg-purple-100 text-purple-700",
    category: "Beauty",
    title: "Celebrate your natural beauty",
    description:
      "Create beauty content featuring Addis Beauty products. We welcome creators with a distinctive style who can share honest experiences and useful beauty tips.",
    budget: "3,000–7,000 ETB",
    platform: "Instagram",
    followers: "4K+",
    location: "Addis Ababa",
    daysLeft: 10,
    deliverables: [
      "Publish one product-focused Reel.",
      "Share two Stories describing your experience.",
      "Tag the brand in each campaign post.",
    ],
    requirements: [
      "Have at least 4,000 Instagram followers.",
      "Create beauty, skincare, or makeup content.",
      "Disclose sponsored content appropriately.",
    ],
  },
  {
    id: 6,
    brand: "Ethiopian Eats",
    initials: "EE",
    brandColor: "bg-orange-100 text-orange-700",
    category: "Food & Beverage",
    title: "Discover local flavors with us",
    description:
      "Help people discover delicious local food. We are looking for food creators who enjoy reviewing dishes, visiting restaurants, and sharing memorable food experiences.",
    budget: "2,500–6,000 ETB",
    platform: "TikTok",
    followers: "3K+",
    location: "Adama",
    daysLeft: 7,
    deliverables: [
      "Publish one TikTok food review.",
      "Showcase the featured dishes.",
      "Tag the official Ethiopian Eats account.",
    ],
    requirements: [
      "Have at least 3,000 TikTok followers.",
      "Create food or restaurant-related content.",
      "Be available in or near Adama.",
    ],
  },
  {
    id: 7,
    brand: "Explore Ethiopia",
    initials: "EX",
    brandColor: "bg-teal-100 text-teal-700",
    category: "Travel",
    title: "Tell Ethiopia's travel stories",
    description:
      "Showcase the beauty of Ethiopia through engaging travel content. Share destinations, culture, and experiences that inspire people to explore more of the country.",
    budget: "4,000–9,000 ETB",
    platform: "YouTube",
    followers: "5K+",
    location: "Ethiopia",
    daysLeft: 14,
    deliverables: [
      "Publish one travel video.",
      "Include location details in the description.",
      "Share original photos or short clips as agreed.",
    ],
    requirements: [
      "Have at least 5,000 YouTube subscribers.",
      "Create travel, culture, or adventure content.",
      "Be willing to follow the campaign itinerary.",
    ],
  },
  {
    id: 8,
    brand: "Fit Life Ethiopia",
    initials: "FL",
    brandColor: "bg-lime-100 text-lime-800",
    category: "Fitness",
    title: "Inspire a healthier lifestyle",
    description:
      "Encourage people to stay active and build healthy routines. We want fitness creators who motivate their audience with realistic, positive, and engaging content.",
    budget: "2,000–5,000 ETB",
    platform: "Instagram",
    followers: "2K+",
    location: "Hawassa",
    daysLeft: 9,
    deliverables: [
      "Publish one fitness Reel.",
      "Share three workout or routine Stories.",
      "Mention the campaign brand in your content.",
    ],
    requirements: [
      "Have at least 2,000 Instagram followers.",
      "Create fitness, sports, or wellness content.",
      "Be based in or able to work in Hawassa.",
    ],
  },
];

export default function CampaignDetailsClient({
  id,
}: {
  id: string;
}) {
  const campaignId = Number(id);
  const campaign = campaigns.find((item) => item.id === campaignId);

  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [profileUrl, setProfileUrl] = useState("");
  const [message, setMessage] = useState("");
  const [proposal, setProposal] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  function handleApplicationSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    setFormError("");

    if (message.trim().length < 20) {
      setFormError(
        "Please write at least 20 characters explaining why you are a good fit."
      );
      return;
    }

    setSubmitted(true);
    setShowApplicationForm(false);
  }

  if (!campaign || !Number.isInteger(campaignId)) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#FFFAF6] px-5">
        <div className="w-full max-w-md rounded-3xl border border-orange-100 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-3xl">
            🔎
          </div>

          <h1 className="mt-5 text-2xl font-bold text-gray-900">
            Campaign not found
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            This campaign may no longer be available, or the link may be
            incorrect.
          </p>

          <Link
            href="/campaigns"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            Browse campaigns
          </Link>
        </div>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFAF6] text-gray-900">
      {/* Top navigation */}
      <header className="sticky top-0 z-30 border-b border-orange-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-tight text-orange-600"
          >
            Influence<span className="text-gray-900">ET</span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium text-gray-600 md:flex">
            <Link href="/influencer/dashboard" className="hover:text-orange-600">
              Dashboard
            </Link>
            <Link
              href="/campaigns"
              className="font-semibold text-orange-600"
            >
              Campaigns
            </Link>
            <Link
              href="/influencer/dashboard"
              className="hover:text-orange-600"
            >
              My applications
            </Link>
            <Link
              href="/influencer/profile"
              className="hover:text-orange-600"
            >
              My profile
            </Link>
          </nav>

          <Link
            href="/influencer/profile"
            className="rounded-xl border border-orange-200 px-4 py-2 text-sm font-semibold text-orange-600 transition hover:bg-orange-50"
          >
            My profile
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-7 pb-16 sm:px-6 sm:py-10 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-500">
          <Link href="/influencer/dashboard" className="hover:text-orange-600">
            Dashboard
          </Link>
          <span>/</span>
          <Link href="/campaigns" className="hover:text-orange-600">
            Campaigns
          </Link>
          <span>/</span>
          <span className="font-medium text-gray-800">
            Campaign details
          </span>
        </div>

        {/* Campaign header */}
        <section className="overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-sm">
          <div className="h-2 bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300" />

          <div className="p-5 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <div
                className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl text-2xl font-extrabold ${campaign.brandColor}`}
              >
                {campaign.initials}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
                    {campaign.category}
                  </span>
                  <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                    Accepting applications
                  </span>
                </div>

                <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
                  {campaign.title}
                </h1>

                <p className="mt-2 text-sm font-medium text-gray-600">
                  Campaign by {campaign.brand}
                </p>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base">
                  {campaign.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-600">
                  <span className="flex items-center gap-2">
                    <span aria-hidden="true">📱</span>
                    {campaign.platform}
                  </span>
                  <span className="flex items-center gap-2">
                    <span aria-hidden="true">📍</span>
                    {campaign.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <span aria-hidden="true">👥</span>
                    {campaign.followers} followers required
                  </span>
                  <span className="flex items-center gap-2">
                    <span aria-hidden="true">🗓️</span>
                    {campaign.daysLeft} days left
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main content and sidebar */}
        <div className="mt-7 grid grid-cols-1 items-start gap-7 lg:grid-cols-3">
          <div className="space-y-7 lg:col-span-2">
            {/* About */}
            <section className="rounded-3xl border border-orange-100 bg-white p-5 shadow-sm sm:p-7">
              <h2 className="text-xl font-bold text-gray-900">
                About this campaign
              </h2>
              <p className="mt-4 text-sm leading-7 text-gray-600">
                {campaign.description}
              </p>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                We are looking for creators who can produce original,
                engaging content that feels natural to their audience.
                Please review the deliverables and requirements before
                submitting your application.
              </p>
            </section>

            {/* Deliverables */}
            <section className="rounded-3xl border border-orange-100 bg-white p-5 shadow-sm sm:p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-xl">
                  🎯
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Campaign deliverables
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    What you will be expected to create
                  </p>
                </div>
              </div>

              <ul className="mt-6 space-y-4">
                {campaign.deliverables.map((item, index) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-700">
                      {index + 1}
                    </span>
                    <p className="pt-1 text-sm leading-6 text-gray-700">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            {/* Requirements */}
            <section className="rounded-3xl border border-orange-100 bg-white p-5 shadow-sm sm:p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl">
                  ✓
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Creator requirements
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    Check that you meet these criteria
                  </p>
                </div>
              </div>

              <ul className="mt-6 space-y-4">
                {campaign.requirements.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700">
                      ✓
                    </span>
                    <p className="text-sm leading-6 text-gray-700">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Application sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-24">
            <section className="rounded-3xl border border-orange-100 bg-white p-5 shadow-sm sm:p-7">
              <p className="text-sm font-medium text-gray-500">
                Estimated campaign compensation
              </p>

              <p className="mt-2 text-3xl font-extrabold text-orange-600">
                {campaign.budget}
              </p>

              <p className="mt-2 text-xs leading-5 text-gray-500">
                Final compensation is subject to campaign terms and brand
                approval.
              </p>

              <div className="my-6 border-t border-gray-100" />

              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <span className="text-sm text-gray-500">Brand</span>
                  <span className="text-right text-sm font-semibold text-gray-800">
                    {campaign.brand}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-3">
                  <span className="text-sm text-gray-500">Platform</span>
                  <span className="text-right text-sm font-semibold text-gray-800">
                    {campaign.platform}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-3">
                  <span className="text-sm text-gray-500">Location</span>
                  <span className="text-right text-sm font-semibold text-gray-800">
                    {campaign.location}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-3">
                  <span className="text-sm text-gray-500">Minimum audience</span>
                  <span className="text-right text-sm font-semibold text-gray-800">
                    {campaign.followers}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-3">
                  <span className="text-sm text-gray-500">Deadline</span>
                  <span className="text-right text-sm font-semibold text-gray-800">
                    {campaign.daysLeft} days remaining
                  </span>
                </div>
              </div>

              {submitted ? (
                <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-4">
                  <div className="flex items-center gap-2 font-semibold text-green-800">
                    <span aria-hidden="true">✓</span>
                    Application submitted
                  </div>
                  <p className="mt-2 text-sm leading-6 text-green-700">
                    Your demo application has been submitted on this page.
                    No data has been saved to a server yet.
                  </p>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setFormError("");
                    setShowApplicationForm(true);
                  }}
                  className="mt-7 w-full rounded-xl bg-orange-500 px-5 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
                >
                  Apply to this campaign →
                </button>
              )}

              <p className="mt-3 text-center text-xs leading-5 text-gray-500">
                Applying is free. Make sure your creator profile is up to date.
              </p>
            </section>

            <section className="rounded-3xl border border-orange-100 bg-orange-50 p-5">
              <h3 className="font-bold text-gray-900">
                Need to update your profile?
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Keep your social links, audience information, and content
                categories up to date before applying.
              </p>
              <Link
                href="/influencer/profile"
                className="mt-4 inline-flex text-sm font-bold text-orange-700 hover:text-orange-800"
              >
                Edit my profile →
              </Link>
            </section>
          </aside>
        </div>

        <div className="mt-8">
          <Link
            href="/campaigns"
            className="inline-flex items-center gap-2 text-sm font-semibold text-orange-700 hover:text-orange-800"
          >
            <span aria-hidden="true">←</span>
            Back to all campaigns
          </Link>
        </div>
      </main>

      {/* Application modal */}
      {showApplicationForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-gray-950/50 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setShowApplicationForm(false);
            }
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="application-modal-title"
            className="my-auto w-full max-w-xl rounded-3xl bg-white p-5 shadow-2xl sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
                  Campaign application
                </span>
                <h2
                  id="application-modal-title"
                  className="mt-3 text-2xl font-extrabold text-gray-900"
                >
                  Apply to {campaign.brand}
                </h2>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Tell the brand why you are a good fit for this campaign.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowApplicationForm(false)}
                aria-label="Close application form"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-600 transition hover:bg-gray-200"
              >
                ×
              </button>
            </div>

            <form
              onSubmit={handleApplicationSubmit}
              className="mt-7 space-y-5"
            >
              <div>
                <label
                  htmlFor="profileUrl"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >
                  Your social media profile URL
                </label>
                <input
                  id="profileUrl"
                  name="profileUrl"
                  type="url"
                  value={profileUrl}
                  onChange={(event) => setProfileUrl(event.target.value)}
                  placeholder="https://www.instagram.com/yourprofile"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                />
                <p className="mt-2 text-xs text-gray-500">
                  Enter the profile for the platform used in this campaign.
                </p>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >
                  Why are you a good fit?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Introduce yourself, describe your audience, and explain how you would promote this brand..."
                  rows={5}
                  minLength={20}
                  maxLength={1000}
                  required
                  className="w-full resize-y rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm leading-6 outline-none transition placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                />
                <p className="mt-1 text-right text-xs text-gray-400">
                  {message.length}/1000 characters
                </p>
              </div>

              <div>
                <label
                  htmlFor="proposal"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >
                  Your proposed compensation (ETB)
                  <span className="ml-2 font-normal text-gray-400">
                    Optional
                  </span>
                </label>
                <input
                  id="proposal"
                  name="proposal"
                  type="number"
                  min="0"
                  step="1"
                  value={proposal}
                  onChange={(event) => setProposal(event.target.value)}
                  placeholder="e.g. 5000"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              {formError && (
                <p
                  role="alert"
                  className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm leading-5 text-red-700"
                >
                  {formError}
                </p>
              )}

              <div className="flex flex-col-reverse gap-3 pt-1 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => setShowApplicationForm(false)}
                  className="rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="rounded-xl bg-orange-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
                >
                  Submit application
                </button>
              </div>
            </form>
          </section>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-orange-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-center sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:text-left lg:px-8">
          <Link href="/" className="text-lg font-extrabold text-orange-600">
            Influence<span className="text-gray-900">ET</span>
          </Link>
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} InfluenceET. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Made for Ethiopian creators and brands.
          </p>
        </div>
      </footer>
    </div>
  );
}
