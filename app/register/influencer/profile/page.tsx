"use client";

import Link from "next/link";
import { useState } from "react";

const inputClass =
"w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#F97316] focus:ring-4 focus:ring-orange-100";

const labelClass =
"mb-2 block text-sm font-semibold text-gray-700";

const categories = [
"Fashion",
"Beauty",
"Lifestyle",
"Comedy",
"Food",
"Travel",
"Technology",
"Education",
"Fitness",
"Music",
"Gaming",
"Other",
];

const platforms = [
"Instagram",
"TikTok",
"YouTube",
"Facebook",
"Telegram",
];

const languages = [
"Amharic",
"Afaan Oromo",
"Tigrinya",
"English",
"Somali",
"Afar",
"Other",
];

export default function InfluencerProfilePage() {
const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
const [error, setError] = useState("");

function toggleSelection(
value: string,
selected: string[],
setSelected: (values: string[]) => void
) {
setSelected(
selected.includes(value)
? selected.filter((item) => item !== value)
: [...selected, value]
);
}

function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
event.preventDefault();
setError("");

if (selectedCategories.length === 0) {
  setError("Please select at least one content category.");
  return;
}

if (selectedPlatforms.length === 0) {
  setError("Please select at least one social media platform.");
  return;
}

if (selectedLanguages.length === 0) {
  setError("Please select at least one language.");
  return;
}

const formData = new FormData(event.currentTarget);

const profile = {
  fullName: formData.get("fullName"),
  city: formData.get("city"),
  bio: formData.get("bio"),
  categories: selectedCategories,
  platforms: selectedPlatforms.map((platform) => ({
    name: platform,
    profileUrl: formData.get(`url-${platform}`),
    followers: formData.get(`followers-${platform}`),
  })),
  languages: selectedLanguages,
  expectedRate: formData.get("expectedRate"),
};

console.log("Influencer profile:", profile);

alert(
  "Your profile form is working! Saving profiles to a database will be added next."
);

}

return ( <main className="min-h-screen bg-[#FFFAF6] px-4 py-10 sm:px-6"> <div className="mx-auto max-w-3xl"> <Link href="/" className="mb-8 flex items-center gap-2.5"> <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F97316] text-xl font-extrabold text-white">
i </span> <span className="text-xl font-extrabold tracking-tight text-gray-900">
influ<span className="text-[#F97316]">link</span> </span> </Link>

    <div className="mb-7">
      <p className="text-sm font-bold uppercase tracking-wider text-[#EA580C]">
        Influencer profile
      </p>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Tell us about yourself
      </h1>
      <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
        Help Ethiopian brands discover you and find campaigns that match
        your content.
      </p>
    </div>

    <div className="mb-7 rounded-2xl border border-orange-100 bg-white p-4">
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-semibold text-gray-700">
          Profile setup
        </span>
        <span className="font-semibold text-[#EA580C]">Step 1 of 1</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-orange-50">
        <div className="h-full w-1/3 rounded-full bg-[#F97316]" />
      </div>
      <p className="mt-2 text-xs text-gray-500">
        You can add more details to your profile later.
      </p>
    </div>

    <form
      onSubmit={handleSubmit}
      className="space-y-7 rounded-3xl border border-orange-100 bg-white p-5 shadow-xl shadow-orange-100/40 sm:p-8"
    >
      <section>
        <h2 className="text-lg font-bold text-gray-900">
          Personal information
        </h2>
        <p className="mb-5 mt-1 text-sm text-gray-500">
          Tell brands who you are.
        </p>

        <div className="space-y-5">
          <div>
            <label htmlFor="fullName" className={labelClass}>
              Full name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              placeholder="Enter your full name"
              required
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="city" className={labelClass}>
              City or town
            </label>
            <select
              id="city"
              name="city"
              required
              defaultValue=""
              className={inputClass}
            >
              <option value="" disabled>
                Select your city or town
              </option>
              <option>Addis Ababa</option>
              <option>Adama</option>
              <option>Hawassa</option>
              <option>Bahir Dar</option>
              <option>Dire Dawa</option>
              <option>Jimma</option>
              <option>Gondar</option>
              <option>Mekelle</option>
              <option>Jijiga</option>
              <option>Shashamane</option>
              <option>Dessie</option>
              <option>Other Ethiopian city or town</option>
            </select>
          </div>

          <div>
            <label htmlFor="bio" className={labelClass}>
              About you
            </label>
            <textarea
              id="bio"
              name="bio"
              rows={4}
              maxLength={500}
              placeholder="Tell brands about your content, audience, and what makes you unique..."
              required
              className={inputClass}
            />
            <p className="mt-2 text-xs text-gray-400">
              Maximum 500 characters.
            </p>
          </div>
        </div>
      </section>

      <div className="h-px bg-gray-100" />

      <section>
        <h2 className="text-lg font-bold text-gray-900">
          Content categories
        </h2>
        <p className="mb-4 mt-1 text-sm text-gray-500">
          Select all categories that describe your content.
        </p>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {categories.map((category) => (
            <label
              key={category}
              className={`flex cursor-pointer items-center gap-2 rounded-xl border p-3 text-sm transition ${
                selectedCategories.includes(category)
                  ? "border-[#F97316] bg-orange-50 text-gray-900"
                  : "border-gray-200 text-gray-600 hover:border-orange-200"
              }`}
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() =>
                  toggleSelection(
                    category,
                    selectedCategories,
                    setSelectedCategories
                  )
                }
                className="h-4 w-4 accent-[#F97316]"
              />
              {category}
            </label>
          ))}
        </div>
      </section>

      <div className="h-px bg-gray-100" />

      <section>
        <h2 className="text-lg font-bold text-gray-900">
          Social media accounts
        </h2>
        <p className="mb-5 mt-1 text-sm leading-6 text-gray-500">
          Choose the platforms you use. Add a public profile link and
          your current follower count for each one.
        </p>

        <div className="space-y-4">
          {platforms.map((platform) => {
            const isSelected = selectedPlatforms.includes(platform);

            return (
              <div
                key={platform}
                className={`rounded-2xl border p-4 transition ${
                  isSelected
                    ? "border-orange-200 bg-orange-50/50"
                    : "border-gray-200"
                }`}
              >
                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() =>
                      toggleSelection(
                        platform,
                        selectedPlatforms,
                        setSelectedPlatforms
                      )
                    }
                    className="h-4 w-4 accent-[#F97316]"
                  />
                  <span className="font-semibold text-gray-900">
                    {platform}
                  </span>
                </label>

                {isSelected && (
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label
                        htmlFor={`url-${platform}`}
                        className={labelClass}
                      >
                        {platform} profile link
                      </label>
                      <input
                        id={`url-${platform}`}
                        name={`url-${platform}`}
                        type="url"
                        placeholder="https://..."
                        required
                        className={inputClass}
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor={`followers-${platform}`}
                        className={labelClass}
                      >
                        Followers or subscribers
                      </label>
                      <input
                        id={`followers-${platform}`}
                        name={`followers-${platform}`}
                        type="number"
                        min="0"
                        step="1"
                        placeholder="e.g. 15000"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <div className="h-px bg-gray-100" />

      <section>
        <h2 className="text-lg font-bold text-gray-900">
          Languages and campaign preferences
        </h2>
        <p className="mb-4 mt-1 text-sm text-gray-500">
          Help brands understand which audiences you can reach.
        </p>

        <div className="mb-5">
          <p className={labelClass}>Languages you create content in</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {languages.map((language) => (
              <label
                key={language}
                className={`flex cursor-pointer items-center gap-2 rounded-xl border p-3 text-sm transition ${
                  selectedLanguages.includes(language)
                    ? "border-[#F97316] bg-orange-50 text-gray-900"
                    : "border-gray-200 text-gray-600 hover:border-orange-200"
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedLanguages.includes(language)}
                  onChange={() =>
                    toggleSelection(
                      language,
                      selectedLanguages,
                      setSelectedLanguages
                    )
                  }
                  className="h-4 w-4 accent-[#F97316]"
                />
                {language}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="expectedRate" className={labelClass}>
            Expected rate per campaign (ETB)
          </label>
          <input
            id="expectedRate"
            name="expectedRate"
            type="number"
            min="0"
            step="1"
            placeholder="Optional — e.g. 3000"
            className={inputClass}
          />
          <p className="mt-2 text-xs leading-5 text-gray-400">
            This is optional. You can negotiate the rate for each
            campaign with the brand.
          </p>
        </div>
      </section>

      {error && (
        <p
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        className="w-full rounded-xl bg-[#F97316] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5 hover:bg-[#EA580C] focus:outline-none focus:ring-4 focus:ring-orange-200 active:translate-y-0"
      >
        Complete profile
      </button>

      <button
        type="button"
        onClick={() =>
          alert("You can skip profile setup once account creation is connected.")
        }
        className="w-full rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
      >
        Skip for now
      </button>
    </form>

    <p className="mt-7 text-center text-xs leading-5 text-gray-400">
      Your profile helps Ethiopian brands discover creators for their
      campaigns. Never share your social media passwords.
    </p>

  
  </div>
</main>

);
}
