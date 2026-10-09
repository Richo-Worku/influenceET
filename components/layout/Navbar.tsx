export default function Navbar() {
  return (
    <header className="border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-xl font-bold text-white">
            i
          </span>

          <span className="text-xl font-extrabold">
            influence<span className="text-orange-500">Et</span>
          </span>
        </a>

        {/* Navigation links */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#campaigns"
            className="text-sm text-gray-600 hover:text-orange-500"
          >
            Campaigns
          </a>

          <a
            href="#categories"
            className="text-sm text-gray-600 hover:text-orange-500"
          >
            Categories
          </a>

          <a
            href="#how-it-works"
            className="text-sm text-gray-600 hover:text-orange-500"
          >
            How it works
          </a>
        </nav>

        {/* Authentication buttons */}
        <div className="flex items-center gap-4">
          <a
            href="/login"
            className="hidden text-sm font-semibold text-gray-700 sm:block"
          >
            Log in
          </a>

          <a
            href="/register"
            className="rounded-xl bg-orange-500 px-4 py-3 text-sm font-semibold text-white hover:bg-orange-600"
          >
            Get started
          </a>
        </div>

      </div>
    </header>
  );
}
