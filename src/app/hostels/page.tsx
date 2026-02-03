import type { Metadata } from 'next';
import Image from 'next/image';
import { hostels } from '@/data/hostels';
import { cities } from '@/data/cities';
import HostelCard from '@/components/HostelCard';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import FAQSection from '@/components/FAQSection';
import NewsletterSignup from '@/components/NewsletterSignup';

export const metadata: Metadata = {
  title: 'Best Fan Hostels Near Stadiums & Concert Venues | FanHostel',
  description:
    'Find the best budget fan hostels near stadiums, arenas, and concert venues worldwide. Fan-verified accommodation from $12/night. Book cheap stays where the fans are.',
  alternates: {
    canonical: 'https://fanhostel.com/hostels',
  },
  openGraph: {
    title: 'Best Fan Hostels Near Stadiums & Concert Venues | FanHostel',
    description:
      'Find the best budget fan hostels near stadiums, arenas, and concert venues worldwide. Fan-verified accommodation from $12/night.',
    url: 'https://fanhostel.com/hostels',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Fan Hostels Worldwide',
      },
    ],
  },
};

const hostelFaqs = [
  {
    question: 'What makes a fan hostel different from a regular hostel?',
    answer:
      'Fan hostels are specifically designed for sports and music fans. They feature match screenings, communal areas for pre-game meetups, proximity to stadiums and venues, and staff who understand fan culture. Many organize group activities like pub crawls, stadium walks, and ticket assistance.',
  },
  {
    question: 'How much do fan hostels typically cost per night?',
    answer:
      'Prices range from $11/night in Buenos Aires to $42/night in New York City. Most fan hostels offer dorm beds between $12-40/night depending on the city and time of year. Prices can spike during major events like derbies, finals, and big concerts.',
  },
  {
    question: 'Are fan hostels safe for solo travelers?',
    answer:
      'Yes. Every hostel listed on FanHostel includes safety ratings and detailed safety notes. Most hostels feature 24/7 reception, CCTV, electronic key card access, and individual lockers. Female-only dorm options are available at many locations. We also provide specific safety tips for each neighborhood.',
  },
  {
    question: 'How far in advance should I book a fan hostel?',
    answer:
      'For major events like derbies (El Clasico, Superclasico, North London Derby) and big concerts, book 6-8 weeks ahead. For regular season matches and smaller events, 2-3 weeks is usually sufficient. We include specific booking tips for every hostel to help you plan.',
  },
  {
    question: 'Can I book match tickets through the hostel?',
    answer:
      'Many fan hostels offer ticket assistance as part of their services. Staff can help navigate ticketing systems, organize group purchases at face value, and connect you with local supporter groups. Check each hostel\'s highlights section for ticket-related services.',
  },
];

export default function HostelsPage() {
  const uniqueCities = new Set(hostels.map((h) => h.citySlug));
  const totalHostels = hostels.length;
  const totalCities = uniqueCities.size;
  const verifiedCount = hostels.filter((h) => h.verified).length;

  const stats = [
    { value: totalHostels.toString(), label: 'Fan Hostels' },
    { value: totalCities.toString(), label: 'Cities' },
    { value: 'From $12', label: 'Per Night' },
    { value: verifiedCount.toString(), label: 'Fan Verified' },
  ];

  // Schema.org ItemList
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Best Fan Hostels Near Stadiums & Concert Venues',
    description:
      'Curated list of the best budget fan hostels near stadiums, arenas, and concert venues worldwide.',
    numberOfItems: totalHostels,
    itemListElement: hostels.map((hostel, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: hostel.name,
      url: `https://fanhostel.com/hostels/${hostel.slug}`,
    })),
  };

  return (
    <>
      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-[#0F0F1A]" />

        {/* Accent lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-pulse-slow" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white/80">
              {verifiedCount} verified hostels across {totalCities} cities
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.9] mb-6">
            <span className="block text-white">Fan-Verified</span>
            <span className="block text-gradient">Hostels Worldwide</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-white/70 mb-10 leading-relaxed">
            The best budget hostels near stadiums, arenas, and concert venues.
            Vetted by real fans. Built for game days, concert nights, and
            unforgettable trips.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-surface-light border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-white">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-text-muted uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <BreadcrumbNav
            items={[
              { label: 'Home', href: '/' },
              { label: 'Hostels' },
            ]}
          />
        </div>
      </section>

      {/* Hostel Grid */}
      <section className="py-12 md:py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                All Hostels
              </span>
              <h2 className="section-title text-white mt-2">
                {totalHostels} Fan Hostels
              </h2>
              <p className="text-text-secondary mt-3 max-w-xl text-lg">
                Every hostel is rated by real fans for atmosphere, safety, and
                proximity to the action.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hostels.map((hostel) => (
              <HostelCard key={hostel.slug} {...hostel} />
            ))}
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
              Fan Hostel FAQ
            </h2>
          </div>
          <FAQSection faqs={hostelFaqs} />
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSignup />
        </div>
      </section>
    </>
  );
}
