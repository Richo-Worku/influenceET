
"use client";

import { useState } from "react";
import Link from "next/link";
import CompanyHeader from "@/components/layout/CompanyHeader";

const categories = [
    "Fashion",
    "Beauty",
    "Food & Beverage",
    "Technology",
    "Lifestyle",
    "Travel",
    "Education",
    "Entertainment",
    "Other",
];

const platforms = ["TikTok", "Instagram", "YouTube", "Facebook"];

export default function CreateCampaignPage() {
    const [submitted, setSubmitted] = useState(false);

    const [form, setForm] = useState({
        title: "",
        category: "",
        description: "",
        platform: "",
        budget: "",
        startDate: "",
        endDate: "",
        location: "All Ethiopia",
        minFollowers: "",
        contentType: "",
        requirements: "",
        applicationDeadline: "",
    });

    function updateField(
        field: keyof typeof form,
        value: string,
    ) {
        setForm((previous) => ({
            ...previous,
            [field]: value,
        }));
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (Number(form.budget) <= 0) {
            alert("Please enter a budget greater than zero ETB.");
            return;
        }

        if (
            form.startDate &&
            form.endDate &&
            form.endDate < form.startDate
        ) {
            alert("The end date must be after the start date.");
            return;
        }

        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (submitted) {
        return (
            <div className="min-h-screen bg-[#FFFDFC]">
                <CompanyHeader title="Create Campaign" />

                <main className="mx-auto max-w-2xl px-4 py-16 sm:px-8">
                    <div className="rounded-3xl border border-green-100 bg-white p-8 text-center shadow-sm sm:p-12">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-3xl text-green-600">
                            ✓
                        </div>

                        <h2 className="mt-6 text-2xl font-extrabold">
                            Campaign form completed!
                        </h2>

                        <p className="mt-3 leading-7 text-gray-500">
                            Your campaign details have been entered successfully.
                            This frontend preview does not save or publish campaigns
                            to a database yet.
                        </p>

                        <div className="mt-6 rounded-xl bg-orange-50 p-4 text-left">
                            <p className="font-bold text-gray-900">{form.title}</p>
                            <p className="mt-1 text-sm text-gray-600">
                                {form.category} · {form.platform}
                            </p>
                            <p className="mt-2 text-lg font-extrabold text-[#EA580C]">
                                {Number(form.budget).toLocaleString("en-US")} ETB
                            </p>
                        </div>

                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                            <button
                                type="button"
                                onClick={() => setSubmitted(false)}
                                className="rounded-xl border border-orange-200 px-5 py-3 text-sm font-bold text-[#EA580C] hover:bg-orange-50"
                            >
                                Edit campaign
                            </button>

                            <Link
                                href="/company/campaigns"
                                className="rounded-xl bg-[#EA580C] px-5 py-3 text-center text-sm font-bold text-white hover:bg-[#C2410C]"
                            >
                                Back to campaigns
                            </Link>
                        </div>
                    </div>
                </main>

                <footer className="border-t border-orange-100 bg-white px-4 py-6 text-center text-xs text-gray-500">
                    © 2026 InfluenceET. All rights reserved.
                </footer>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#FFFDFC] text-gray-900">
            <CompanyHeader title="Create Campaign" />

            <main className="mx-auto max-w-5xl px-4 py-8 sm:px-8 lg:px-10">
                <div className="mb-8">
                    <Link
                        href="/company/campaigns"
                        className="text-sm font-semibold text-[#EA580C] hover:underline"
                    >
                        ← Back to campaigns
                    </Link>

                    <p className="mt-6 text-sm font-bold tracking-wide text-[#EA580C]">
                        CAMPAIGN MANAGEMENT
                    </p>

                    <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
                        Create a new campaign
                    </h2>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500">
                        Tell Ethiopian creators about your brand, your goals,
                        and the collaboration you want to build.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Basic information */}
                    <section className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm sm:p-8">
                        <div className="mb-6">
                            <h3 className="text-lg font-extrabold">
                                1. Basic information
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                                Introduce your campaign to potential influencers.
                            </p>
                        </div>

                        <div className="space-y-5">
                            <div>
                                <label htmlFor="title" className="mb-2 block text-sm font-semibold">
                                    Campaign title <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="title"
                                    required
                                    maxLength={100}
                                    value={form.title}
                                    onChange={(e) => updateField("title", e.target.value)}
                                    placeholder="e.g. Ethiopian Coffee Brand Awareness"
                                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                                />
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="category" className="mb-2 block text-sm font-semibold">
                                        Category <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        id="category"
                                        required
                                        value={form.category}
                                        onChange={(e) => updateField("category", e.target.value)}
                                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-orange-400"
                                    >
                                        <option value="">Select a category</option>
                                        {categories.map((category) => (
                                            <option key={category} value={category}>
                                                {category}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="platform" className="mb-2 block text-sm font-semibold">
                                        Social media platform <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        id="platform"
                                        required
                                        value={form.platform}
                                        onChange={(e) => updateField("platform", e.target.value)}
                                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-orange-400"
                                    >
                                        <option value="">Select a platform</option>
                                        {platforms.map((platform) => (
                                            <option key={platform} value={platform}>
                                                {platform}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="description" className="mb-2 block text-sm font-semibold">
                                    Campaign description <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="description"
                                    required
                                    minLength={20}
                                    rows={5}
                                    maxLength={3000}
                                    value={form.description}
                                    onChange={(e) => updateField("description", e.target.value)}
                                    placeholder="Explain your brand, campaign goals, product, and what you expect from creators..."
                                    className="w-full resize-y rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                                />
                                <p className="mt-1 text-right text-xs text-gray-400">
                                    {form.description.length}/3000 characters
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Budget and dates */}
                    <section className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm sm:p-8">
                        <div className="mb-6">
                            <h3 className="text-lg font-extrabold">
                                2. Budget and schedule
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                                Set your campaign budget and important dates.
                            </p>
                        </div>

                        <div className="space-y-5">
                            <div>
                                <label htmlFor="budget" className="mb-2 block text-sm font-semibold">
                                    Total campaign budget (ETB) <span className="text-red-500">*</span>
                                </label>
                                <div className="flex overflow-hidden rounded-xl border border-gray-200 focus-within:border-orange-400">
                                    <span className="flex items-center border-r border-gray-200 bg-gray-50 px-4 text-sm font-bold text-gray-600">
                                        ETB
                                    </span>
                                    <input
                                        id="budget"
                                        required
                                        type="number"
                                        min="1"
                                        step="0.01"
                                        value={form.budget}
                                        onChange={(e) => updateField("budget", e.target.value)}
                                        placeholder="25000"
                                        className="w-full px-4 py-3 text-sm outline-none"
                                    />
                                </div>
                                <p className="mt-2 text-xs text-gray-500">
                                    Enter the total amount you plan to spend on this campaign.
                                </p>
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="startDate" className="mb-2 block text-sm font-semibold">
                                        Start date <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="startDate"
                                        required
                                        type="date"
                                        value={form.startDate}
                                        onChange={(e) => updateField("startDate", e.target.value)}
                                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-orange-400"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="endDate" className="mb-2 block text-sm font-semibold">
                                        End date <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="endDate"
                                        required
                                        type="date"
                                        min={form.startDate || undefined}
                                        value={form.endDate}
                                        onChange={(e) => updateField("endDate", e.target.value)}
                                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-orange-400"
                                    />
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="applicationDeadline" className="mb-2 block text-sm font-semibold">
                                        Application deadline <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="applicationDeadline"
                                        required
                                        type="date"
                                        min="2026-01-01" max={form.startDate || undefined}
                                        value={form.applicationDeadline}
                                        onChange={(e) => updateField("applicationDeadline", e.target.value)}
                                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-orange-400"
                                    />
                                    <p className="mt-2 text-xs text-gray-500">
                                        Set a deadline no later than the campaign start date.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Creator requirements */}
                    <section className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm sm:p-8">
                        <div className="mb-6">
                            <h3 className="text-lg font-extrabold">
                                3. Influencer requirements
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                                Explain who should apply and what they need to deliver.
                            </p>
                        </div>

                        <div className="space-y-5">
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="minFollowers" className="mb-2 block text-sm font-semibold">
                                        Minimum followers
                                    </label>
                                    <select
                                        id="minFollowers"
                                        value={form.minFollowers}
                                        onChange={(e) => updateField("minFollowers", e.target.value)}
                                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-orange-400"
                                    >
                                        <option value="">No minimum</option>
                                        <option value="1000">1,000+</option>
                                        <option value="5000">5,000+</option>
                                        <option value="10000">10,000+</option>
                                        <option value="50000">50,000+</option>
                                        <option value="100000">100,000+</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="contentType" className="mb-2 block text-sm font-semibold">
                                        Required content type
                                    </label>
                                    <select
                                        id="contentType"
                                        value={form.contentType}
                                        onChange={(e) => updateField("contentType", e.target.value)}
                                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-orange-400"
                                    >
                                        <option value="">Select content type</option>
                                        <option value="Short video">Short video</option>
                                        <option value="Product review">Product review</option>
                                        <option value="Unboxing">Unboxing</option>
                                        <option value="Live stream">Live stream</option>
                                        <option value="Photo post">Photo post</option>
                                        <option value="Story">Story</option>
                                        <option value="Multiple formats">Multiple formats</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="location" className="mb-2 block text-sm font-semibold">
                                    Target location
                                </label>
                                <select
                                    id="location"
                                    value={form.location}
                                    onChange={(e) => updateField("location", e.target.value)}
                                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-orange-400"
                                >
                                    <option>All Ethiopia</option>
                                    <option>Addis Ababa</option>
                                    <option>Dire Dawa</option>
                                    <option>Hawassa</option>
                                    <option>Bahir Dar</option>
                                    <option>Adama</option>
                                    <option>Mekelle</option>
                                    <option>Gondar</option>
                                    <option>Jimma</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="requirements" className="mb-2 block text-sm font-semibold">
                                    Additional requirements
                                </label>
                                <textarea
                                    id="requirements"
                                    rows={4}
                                    maxLength={2000}
                                    value={form.requirements}
                                    onChange={(e) => updateField("requirements", e.target.value)}
                                    placeholder="e.g. Speak Amharic, create original content, mention our brand, and include the campaign hashtag..."
                                    className="w-full resize-y rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Submit */}
                    <section className="rounded-2xl border border-orange-100 bg-orange-50/60 p-5 sm:p-6">
                        <h3 className="font-extrabold">Ready to create your campaign?</h3>
                        <p className="mt-2 text-sm leading-6 text-gray-600">
                            Review your details before submitting. This preview will
                            validate the form but will not publish or save it permanently.
                        </p>

                        <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                            <Link
                                href="/company/campaigns"
                                className="rounded-xl border border-orange-200 bg-white px-5 py-3 text-center text-sm font-bold text-gray-700 hover:bg-orange-50"
                            >
                                Cancel
                            </Link>

                            <button
                                type="submit"
                                className="rounded-xl bg-[#EA580C] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#C2410C]"
                            >
                                Preview campaign submission →
                            </button>
                        </div>
                    </section>
                </form>
            </main>

            <footer className="mt-8 border-t border-orange-100 bg-white px-4 py-6 text-center text-xs text-gray-500">
                © 2026 InfluenceET. All rights reserved.
            </footer>
        </div>
    );
}
