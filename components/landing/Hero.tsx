export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">

        {/* Left side: Main message */}
        <div>
          <span className="inline-flex rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600">
            ✨ The future of influencer marketing
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Connect with brands.
            <span className="block text-orange-500">
              Create. Collaborate. Earn.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            InfluenceEt brings influencers and brands together to discover
            opportunities, launch campaigns, and build meaningful partnerships.
          </p>

          {/* Action buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/register"
              className="rounded-xl bg-orange-500 px-6 py-3.5 font-semibold text-white shadow-sm transition hover:bg-orange-600"
            >
              Start collaborating →
            </a>

            <a
              href="#how-it-works"
              className="rounded-xl border border-gray-200 px-6 py-3.5 font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              See how it works
            </a>
          </div>

          {/* Quick benefits */}
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-600">
            <span>✓ Discover campaigns</span>
            <span>✓ Connect with brands</span>
            <span>✓ Grow your audience</span>
          </div>
        </div>
{/* Right side: Featured campaign card */}
<div className="relative">
  <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-orange-100 blur-2xl" />
  <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-orange-50 blur-2xl" />

  <div className="relative rounded-3xl border border-gray-100 bg-white p-5 shadow-xl sm:p-8">
    {/* Campaign heading */}
    <div className="flex items-start justify-between gap-3">
      <div className="flex items-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-2xl">
          🛍️
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-orange-500">
            Featured campaign
          </p>
          <h2 className="mt-1 text-lg font-bold text-gray-900">
            Lifestyle Brand Promotion
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Example brand · Social media
          </p>
        </div>
      </div>

      <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
        Open
      </span>
    </div>

    {/* Campaign budget */}
    <div className="mt-7 rounded-2xl bg-orange-50 p-5">
      <p className="text-sm text-gray-500">Campaign budget</p>
      <p className="mt-2 text-3xl font-extrabold text-orange-500">
        ETB 5,000–15,000
      </p>
      <p className="mt-2 text-xs text-gray-500">
        Illustrative budget per creator
      </p>
    </div>

    {/* Campaign requirements */}
    <div className="mt-6 grid grid-cols-2 gap-5">
      <div>
        <p className="text-sm text-gray-500">Content type</p>
        <p className="mt-1 font-semibold text-gray-900">
          Instagram Reels
        </p>
      </div>

      <div>
        <p className="text-sm text-gray-500">Creator niche</p>
        <p className="mt-1 font-semibold text-gray-900">
          Lifestyle & Beauty
        </p>
      </div>

      <div>
        <p className="text-sm text-gray-500">Audience size</p>
        <p className="mt-1 font-semibold text-gray-900">
          5K+ followers
        </p>
      </div>

      <div>
        <p className="text-sm text-gray-500">Deliverables</p>
        <p className="mt-1 font-semibold text-gray-900">
          1 Reel + 2 Stories
        </p>
      </div>
    </div>

    {/* Campaign action */}
    <a
      href="/campaigns"
      className="mt-7 flex w-full items-center justify-center rounded-xl bg-orange-500 px-5 py-3.5 font-semibold text-white transition hover:bg-orange-600"
    >
      View Campaign →
    </a>

    <p className="mt-4 text-center text-xs text-gray-400">
      Sample campaign · Illustrative details
    </p>
  </div>
</div>


      </div>
    </section>
  );
}
