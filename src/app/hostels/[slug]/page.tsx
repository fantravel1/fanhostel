import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { hostels } from "@/data/hostels";
import { venues } from "@/data/venues";
import { events } from "@/data/events";
import EventCard from "@/components/EventCard";
import HostelCard from "@/components/HostelCard";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQSection from "@/components/FAQSection";

export async function generateStaticParams() {
  return hostels.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const hostel = hostels.find((h) => h.slug === slug);
  if (!hostel) return { title: "Hostel Not Found" };
  return {
    title: `${hostel.name} - ${hostel.city} Fan Hostel from $${hostel.pricePerNight}/night`,
    description: `${hostel.name} in ${hostel.city}. Fan-verified hostel ${hostel.distanceToVenue} from ${hostel.nearestVenue}. From $${hostel.pricePerNight}/night. Rating: ${hostel.rating}/5.`,
    alternates: { canonical: `https://fanhostel.com/hostels/${slug}` },
  };
}

function FanScore({ score }: { score: number }) {
  const color = score >= 80 ? "text-green-400 border-green-400/30" : score >= 60 ? "text-yellow-400 border-yellow-400/30" : "text-red-400 border-red-400/30";
  const bgColor = score >= 80 ? "bg-green-400/10" : score >= 60 ? "bg-yellow-400/10" : "bg-red-400/10";
  return (
    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full border-4 ${color} ${bgColor}`}>
      <span className="text-2xl font-black">{score}</span>
    </div>
  );
}

export default async function HostelDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const hostel = hostels.find((h) => h.slug === slug);
  if (!hostel) notFound();

  const nearestVenue = venues.find((v) => v.name === hostel.nearestVenue && v.citySlug === hostel.citySlug);
  const cityEvents = events.filter((e) => e.citySlug === hostel.citySlug).slice(0, 4);
  const moreHostels = hostels.filter((h) => h.citySlug === hostel.citySlug && h.slug !== hostel.slug).slice(0, 3);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: hostel.name,
    description: `Fan-verified hostel in ${hostel.city}, ${hostel.distanceToVenue} from ${hostel.nearestVenue}. ${hostel.vibes.join(", ")}.`,
    address: { "@type": "PostalAddress", addressLocality: hostel.city },
    priceRange: `$${hostel.pricePerNight}`,
    aggregateRating: { "@type": "AggregateRating", ratingValue: hostel.rating, bestRating: 5, ratingCount: Math.floor(hostel.rating * 50) },
    image: hostel.image,
    url: `https://fanhostel.com/hostels/${hostel.slug}`,
  };

  const faqs = [
    { question: `How much does ${hostel.name} cost per night?`, answer: `Dorm beds at ${hostel.name} start from $${hostel.pricePerNight} per night. Prices may vary during major events.` },
    { question: `How far is ${hostel.name} from ${hostel.nearestVenue}?`, answer: `${hostel.name} is ${hostel.distanceToVenue} from ${hostel.nearestVenue}, making it an ideal base for game days and concerts.` },
    { question: `Is ${hostel.name} verified by FanHostel?`, answer: hostel.verified ? `Yes, ${hostel.name} is fully verified by FanHostel with a Fan-Friendly Score of ${hostel.fanRating}/5.` : `${hostel.name} is currently pending full verification. Initial reviews are positive with a ${hostel.rating}/5 rating.` },
  ];

  const amenityIcons: Record<string, string> = {
    "WiFi": "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.07c3.9-3.91 10.24-3.91 14.14 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0",
    "Kitchen": "M3 3h18v18H3V3zm3 9h12M9 3v9m6-9v9",
    "Lockers": "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    "Bar": "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* Hero */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${hostel.image}')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-[#0F0F1A]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {hostel.verified && (
              <span className="event-badge bg-green-500/20 text-green-400 border border-green-500/30">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                Fan Verified
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-3">{hostel.name}</h1>
          <p className="text-xl text-white/70 mb-6">{hostel.city}</p>
          <div className="flex flex-wrap gap-4">
            <div className="glass-card px-4 py-2 rounded-xl">
              <span className="text-xs text-text-muted block">From</span>
              <span className="text-2xl font-black text-accent">${hostel.pricePerNight}</span>
              <span className="text-white/50 text-sm">/night</span>
            </div>
            <div className="glass-card px-4 py-2 rounded-xl">
              <span className="text-xs text-text-muted block">Rating</span>
              <span className="text-white font-bold text-lg">{"★".repeat(Math.round(hostel.rating))} {hostel.rating}</span>
            </div>
            <div className="glass-card px-4 py-2 rounded-xl">
              <span className="text-xs text-text-muted block">Fan Rating</span>
              <span className="text-primary font-bold text-lg">{hostel.fanRating}/5</span>
            </div>
            <div className="glass-card px-4 py-2 rounded-xl">
              <span className="text-xs text-text-muted block">To {hostel.nearestVenue}</span>
              <span className="text-white font-bold">{hostel.distanceToVenue}</span>
            </div>
          </div>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Hostels", href: "/hostels" }, { label: hostel.name }]} />

      {/* Main Content */}
      <section className="py-12 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">About {hostel.name}</h2>
                <p className="text-text-secondary leading-relaxed">
                  {hostel.name} is a fan-verified hostel in {hostel.city}, located just {hostel.distanceToVenue} from {hostel.nearestVenue}.
                  With a fan rating of {hostel.fanRating}/5 and prices starting at ${hostel.pricePerNight}/night,
                  it&apos;s one of the top choices for sports and music fans visiting {hostel.city}.
                  The hostel is known for its {hostel.vibes.slice(0, 3).join(", ").toLowerCase()} atmosphere.
                </p>
              </div>

              {/* Fan Vibe */}
              <div>
                <h3 className="text-xl font-bold text-white mb-3">The Fan Vibe</h3>
                <div className="flex flex-wrap gap-2">
                  {hostel.vibes.map((vibe) => (
                    <span key={vibe} className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm">
                      {vibe}
                    </span>
                  ))}
                </div>
              </div>

              {/* Fan-Friendly Score */}
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Fan-Friendly Score</h3>
                <div className="flex items-center gap-6">
                  <FanScore score={Math.round(hostel.fanRating * 20)} />
                  <div>
                    <p className="text-white font-semibold">{hostel.fanRating >= 4.5 ? "Outstanding" : hostel.fanRating >= 4 ? "Excellent" : "Good"} for fans</p>
                    <p className="text-text-secondary text-sm">Based on proximity, vibe, and fan reviews</p>
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h3 className="text-xl font-bold text-white mb-3">What&apos;s Included</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {["WiFi", "Kitchen", "Lockers", "Common Area", "24/7 Reception", "Luggage Storage"].map((amenity) => (
                    <div key={amenity} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-card text-text-secondary text-sm">
                      <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={amenityIcons[amenity] || "M5 13l4 4L19 7"} />
                      </svg>
                      {amenity}
                    </div>
                  ))}
                </div>
              </div>

              {/* Booking Tip */}
              <div className="glass-card rounded-2xl p-6 border border-accent/20">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" />
                  </svg>
                  <div>
                    <h4 className="text-accent font-bold mb-1">Booking Tip</h4>
                    <p className="text-text-secondary text-sm">Book early during major events at {hostel.nearestVenue}. Prices increase significantly for derby days and sold-out concerts. Consider booking at least 2-3 weeks in advance for the best rates.</p>
                  </div>
                </div>
              </div>

              {/* Safety */}
              <div className="glass-card rounded-2xl p-6 border border-green-500/20">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div>
                    <h4 className="text-green-400 font-bold mb-1">Safety & Inclusivity</h4>
                    <p className="text-text-secondary text-sm">This hostel welcomes all fans regardless of team allegiance. Secure lockers available. 24/7 reception for late arrivals after events. Well-lit neighborhood with good transit connections.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              <div className="glass-card rounded-2xl p-6 sticky top-24">
                <div className="text-center mb-6">
                  <span className="text-3xl font-black text-accent">${hostel.pricePerNight}</span>
                  <span className="text-white/50">/night</span>
                  <p className="text-text-muted text-sm mt-1">Dorm bed</p>
                </div>

                <button className="btn-primary w-full text-center mb-4">Check Availability</button>

                <dl className="space-y-3 pt-4 border-t border-white/10">
                  <div className="flex justify-between">
                    <dt className="text-text-muted text-sm">Rating</dt>
                    <dd className="text-white font-medium text-sm">{hostel.rating}/5</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-text-muted text-sm">Fan Rating</dt>
                    <dd className="text-primary font-medium text-sm">{hostel.fanRating}/5</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-text-muted text-sm">Nearest Venue</dt>
                    <dd className="text-white font-medium text-sm">{hostel.nearestVenue}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-text-muted text-sm">Distance</dt>
                    <dd className="text-white font-medium text-sm">{hostel.distanceToVenue}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-text-muted text-sm">Verified</dt>
                    <dd className={`font-medium text-sm ${hostel.verified ? "text-green-400" : "text-yellow-400"}`}>
                      {hostel.verified ? "Yes" : "Pending"}
                    </dd>
                  </div>
                </dl>

                {nearestVenue && (
                  <Link href={`/venues/${nearestVenue.slug}`} className="block mt-4 p-3 rounded-xl bg-surface-card hover:bg-surface-light transition-colors">
                    <span className="text-xs text-text-muted block">Nearest Venue</span>
                    <span className="text-white font-medium text-sm">{nearestVenue.name}</span>
                    <span className="text-text-muted text-xs block">{hostel.distanceToVenue}</span>
                  </Link>
                )}
              </div>

              {cityEvents.length > 0 && (
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Events Nearby</h3>
                  <ul className="space-y-3">
                    {cityEvents.slice(0, 4).map((event) => (
                      <li key={event.slug}>
                        <Link href={`/events/${event.slug}`} className="block p-2 rounded-lg hover:bg-surface-card transition-colors">
                          <span className="text-white text-sm font-medium block">{event.title}</span>
                          <span className="text-text-muted text-xs">{event.date} &middot; {event.venue}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* More Hostels */}
      {moreHostels.length > 0 && (
        <section className="py-12 bg-surface-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-6">More Hostels in {hostel.city}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {moreHostels.map((h) => (<HostelCard key={h.slug} {...h} />))}
            </div>
          </div>
        </section>
      )}

      <section className="py-12 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQSection faqs={faqs} />
        </div>
      </section>
    </>
  );
}
