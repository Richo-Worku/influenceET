const campaigns = [
  {
    id: 1,
    brand: "Habesha Style",
    initials: "HS",
    category: "Fashion",
    title: "Showcase the Latest Fashion Collection",
    description:
      "Create engaging content featuring modern Ethiopian fashion and everyday styles.",
    budget: "ETB 5,000–10,000",
    platform: "Instagram",
    deliverables: "1 Reel + 2 Stories",
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: 2,
    brand: "Glow Beauty",
    initials: "GB",
    category: "Beauty",
    title: "Share Your Everyday Skincare Routine",
    description:
      "Introduce a skincare collection through authentic reviews and creative video content.",
    budget: "ETB 3,000–8,000",
    platform: "TikTok",
    deliverables: "1 Short Video",
    color: "bg-pink-100 text-pink-600",
  },
  {
    id: 3,
    brand: "Addis Food Stories",
    initials: "AF",
    category: "Food & Drinks",
    title: "Discover and Review Local Food Spots",
    description:
      "Visit a local food spot and share your experience with your audience.",
    budget: "ETB 4,000–12,000",
    platform: "Instagram",
    deliverables: "1 Reel + 3 Photos",
    color: "bg-amber-100 text-amber-700",
  },
];

export default function FeaturedCampaigns() {
  return (
    <section id="campaigns" className="bg-gray-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-orange-500">
              Opportunities for creators
            </span>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Featured <span className="text-orange-500">campaigns.</span>
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-gray-600">
              Explore collaboration opportunities and find brands that fit
              your content and creativity.
            </p>
          </div>

          <a
            href="/campaigns"
            className="font-semibold text-orange-500 transition hover:text-orange-600"
          >
            View all campaigns →
          </a>
        </div>

        {/* Campaign cards */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {campaigns.map((campaign) => (
            <article
              key={campaign.id}
              className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Brand information */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl text-sm font-extrabold ${campaign.color}`}
                  >
                    {campaign.initials}
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900">
                      {campaign.brand}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {campaign.category}
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                  Open
                </span>
              </div>

              {/* Campaign description */}
              <h4 className="mt-6 text-xl font-bold leading-7 text-gray-900">
                {campaign.title}
              </h4>

              <p className="mt-3 flex-1 text-sm leading-6 text-gray-600">
                {campaign.description}
              </p>

              {/* Budget */}
              <div className="mt-6 rounded-xl bg-orange-50 p-4">
                <p className="text-xs font-medium text-gray-500">
                  Estimated campaign budget
                </p>
                <p className="mt-1 text-xl font-extrabold text-orange-500">
                  {campaign.budget}
                </p>
              </div>

              {/* Campaign details */}
              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="text-gray-500">Platform</span>
                  <span className="font-semibold text-gray-800">
                    {campaign.platform}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="text-gray-500">Deliverables</span>
                  <span className="text-right font-semibold text-gray-800">
                    {campaign.deliverables}
                  </span>
                </div>
              </div>

              {/* Action */}
              <a
                href={`/campaigns/${campaign.id}`}
                className="mt-6 flex w-full items-center justify-center rounded-xl border border-orange-500 px-5 py-3 font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-white"
              >
                View campaign →
              </a>
            </article>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          Sample campaigns and budgets for demonstration purposes only.
        </p>
      </div>
    </section>
  );
}
