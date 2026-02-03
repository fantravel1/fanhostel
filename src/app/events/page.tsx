import type { Metadata } from "next";
import { events } from "@/data/events";
import EventCard from "@/components/EventCard";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQSection from "@/components/FAQSection";
import NewsletterSignup from "@/components/NewsletterSignup";

export const metadata: Metadata = {
  title: "Upcoming Games, Concerts & Festivals",
  description: "Find upcoming sports events, concerts, and festivals worldwide. Discover the best fan hostels near every major event. From Premier League derbies to world tours.",
  alternates: { canonical: "https://fanhostel.com/events" },
};

const typeColors: Record<string, string> = {
  football: "bg-green-500/20 text-green-400 border-green-500/30",
  basketball: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  baseball: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  hockey: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  concert: "bg-pink-500/20 text-pink-400 border-pink-500/30",
  festival: "bg-teal-500/20 text-teal-400 border-teal-500/30",
};

const faqs = [
  { question: "How far in advance should I book a hostel for a major event?", answer: "For high-demand events like El Clasico, the Superclasico, or major concert tours, we recommend booking 3-4 weeks ahead. For extreme-demand events like Champions League knockouts or Taylor Swift concerts, book as soon as dates are announced." },
  { question: "Do hostel prices increase during events?", answer: "Yes, prices typically increase 20-50% during major events. However, hostels still offer the best value compared to hotels. Our listings always show current price ranges so you can plan your budget." },
  { question: "What types of events does FanHostel cover?", answer: "We cover football (soccer), basketball, baseball, hockey, concerts, and festivals worldwide. From local derbies to World Cup matches, from indie festivals to stadium tours." },
];

export default function EventsPage() {
  return (
    <>
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1920&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#0F0F1A]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Upcoming Events</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">Big games, massive shows, and legendary festivals. Find your fan hostel before they fill up.</p>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Events" }]} />

      <section className="py-12 md:py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 mb-10">
            {["All", "Football", "Basketball", "Baseball", "Hockey", "Concerts", "Festivals"].map((filter) => (
              <span key={filter} className={`px-4 py-2 rounded-full text-sm font-medium border cursor-pointer transition-colors ${filter === "All" ? "bg-primary/20 text-primary border-primary/30" : "bg-surface-card border-white/10 text-white/70 hover:border-primary hover:text-primary"}`}>
                {filter}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <EventCard key={event.slug} {...event} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-white text-center mb-8">Event FAQs</h2>
          <FAQSection faqs={faqs} />
        </div>
      </section>

      <section className="py-16 bg-surface">
        <NewsletterSignup />
      </section>
    </>
  );
}
