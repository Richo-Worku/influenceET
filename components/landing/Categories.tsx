const categories = [
  {
    icon: "👗",
    title: "Fashion",
    description: "Style, outfits & trends",
  },
  {
    icon: "💄",
    title: "Beauty",
    description: "Skincare, makeup & beauty",
  },
  {
    icon: "🍔",
    title: "Food & Drinks",
    description: "Food reviews & experiences",
  },
  {
    icon: "📱",
    title: "Technology",
    description: "Gadgets, apps & tech",
  },
  {
    icon: "✈️",
    title: "Travel",
    description: "Destinations & adventures",
  },
  {
    icon: "🏋️",
    title: "Fitness",
    description: "Health, sport & wellness",
  },
  {
    icon: "🎮",
    title: "Gaming",
    description: "Games, streaming & esports",
  },
  {
    icon: "🎬",
    title: "Lifestyle",
    description: "Daily life & personal stories",
  },
];

export default function Categories() {
  return (
    <section id="categories" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-orange-500">
              Explore categories
            </span>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Find your <span className="text-orange-500">niche.</span>
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-gray-600">
              From fashion to technology, discover campaigns that fit your
              content, interests, and audience.
            </p>
          </div>

          <a
            href="#campaigns"
            className="font-semibold text-orange-500 transition hover:text-orange-600"
          >
            Explore campaigns →
          </a>
        </div>

        {/* Category cards */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <a
              key={category.title}
              href={`/campaigns?category=${encodeURIComponent(category.title)}`}
              className="group rounded-2xl border border-gray-100 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg sm:p-6"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-3xl transition group-hover:bg-orange-100">
                {category.icon}
              </div>

              <h3 className="mt-5 font-bold text-gray-900">
                {category.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                {category.description}
              </p>

              <span className="mt-4 inline-block text-sm font-semibold text-orange-500">
                Explore →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
