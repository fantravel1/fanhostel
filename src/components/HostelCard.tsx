import Link from 'next/link';
import Image from 'next/image';
import StarRating from './StarRating';

interface HostelCardProps {
  name: string;
  city: string;
  image: string;
  pricePerNight: number;
  rating: number;
  fanRating: number;
  vibes: string[];
  nearestVenue: string;
  distanceToVenue: string;
  slug: string;
  verified?: boolean;
}

export default function HostelCard({
  name,
  city,
  image,
  pricePerNight,
  rating,
  fanRating,
  vibes,
  nearestVenue,
  distanceToVenue,
  slug,
  verified = false,
}: HostelCardProps) {
  return (
    <Link
      href={`/hostels/${slug}`}
      className="group block glass-card rounded-2xl overflow-hidden card-hover"
      aria-label={`${name} in ${city} - from $${pricePerNight}/night`}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          unoptimized
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent" />

        {/* Price Badge */}
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1.5 rounded-xl text-sm font-bold gradient-primary text-white shadow-lg">
            ${pricePerNight}
            <span className="text-xs font-normal opacity-80">/night</span>
          </span>
        </div>

        {/* Verified Badge */}
        {verified && (
          <div className="absolute top-3 left-3">
            <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-accent/20 border border-accent/30 text-accent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
              Verified
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="text-lg font-bold text-white truncate group-hover:text-primary transition-colors duration-200">
              {name}
            </h3>
            <p className="text-sm text-text-secondary">{city}</p>
          </div>
        </div>

        {/* Ratings */}
        <div className="mt-3 flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <StarRating rating={rating} size="sm" />
            <span className="text-xs text-text-muted">{rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-semibold text-primary">Fan</span>
            <span className="text-xs font-bold text-white">
              {fanRating.toFixed(1)}
            </span>
          </div>
        </div>

        {/* Vibes */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {vibes.slice(0, 3).map((vibe) => (
            <span
              key={vibe}
              className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-white/5 text-text-secondary border border-white/10"
            >
              {vibe}
            </span>
          ))}
          {vibes.length > 3 && (
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium text-text-muted">
              +{vibes.length - 3}
            </span>
          )}
        </div>

        {/* Venue Distance */}
        <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-xs text-text-muted">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 shrink-0 text-primary"
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
            {distanceToVenue} from {nearestVenue}
          </span>
        </div>
      </div>
    </Link>
  );
}
