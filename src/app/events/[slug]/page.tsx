import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { events } from "@/data/events";
import { hostels } from "@/data/hostels";
import { venues } from "@/data/venues";
import HostelCard from "@/components/HostelCard";
import EventCard from "@/components/EventCard";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQSection from "@/components/FAQSection";

export async function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) return { title: "Event Not Found" };
  return {
    title: `${event.title} - Fan Hostels & Accommodation`,
    description: `Find the best fan hostels for ${event.title} at ${event.venue}, ${event.city}. ${event.date}. Budget accommodation from ${event.priceRange}.`,
    alternates: { canonical: `https://fanhostel.com/events/${slug}` },
  };
}

const typeColors: Record<string, string> = {
  football: "bg-green-500/20 text-green-400",
  basketball: "bg-orange-500/20 text-orange-400",
  baseball: "bg-blue-500/20 text-blue-400",
  hockey: "bg-purple-500/20 text-purple-400",
  concert: "bg-pink-500/20 text-pink-400",
  festival: "bg-teal-500/20 text-teal-400",
};

const demandColors: Record<string, string> = {
  Low: "text-green-400", Medium: "text-yellow-400", High: "text-orange-400", Extreme: "text-red-400",
};

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) notFound();

  const venue = venues.find((v) => v.slug === event.venueSlug);
  const nearbyHostels = hostels.filter((h) => h.citySlug === event.citySlug);
  const relatedEvents = events.filter((e) => e.slug !== event.slug && (e.citySlug === event.citySlug || e.type === event.type)).slice(0, 3);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": event.type === "concert" || event.type === "festival" ? "MusicEvent" : "SportsEvent",
    name: event.title,
    description: event.description,
    startDate: event.date,
    location: { "@type": "Place", name: event.venue, address: { "@type": "PostalAddress", addressLocality: event.city } },
    image: event.image,
    url: `https://fanhostel.com/events/${event.slug}`,
    ...(event.artist ? { performer: { "@type": "PerformingGroup", name: event.artist } } : {}),
  };

  const faqs = [
    { question: `Where should I stay for ${event.title}?`, answer: `We recommend staying in fan-verified hostels near ${event.venue} in ${event.city}. ${event.hostelTip}` },
    { question: `How much do hostels cost for ${event.title}?`, answer: `Hostel prices near ${event.venue} during this event range from ${event.priceRange}. Fan demand is ${event.fanDemand}, so we recommend booking early.` },
    { question: `What is the atmosphere like at ${event.venue}?`, answer: `The atmosphere rating for this event is ${event.atmosphereRating}/5. ${event.description}` },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${event.image}')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-[#0F0F1A]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className={`event-badge ${typeColors[event.type] || ""} mb-4`}>{event.type}</span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-3">{event.title}</h1>
          <p className="text-xl text-white/70 mb-6">{event.venue} &middot; {event.city}</p>
          <div className="flex flex-wrap gap-4">
            <div className="glass-card px-4 py-2 rounded-xl"><span className="text-xs text-text-muted block">Date</span><span className="text-white font-bold">{event.date}</span></div>
            <div className="glass-card px-4 py-2 rounded-xl"><span className="text-xs text-text-muted block">Time</span><span className="text-white font-bold">{event.time}</span></div>
            <div className="glass-card px-4 py-2 rounded-xl"><span className="text-xs text-text-muted block">Fan Demand</span><span className={`font-bold ${demandColors[event.fanDemand]}`}>{event.fanDemand}</span></div>
            <div className="glass-card px-4 py-2 rounded-xl"><span className="text-xs text-text-muted block">Atmosphere</span><span className="text-accent font-bold">{"★".repeat(event.atmosphereRating)}{"☆".repeat(5 - event.atmosphereRating)}</span></div>
          </div>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Events", href: "/events" }, { label: event.title }]} />

      <section className="py-12 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-4">About This Event</h2>
              <p className="text-text-secondary leading-relaxed mb-8">{event.description}</p>

              {event.teams && event.teams.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-3">Teams</h3>
                  <div className="flex gap-4">
                    {event.teams.map((team) => (
                      <span key={team} className="px-5 py-3 rounded-xl bg-surface-card border border-white/10 text-white font-bold">{team}</span>
                    ))}
                  </div>
                </div>
              )}

              {event.artist && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-3">Artist</h3>
                  <span className="px-5 py-3 rounded-xl bg-surface-card border border-white/10 text-white font-bold">{event.artist}</span>
                </div>
              )}

              <div className="glass-card rounded-2xl p-6 border border-accent/20 mb-8">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" /></svg>
                  <div><h4 className="text-accent font-bold mb-1">Hostel Booking Tip</h4><p className="text-text-secondary text-sm">{event.hostelTip}</p></div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {event.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">#{tag}</span>
                ))}
              </div>
            </div>

            <div>
              <div className="glass-card rounded-2xl p-6 sticky top-24">
                <h3 className="text-lg font-bold text-white mb-4">Event Details</h3>
                <dl className="space-y-3 mb-6">
                  <div className="flex justify-between"><dt className="text-text-muted">Date</dt><dd className="text-white font-medium">{event.date}</dd></div>
                  <div className="flex justify-between"><dt className="text-text-muted">Time</dt><dd className="text-white font-medium">{event.time}</dd></div>
                  <div className="flex justify-between"><dt className="text-text-muted">Venue</dt><dd className="text-white font-medium">{event.venue}</dd></div>
                  <div className="flex justify-between"><dt className="text-text-muted">City</dt><dd className="text-white font-medium">{event.city}</dd></div>
                  <div className="flex justify-between"><dt className="text-text-muted">Demand</dt><dd className={`font-bold ${demandColors[event.fanDemand]}`}>{event.fanDemand}</dd></div>
                </dl>
                {venue && <Link href={`/venues/${venue.slug}`} className="btn-secondary w-full text-center mb-3 block">View Venue</Link>}
                <Link href={`/cities/${event.citySlug}`} className="btn-primary w-full text-center block">Find Hostels in {event.city}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {nearbyHostels.length > 0 && (
        <section className="py-12 bg-surface-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-6">Where to Stay</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {nearbyHostels.slice(0, 6).map((h) => (<HostelCard key={h.slug} {...h} />))}
            </div>
          </div>
        </section>
      )}

      {relatedEvents.length > 0 && (
        <section className="py-12 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-6">Related Events</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedEvents.map((e) => (<EventCard key={e.slug} {...e} />))}
            </div>
          </div>
        </section>
      )}

      <section className="py-12 bg-surface-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQSection faqs={faqs} />
        </div>
      </section>
    </>
  );
}
