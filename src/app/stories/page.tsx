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
  {
    slug: 'old-firm-glasgow-celtic-rangers',
    title: 'The Old Firm: Celtic vs Rangers in Glasgow',
    excerpt:
      'The oldest and fiercest derby in world football. Celtic Park was shaking, 60,000 voices singing, green smoke filling the air. I stayed in a hostel on Celtic Way and walked into paradise. Glasgow does rivalry like nowhere else on Earth.',
    image:
      'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&q=80',
    category: 'Football',
    categoryColor: 'bg-sport-football/20 text-sport-football border-sport-football/30',
    date: 'August 15, 2025',
    readTime: '10 min read',
    author: 'Hamish B.',
  },
  {
    slug: 'istanbul-three-clubs-one-city',
    title: 'Istanbul: Three Clubs, Three Continents of Passion',
    excerpt:
      'Galatasaray on Friday, Besiktas on Sunday, Fenerbahce on Wednesday. I crossed the Bosphorus twice, drank endless cay, and experienced the most volcanic football atmosphere outside South America. All for under $60 total on accommodation.',
    image:
      'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80',
    category: 'Football',
    categoryColor: 'bg-sport-football/20 text-sport-football border-sport-football/30',
    date: 'August 1, 2025',
    readTime: '13 min read',
    author: 'Mehmet A.',
  },
  {
    slug: 'afl-grand-final-melbourne',
    title: 'AFL Grand Final Day: 100,000 at the MCG',
    excerpt:
      'Nothing in sport compares to 100,000 Australians packed into the MCG on Grand Final day. The roar when the siren sounds, the barbecues in every park, and the entire city stopping for one game. Melbourne is the ultimate sports city.',
    image:
      'https://images.unsplash.com/photo-1514395462725-fb4566210144?w=800&q=80',
    category: 'Sports',
    categoryColor: 'bg-primary/20 text-primary border-primary/30',
    date: 'July 20, 2025',
    readTime: '9 min read',
    author: 'Liam O.',
  },
  {
    slug: 'wrigley-field-cubs-pilgrimage',
    title: 'Wrigley Field Pilgrimage: Cubs Baseball on a Budget',
    excerpt:
      'The ivy-covered walls, the seventh-inning stretch singing "Take Me Out to the Ball Game", and the Wrigleyville bars overflowing after every home run. I stayed five minutes from the Friendly Confines for $32/night and lived every baseball fan\'s dream.',
    image:
      'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=800&q=80',
    category: 'Sports',
    categoryColor: 'bg-primary/20 text-primary border-primary/30',
    date: 'July 8, 2025',
    readTime: '8 min read',
    author: 'Tom H.',
  },
  {
    slug: 'muay-thai-lumpinee-bangkok',
    title: 'Lumpinee Stadium: My First Muay Thai Night in Bangkok',
    excerpt:
      'The smell of liniment, the wai kru ritual dance, the crowd erupting with every elbow. Lumpinee Boxing Stadium is the sacred temple of Muay Thai, and watching championship fights for $30 was the most thrilling sporting experience of my life.',
    image:
      'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=80',
    category: 'Sports',
    categoryColor: 'bg-primary/20 text-primary border-primary/30',
    date: 'June 25, 2025',
    readTime: '10 min read',
    author: 'Napat S.',
  },
  {
    slug: 'derby-paulista-sao-paulo',
    title: 'Derby Paulista: Corinthians vs Palmeiras in Sao Paulo',
    excerpt:
      'The biggest city in South America hosts one of the biggest rivalries in world football. Neo Quimica Arena was a cauldron of noise, flares, and passion. I stayed in Vila Madalena for $12/night and experienced Brazilian football at its rawest.',
    image:
      'https://images.unsplash.com/photo-1619546952812-520e98064a52?w=800&q=80',
    category: 'Football',
    categoryColor: 'bg-sport-football/20 text-sport-football border-sport-football/30',
    date: 'June 12, 2025',
    readTime: '11 min read',
    author: 'Rafaela C.',
  },
  {
    slug: 'korean-baseball-fried-chicken-soju',
    title: 'KBO Baseball in Seoul: Fried Chicken, Soju & Chanting',
    excerpt:
      'Korean baseball is the most fun you can have in a stadium. Every team has unique chant songs, you order fried chicken to your seat, and the energy never drops. Jamsil Stadium on a Friday night with the LG Twins fans is pure joy.',
    image:
      'https://images.unsplash.com/photo-1517090504332-84f44a60c563?w=800&q=80',
    category: 'Sports',
    categoryColor: 'bg-primary/20 text-primary border-primary/30',
    date: 'May 30, 2025',
    readTime: '9 min read',
    author: 'Ji-hoon K.',
  },
  {
    slug: 'napoli-maradona-pilgrimage',
    title: 'Napoli Pilgrimage: In the Footsteps of Maradona',
    excerpt:
      'The murals in the Quartieri Spagnoli, the stadium that now bears his name, and 50,000 fans singing "Ho visto Maradona." Naples worships football like a religion, and visiting as a fan feels like a spiritual journey.',
    image:
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80',
    category: 'Football',
    categoryColor: 'bg-sport-football/20 text-sport-football border-sport-football/30',
    date: 'May 15, 2025',
    readTime: '12 min read',
    author: 'Marco P.',
  },
  {
    slug: 'mumbai-ipl-wankhede-madness',
    title: 'IPL Madness: Mumbai Indians at Wankhede Stadium',
    excerpt:
      'Cricket in India is not a sport — it is a national obsession. Wankhede Stadium during an IPL match is 33,000 people losing their minds over every boundary. I stayed in Colaba for $8/night and witnessed the most passionate cricket fans on Earth.',
    image:
      'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80',
    category: 'Sports',
    categoryColor: 'bg-primary/20 text-primary border-primary/30',
    date: 'May 1, 2025',
    readTime: '10 min read',
    author: 'Priya M.',
  },
  {
    slug: 'lisbon-benfica-sporting-double-header',
    title: 'Lisbon Double Header: Benfica & Sporting in One Weekend',
    excerpt:
      'The Stadium of Light on Saturday, the Green Cathedral on Sunday. Two of Portugal\'s biggest clubs, one incredible city, endless pasteis de nata, and all for under $100 including accommodation. Lisbon is Europe\'s best-value fan city.',
    image:
      'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800&q=80',
    category: 'Football',
    categoryColor: 'bg-sport-football/20 text-sport-football border-sport-football/30',
    date: 'April 18, 2025',
    readTime: '8 min read',
    author: 'Joao S.',
  },
  {
    slug: 'manchester-derby-old-trafford',
    title: 'Manchester Derby: Red vs Blue at Old Trafford',
    excerpt:
      'The Theatre of Dreams turned into a warzone of noise. United vs City is the defining rivalry of modern English football. I stayed in the Northern Quarter, walked to Old Trafford, and experienced 90 minutes of pure tribal warfare.',
    image:
      'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80',
    category: 'Football',
    categoryColor: 'bg-sport-football/20 text-sport-football border-sport-football/30',
    date: 'April 5, 2025',
    readTime: '10 min read',
    author: 'James R.',
  },
  {
    slug: 'montreal-canadiens-bell-centre',
    title: 'Bell Centre Magic: Canadiens Hockey Night in Montreal',
    excerpt:
      'The 21,000 at Bell Centre singing "Ole Ole Ole" as the Canadiens take the ice is one of sport\'s most spine-tingling moments. Combined with poutine, Montreal\'s nightlife, and $28/night hostels in the Plateau, this is a hockey pilgrimage everyone should make.',
    image:
      'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&q=80',
    category: 'Hockey',
    categoryColor: 'bg-sport-hockey/20 text-sport-hockey border-sport-hockey/30',
    date: 'March 22, 2025',
    readTime: '9 min read',
    author: 'Marc-Andre B.',
  },
  {
    slug: 'cape-town-rugby-table-mountain',
    title: 'Springbok Rugby in Cape Town: Under Table Mountain',
    excerpt:
      'South Africa vs New Zealand at Cape Town Stadium with Table Mountain glowing in the sunset behind the stands. The braai before the match, the Springbok faithful in green and gold, and the most scenic sporting venue on Earth.',
    image:
      'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80',
    category: 'Sports',
    categoryColor: 'bg-primary/20 text-primary border-primary/30',
    date: 'March 8, 2025',
    readTime: '11 min read',
    author: 'Thabo N.',
  },
  {
    slug: 'anfield-champions-league-night',
    title: 'Anfield Under the Lights: A Champions League Night',
    excerpt:
      'You\'ll Never Walk Alone sung by 61,000 voices before a Champions League knockout match. The Kop end in full voice, the flares and the flags, and Liverpool\'s famous European nights. Anfield on a Tuesday is the greatest atmosphere in football.',
    image:
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
    category: 'Football',
    categoryColor: 'bg-sport-football/20 text-sport-football border-sport-football/30',
    date: 'February 20, 2025',
    readTime: '12 min read',
    author: 'Owen G.',
  },
  {
    slug: 'bayern-munich-allianz-arena-glow',
    title: 'The Allianz Arena Glow: Bayern Munich on a European Night',
    excerpt:
      'The Allianz Arena glows red against the Bavarian sky as 75,000 fans roar Bayern forward in the Champions League. Pre-match beer halls, Weisswurst, and the most efficient fan experience in world football. Munich does matchday with German precision.',
    image:
      'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&q=80',
    category: 'Football',
    categoryColor: 'bg-sport-football/20 text-sport-football border-sport-football/30',
    date: 'February 5, 2025',
    readTime: '9 min read',
    author: 'Felix H.',
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
