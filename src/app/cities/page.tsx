import type { Metadata } from 'next';
import { cities } from '@/data/cities';
import CityCard from '@/components/CityCard';
import SearchBar from '@/components/SearchBar';
import FAQSection from '@/components/FAQSection';
import BreadcrumbNav from '@/components/BreadcrumbNav';

export const metadata: Metadata = {
  title: 'Fan Cities Worldwide - Best Cities for Sports & Music Fans',
  description:
    'Explore the best cities for sports and music fans worldwide. Find fan-friendly hostels near stadiums, arenas, and concert venues in London, Barcelona, Berlin, New York, and more.',
  alternates: {
    canonical: 'https://fanhostel.com/cities',
  },
  openGraph: {
    title: 'Fan Cities Worldwide - Best Cities for Sports & Music Fans',
    description:
      'Explore the best cities for sports and music fans worldwide. Find fan-friendly hostels near stadiums, arenas, and concert venues.',
    url: 'https://fanhostel.com/cities',
    siteName: 'FanHostel',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'FanHostel - Fan Cities Worldwide',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fan Cities Worldwide - FanHostel',
    description:
      'Explore the best cities for sports and music fans worldwide.',
  },
};

const citiesFaqs = [
  {
    question: 'What are the best cities for football fans?',
    answer:
      'London, Barcelona, Berlin, Buenos Aires, and Mexico City are among the best cities for football fans. Each offers iconic stadiums, passionate fan cultures, and affordable hostels near venues. London alone has over a dozen professional clubs, while Buenos Aires hosts the legendary Superclasico between Boca Juniors and River Plate.',
  },
  {
    question: 'Which cities have the cheapest fan hostels?',
    answer:
      'Buenos Aires and Mexico City offer the most affordable fan hostels, with dorm beds starting from $11-15 per night. Berlin is also very budget-friendly for a European capital, with fan hostels from $18/night. These cities combine incredible fan atmospheres with backpacker-friendly prices.',
  },
  {
    question: 'How do I choose a fan city for my first sports trip?',
    answer:
      'Consider your budget, favorite sport, and travel style. For football, Barcelona and Buenos Aires offer unmatched atmospheres. For American sports, New York City covers basketball, baseball, and hockey at iconic venues. For music, Berlin and London have world-class concert scenes. Our city guides include safety ratings, transit tips, and hostel recommendations to help you plan.',
  },
  {
    question: 'Are fan hostels safe for solo travelers?',
    answer:
      'Yes, fan hostels are generally very safe and ideal for solo travelers. They are social environments where you can easily meet fellow fans. Each city on FanHostel includes a safety rating, and we provide specific safety tips for each destination. Cities like London, Barcelona, and Berlin are particularly welcoming for solo fan travelers.',
  },
  {
    question: 'Can I visit multiple stadiums in one city trip?',
    answer:
      'Absolutely. Cities like London (Arsenal, Tottenham, Chelsea, West Ham, Wembley), Buenos Aires (Boca, River Plate, San Lorenzo, Racing), and New York City (MSG, Yankee Stadium, Barclays Center) are perfect for multi-venue trips. Our city guides include transit tips to help you plan efficient routes between venues.',
  },
  {
    question: 'What is the best time to visit fan cities?',
    answer:
      'Football season in Europe runs August to May, while American sports vary by league (NBA Oct-June, MLB Apr-Oct, NFL Sep-Feb). Concert seasons peak in summer across most cities. Buenos Aires and Mexico City have year-round football. Check our events calendar for specific dates and plan your hostel booking around match days.',
  },
];

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Cities' },
];

export default function CitiesPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Fan Cities Worldwide',
    description:
      'The best cities for sports and music fans, featuring budget hostels near stadiums and arenas.',
    numberOfItems: cities.length,
    itemListElement: cities.map((city, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: city.name,
      url: `https://fanhostel.com/cities/${city.slug}`,
      image: city.image,
      description: city.tagline,
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
                {cities.length} fan cities worldwide
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.9] mb-6">
              <span className="block text-white">Fan Cities</span>
              <span className="block text-gradient">Worldwide</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10">
              From the roar of La Bombonera to the electric nights at Madison
              Square Garden. Discover the best cities for sports and music fans,
              complete with budget hostels, venue guides, and fan culture tips.
            </p>

            {/* Search */}
            <div className="max-w-2xl mx-auto">
              <SearchBar />
            </div>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Explore Destinations
            </span>
            <h2 className="section-title text-white mt-2">
              Every City, Every Fan
            </h2>
            <p className="text-text-secondary mt-3 max-w-2xl mx-auto text-lg">
              Each city has been scouted, reviewed, and verified by real fans.
              Pick your destination and start planning your next fan trip.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cities.map((city) => (
              <CityCard key={city.slug} {...city} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: `${cities.length}`, label: 'Fan Cities' },
              {
                value: `${cities.reduce((acc, c) => acc + c.hostelsCount, 0)}+`,
                label: 'Verified Hostels',
              },
              {
                value: `$${Math.min(...cities.map((c) => c.avgPrice))}`,
                label: 'Cheapest Avg/Night',
              },
              {
                value: `${cities.filter((c) => c.fanRating >= 5).length}`,
                label: '5-Star Fan Rated',
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

      {/* Continents Section */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              By Region
            </span>
            <h2 className="section-title text-white mt-2">
              Fan Cities by Continent
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Europe', 'North America', 'South America'].map((continent) => {
              const continentCities = cities.filter(
                (c) => c.continent === continent
              );
              return (
                <div
                  key={continent}
                  className="glass-card rounded-2xl p-6 md:p-8"
                >
                  <h3 className="text-xl font-bold text-white mb-4">
                    {continent}
                  </h3>
                  <div className="space-y-3">
                    {continentCities.map((city) => (
                      <a
                        key={city.slug}
                        href={`/cities/${city.slug}`}
                        className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{city.countryCode === 'GB' ? '🇬🇧' : city.countryCode === 'ES' ? '🇪🇸' : city.countryCode === 'DE' ? '🇩🇪' : city.countryCode === 'US' ? '🇺🇸' : city.countryCode === 'MX' ? '🇲🇽' : city.countryCode === 'AR' ? '🇦🇷' : '🌍'}</span>
                          <div>
                            <span className="text-white font-medium group-hover:text-primary transition-colors">
                              {city.name}
                            </span>
                            <span className="block text-xs text-text-muted">
                              {city.hostelsCount} hostels from ${city.avgPrice}
                              /night
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-accent text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-3.5 h-3.5"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {city.fanRating.toFixed(1)}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-surface-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Got Questions?
            </span>
            <h2 className="section-title text-white mt-2">
              Fan Cities FAQ
            </h2>
          </div>
          <FAQSection faqs={citiesFaqs} />
        </div>
      </section>
    </>
  );
}
