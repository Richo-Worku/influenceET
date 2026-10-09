const benefits = [
  {
    icon: "🎯",
    title: "Find the right campaigns",
    description:
      "Discover brand collaborations that match your niche, audience, and content style.",
  },
  {
    icon: "🤝",
    title: "Connect with brands",
    description:
      "Build meaningful partnerships with businesses looking for creative influencers.",
  },
  {
    icon: "💰",
    title: "Turn creativity into income",
    description:
      "Find paid promotional opportunities and earn from the content you create.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-gray-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-orange-500">
            Why InfluenceEt?
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Better connections.
            <span className="block text-orange-500">
              Bigger opportunities.
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Everything you need to discover collaborations, build relationships,
            and grow your influence in one place.
          </p>
        </div>

        {/* Benefits cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl border border-gray-100 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-3xl">
                {benefit.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">
                {benefit.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
