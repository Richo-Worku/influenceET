const steps = [
  {
    number: "01",
    icon: "👤",
    title: "Create your account",
    description:
      "Sign up as an influencer or a brand and build a profile that represents you.",
  },
  {
    number: "02",
    icon: "🔎",
    title: "Discover opportunities",
    description:
      "Influencers explore campaigns, while brands find creators who match their goals.",
  },
  {
    number: "03",
    icon: "🤝",
    title: "Collaborate and grow",
    description:
      "Connect with the right people, agree on campaign details, and build lasting partnerships.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-orange-500">
            Simple process
          </span>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            How <span className="text-orange-500">InfluenceEt</span> works
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            From your first sign-up to your next collaboration, getting started
            is simple.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-orange-50 text-4xl">
                {step.icon}
              </div>

              <p className="mt-6 text-sm font-extrabold tracking-widest text-orange-500">
                STEP {step.number}
              </p>

              <h3 className="mt-3 text-xl font-bold text-gray-900">
                {step.title}
              </h3>

              <p className="mx-auto mt-3 max-w-sm leading-7 text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Account types */}
        <div className="mt-16 grid gap-5 rounded-3xl bg-gray-50 p-6 sm:grid-cols-2 sm:p-10">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <span className="text-3xl">🎥</span>

            <h3 className="mt-4 text-xl font-bold text-gray-900">
              For Influencers
            </h3>

            <p className="mt-2 leading-7 text-gray-600">
              Showcase your creativity, discover paid campaigns, and connect
              with brands looking for your unique voice.
            </p>

            <a
              href="/register/influencer"
              className="mt-5 inline-flex font-semibold text-orange-500 hover:text-orange-600"
            >
              Join as an influencer →
            </a>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <span className="text-3xl">🏢</span>

            <h3 className="mt-4 text-xl font-bold text-gray-900">
              For Brands
            </h3>

            <p className="mt-2 leading-7 text-gray-600">
              Discover relevant creators, promote your products, and build
              partnerships that help your business grow.
            </p>

            <a
              href="/register/company"
              className="mt-5 inline-flex font-semibold text-orange-500 hover:text-orange-600"
            >
              Join as a brand →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
