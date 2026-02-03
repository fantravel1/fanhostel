import Link from 'next/link';

export default function CityNotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-surface">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        {/* 404 Icon */}
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
        </div>

        {/* Error Number */}
        <div className="text-8xl sm:text-9xl font-black text-gradient mb-4">
          404
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          City Not Found
        </h1>

        <p className="text-lg text-text-secondary mb-8 max-w-md mx-auto leading-relaxed">
          Looks like this city hasn&apos;t made it onto our fan map yet. But
          don&apos;t worry &mdash; we&apos;re always adding new destinations.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/cities" className="btn-primary text-base px-8 py-4 w-full sm:w-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            Explore All Cities
          </Link>
          <Link href="/" className="btn-secondary text-base px-8 py-4 w-full sm:w-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            Back to Home
          </Link>
        </div>

        {/* Suggestions */}
        <div className="mt-12 glass-card rounded-2xl p-6 sm:p-8 text-left">
          <h2 className="text-lg font-semibold text-white mb-4">
            Popular Fan Cities
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { name: 'London', slug: 'london' },
              { name: 'Barcelona', slug: 'barcelona' },
              { name: 'Berlin', slug: 'berlin' },
              { name: 'New York City', slug: 'new-york-city' },
              { name: 'Buenos Aires', slug: 'buenos-aires' },
              { name: 'Mexico City', slug: 'mexico-city' },
            ].map((city) => (
              <Link
                key={city.slug}
                href={`/cities/${city.slug}`}
                className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-text-secondary hover:text-primary transition-colors text-sm font-medium text-center border border-white/5"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
