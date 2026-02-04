import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { regions } from '@/data/regions';
import { cities } from '@/data/cities';
import { venues } from '@/data/venues';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import FAQSection from '@/components/FAQSection';
import NewsletterSignup from '@/components/NewsletterSignup';

export const metadata: Metadata = {
  title: 'Fan Regions - Explore the World by Continent for Sports & Music Fans',
  description:
    'Explore fan-friendly regions across 6 continents. Find the best cities, venues, hostels, and events for sports and music fans in Europe, North America, South America, Asia, Oceania, and Africa.',
  alternates: {
    canonical: 'https://fanhostel.com/regions',
  },
  openGraph: {
    title: 'Fan Regions - Explore the World by Continent | FanHostel',
    description:
      'Explore fan-friendly regions across 6 continents. Find the best cities, venues, hostels, and events for sports and music fans worldwide.',
    url: 'https://fanhostel.com/regions',
    siteName: 'FanHostel',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'FanHostel - Fan Regions Worldwide',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fan Regions - Explore the World | FanHostel',
    description:
      'Explore fan-friendly regions across 6 continents for sports and music fans.',
  },
};

const regionsFaqs = [
  {
    question: 'Which region is best for first-time fan travelers?',
    answer:
      'Europe is the best starting point for first-time fan travelers. It has the highest density of world-class venues, excellent public transit, a well-established hostel network, and budget airlines connecting fan cities cheaply. Languages vary, but English is widely spoken in tourist areas. North America is also excellent if you prefer English-speaking destinations and major league sports.',
  },
  {
    question: 'Which region offers the cheapest fan travel experience?',
    answer:
      'South America offers the cheapest overall fan travel experience, with hostel beds from $10/night and match tickets from $15. Asia is a close second — Bangkok and Mumbai offer beds from $8/night. Africa (Cape Town) is also extremely affordable at $12-16/night. All three regions deliver incredible fan experiences at a fraction of the cost of Europe or North America.',
  },
  {
    question: 'Can I combine multiple regions in one trip?',
    answer:
      'Yes, many fan travelers combine regions for epic multi-continent trips. Popular combinations include Europe + Africa (London to Cape Town), North America + South America (Miami to Buenos Aires), and Asia + Oceania (Tokyo to Melbourne). Budget airlines and strategic routing make multi-region trips affordable. The shoulder seasons between leagues often align perfectly for continent-hopping.',
  },
  {
    question: 'Which region has the most intense fan atmospheres?',
    answer:
      'South America takes the crown for raw intensity — nothing on Earth matches the Superclasico in Buenos Aires or the Maracana on Flamengo night. Europe (Istanbul, Glasgow, Naples) is a close second. Asia surprises many travelers with its unique energy — Japanese baseball and Korean KBO games are spectacles of organized fan passion that rival anything in the West.',
  },
];

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Regions' },
];

export default function RegionsPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Fan Regions Worldwide',
    description:
      'The best regions for sports and music fans, covering every continent with fan cities, venues, and hostels.',
    numberOfItems: regions.length,
    itemListElement: regions.map((region, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: region.name,
      url: `https://fanhostel.com/regions/${region.slug}`,
      image: region.heroImage,
      description: region.tagline,
    })),
  };

  return (
    <>
      {/* Schema.org ItemList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1459865264687-595d652de67e?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/80 via-surface/70 to-surface" />

        {/* Accent Lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse-slow" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <BreadcrumbNav items={breadcrumbItems} />
          </div>

          <div className="text-center max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-white/80">
                {regions.length} fan regions across 6 continents
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.9] mb-6">
              <span className="block text-white">Fan Regions</span>
              <span className="block text-gradient">Worldwide</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10">
              From European football cathedrals to South American cauldrons of
              passion. Explore fan destinations by region and find your next
              adventure across 6 continents.
            </p>
          </div>
        </div>
      </section>

      {/* Regions Grid */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Explore by Region
            </span>
            <h2 className="section-title text-white mt-2">
              Choose Your Continent
            </h2>
            <p className="text-text-secondary mt-3 max-w-2xl mx-auto text-lg">
              Every region offers a unique fan experience. Pick a continent and
              discover the cities, venues, and hostels that make it special.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region) => {
              const regionCities = cities.filter((c) =>
                region.continents.includes(c.continent)
              );
              const regionVenues = venues.filter((v) =>
                regionCities.some((c) => c.slug === v.citySlug)
              );

              return (
                <Link
                  key={region.slug}
                  href={`/regions/${region.slug}`}
                  className="group relative block rounded-2xl overflow-hidden card-hover aspect-[4/5]"
                  aria-label={`${region.name} - ${regionCities.length} cities, ${regionVenues.length} venues`}
                >
                  {/* Background Image */}
                  <Image
                    src={region.heroImage}
                    alt={region.name}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />

                  {/* Stats Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-surface/70 backdrop-blur-sm text-primary border border-primary/20">
                      {regionCities.length} cities
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    {/* Region Name */}
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white group-hover:text-primary transition-colors duration-200">
                      {region.name}
                    </h3>
                    <p className="text-sm text-primary italic font-display mt-1">
                      {region.tagline}
                    </p>

                    {/* Quick Stats */}
                    <div className="mt-4 flex items-center gap-4 text-xs">
                      <div className="flex items-center gap-1.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 text-primary"
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
                        <span className="text-text-secondary">
                          <strong className="text-white">
                            {regionCities.length}
                          </strong>{' '}
                          cities
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                          />
                        </svg>
                        <span className="text-text-secondary">
                          <strong className="text-white">
                            {regionVenues.length}
                          </strong>{' '}
                          venues
                        </span>
                      </div>
                    </div>

                    {/* Budget Range */}
                    <div className="mt-3">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-white/10 text-white/80 backdrop-blur-sm">
                        {region.budgetRange}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: `${regions.length}`, label: 'Continents' },
              { value: `${cities.length}`, label: 'Fan Cities' },
              {
                value: `${cities.reduce((acc, c) => acc + c.hostelsCount, 0)}+`,
                label: 'Verified Hostels',
              },
              {
                value: `$${Math.min(...cities.map((c) => c.avgPrice))}`,
                label: 'Cheapest Avg/Night',
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center glass-card rounded-2xl p-6"
              >
                <div className="text-3xl sm:text-4xl font-black text-gradient">
                  {stat.value}
                </div>
                <div className="text-sm text-text-muted uppercase tracking-wider mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Got Questions?
            </span>
            <h2 className="section-title text-white mt-2">
              Fan Regions FAQ
            </h2>
          </div>
          <FAQSection faqs={regionsFaqs} />
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-surface-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSignup />
        </div>
      </section>
    </>
  );
}
