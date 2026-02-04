import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import NewsletterSignup from '@/components/NewsletterSignup';

export const metadata: Metadata = {
  title: 'Fan Stories & Travel Guides | FanHostel',
  description:
    'Real fan travel stories, hostel reviews, and destination guides from supporters who have been there. From El Clasico weekends to concert marathons, get inspired for your next fan trip.',
  alternates: {
    canonical: 'https://fanhostel.com/stories',
  },
  openGraph: {
    title: 'Fan Stories & Travel Guides | FanHostel',
    description:
      'Real stories from real fans. Game day guides, hostel reviews, and travel tips from supporters worldwide.',
    url: 'https://fanhostel.com/stories',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'FanHostel Fan Stories',
      },
    ],
  },
};

interface Story {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  categoryColor: string;
  date: string;
  readTime: string;
  author: string;
}

const stories: Story[] = [
  {
    slug: 'el-clasico-on-a-budget-barcelona',
    title: 'El Clasico on a Budget: 48 Hours in Barcelona',
    excerpt:
      'How I watched the biggest match in club football, stayed in a fan hostel 10 minutes from Camp Nou, and spent less than $150 for the entire weekend. A complete breakdown of the cheapest way to experience El Clasico.',
    image:
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
    category: 'Football',
    categoryColor: 'bg-sport-football/20 text-sport-football border-sport-football/30',
    date: 'January 15, 2026',
    readTime: '8 min read',
    author: 'Jake M.',
  },
  {
    slug: 'premier-league-london-hostel-crawl',
    title: 'Following the Premier League: A London Hostel Crawl',
    excerpt:
      'Three matches in five days across London. Arsenal on Saturday, Chelsea on Tuesday, West Ham on Thursday. I mapped the best hostels near each ground and created the ultimate Premier League itinerary.',
    image:
      'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80',
    category: 'Football',
    categoryColor: 'bg-sport-football/20 text-sport-football border-sport-football/30',
    date: 'January 8, 2026',
    readTime: '12 min read',
    author: 'Sarah K.',
  },
  {
    slug: 'nyc-concert-marathon',
    title: 'NYC Concert Marathon: 5 Shows, 5 Nights, $100',
    excerpt:
      'From a jazz bar in Greenwich Village to Barclays Center, I attended five completely different live music experiences in New York City while spending just $100 total on accommodation. Here is exactly how I did it.',
    image:
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80',
    category: 'Music',
    categoryColor: 'bg-music-concert/20 text-music-concert border-music-concert/30',
    date: 'December 22, 2025',
    readTime: '10 min read',
    author: 'Carlos R.',
  },
  {
    slug: 'world-cup-memories-buenos-aires',
    title: 'World Cup Memories: How Fans Made Buenos Aires Home',
    excerpt:
      'When Argentina won the World Cup, Buenos Aires became the center of the football universe. Thousands of traveling fans found community in the city\'s hostels. This is the story of how strangers became family through shared passion.',
    image:
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80',
    category: 'Football',
    categoryColor: 'bg-sport-football/20 text-sport-football border-sport-football/30',
    date: 'December 10, 2025',
    readTime: '15 min read',
    author: 'Diego F.',
  },
  {
    slug: 'berlin-underground-music-hostel-guide',
    title: "Berlin's Underground Music Scene: A Hostel Guide",
    excerpt:
      'Berlin is the techno capital of the world, but the underground music scene goes far beyond Berghain. I spent two weeks exploring hidden venues, warehouse parties, and open-air raves — all while staying in hostels under $20 a night.',
    image:
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
    category: 'Music',
    categoryColor: 'bg-music-concert/20 text-music-concert border-music-concert/30',
    date: 'November 28, 2025',
    readTime: '11 min read',
    author: 'Anna W.',
  },
  {
    slug: 'game-day-guide-la',
    title: "Game Day Guide: Lakers, Dodgers & LA's Best Stays",
    excerpt:
      'Los Angeles has more major sports teams than almost any city on Earth. From courtside at Crypto.com Arena to the bleachers at Dodger Stadium, this is the definitive guide to catching a game and finding the best fan-friendly stays in LA.',
    image:
      'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=800&q=80',
    category: 'Sports',
    categoryColor: 'bg-primary/20 text-primary border-primary/30',
    date: 'November 15, 2025',
    readTime: '9 min read',
    author: 'Mike T.',
  },
  {
    slug: 'tokyo-baseball-culture-guide',
    title: 'Tokyo Baseball Culture: A Fan\'s Guide to NPB',
    excerpt:
      'Japanese baseball is unlike anything else in sport. Organized cheering sections, bento boxes at your seat, and fans who clean up after themselves. I spent a week experiencing Tokyo Dome and fell in love with NPB forever.',
    image:
      'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80',
    category: 'Sports',
    categoryColor: 'bg-primary/20 text-primary border-primary/30',
    date: 'November 1, 2025',
    readTime: '10 min read',
    author: 'Kenji T.',
  },
  {
    slug: 'psg-matchday-paris-on-budget',
    title: 'PSG Matchday in Paris: Ligue 1 on a Budget',
    excerpt:
      'They said Paris was too expensive for backpackers. I found a fan hostel 10 minutes from Parc des Princes for $32/night, watched PSG demolish Marseille in Le Classique, and ate croissants for breakfast. Here\'s the breakdown.',
    image:
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
    category: 'Football',
    categoryColor: 'bg-sport-football/20 text-sport-football border-sport-football/30',
    date: 'October 20, 2025',
    readTime: '8 min read',
    author: 'Amelie D.',
  },
  {
    slug: 'maracana-flamengo-experience',
    title: 'Maracana Magic: My First Flamengo Match in Rio',
    excerpt:
      'Nothing prepares you for 70,000 Flamengo fans drumming, dancing, and singing for 90 minutes straight. The Maracana on a Libertadores night is the most intense sporting experience I\'ve ever had. Plus, I stayed for $14/night.',
    image:
      'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80',
    category: 'Football',
    categoryColor: 'bg-sport-football/20 text-sport-football border-sport-football/30',
    date: 'October 5, 2025',
    readTime: '12 min read',
    author: 'Lucas P.',
  },
  {
    slug: 'toronto-hockey-night-guide',
    title: 'Hockey Night in Toronto: A Maple Leafs Pilgrimage',
    excerpt:
      'As a lifelong hockey fan from Sweden, watching the Leafs at Scotiabank Arena was a bucket-list moment. The pre-game energy on Bay Street, the roar when they score, and the heartbreak when they don\'t — pure hockey culture.',
    image:
      'https://images.unsplash.com/photo-1517090504332-84f44a60c563?w=800&q=80',
    category: 'Hockey',
    categoryColor: 'bg-sport-hockey/20 text-sport-hockey border-sport-hockey/30',
    date: 'September 22, 2025',
    readTime: '9 min read',
    author: 'Erik L.',
  },
  {
    slug: 'amsterdam-ajax-derby-weekend',
    title: 'De Klassieker Weekend: Ajax vs Feyenoord in Amsterdam',
    excerpt:
      'The Dutch football rivalry at its fiercest. I cycled to Johan Cruyff Arena, watched Ajax and Feyenoord battle it out, then explored Amsterdam\'s canal bars until 3am. Total cost for the weekend: $180.',
    image:
      'https://images.unsplash.com/photo-1534351590666-13e3e96b5571?w=800&q=80',
    category: 'Football',
    categoryColor: 'bg-sport-football/20 text-sport-football border-sport-football/30',
    date: 'September 10, 2025',
    readTime: '7 min read',
    author: 'Jan V.',
  },
  {
    slug: 'milan-derby-della-madonnina',
    title: 'Derby della Madonnina: AC Milan vs Inter at San Siro',
    excerpt:
      'Two of the greatest clubs in history share one stadium. When they face each other, San Siro splits in half — one side red and black, the other blue and black. The atmosphere is Serie A at its theatrical best.',
    image:
      'https://images.unsplash.com/photo-1520440229-6469d149e7c0?w=800&q=80',
    category: 'Football',
    categoryColor: 'bg-sport-football/20 text-sport-football border-sport-football/30',
    date: 'August 28, 2025',
    readTime: '11 min read',
    author: 'Giulia R.',
  },
];

export default function StoriesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/80 via-surface/70 to-surface" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav
            items={[
              { label: 'Home', href: '/' },
              { label: 'Stories' },
            ]}
          />

          <div className="mt-6 text-center max-w-3xl mx-auto">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              From The Community
            </span>
            <h1 className="section-title text-white mt-3">Fan Stories</h1>
            <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Real travel stories, game day guides, and hostel reviews from fans
              who have been there. Get inspired for your next trip.
            </p>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Story (First) */}
          <div className="mb-12">
            <Link
              href={`/stories/${stories[0].slug}`}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-6 glass-card rounded-2xl overflow-hidden card-hover"
            >
              <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[400px] overflow-hidden">
                <Image
                  src={stories[0].image}
                  alt={stories[0].title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/60 to-transparent lg:hidden" />
              </div>
              <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`event-badge border ${stories[0].categoryColor}`}
                  >
                    {stories[0].category}
                  </span>
                  <span className="text-xs text-text-muted">
                    {stories[0].readTime}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors duration-200">
                  {stories[0].title}
                </h2>
                <p className="mt-4 text-text-secondary leading-relaxed">
                  {stories[0].excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">
                        {stories[0].author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">
                        {stories[0].author}
                      </div>
                      <div className="text-xs text-text-muted">
                        {stories[0].date}
                      </div>
                    </div>
                  </div>
                  <span className="text-primary font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read Story
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
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Remaining Stories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.slice(1).map((story) => (
              <Link
                key={story.slug}
                href={`/stories/${story.slug}`}
                className="group block glass-card rounded-2xl overflow-hidden card-hover"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface/60 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`event-badge border ${story.categoryColor}`}
                    >
                      {story.category}
                    </span>
                  </div>

                  {/* Read Time */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-surface/80 backdrop-blur-sm text-white border border-white/10">
                      {story.readTime}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">
                  <h3 className="text-lg font-bold text-white line-clamp-2 group-hover:text-primary transition-colors duration-200">
                    {story.title}
                  </h3>
                  <p className="mt-2 text-text-secondary text-sm line-clamp-3 leading-relaxed">
                    {story.excerpt}
                  </p>

                  {/* Author & Date */}
                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                        <span className="text-[10px] font-bold text-primary">
                          {story.author.charAt(0)}
                        </span>
                      </div>
                      <span className="text-xs font-medium text-white">
                        {story.author}
                      </span>
                    </div>
                    <span className="text-xs text-text-muted">
                      {story.date}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-surface-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Stay In The Loop
            </span>
            <h2 className="section-title text-white mt-3">
              Get Fan Stories in Your Inbox
            </h2>
            <p className="mt-4 text-text-secondary max-w-xl mx-auto">
              New stories, travel guides, and game day tips delivered weekly.
              Written by fans, for fans.
            </p>
          </div>
          <NewsletterSignup />
        </div>
      </section>
    </>
  );
}
