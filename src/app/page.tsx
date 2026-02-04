import type { Metadata } from "next";
import Link from "next/link";
import { cities } from "@/data/cities";
import { events } from "@/data/events";
import { hostels } from "@/data/hostels";
import { collections } from "@/data/collections";
import CityCard from "@/components/CityCard";
import EventCard from "@/components/EventCard";
import HostelCard from "@/components/HostelCard";
import FAQSection from "@/components/FAQSection";
import NewsletterSignup from "@/components/NewsletterSignup";

export const metadata: Metadata = {
  title: "FanHostel - Best Hostels Near Stadiums, Arenas & Concert Venues Worldwide",
  description:
    "Find the cheapest hostels and shared stays near stadiums, arenas, and concert venues worldwide. Sleep where the fans are. Budget accommodation for game days, concert nights, and festivals.",
  alternates: {
    canonical: "https://fanhostel.com",
  },
};

const homeFaqs = [
  {
    question: "What is FanHostel?",
    answer:
      "FanHostel is the world's first fan-first accommodation platform. We help sports and music fans find the best budget hostels near stadiums, arenas, and concert venues worldwide. Every listing is verified for fan-friendliness, safety, and proximity to events.",
  },
  {
    question: "How do you choose which hostels to feature?",
    answer:
      "We use a rigorous verification system with evidence tiers. Every hostel is evaluated on proximity to venues, fan atmosphere, safety, price, and real fan reviews. We never feature hostels that can't be verified by fan and operator confirmation.",
  },
  {
    question: "What cities does FanHostel cover?",
    answer:
      "We cover 30 major fan cities across 6 continents: London, Barcelona, Berlin, New York City, Los Angeles, Mexico City, Buenos Aires, Tokyo, Paris, Amsterdam, Madrid, Milan, Rio de Janeiro, Toronto, Munich, Istanbul, Manchester, Liverpool, Lisbon, Naples, Glasgow, Seoul, Melbourne, Sao Paulo, Chicago, Miami, Cape Town, Bangkok, Montreal, and Mumbai. We're constantly expanding to cover more tournament cities, college sports towns, and festival circuits worldwide.",
  },
  {
    question: "How much do fan hostels typically cost per night?",
    answer:
      "Prices vary by city and event, but fan hostels range from as low as $8/night in Bangkok and Mumbai to $40-45/night in cities like New York and Miami. Most dorm beds fall in the $14-35 range. During major events like derbies or festivals, prices may increase. We always show current price ranges and booking tips to help you find the best deals.",
  },
  {
    question: "Is it safe to stay in fan hostels during big events?",
    answer:
      "Safety is our top priority. Every hostel listed on FanHostel includes safety ratings, inclusivity notes, and crowd dynamics information. We never recommend hostels in areas with hostile fan dynamics, and we provide specific safety tips for each event.",
  },
  {
    question: "Can I book hostels directly through FanHostel?",
    answer:
      "FanHostel is a fan-first lodging knowledge platform, not a booking engine. We provide detailed information, reviews, and direct links to help you make informed decisions. We partner with trusted booking platforms to ensure you get the best rates.",
  },
];

const stats = [
  { value: "2,000+", label: "Fan Hostels" },
  { value: "500+", label: "Cities" },
  { value: "3,000+", label: "Venues" },
  { value: "100,000+", label: "Fan Reviews" },
];

const sportCategories = [
  {
    name: "Football",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-.52.07-1.06.07-1.58.02l-.42-2.52-2.33-1.7-.83 2.48c-1.18-.58-2.18-1.42-2.93-2.45l1.68-1.94-.63-2.74-2.62-.33C3.27 10.26 3.2 9.63 3.2 9h2.74l1.72-2.12-.88-2.6c.76-.53 1.62-.93 2.54-1.18l1.68 2.08h2.86l1.68-2.08c.92.25 1.78.65 2.54 1.18l-.88 2.6L19.06 9h2.74c0 .63-.07 1.26-.14 1.75l-2.62.33-.63 2.74 1.68 1.94c-.75 1.03-1.75 1.87-2.93 2.45l-.83-2.48-2.33 1.7-.42 2.52z" />
      </svg>
    ),
    color: "bg-green-500/20 text-green-400 border-green-500/30",
    count: "500+",
    slug: "football",
  },
  {
    name: "Basketball",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4.93 4.93c4.08 2.35 6.07 6.72 6.07 7.07M19.07 4.93c-4.08 2.35-6.07 6.72-6.07 7.07M4.93 19.07c4.08-2.35 6.07-6.72 6.07-7.07M19.07 19.07c-4.08-2.35-6.07-6.72-6.07-7.07" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    color: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    count: "200+",
    slug: "basketball",
  },
  {
    name: "Baseball",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M6 3.5c2.5 3 3 7 2 10.5M18 3.5c-2.5 3-3 7-2 10.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    count: "150+",
    slug: "baseball",
  },
  {
    name: "Concerts",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 3v10.55A4 4 0 1014 17V7h4V3h-6z" />
      </svg>
    ),
    color: "bg-pink-500/20 text-pink-400 border-pink-500/30",
    count: "300+",
    slug: "concerts",
  },
  {
    name: "Festivals",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 10V4h-4v2H8V4H4v6l8 5-8 5v6h4v-2h8v2h4v-6l-8-5 8-5z" />
      </svg>
    ),
    color: "bg-teal-500/20 text-teal-400 border-teal-500/30",
    count: "100+",
    slug: "festivals",
  },
  {
    name: "Hockey",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M15 12l-4-4v3H2v2h9v3l4-4z" />
        <path d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    ),
    color: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    count: "100+",
    slug: "hockey",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Pick Your Event",
    description:
      "Browse upcoming games, concerts, and festivals. From Premier League derbies to world tours.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Find Fan Hostels",
    description:
      "Discover verified hostels near the venue. Sorted by fan vibe, price, and walking distance.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Join the Crowd",
    description:
      "Book your stay, meet fellow fans, and experience the atmosphere from check-in to final whistle.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

export default function HomePage() {
  const featuredCities = cities.slice(0, 8);
  const upcomingEvents = events.slice(0, 8);
  const topHostels = hostels.filter((h) => h.verified).slice(0, 8);
  const featuredCollections = collections.filter((c) => c.featured).slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1459865264687-595d652de67e?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-[#0F0F1A]" />

        {/* Animated accent lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-pulse-slow" />
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent animate-pulse-slow" style={{ animationDelay: "2s" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white/80">
              Live: 3,000+ venues tracked across 30 cities worldwide
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.9] mb-6">
            <span className="block text-white">Sleep With</span>
            <span className="block text-gradient">The Fans.</span>
            <span className="block text-white mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold opacity-90">
              Wake Up for the Game.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-white/70 mb-10 leading-relaxed">
            The world&apos;s best hostels near stadiums, arenas, and concert venues.
            Fan-verified. Budget-friendly. Event-ready.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/cities"
              className="btn-primary text-lg px-8 py-4 rounded-2xl shadow-lg shadow-primary/25 w-full sm:w-auto"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              Explore Cities
            </Link>
            <Link
              href="/events"
              className="btn-secondary text-lg px-8 py-4 rounded-2xl w-full sm:w-auto"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              Browse Events
            </Link>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-white/50 uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Sport Categories */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title text-white mb-4">
              Every Sport. Every Show. Every Fan.
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg">
              From Premier League matchdays to sold-out arena tours, find your tribe and your bed.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {sportCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/events?type=${cat.slug}`}
                className={`flex flex-col items-center gap-3 p-6 rounded-2xl border ${cat.color} card-hover cursor-pointer`}
              >
                {cat.icon}
                <span className="font-bold text-sm">{cat.name}</span>
                <span className="text-xs opacity-70">{cat.count} stays</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cities */}
      <section className="py-16 md:py-24 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Fan Destinations
              </span>
              <h2 className="section-title text-white mt-2">
                Top Cities for Fans
              </h2>
              <p className="text-text-secondary mt-3 max-w-xl text-lg">
                Where the games are biggest, the concerts are loudest, and the hostels are legendary.
              </p>
            </div>
            <Link
              href="/cities"
              className="mt-6 md:mt-0 text-primary font-semibold hover:text-primary-light transition-colors inline-flex items-center gap-1"
            >
              View all cities
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredCities.map((city) => (
              <CityCard key={city.slug} {...city} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-surface relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Simple as matchday
            </span>
            <h2 className="section-title text-white mt-2">
              How FanHostel Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {howItWorks.map((item) => (
              <div key={item.step} className="relative text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:bg-primary/20 transition-colors">
                  {item.icon}
                </div>
                <div className="absolute -top-2 -right-2 md:right-auto md:-left-2 text-6xl font-black text-white/5 font-display">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 md:py-24 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Coming Up
              </span>
              <h2 className="section-title text-white mt-2">
                Upcoming Events
              </h2>
              <p className="text-text-secondary mt-3 max-w-xl text-lg">
                Big games and massive shows on the horizon. Book your fan hostel before they fill up.
              </p>
            </div>
            <Link
              href="/events"
              className="mt-6 md:mt-0 text-primary font-semibold hover:text-primary-light transition-colors inline-flex items-center gap-1"
            >
              See all events
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {upcomingEvents.map((event) => (
              <EventCard key={event.slug} {...event} />
            ))}
          </div>
        </div>
      </section>

      {/* Top Hostels */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Fan Verified
              </span>
              <h2 className="section-title text-white mt-2">
                Top-Rated Fan Hostels
              </h2>
              <p className="text-text-secondary mt-3 max-w-xl text-lg">
                Where fans stay, pre-game, and make memories. Verified by real supporters.
              </p>
            </div>
            <Link
              href="/hostels"
              className="mt-6 md:mt-0 text-primary font-semibold hover:text-primary-light transition-colors inline-flex items-center gap-1"
            >
              Browse all hostels
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topHostels.map((hostel) => (
              <HostelCard key={hostel.slug} {...hostel} />
            ))}
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-16 md:py-24 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Curated For Fans
            </span>
            <h2 className="section-title text-white mt-2">
              Fan Collections
            </h2>
            <p className="text-text-secondary mt-3 max-w-2xl mx-auto text-lg">
              Hand-picked hostel lists for every type of fan journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCollections.map((collection) => (
              <Link
                key={collection.slug}
                href={`/collections/${collection.slug}`}
                className="group relative h-64 md:h-80 rounded-2xl overflow-hidden card-hover"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${collection.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="event-badge bg-primary/20 text-primary border border-primary/30 mb-3">
                    {collection.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {collection.title}
                  </h3>
                  <p className="text-white/70 text-sm line-clamp-2">
                    {collection.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/collections" className="btn-secondary">
              View All Collections
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-16 md:py-24 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="section-title text-white">
              What Fans Are Saying
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Booked a hostel 10 minutes from Camp Nou through FanHostel. Met fans from 6 different countries. Best El Clasico experience ever.",
                author: "Jake M.",
                from: "Manchester, UK",
                event: "El Clasico, Barcelona",
                stars: 5,
              },
              {
                quote:
                  "Found a $18/night spot walking distance to Madison Square Garden. The pre-game vibe in the common room was electric. FanHostel gets it.",
                author: "Maria S.",
                from: "Buenos Aires, AR",
                event: "NBA Playoffs, NYC",
                stars: 5,
              },
              {
                quote:
                  "Used FanHostel for the Berlin marathon weekend. The hostel they recommended had a runner's breakfast and was right on the route. Incredible.",
                author: "Kenji T.",
                from: "Tokyo, JP",
                event: "Berlin Marathon",
                stars: 5,
              },
              {
                quote:
                  "Watched Flamengo at Maracana and stayed in a hostel in Lapa for $14/night. The whole hostel walked to the stadium together singing. Pure magic.",
                author: "Lucas P.",
                from: "Lisbon, PT",
                event: "Flamengo vs Palmeiras, Rio",
                stars: 5,
              },
              {
                quote:
                  "PSG matchday in Paris on a budget? FanHostel made it happen. Found a spot near Parc des Princes with a rooftop where we could hear the crowd warming up.",
                author: "Sophie L.",
                from: "Montreal, CA",
                event: "PSG vs Marseille, Paris",
                stars: 5,
              },
              {
                quote:
                  "Traveled to Tokyo for a baseball game at the Dome. The hostel had a fan lounge with jerseys on the wall. Felt like home on the other side of the world.",
                author: "Ryan W.",
                from: "Chicago, US",
                event: "Yomiuri Giants, Tokyo",
                stars: 5,
              },
            ].map((testimonial) => (
              <div
                key={testimonial.author}
                className="glass-card rounded-2xl p-6 md:p-8 card-hover"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-white/90 text-sm md:text-base leading-relaxed mb-6">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-white text-sm">
                      {testimonial.author}
                    </div>
                    <div className="text-text-muted text-xs">
                      {testimonial.from}
                    </div>
                  </div>
                  <div className="text-xs text-primary font-medium">
                    {testimonial.event}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Big CTA Banner */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-dark/90" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Your Next Game Day Starts Here
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of fans finding the best budget stays near the
            world&apos;s greatest venues. No fake reviews. No hidden fees. Just real
            fan experiences.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/hostels"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:bg-white/90 transition-all hover:scale-105 active:scale-95 shadow-lg w-full sm:w-auto"
            >
              Find Fan Hostels
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-2xl hover:bg-white/10 transition-all w-full sm:w-auto"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section (AEO) */}
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
          <FAQSection faqs={homeFaqs} />
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-surface-light">
        <NewsletterSignup />
      </section>
    </>
  );
}
