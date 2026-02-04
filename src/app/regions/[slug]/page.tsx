import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { regions } from '@/data/regions';
import { cities } from '@/data/cities';
import { venues } from '@/data/venues';
import { events } from '@/data/events';
import { hostels } from '@/data/hostels';
import EventCard from '@/components/EventCard';
import HostelCard from '@/components/HostelCard';
import FAQSection from '@/components/FAQSection';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import NewsletterSignup from '@/components/NewsletterSignup';

interface RegionPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return regions.map((region) => ({
    slug: region.slug,
  }));
}

export async function generateMetadata({
  params,
}: RegionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const region = regions.find((r) => r.slug === slug);

  if (!region) {
    return {
      title: 'Region Not Found',
    };
  }

  const regionCities = cities.filter((c) =>
    region.continents.includes(c.continent)
  );
  const regionVenues = venues.filter((v) =>
    regionCities.some((c) => c.slug === v.citySlug)
  );
  const regionHostels = hostels.filter((h) =>
    regionCities.some((c) => c.slug === h.citySlug)
  );

  return {
    title: `${region.name} Fan Guide - Best Cities, Venues & Hostels for Fans in ${region.name}`,
    description: `Explore ${region.name} for sports and music fans. ${regionCities.length} fan cities, ${regionVenues.length} venues, ${regionHostels.length} verified hostels. ${region.tagline}. Budget stays from ${region.budgetRange}.`,
    alternates: {
      canonical: `https://fanhostel.com/regions/${region.slug}`,
    },
    openGraph: {
      title: `${region.name} Fan Guide - Cities, Venues & Hostels | FanHostel`,
      description: `${region.tagline}. Discover ${regionCities.length} fan cities and ${regionVenues.length} venues across ${region.name}. Budget hostels from ${region.budgetRange}.`,
      url: `https://fanhostel.com/regions/${region.slug}`,
      siteName: 'FanHostel',
      images: [
        {
          url: region.heroImage,
          width: 1200,
          height: 630,
          alt: `${region.name} - FanHostel Region Guide`,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${region.name} Fan Guide | FanHostel`,
      description: `${region.tagline}. ${regionCities.length} fan cities and budget hostels across ${region.name}.`,
      images: [region.heroImage],
    },
  };
}

export default async function RegionPage({ params }: RegionPageProps) {
  const { slug } = await params;
  const region = regions.find((r) => r.slug === slug);

  if (!region) {
    notFound();
  }

  const regionCities = cities.filter((c) =>
    region.continents.includes(c.continent)
  );
  const regionCitySlugs = regionCities.map((c) => c.slug);
  const regionVenues = venues.filter((v) =>
    regionCitySlugs.includes(v.citySlug)
  );
  const regionEvents = events.filter((e) =>
    regionCitySlugs.includes(e.citySlug)
  );
  const regionHostels = hostels.filter((h) =>
    regionCitySlugs.includes(h.citySlug)
  );

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Regions', href: '/regions' },
    { label: region.name },
  ];

  const placeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: `${region.name} - Fan Travel Guide`,
    description: region.description,
    image: region.heroImage,
    url: `https://fanhostel.com/regions/${region.slug}`,
    containsPlace: regionCities.map((city) => ({
      '@type': 'City',
      name: city.name,
      url: `https://fanhostel.com/cities/${city.slug}`,
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: region.faqs.map((faq) => ({
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
      {/* Schema.org Place */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }}
      />

      {/* Schema.org FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative pt-20 pb-0 md:pt-20 overflow-hidden">
        <div className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] min-h-[400px]">
          {/* Background Image */}
          <Image
            src={region.heroImage}
            alt={region.name}
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

              {/* Region Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-4">
                <span className="text-sm font-medium text-white/80">
                  {regionCities.length} fan cities &middot;{' '}
                  {regionVenues.length} venues
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[0.95]">
                {region.name}
              </h1>
              <p className="mt-3 text-lg sm:text-xl md:text-2xl font-display text-primary italic">
                {region.tagline}
              </p>
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
                {regionCities.length}
              </div>
              <div className="text-xs sm:text-sm text-text-muted uppercase tracking-wider mt-1">
                Fan Cities
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-gradient">
                {regionVenues.length}
              </div>
              <div className="text-xs sm:text-sm text-text-muted uppercase tracking-wider mt-1">
                Venues
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-accent">
                {regionHostels.length}
              </div>
              <div className="text-xs sm:text-sm text-text-muted uppercase tracking-wider mt-1">
                Fan Hostels
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-success">
                {region.budgetRange}
              </div>
              <div className="text-xs sm:text-sm text-text-muted uppercase tracking-wider mt-1">
                Budget Range
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Region Description */}
      <section className="py-12 md:py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
              {region.description}
            </p>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 md:py-24 bg-surface-light relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Why {region.name}
              </span>
              <h2 className="section-title text-white mt-2 mb-6">
                {region.name} Highlights
              </h2>
              <div className="space-y-3">
                {region.highlights.map((highlight, index) => (
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
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src={region.heroImage}
                alt={`Fan culture in ${region.name}`}
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

      {/* Fan Cities Section */}
      {regionCities.length > 0 && (
        <section className="py-16 md:py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Destinations
                </span>
                <h2 className="section-title text-white mt-2">
                  Fan Cities in {region.name}
                </h2>
                <p className="text-text-secondary mt-3 max-w-xl text-lg">
                  {regionCities.length} cities across {region.name} with
                  world-class venues, fan hostels, and unforgettable atmospheres.
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
              {regionCities.map((city) => {
                const cityVenueCount = venues.filter(
                  (v) => v.citySlug === city.slug
                ).length;
                return (
                  <Link
                    key={city.slug}
                    href={`/cities/${city.slug}`}
                    className="group glass-card rounded-2xl overflow-hidden card-hover"
                  >
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={city.image}
                        alt={`${city.name}, ${city.country}`}
                        fill
                        unoptimized
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent" />
                      <div className="absolute top-3 right-3">
                        <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold bg-surface/70 backdrop-blur-sm text-accent border border-accent/20">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-3 h-3"
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
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                        {city.name}
                      </h3>
                      <p className="text-sm text-text-muted mt-0.5">
                        {city.country}
                      </p>
                      <div className="mt-3 flex items-center gap-3 text-xs text-text-secondary">
                        <span>
                          <strong className="text-white">
                            {city.hostelsCount}
                          </strong>{' '}
                          hostels
                        </span>
                        <span>
                          <strong className="text-white">
                            {cityVenueCount}
                          </strong>{' '}
                          venues
                        </span>
                        <span>
                          from{' '}
                          <strong className="text-white">
                            ${city.avgPrice}
                          </strong>
                          /night
                        </span>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-1">
                        {city.topSports.slice(0, 3).map((sport) => (
                          <span
                            key={sport}
                            className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-white/10 text-white/70"
                          >
                            {sport}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Upcoming Events Section */}
      {regionEvents.length > 0 && (
        <section className="py-16 md:py-24 bg-surface-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <div>
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  Coming Up
                </span>
                <h2 className="section-title text-white mt-2">
                  Upcoming Events in {region.name}
                </h2>
                <p className="text-text-secondary mt-3 max-w-xl text-lg">
                  Big matches and massive shows across {region.name}. Book your
                  fan hostel before they fill up.
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
              {regionEvents.slice(0, 6).map((event) => (
                <EventCard key={event.slug} {...event} />
              ))}
            </div>

            {regionEvents.length > 6 && (
              <div className="mt-10 text-center">
                <Link
                  href="/events"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold transition-colors border border-white/10"
                >
                  View all {regionEvents.length} events in {region.name}
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
            )}
          </div>
        </section>
      )}

      {/* Budget & Travel Info Section */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Budget Info */}
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Budget Planning
              </span>
              <h2 className="section-title text-white mt-2 mb-6">
                Budget Guide for {region.name}
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
                        d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-text-secondary leading-relaxed">
                      Hostel beds across {region.name} range from{' '}
                      <strong className="text-white">
                        {region.budgetRange}
                      </strong>
                      . The cheapest cities are{' '}
                      {regionCities
                        .sort((a, b) => a.avgPrice - b.avgPrice)
                        .slice(0, 3)
                        .map((c) => `${c.name} ($${c.avgPrice}/night)`)
                        .join(', ')}
                      .
                    </p>
                    <div className="mt-4 space-y-2">
                      {regionCities
                        .sort((a, b) => a.avgPrice - b.avgPrice)
                        .map((city) => (
                          <div
                            key={city.slug}
                            className="flex items-center justify-between text-sm"
                          >
                            <Link
                              href={`/cities/${city.slug}`}
                              className="text-white hover:text-primary transition-colors"
                            >
                              {city.name}
                            </Link>
                            <div className="flex items-center gap-2">
                              <span className="text-text-muted">
                                {city.budgetLevel}
                              </span>
                              <span className="text-accent font-semibold">
                                ${city.avgPrice}/night
                              </span>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Best Time to Visit */}
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                When to Go
              </span>
              <h2 className="section-title text-white mt-2 mb-6">
                Best Time to Visit
              </h2>
              <div className="glass-card rounded-2xl p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-text-secondary leading-relaxed">
                      {region.bestTimeToVisit}
                    </p>
                    <div className="mt-4 space-y-2">
                      {regionCities.slice(0, 5).map((city) => (
                        <div
                          key={city.slug}
                          className="flex items-center gap-3"
                        >
                          <Link
                            href={`/cities/${city.slug}`}
                            className="text-sm text-white hover:text-primary transition-colors font-medium"
                          >
                            {city.name}
                          </Link>
                          <div className="flex flex-wrap gap-1">
                            {city.topSports.slice(0, 2).map((sport) => (
                              <span
                                key={sport}
                                className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-primary/10 text-primary"
                              >
                                {sport}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fan Hostels Section */}
      {regionHostels.length > 0 && (
        <section className="py-16 md:py-24 bg-surface-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Fan Verified
                </span>
                <h2 className="section-title text-white mt-2">
                  Best Fan Hostels in {region.name}
                </h2>
                <p className="text-text-secondary mt-3 max-w-xl text-lg">
                  Verified stays near {region.name}&apos;s biggest venues.
                  Budget beds with fan atmosphere across {regionCities.length}{' '}
                  cities.
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
              {regionHostels.slice(0, 6).map((hostel) => (
                <HostelCard key={hostel.slug} {...hostel} />
              ))}
            </div>

            {regionHostels.length > 6 && (
              <div className="mt-10 text-center">
                <Link
                  href="/hostels"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold transition-colors border border-white/10"
                >
                  View all {regionHostels.length} hostels in {region.name}
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
            )}
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Got Questions?
            </span>
            <h2 className="section-title text-white mt-2">
              {region.name} Fan Guide FAQ
            </h2>
          </div>
          <FAQSection faqs={region.faqs} />
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
