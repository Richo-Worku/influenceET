export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="/" className="inline-flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-xl font-bold text-white">
                i
              </span>

              <span className="text-xl font-extrabold text-gray-900">
                influence<span className="text-orange-500">ET</span>
              </span>
            </a>

            <p className="mt-4 max-w-xs text-sm leading-7 text-gray-500">
              Connecting creators and brands to turn ideas into meaningful
              collaborations.
            </p>
          </div>

          {/* Discover */}
          <div>
            <h3 className="font-bold text-gray-900">Discover</h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>
                <a href="#campaigns" className="hover:text-orange-500">
                  Campaigns
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-orange-500">
                  Categories
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-orange-500">
                  How it works
                </a>
              </li>
            </ul>
          </div>

          {/* For users */}
          <div>
            <h3 className="font-bold text-gray-900">Join InfluenceEt</h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>
                <a
                  href="/register/influencer"
                  className="hover:text-orange-500"
                >
                  Join as an influencer
                </a>
              </li>
              <li>
                <a
                  href="/register/company"
                  className="hover:text-orange-500"
                >
                  Join as a brand
                </a>
              </li>
              <li>
                <a href="/login" className="hover:text-orange-500">
                  Log in
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-gray-900">Get in touch</h3>

            <p className="mt-4 text-sm leading-7 text-gray-500">
              Have questions or want to work with us? We'd love to hear from
              you.
            </p>

            <a
              href="mailto:hello@influenceet.com"
              className="mt-3 inline-block text-sm font-semibold text-orange-500 hover:text-orange-600"
            >
              hello@influenceet.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-gray-100 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
© 2026 InfluenceEt. All rights reserved.          </p>

          <p>Made for creators and brands.</p>
        </div>
      </div>
    </footer>
  );
}
