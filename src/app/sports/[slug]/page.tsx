import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { sports } from '@/data/sports';
import { cities } from '@/data/cities';
import { venues } from '@/data/venues';
import { events } from '@/data/events';
import { hostels } from '@/data/hostels';
import CityCard from '@/components/CityCard';
import EventCard from '@/components/EventCard';
import HostelCard from '@/components/HostelCard';
import FAQSection from '@/components/FAQSection';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import NewsletterSignup from '@/components/NewsletterSignup';

interface SportPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return sports.map((sport) => ({
    slug: sport.slug,
  }));
}

export async function generateMetadata({
  params,
}: SportPageProps): Promise<Metadata> {
  const { slug } = await params;
  const sport = sports.find((s) => s.slug === slug);

  if (!sport) {
    return {
      title: 'Sport Not Found',
    };
  }

  return {
    title: `${sport.name} Fan Guide - Best Hostels Near ${sport.name} Venues | FanHostel`,
    description: `${sport.tagline} Find the best fan hostels near ${sport.name} stadiums and arenas worldwide. ${sport.stats[0]?.value} ${sport.stats[0]?.label.toLowerCase()}, ${sport.stats[2]?.value} fan hostels. Budget stays for ${sport.name} fans.`,
    alternates: {
      canonical: `https://fanhostel.com/sports/${sport.slug}`,
    },
    openGraph: {
      title: `${sport.name} Fan Guide - Hostels Near ${sport.name} Venues | FanHostel`,
      description: `${sport.tagline} Find budget hostels near ${sport.name} stadiums and venues worldwide.`,
      url: `https://fanhostel.com/sports/${sport.slug}`,
      siteName: 'FanHostel',
      images: [
        {
          url: sport.heroImage,
          width: 1200,
          height: 630,
          alt: `${sport.name} - FanHostel Sport Guide`,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${sport.name} Fan Guide | FanHostel`,
      description: `${sport.tagline} Budget hostels near ${sport.name} venues worldwide.`,
      images: [sport.heroImage],
    },
  };
}

function getSportEvents(sportSlug: string, topCitySlugs: string[]) {
  const typeMap: Record<string, string> = {
    football: 'football',
    basketball: 'basketball',
    baseball: 'baseball',
    hockey: 'hockey',
    concerts: 'concert',
    'combat-sports': 'concert',
  };

  const mappedType = typeMap[sportSlug];

  if (mappedType) {
    return events.filter((e) => e.type === mappedType);
  }

  // For other sports, show events from their top cities
  return events.filter((e) => topCitySlugs.includes(e.citySlug));
}

export default async function SportPage({ params }: SportPageProps) {
  const { slug } = await params;
  const sport = sports.find((s) => s.slug === slug);

  if (!sport) {
    notFound();
  }

  const topCities = cities.filter((c) => sport.topCitySlugs.includes(c.slug));
  const sportEvents = getSportEvents(sport.slug, sport.topCitySlugs);
  const sportHostels = hostels.filter((h) =>
    sport.topCitySlugs.includes(h.citySlug)
  );

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Sports', href: '/sports' },
    { label: sport.name },
  ];

  const sportSchema = {
    '@context': 'https://schema.org',
    '@type': 'SportsOrganization',
    name: `${sport.name} on FanHostel`,
    description: sport.description,
    image: sport.heroImage,
    url: `https://fanhostel.com/sports/${sport.slug}`,
    sport: sport.name,
    location: topCities.map((city) => ({
      '@type': 'Place',
      name: city.name,
      address: {
        '@type': 'PostalAddress',
        addressLocality: city.name,
        addressCountry: city.countryCode,
      },
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: sport.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sportSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative pt-20 pb-0 md:pt-20 overflow-hidden">
        <div className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] min-h-[400px]">
          {/* Background Image */}
          <Image
            src={sport.heroImage}
            alt={sport.name}
            fill
            unoptimized
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-surface/20" />

          {/* Hero Content */}
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 md:pb-14 w-full">
              {/* Breadcrumb */}
              <div className="mb-6">
                <BreadcrumbNav items={breadcrumbItems} />
              </div>

              {/* Sport Icon Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-4">
                <span className="text-2xl">{sport.icon}</span>
                <span className="text-sm font-medium text-white/80">
                  {sport.stats[0]?.value} {sport.stats[0]?.label}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[0.95]">
                {sport.name}
              </h1>
              <p className="mt-3 text-lg sm:text-xl md:text-2xl font-display text-primary italic">
                {sport.tagline}
              </p>

              {/* Venue Type Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {sport.venueTypes.map((type) => (
                  <span
                    key={type}
                    className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-white/80 backdrop-blur-sm border border-white/10"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="bg-surface-light border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {sport.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-gradient">
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

      {/* Sport Description */}
      <section className="py-12 md:py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
              {sport.description}
            </p>
          </div>
        </div>
      </section>

      {/* Top Cities Section */}
      {topCities.length > 0 && (
        <section className="py-16 md:py-24 bg-surface-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Where to Go
                </span>
                <h2 className="section-title text-white mt-2">
                  Top Cities for {sport.name}
                </h2>
                <p className="text-text-secondary mt-3 max-w-xl text-lg">
                  The best destinations for {sport.name} fans, with fan-verified
                  hostels near every major venue.
                </p>
              </div>
              <Link
                href="/cities"
                className="mt-6 md:mt-0 text-primary font-semibold hover:text-primary-light transition-colors inline-flex items-center gap-1"
              >
                View all cities
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
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {topCities.map((city) => (
                <CityCard key={city.slug} {...city} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Fan Guide Section */}
      <section className="py-16 md:py-24 bg-surface relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Insider Knowledge
              </span>
              <h2 className="section-title text-white mt-2 mb-6">
                {sport.name} Fan Guide
              </h2>
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
                {sport.fanGuide}
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm text-text-muted">
                <span className={`px-3 py-1 rounded-full font-medium border ${sport.color}`}>
                  {sport.icon} {sport.name}
                </span>
                <span className="px-3 py-1 rounded-full bg-accent/10 text-accent font-medium border border-accent/20">
                  {sport.stats[0]?.value} {sport.stats[0]?.label}
                </span>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src={sport.heroImage}
                alt={`${sport.name} fan guide`}
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Related Events Section */}
      {sportEvents.length > 0 && (
        <section className="py-16 md:py-24 bg-surface-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <div>
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  Coming Up
                </span>
                <h2 className="section-title text-white mt-2">
                  {sport.name} Events
                </h2>
                <p className="text-text-secondary mt-3 max-w-xl text-lg">
                  Upcoming {sport.name.toLowerCase()} events across our fan
                  cities. Book your hostel before they fill up.
                </p>
              </div>
              <Link
                href="/events"
                className="mt-6 md:mt-0 text-primary font-semibold hover:text-primary-light transition-colors inline-flex items-center gap-1"
              >
                See all events
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
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sportEvents.slice(0, 6).map((event) => (
                <EventCard key={event.slug} {...event} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Hostels Section */}
      {sportHostels.length > 0 && (
        <section className="py-16 md:py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Fan Verified
                </span>
                <h2 className="section-title text-white mt-2">
                  Best Hostels for {sport.name} Fans
                </h2>
                <p className="text-text-secondary mt-3 max-w-xl text-lg">
                  Verified stays near {sport.name.toLowerCase()} venues. Budget
                  beds with fan atmosphere.
                </p>
              </div>
              <Link
                href="/hostels"
                className="mt-6 md:mt-0 text-primary font-semibold hover:text-primary-light transition-colors inline-flex items-center gap-1"
              >
                Browse all hostels
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
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sportHostels.slice(0, 6).map((hostel) => (
                <HostelCard key={hostel.slug} {...hostel} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-surface-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Got Questions?
            </span>
            <h2 className="section-title text-white mt-2">
              {sport.name} Fan Guide FAQ
            </h2>
          </div>
          <FAQSection faqs={sport.faqs} />
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
