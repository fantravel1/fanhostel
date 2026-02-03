interface StarRatingProps {
  rating: number;
  maxStars?: number;
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'w-3.5 h-3.5',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
};

export default function StarRating({
  rating,
  maxStars = 5,
  size = 'md',
}: StarRatingProps) {
  const starSize = sizeClasses[size];
  const clampedRating = Math.min(Math.max(rating, 0), maxStars);

  return (
    <div
      className="inline-flex items-center gap-0.5"
      role="img"
      aria-label={`${clampedRating.toFixed(1)} out of ${maxStars} stars`}
    >
      {Array.from({ length: maxStars }, (_, i) => {
        const starIndex = i + 1;
        const fillPercentage = Math.min(
          Math.max(clampedRating - i, 0),
          1
        );

        if (fillPercentage >= 1) {
          // Full star
          return (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              className={`${starSize} text-accent`}
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
          );
        }

        if (fillPercentage > 0) {
          // Partial star
          const clipId = `star-clip-${starIndex}-${Math.round(fillPercentage * 100)}`;
          return (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              className={`${starSize}`}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <defs>
                <clipPath id={clipId}>
                  <rect
                    x="0"
                    y="0"
                    width={24 * fillPercentage}
                    height="24"
                  />
                </clipPath>
              </defs>
              {/* Background (empty) star */}
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
                fill="rgba(255,255,255,0.1)"
              />
              {/* Filled portion */}
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
                fill="var(--color-accent)"
                clipPath={`url(#${clipId})`}
              />
            </svg>
          );
        }

        // Empty star
        return (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className={`${starSize} text-white/10`}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            />
          </svg>
        );
      })}
    </div>
  );
}
