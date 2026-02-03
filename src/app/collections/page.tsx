import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { collections } from '@/data/collections';
import BreadcrumbNav from '@/components/BreadcrumbNav';

export const metadata: Metadata = {
  title: 'Curated Fan Hostel Collections | FanHostel',
  description:
    'Browse curated hostel collections for sports fans, concert-goers, and budget travelers. From El Clasico weekends to summer festival season, find the perfect fan stay.',
  alternates: {
    canonical: 'https://fanhostel.com/collections',
  },
  openGraph: {
    title: 'Curated Fan Hostel Collections | FanHostel',
    description:
      'Hand-picked hostel collections for every type of fan journey. Sports, music, budget, and experience-driven stays worldwide.',
    url: 'https://fanhostel.com/collections',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'FanHostel Curated Collections',
      },
    ],
  },
};

const categories = [
  { key: 'all', label: 'All' },
  { key: 'sports', label: 'Sports' },
  { key: 'music', label: 'Music' },
  { key: 'budget', label: 'Budget' },
  { key: 'experience', label: 'Experience' },
  { key: 'seasonal', label: 'Seasonal' },
] as const;

const categoryColors: Record<string, string> = {
  sports: 'bg-sport-football/20 text-sport-football border-sport-football/30',
  music: 'bg-music-concert/20 text-music-concert border-music-concert/30',
  budget: 'bg-accent/20 text-accent border-accent/30',
  experience: 'bg-primary/20 text-primary border-primary/30',
  seasonal: 'bg-music-festival/20 text-music-festival border-music-festival/30',
};

export default function CollectionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/80 via-surface/70 to-surface" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav
            items={[
              { label: 'Home', href: '/' },
              { label: 'Collections' },
            ]}
          />

          <div className="mt-6 text-center max-w-3xl mx-auto">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Curated For Fans
            </span>
            <h1 className="section-title text-white mt-3">
              Curated Collections for Every Fan
            </h1>
            <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Hand-picked hostel lists built around events, destinations, and fan
              experiences. Whether you&apos;re chasing derbies or festival stages, we&apos;ve
              got the perfect collection for your next trip.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter Display */}
      <section className="py-8 bg-surface sticky top-0 z-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat) => (
              <span
                key={cat.key}
                className={`px-4 py-2 rounded-full text-sm font-semibold border cursor-default transition-all ${
                  cat.key === 'all'
                    ? 'bg-primary/20 text-primary border-primary/30'
                    : 'bg-white/5 text-text-secondary border-white/10 hover:border-white/20'
                }`}
              >
                {cat.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map((collection) => (
              <Link
                key={collection.slug}
                href={`/collections/${collection.slug}`}
                className="group relative rounded-2xl overflow-hidden card-hover h-80 md:h-96 block"
              >
                {/* Background Image */}
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  {/* Category Badge */}
                  <span
                    className={`event-badge border ${
                      categoryColors[collection.category]
                    } mb-3`}
                  >
                    {collection.category}
                  </span>

                  <h2 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-200">
                    {collection.title}
                  </h2>

                  <p className="text-white/70 text-sm line-clamp-2 mb-4">
                    {collection.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {collection.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-white/10 text-white/70 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                    {collection.tags.length > 3 && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-medium text-white/50">
                        +{collection.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Featured Badge */}
                {collection.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-accent/20 border border-accent/30 text-accent backdrop-blur-sm">
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
                      Featured
                    </span>
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
