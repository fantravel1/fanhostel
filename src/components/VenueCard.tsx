import Link from 'next/link';
import Image from 'next/image';

interface VenueCardProps {
  name: string;
  city: string;
  type: string;
  capacity: number;
  teams: string[];
  image: string;
  nearbyHostels: number;
  slug: string;
}

function formatCapacity(capacity: number): string {
  if (capacity >= 1000) {
    return `${(capacity / 1000).toFixed(capacity % 1000 === 0 ? 0 : 1)}k`;
  }
  return capacity.toLocaleString();
}

export default function VenueCard({
  name,
  city,
  type,
  capacity,
  teams,
  image,
  nearbyHostels,
  slug,
}: VenueCardProps) {
  return (
    <Link
      href={`/venues/${slug}`}
      className="group block glass-card rounded-2xl overflow-hidden card-hover"
      aria-label={`${name} in ${city} - ${type}, capacity ${capacity.toLocaleString()}`}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          unoptimized
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent" />

        {/* Venue Type Badge */}
        <div className="absolute top-3 left-3">
          <span className="event-badge bg-white/10 backdrop-blur-sm text-white border border-white/20">
            {type}
          </span>
        </div>

        {/* Capacity Badge */}
        <div className="absolute top-3 right-3">
          <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-surface/70 backdrop-blur-sm text-text-secondary border border-white/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
              />
            </svg>
            {formatCapacity(capacity)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors duration-200 line-clamp-1">
          {name}
        </h3>

        <div className="mt-1.5 flex items-center gap-1.5 text-sm text-text-secondary">
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
          <span>{city}</span>
        </div>

        {/* Teams */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {teams.map((team) => (
            <span
              key={team}
              className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-primary/10 text-primary border border-primary/20"
            >
              {team}
            </span>
          ))}
        </div>

        {/* Nearby Hostels */}
        <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-xs text-text-muted">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 shrink-0 text-accent"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5z"
            />
          </svg>
          <span>
            <strong className="text-white">{nearbyHostels}</strong> hostels
            nearby
          </span>
        </div>
      </div>
    </Link>
  );
}
