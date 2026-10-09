export default function CallToAction() {
  return (
    <section className="bg-white px-6 py-20 sm:py-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-orange-500 px-6 py-16 text-center sm:px-12 sm:py-20">
        {/* Decorative circles */}
        <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full border-[40px] border-white/10" />
        <div className="absolute -bottom-24 -right-12 h-72 w-72 rounded-full border-[50px] border-white/10" />

        <div className="relative mx-auto max-w-3xl">
          <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white">
            Your next opportunity starts here
          </span>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Ready to make your influence count?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-orange-50 sm:text-lg">
            Whether you're a creator ready to collaborate or a brand looking
            for fresh talent, InfluenceEt helps you make the connection.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/register?role=influencer"
              className="rounded-xl bg-white px-7 py-4 font-bold text-orange-600 transition hover:bg-orange-50"
            >
              Join as an influencer →
            </a>

            <a
              href="/register?role=brand"
              className="rounded-xl border border-white/50 px-7 py-4 font-bold text-white transition hover:bg-white/10"
            >
              I'm a brand
            </a>
          </div>

          <p className="mt-6 text-sm text-orange-100">
            Discover opportunities. Build partnerships. Grow together.
          </p>
        </div>
      </div>
    </section>
  );
}
