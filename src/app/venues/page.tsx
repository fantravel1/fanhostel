import type { Metadata } from "next";
import Link from "next/link";
import { venues } from "@/data/venues";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Stadiums, Arenas & Concert Venues",
  description: "Explore the world's greatest stadiums, arenas, and concert venues. Find fan hostels near every major venue for sports events and concerts.",
  alternates: { canonical: "https://fanhostel.com/venues" },
};

const typeColors: Record<string, string> = {
  stadium: "bg-green-500/20 text-green-400 border-green-500/30",
  arena: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  "concert-hall": "bg-pink-500/20 text-pink-400 border-pink-500/30",
  "festival-grounds": "bg-teal-500/20 text-teal-400 border-teal-500/30",
};

const faqs = [
  { question: "How do I find hostels near a specific stadium?", answer: "Visit any venue page on FanHostel to see verified hostels sorted by walking distance. We list fan-verified accommodation near every major stadium, arena, and concert venue." },
  { question: "What venues does FanHostel cover?", answer: "We cover 1,500+ venues worldwide including iconic stadiums like Camp Nou, Wembley, and Estadio Azteca, plus arenas like Madison Square Garden and concert venues in every major fan city." },
  { question: "Are walking distances accurate?", answer: "Yes, all walking distances are measured from the hostel entrance to the main venue gates. We also include transit information for venues that are best reached by public transport." },
];

export default function VenuesPage() {
  return (
    <>
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1459865264687-595d652de67e?w=1920&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#0F0F1A]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Stadiums, Arenas & Venues</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">The world&apos;s greatest sporting and music venues. Find fan hostels near every one.</p>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Venues" }]} />

      <section className="py-12 md:py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 mb-10">
            {["All", "Stadiums", "Arenas", "Concert Halls", "Festival Grounds"].map((filter) => (
              <span key={filter} className="px-4 py-2 rounded-full text-sm font-medium bg-surface-card border border-white/10 text-white/70 hover:border-primary hover:text-primary transition-colors cursor-pointer">
                {filter}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {venues.map((venue) => (
              <Link key={venue.slug} href={`/venues/${venue.slug}`} className="group glass-card rounded-2xl overflow-hidden card-hover">
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url('${venue.image}')` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className={`event-badge border ${typeColors[venue.type] || typeColors.stadium}`}>{venue.type.replace("-", " ")}</span>
                  </div>
                  <div className="absolute bottom-3 right-3 text-right">
                    <span className="text-xs text-white/70">{venue.capacity.toLocaleString()} capacity</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors mb-1">{venue.name}</h3>
                  <p className="text-sm text-text-secondary mb-3">{venue.city}</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {venue.teams.slice(0, 3).map((team) => (
                      <span key={team} className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-white/60">{team}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-accent font-medium">{venue.nearbyHostels} nearby hostels</span>
                    <span className="text-text-muted">{venue.walkingDistance}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-white text-center mb-8">Venue FAQs</h2>
          <FAQSection faqs={faqs} />
        </div>
      </section>
    </>
  );
}
