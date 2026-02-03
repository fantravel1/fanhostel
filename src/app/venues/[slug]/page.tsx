import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { venues } from "@/data/venues";
import { hostels } from "@/data/hostels";
import { events } from "@/data/events";
import HostelCard from "@/components/HostelCard";
import EventCard from "@/components/EventCard";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQSection from "@/components/FAQSection";

export async function generateStaticParams() {
  return venues.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const venue = venues.find((v) => v.slug === slug);
  if (!venue) return { title: "Venue Not Found" };
  return {
    title: `${venue.name} - Fan Hostels & Events | ${venue.city}`,
    description: `Find the best fan hostels near ${venue.name} in ${venue.city}. ${venue.capacity.toLocaleString()} capacity ${venue.type}. Walking distance accommodation for game days and concerts.`,
    alternates: { canonical: `https://fanhostel.com/venues/${slug}` },
  };
}

const typeColors: Record<string, string> = {
  stadium: "bg-green-500/20 text-green-400",
  arena: "bg-orange-500/20 text-orange-400",
  "concert-hall": "bg-pink-500/20 text-pink-400",
  "festival-grounds": "bg-teal-500/20 text-teal-400",
};

export default async function VenueDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const venue = venues.find((v) => v.slug === slug);
  if (!venue) notFound();

  const nearbyHostels = hostels.filter((h) => h.citySlug === venue.citySlug);
  const venueEvents = events.filter((e) => e.venueSlug === venue.slug || (e.venue === venue.name && e.citySlug === venue.citySlug));

  const schemaData = {
    "@context": "https://schema.org",
    "@type": venue.type === "stadium" ? "StadiumOrArena" : "EventVenue",
    name: venue.name,
    description: venue.description,
    address: { "@type": "PostalAddress", addressLocality: venue.city },
    maximumAttendeeCapacity: venue.capacity,
    image: venue.image,
    url: `https://fanhostel.com/venues/${venue.slug}`,
  };

  const faqs = [
    { question: `What are the best hostels near ${venue.name}?`, answer: `We have ${nearbyHostels.length} verified fan hostels in ${venue.city} near ${venue.name}. The closest are within ${venue.walkingDistance} walking distance, with prices starting from $${Math.min(...nearbyHostels.map(h => h.pricePerNight))}/night.` },
    { question: `How do I get to ${venue.name}?`, answer: venue.transitInfo },
    { question: `What events are coming up at ${venue.name}?`, answer: `We currently track ${venueEvents.length} upcoming events at ${venue.name}. Check our events section for the latest games, concerts, and festivals.` },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${venue.image}')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-[#0F0F1A]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className={`event-badge ${typeColors[venue.type] || ""} mb-4`}>{venue.type.replace("-", " ")}</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-3">{venue.name}</h1>
          <p className="text-xl text-white/70 mb-6">{venue.city}</p>
          <div className="flex flex-wrap gap-4">
            <div className="glass-card px-4 py-2 rounded-xl"><span className="text-sm text-text-muted">Capacity</span><p className="text-white font-bold">{venue.capacity.toLocaleString()}</p></div>
            <div className="glass-card px-4 py-2 rounded-xl"><span className="text-sm text-text-muted">Nearby Hostels</span><p className="text-accent font-bold">{venue.nearbyHostels}</p></div>
            <div className="glass-card px-4 py-2 rounded-xl"><span className="text-sm text-text-muted">Walking Distance</span><p className="text-white font-bold">{venue.walkingDistance}</p></div>
          </div>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Venues", href: "/venues" }, { label: venue.name }]} />

      <section className="py-12 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-4">About {venue.name}</h2>
              <p className="text-text-secondary leading-relaxed mb-8">{venue.description}</p>

              {venue.teams.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-3">Teams & Artists</h3>
                  <div className="flex flex-wrap gap-2">
                    {venue.teams.map((team) => (
                      <span key={team} className="px-4 py-2 rounded-full bg-surface-card border border-white/10 text-white font-medium text-sm">{team}</span>
                    ))}
                  </div>
                </div>
              )}

              {venue.fanTips.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-3">Fan Tips</h3>
                  <ul className="space-y-3">
                    {venue.fanTips.map((tip, i) => (
                      <li key={i} className="flex gap-3 text-text-secondary">
                        <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="glass-card rounded-2xl p-6 mb-8">
                <h3 className="text-lg font-bold text-white mb-2">Getting There</h3>
                <p className="text-text-secondary">{venue.transitInfo}</p>
              </div>
            </div>

            <div>
              <div className="glass-card rounded-2xl p-6 sticky top-24">
                <h3 className="text-lg font-bold text-white mb-4">Quick Info</h3>
                <dl className="space-y-3">
                  <div className="flex justify-between"><dt className="text-text-muted">Type</dt><dd className="text-white font-medium capitalize">{venue.type.replace("-", " ")}</dd></div>
                  <div className="flex justify-between"><dt className="text-text-muted">City</dt><dd className="text-white font-medium">{venue.city}</dd></div>
                  <div className="flex justify-between"><dt className="text-text-muted">Capacity</dt><dd className="text-white font-medium">{venue.capacity.toLocaleString()}</dd></div>
                  <div className="flex justify-between"><dt className="text-text-muted">Hostels Nearby</dt><dd className="text-accent font-medium">{venue.nearbyHostels}</dd></div>
                </dl>
                <Link href={`/cities/${venue.citySlug}`} className="btn-primary w-full mt-6 text-center">Explore {venue.city}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {nearbyHostels.length > 0 && (
        <section className="py-12 bg-surface-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-6">Nearby Fan Hostels</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {nearbyHostels.slice(0, 6).map((h) => (<HostelCard key={h.slug} {...h} />))}
            </div>
          </div>
        </section>
      )}

      {venueEvents.length > 0 && (
        <section className="py-12 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-6">Upcoming Events</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {venueEvents.slice(0, 6).map((e) => (<EventCard key={e.slug} {...e} />))}
            </div>
          </div>
        </section>
      )}

      <section className="py-12 bg-surface-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center mb-8">FAQs About {venue.name}</h2>
          <FAQSection faqs={faqs} />
        </div>
      </section>
    </>
  );
}
