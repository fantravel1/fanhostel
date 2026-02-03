import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { collections } from '@/data/collections';
import { hostels } from '@/data/hostels';
import { cities } from '@/data/cities';
import HostelCard from '@/components/HostelCard';
import CityCard from '@/components/CityCard';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import FAQSection from '@/components/FAQSection';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return collections.map((collection) => ({
    slug: collection.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const collection = collections.find((c) => c.slug === slug);

  if (!collection) {
    return {
      title: 'Collection Not Found | FanHostel',
    };
  }

  return {
    title: `${collection.title} | FanHostel Collections`,
    description: collection.description,
    alternates: {
      canonical: `https://fanhostel.com/collections/${collection.slug}`,
    },
    openGraph: {
      title: `${collection.title} | FanHostel Collections`,
      description: collection.description,
      url: `https://fanhostel.com/collections/${collection.slug}`,
      images: [
        {
          url: collection.image,
          width: 1200,
          height: 630,
          alt: collection.title,
        },
      ],
    },
  };
}

const categoryColors: Record<string, string> = {
  sports: 'bg-sport-football/20 text-sport-football border-sport-football/30',
  music: 'bg-music-concert/20 text-music-concert border-music-concert/30',
  budget: 'bg-accent/20 text-accent border-accent/30',
  experience: 'bg-primary/20 text-primary border-primary/30',
  seasonal: 'bg-music-festival/20 text-music-festival border-music-festival/30',
};

const collectionFaqs = [
  {
    question: 'How are collection hostels selected?',
    answer:
      'Every hostel in a FanHostel collection is hand-picked based on proximity to relevant venues, fan atmosphere, verified reviews, and value for money. We only include hostels that have been verified by our evidence system and meet our standards for safety and fan-friendliness.',
  },
  {
    question: 'Can I book hostels directly from this collection?',
    answer:
      'FanHostel is a recommendation and information platform. Each hostel listing includes links to trusted booking partners where you can check availability and make reservations. We provide the intelligence — you make the booking.',
  },
  {
    question: 'How often are collections updated?',
    answer:
      'Collections are updated regularly to reflect new hostel openings, seasonal events, and changes in fan demand. Event-specific collections are refreshed as match schedules and concert tours are announced.',
  },
  {
    question: 'Are the hostels in collections verified?',
    answer:
      'Most hostels in our collections carry verified status, meaning they have been confirmed through our multi-tier evidence system including fan reviews, operator verification, and on-the-ground assessment. Look for the verified badge on individual hostel listings.',
  },
];

export default async function CollectionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const collection = collections.find((c) => c.slug === slug);

  if (!collection) {
    notFound();
  }

  const collectionHostels = hostels.filter((h) =>
    collection.hostelSlugs.includes(h.slug)
  );
  const collectionCities = cities.filter((c) =>
    collection.citySlugs.includes(c.slug)
  );
  const relatedCollections = collections
    .filter((c) => c.category === collection.category && c.slug !== collection.slug)
    .slice(0, 3);

  // Schema.org ItemList structured data
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: collection.title,
    description: collection.description,
    url: `https://fanhostel.com/collections/${collection.slug}`,
    numberOfItems: collectionHostels.length,
    itemListElement: collectionHostels.map((hostel, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: hostel.name,
      url: `https://fanhostel.com/hostels/${hostel.slug}`,
      image: hostel.image,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <Image
          src={collection.image}
          alt={collection.title}
          fill
          unoptimized
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/70 via-surface/60 to-surface" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav
            items={[
              { label: 'Home', href: '/' },
              { label: 'Collections', href: '/collections' },
              { label: collection.title },
            ]}
          />

          <div className="mt-8 max-w-3xl">
            {/* Category Badge */}
            <span
              className={`event-badge border ${categoryColors[collection.category]} mb-4`}
            >
              {collection.category}
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {collection.title}
            </h1>

            <p className="mt-4 text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl">
              {collection.description}
            </p>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {collection.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-8 flex items-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">
                  {collectionHostels.length}
                </div>
                <div className="text-xs text-text-muted uppercase tracking-wider">
                  Hostels
                </div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white">
                  {collectionCities.length}
                </div>
                <div className="text-xs text-text-muted uppercase tracking-wider">
                  Cities
                </div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">
                  ${Math.min(...collectionHostels.map((h) => h.pricePerNight))}
                </div>
                <div className="text-xs text-text-muted uppercase tracking-wider">
                  From/Night
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Hostels */}
      {collectionHostels.length > 0 && (
        <section className="py-16 md:py-24 bg-surface-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Stay Here
              </span>
              <h2 className="section-title text-white mt-2">
                Featured Hostels
              </h2>
              <p className="text-text-secondary mt-3 max-w-xl text-lg">
                Hand-picked fan hostels for this collection. Verified for
                location, atmosphere, and value.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {collectionHostels.map((hostel) => (
                <HostelCard key={hostel.slug} {...hostel} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Cities in This Collection */}
      {collectionCities.length > 0 && (
        <section className="py-16 md:py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Destinations
              </span>
              <h2 className="section-title text-white mt-2">
                Cities in This Collection
              </h2>
              <p className="text-text-secondary mt-3 max-w-xl text-lg">
                Explore the fan cities that make this collection special.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {collectionCities.map((city) => (
                <CityCard key={city.slug} {...city} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Collections */}
      {relatedCollections.length > 0 && (
        <section className="py-16 md:py-24 bg-surface-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                More Like This
              </span>
              <h2 className="section-title text-white mt-2">
                Related Collections
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedCollections.map((related) => (
                <Link
                  key={related.slug}
                  href={`/collections/${related.slug}`}
                  className="group relative h-64 md:h-80 rounded-2xl overflow-hidden card-hover block"
                >
                  <Image
                    src={related.image}
                    alt={related.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <span
                      className={`event-badge border ${categoryColors[related.category]} mb-3`}
                    >
                      {related.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-white/70 text-sm line-clamp-2">
                      {related.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
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
              Frequently Asked Questions
            </h2>
          </div>
          <FAQSection faqs={collectionFaqs} />
        </div>
      </section>
    </>
  );
}
