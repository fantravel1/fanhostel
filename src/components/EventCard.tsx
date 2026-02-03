import Link from 'next/link';
import Image from 'next/image';

interface EventCardProps {
  title: string;
  type: 'football' | 'basketball' | 'baseball' | 'hockey' | 'concert' | 'festival';
  venue: string;
  city: string;
  date: string;
  image: string;
  fanDemand: 'Low' | 'Medium' | 'High' | 'Extreme';
  priceRange: string;
  slug: string;
}

const typeConfig: Record<
  EventCardProps['type'],
  { label: string; colorClass: string; bgClass: string }
> = {
  football: {
    label: 'Football',
    colorClass: 'text-sport-football',
    bgClass: 'bg-sport-football/15 border-sport-football/30',
  },
  basketball: {
    label: 'Basketball',
    colorClass: 'text-sport-basketball',
    bgClass: 'bg-sport-basketball/15 border-sport-basketball/30',
  },
  baseball: {
    label: 'Baseball',
    colorClass: 'text-sport-baseball',
    bgClass: 'bg-sport-baseball/15 border-sport-baseball/30',
  },
  hockey: {
    label: 'Hockey',
    colorClass: 'text-sport-hockey',
    bgClass: 'bg-sport-hockey/15 border-sport-hockey/30',
  },
  concert: {
    label: 'Concert',
    colorClass: 'text-music-concert',
    bgClass: 'bg-music-concert/15 border-music-concert/30',
  },
  festival: {
    label: 'Festival',
    colorClass: 'text-music-festival',
    bgClass: 'bg-music-festival/15 border-music-festival/30',
  },
};

const demandConfig: Record<
  EventCardProps['fanDemand'],
  { color: string; barWidth: string }
> = {
  Low: { color: 'bg-text-muted', barWidth: 'w-1/4' },
  Medium: { color: 'bg-warning', barWidth: 'w-2/4' },
  High: { color: 'bg-primary', barWidth: 'w-3/4' },
  Extreme: { color: 'bg-accent', barWidth: 'w-full' },
};

export default function EventCard({
  title,
  type,
  venue,
  city,
  date,
  image,
  fanDemand,
  priceRange,
  slug,
}: EventCardProps) {
  const typeInfo = typeConfig[type];
  const demand = demandConfig[fanDemand];

  return (
    <Link
      href={`/events/${slug}`}
      className="group block glass-card rounded-2xl overflow-hidden card-hover"
      aria-label={`${title} at ${venue}, ${city} on ${date}`}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          unoptimized
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />

        {/* Type Badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`event-badge border ${typeInfo.bgClass} ${typeInfo.colorClass}`}
          >
            {typeInfo.label}
          </span>
        </div>

        {/* Price Range */}
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-surface/80 backdrop-blur-sm text-white border border-white/10">
            {priceRange}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <h3 className="text-lg font-bold text-white line-clamp-2 group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>

        <div className="mt-2 flex items-center gap-2 text-sm text-text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 shrink-0"
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
          <span className="truncate">
            {venue}, {city}
          </span>
        </div>

        <div className="mt-1.5 flex items-center gap-2 text-sm text-text-muted">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 shrink-0"
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
          <span>{date}</span>
        </div>

        {/* Fan Demand */}
        <div className="mt-4 pt-4 border-t border-white/5">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-medium text-text-muted uppercase tracking-wider">
              Fan Demand
            </span>
            <span
              className={`text-xs font-bold ${
                fanDemand === 'Extreme'
                  ? 'text-accent'
                  : fanDemand === 'High'
                  ? 'text-primary'
                  : fanDemand === 'Medium'
                  ? 'text-warning'
                  : 'text-text-muted'
              }`}
            >
              {fanDemand}
            </span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-white/10">
            <div
              className={`h-full rounded-full ${demand.color} ${demand.barWidth} transition-all duration-500`}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
