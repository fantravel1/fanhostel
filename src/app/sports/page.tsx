import type { Metadata } from 'next';
import Link from 'next/link';
import { sports } from '@/data/sports';
import FAQSection from '@/components/FAQSection';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import NewsletterSignup from '@/components/NewsletterSignup';

export const metadata: Metadata = {
  title: 'Sports & Events | FanHostel',
  description:
    'Explore all sports and events covered by FanHostel. Football, basketball, baseball, hockey, cricket, rugby, concerts, motorsport, combat sports, tennis — find fan hostels near every venue worldwide.',
  alternates: {
    canonical: 'https://fanhostel.com/sports',
  },
  openGraph: {
    title: 'Sports & Events | FanHostel',
    description:
      'Explore all sports and events covered by FanHostel. Find fan hostels near stadiums, arenas, and venues for every sport worldwide.',
    url: 'https://fanhostel.com/sports',
    siteName: 'FanHostel',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'FanHostel - Sports & Events',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sports & Events | FanHostel',
    description:
      'Explore all sports and events covered by FanHostel. Fan hostels near every venue worldwide.',
  },
};

const sportsFaqs = [
  {
    question: 'What sports does FanHostel cover?',
    answer:
      'FanHostel covers football (soccer), basketball, baseball, ice hockey, cricket, rugby, concerts & live music, motorsport, combat sports (boxing, MMA, Muay Thai), and tennis. We connect fans with budget hostels near stadiums, arenas, and concert venues for all these sports worldwide.',
  },
  {
    question: 'How do I find hostels near a specific sport venue?',
    answer:
      'Browse the sport you are interested in, then explore the top cities for that sport. Each city page lists fan-verified hostels near the relevant stadiums and arenas. You can also search by city or venue directly from our search bar.',
  },
  {
    question: 'Do fan hostels only cater to one sport?',
    answer:
      'No, most fan hostels are located near multi-purpose venues that host several sports and concerts. A hostel near Madison Square Garden, for example, serves basketball fans, hockey fans, and concert-goers alike. Our listings highlight the nearest venues and what events they host.',
  },
  {
    question: 'Which sport has the cheapest fan hostel options?',
    answer:
      'Football offers the widest range of budget options, especially in South America (Buenos Aires, Mexico City) and Southern Europe (Naples, Lisbon, Istanbul) where dorm beds near stadiums start from $12-18/night. Cricket in Mumbai and combat sports in Bangkok are also extremely affordable.',
  },
  {
    question: 'Can I plan a multi-sport trip with FanHostel?',
    answer:
      'Absolutely. Cities like London, New York, Barcelona, and Melbourne host multiple sports year-round. Our city guides cover all the venues and sports available in each destination, making it easy to catch a football match, basketball game, and concert all in one trip.',
  },
  {
    question: 'How are fan hostels different from regular hostels?',
    answer:
      'Fan hostels are selected specifically for their proximity to stadiums and event venues, their fan-friendly atmosphere (match screenings, pre-game meetups, sports bars), and their track record with traveling fans. We verify each hostel for location, vibe, safety, and value.',
  },
];

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Sports' },
];

export default function SportsPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Sports & Events on FanHostel',
    description:
      'All sports and events covered by FanHostel, with fan hostels near stadiums and venues worldwide.',
    numberOfItems: sports.length,
    itemListElement: sports.map((sport, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: sport.name,
      url: `https://fanhostel.com/sports/${sport.slug}`,
      image: sport.heroImage,
      description: sport.tagline,
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
              "url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&q=80')",
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
                {sports.length} sports covered worldwide
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.9] mb-6">
              <span className="block text-white">Sports &</span>
              <span className="block text-gradient">Events</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10">
              From the roar of football stadiums to the crack of the bat at
              legendary ballparks. Every sport, every venue, every city — with
              fan-verified hostels that put you at the heart of the action.
            </p>
          </div>
        </div>
      </section>

      {/* Sports Grid */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Pick Your Sport
            </span>
            <h2 className="section-title text-white mt-2">
              Every Sport. Every Fan.
            </h2>
            <p className="text-text-secondary mt-3 max-w-2xl mx-auto text-lg">
              Choose your sport and discover the best cities, venues, and fan
              hostels for your next trip.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sports.map((sport) => (
              <Link
                key={sport.slug}
                href={`/sports/${sport.slug}`}
                className="group glass-card rounded-2xl overflow-hidden card-hover"
              >
                {/* Sport Header with Background */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${sport.heroImage}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-surface-card/60 to-transparent" />

                  {/* Sport Icon */}
                  <div className="absolute top-4 left-4">
                    <span className="text-4xl">{sport.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-200">
                    {sport.name}
                  </h3>
                  <p className="text-sm text-primary italic font-display mt-1">
                    {sport.tagline}
                  </p>

                  {/* Stats */}
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {sport.stats.slice(0, 4).map((stat) => (
                      <div key={stat.label}>
                        <div className="text-lg font-black text-white">
                          {stat.value}
                        </div>
                        <div className="text-[11px] text-text-muted uppercase tracking-wider">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-5 flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                    Explore {sport.name}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: `${sports.length}`, label: 'Sports Covered' },
              { value: '30+', label: 'Fan Cities' },
              { value: '100+', label: 'Venues Tracked' },
              { value: '50+', label: 'Fan Hostels' },
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
              Sports & Events FAQ
            </h2>
          </div>
          <FAQSection faqs={sportsFaqs} />
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
