import Link from 'next/link';
import Image from 'next/image';

interface CityCardProps {
  name: string;
  country: string;
  image: string;
  fanRating: number;
  hostelsCount: number;
  avgPrice: number;
  topSports: string[];
  slug: string;
}

export default function CityCard({
  name,
  country,
  image,
  fanRating,
  hostelsCount,
  avgPrice,
  topSports,
  slug,
}: CityCardProps) {
  return (
    <Link
      href={`/cities/${slug}`}
      className="group relative block rounded-2xl overflow-hidden card-hover aspect-[3/4] sm:aspect-[4/5]"
      aria-label={`${name}, ${country} - ${hostelsCount} hostels from $${avgPrice}/night`}
    >
      {/* Full-Bleed Background Image */}
      <Image
        src={image}
        alt={`${name}, ${country}`}
        fill
        unoptimized
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />

      {/* Fan Rating Badge */}
      <div className="absolute top-3 right-3">
        <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-surface/70 backdrop-blur-sm text-accent border border-accent/20">
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
          {fanRating.toFixed(1)}
        </span>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
        {/* Sport Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {topSports.map((sport) => (
            <span
              key={sport}
              className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-white/10 text-white/80 backdrop-blur-sm"
            >
              {sport}
            </span>
          ))}
        </div>

        {/* City Name */}
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-white group-hover:text-primary transition-colors duration-200">
          {name}
        </h3>
        <p className="text-sm text-text-secondary mt-0.5">{country}</p>

        {/* Quick Stats */}
        <div className="mt-4 flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-primary"
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
            <span className="text-text-secondary">
              <strong className="text-white">{hostelsCount}</strong> hostels
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-accent"
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
            <span className="text-text-secondary">
              from <strong className="text-white">${avgPrice}</strong>/night
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
