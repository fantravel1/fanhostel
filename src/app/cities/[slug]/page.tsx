import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cities } from '@/data/cities';
import { venues } from '@/data/venues';
import { hostels } from '@/data/hostels';
import { events } from '@/data/events';
import VenueCard from '@/components/VenueCard';
import HostelCard from '@/components/HostelCard';
import EventCard from '@/components/EventCard';
import FAQSection from '@/components/FAQSection';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import NewsletterSignup from '@/components/NewsletterSignup';

interface CityPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    slug: city.slug,
  }));
}

export async function generateMetadata({
  params,
}: CityPageProps): Promise<Metadata> {
  const { slug } = await params;
  const city = cities.find((c) => c.slug === slug);

  if (!city) {
    return {
      title: 'City Not Found',
    };
  }

  const cityHostels = hostels.filter((h) => h.citySlug === city.slug);
  const cityVenues = venues.filter((v) => v.citySlug === city.slug);

  return {
    title: `${city.name} Fan Guide - Best Hostels Near Stadiums & Venues in ${city.name}`,
    description: `Find the best fan hostels in ${city.name}, ${city.country}. ${cityHostels.length} verified hostels near ${cityVenues.length} venues. ${city.tagline}. From $${city.avgPrice}/night.`,
    alternates: {
      canonical: `https://fanhostel.com/cities/${city.slug}`,
    },
    openGraph: {
      title: `${city.name} Fan Guide - Hostels Near Stadiums & Venues | FanHostel`,
      description: `${city.tagline}. Find budget hostels near ${city.name}'s best stadiums, arenas, and concert venues. Fan-verified stays from $${city.avgPrice}/night.`,
      url: `https://fanhostel.com/cities/${city.slug}`,
      siteName: 'FanHostel',
      images: [
        {
          url: city.image,
          width: 1200,
          height: 630,
          alt: `${city.name}, ${city.country} - FanHostel City Guide`,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${city.name} Fan Guide | FanHostel`,
      description: `${city.tagline}. Budget hostels near stadiums and venues in ${city.name}.`,
      images: [city.image],
    },
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { slug } = await params;
  const city = cities.find((c) => c.slug === slug);

  if (!city) {
    notFound();
  }

  const cityVenues = venues.filter((v) => v.citySlug === city.slug);
  const cityHostels = hostels.filter((h) => h.citySlug === city.slug);
  const cityEvents = events.filter((e) => e.citySlug === city.slug);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Cities', href: '/cities' },
    { label: city.name },
  ];

  const cityFaqs = [
    {
      question: `What are the best hostels near stadiums in ${city.name}?`,
      answer: `${city.name} has ${cityHostels.length} fan-verified hostels near major venues. ${cityHostels.filter((h) => h.verified).length > 0 ? `Our top picks include ${cityHostels.filter((h) => h.verified).slice(0, 2).map((h) => h.name).join(' and ')}, both within walking distance of major venues.` : ''} Prices start from $${city.avgPrice}/night for dorm beds. All hostels are rated for fan atmosphere, safety, and proximity to venues.`,
    },
    {
      question: `Is ${city.name} safe for solo fan travelers?`,
      answer: `${city.name} has a safety rating of ${city.safetyRating}/5 for fan travelers. ${city.safetyRating >= 4 ? 'The city is generally very safe for visitors, including solo travelers attending events.' : 'While the city is generally safe, we recommend taking standard precautions, especially at night and during major events.'} Our hostel listings include specific safety notes and neighborhood guides to help you stay safe while enjoying the fan atmosphere.`,
    },
    {
      question: `How do I get around ${city.name} on match days?`,
      answer: `${city.transitTips}`,
    },
    {
      question: `What sports and events can I see in ${city.name}?`,
      answer: `${city.name} is known for ${city.topSports.join(', ')}. Major venues include ${cityVenues.slice(0, 3).map((v) => v.name).join(', ')}. ${cityEvents.length > 0 ? `Upcoming events include ${cityEvents.slice(0, 2).map((e) => e.title).join(' and ')}.` : ''} Check our events calendar for the latest schedules and hostel availability.`,
    },
  ];

  const placeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: city.name,
    description: city.description,
    image: city.image,
    url: `https://fanhostel.com/cities/${city.slug}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name,
      addressCountry: city.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      name: city.name,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: city.fanRating,
      bestRating: 5,
      worstRating: 1,
      ratingCount: cityHostels.length * 50,
    },
    containsPlace: cityVenues.map((venue) => ({
      '@type': 'StadiumOrArena',
      name: venue.name,
      url: `https://fanhostel.com/venues/${venue.slug}`,
    })),
  };

  return (
    <>
      {/* Schema.org Place */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }}
      />

      {/* Hero Section */}
      <section className="relative pt-20 pb-0 md:pt-20 overflow-hidden">
        <div className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] min-h-[400px]">
          {/* Background Image */}
          <Image
            src={city.image}
            alt={`${city.name}, ${city.country}`}
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

              {/* Country Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-4">
                <span className="text-sm">
                  {city.countryCode === 'GB'
                    ? '🇬🇧'
                    : city.countryCode === 'ES'
                    ? '🇪🇸'
                    : city.countryCode === 'DE'
                    ? '🇩🇪'
                    : city.countryCode === 'US'
                    ? '🇺🇸'
                    : city.countryCode === 'MX'
                    ? '🇲🇽'
                    : city.countryCode === 'AR'
                    ? '🇦🇷'
                    : '🌍'}
                </span>
                <span className="text-sm font-medium text-white/80">
                  {city.country} &middot; {city.continent}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[0.95]">
                {city.name}
              </h1>
              <p className="mt-3 text-lg sm:text-xl md:text-2xl font-display text-primary italic">
                {city.tagline}
              </p>

              {/* Sport Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {city.topSports.map((sport) => (
                  <span
                    key={sport}
                    className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-white/80 backdrop-blur-sm border border-white/10"
                  >
                    {sport}
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
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-white">
                {city.hostelsCount}
              </div>
              <div className="text-xs sm:text-sm text-text-muted uppercase tracking-wider mt-1">
                Fan Hostels
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-gradient">
                ${city.avgPrice}
              </div>
              <div className="text-xs sm:text-sm text-text-muted uppercase tracking-wider mt-1">
                Avg/Night
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 sm:w-7 sm:h-7 text-accent"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-2xl sm:text-3xl font-black text-accent">
                  {city.fanRating.toFixed(1)}
                </span>
              </div>
              <div className="text-xs sm:text-sm text-text-muted uppercase tracking-wider mt-1">
                Fan Rating
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 sm:w-7 sm:h-7 text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
                <span className="text-2xl sm:text-3xl font-black text-success">
                  {city.safetyRating}/5
                </span>
              </div>
              <div className="text-xs sm:text-sm text-text-muted uppercase tracking-wider mt-1">
                Safety Rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* City Description */}
      <section className="py-12 md:py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
              {city.description}
            </p>
          </div>
        </div>
      </section>

      {/* Fan Culture Section */}
      <section className="py-16 md:py-24 bg-surface-light relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Local Culture
              </span>
              <h2 className="section-title text-white mt-2 mb-6">
                Fan Culture in {city.name}
              </h2>
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
                {city.fanCulture}
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm text-text-muted">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium border border-primary/20">
                  {city.budgetLevel} Budget Level
                </span>
                <span className="px-3 py-1 rounded-full bg-accent/10 text-accent font-medium border border-accent/20">
                  {city.fanRating}/5 Fan Rating
                </span>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src={city.image}
                alt={`Fan culture in ${city.name}`}
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

      {/* Top Venues Section */}
      {cityVenues.length > 0 && (
        <section className="py-16 md:py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Where the Action Is
                </span>
                <h2 className="section-title text-white mt-2">
                  Top Venues in {city.name}
                </h2>
                <p className="text-text-secondary mt-3 max-w-xl text-lg">
                  Stadiums, arenas, and concert halls that make {city.name} a
                  fan destination.
                </p>
              </div>
              <Link
                href="/venues"
                className="mt-6 md:mt-0 text-primary font-semibold hover:text-primary-light transition-colors inline-flex items-center gap-1"
              >
                View all venues
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
              {cityVenues.map((venue) => (
                <VenueCard key={venue.slug} {...venue} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Upcoming Events Section */}
      {cityEvents.length > 0 && (
        <section className="py-16 md:py-24 bg-surface-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <div>
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  Coming Up
                </span>
                <h2 className="section-title text-white mt-2">
                  Upcoming Events in {city.name}
                </h2>
                <p className="text-text-secondary mt-3 max-w-xl text-lg">
                  Big matches and massive shows on the horizon. Book your fan
                  hostel before they fill up.
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
              {cityEvents.map((event) => (
                <EventCard key={event.slug} {...event} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Best Hostels Section */}
      {cityHostels.length > 0 && (
        <section className="py-16 md:py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Fan Verified
                </span>
                <h2 className="section-title text-white mt-2">
                  Best Fan Hostels in {city.name}
                </h2>
                <p className="text-text-secondary mt-3 max-w-xl text-lg">
                  Verified stays near {city.name}&apos;s biggest venues. Budget
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
              {cityHostels.map((hostel) => (
                <HostelCard key={hostel.slug} {...hostel} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Getting Around Section */}
      <section className="py-16 md:py-24 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Transit Tips */}
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Getting Around
              </span>
              <h2 className="section-title text-white mt-2 mb-6">
                Transit Tips for {city.name}
              </h2>
              <div className="glass-card rounded-2xl p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0H6.375c-.621 0-1.125-.504-1.125-1.125V14.25m15.375 0h.375a1.125 1.125 0 001.125-1.125v-3.375c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v3.375c0 .621.504 1.125 1.125 1.125h.375"
                      />
                    </svg>
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                    {city.transitTips}
                  </p>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Don&apos;t Miss
              </span>
              <h2 className="section-title text-white mt-2 mb-6">
                {city.name} Highlights
              </h2>
              <div className="space-y-3">
                {city.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 glass-card rounded-xl p-4"
                  >
                    <div className="shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>
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
              {city.name} Fan Guide FAQ
            </h2>
          </div>
          <FAQSection faqs={cityFaqs} />
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
