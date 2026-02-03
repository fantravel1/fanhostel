import type { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import NewsletterSignup from '@/components/NewsletterSignup';

export const metadata: Metadata = {
  title: 'About FanHostel - The Fan-First Hostel Platform',
  description:
    'FanHostel is the world\'s first fan-first accommodation intelligence platform. We help sports and music fans find verified, budget-friendly hostels near stadiums, arenas, and concert venues worldwide.',
  alternates: {
    canonical: 'https://fanhostel.com/about',
  },
  openGraph: {
    title: 'About FanHostel - The Fan-First Hostel Platform',
    description:
      'Sleep With the Fans. Wake Up for the Game. Learn about the mission, values, and vision behind FanHostel.',
    url: 'https://fanhostel.com/about',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'About FanHostel',
      },
    ],
  },
};

const differentiators = [
  {
    title: 'Fan-Verified',
    description:
      'Every hostel on FanHostel is verified by real fans who have stayed there during events. Not algorithms, not bots — real people who went to the game and slept in the bed.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
          clipRule="evenodd"
        />
      </svg>
    ),
    color: 'text-accent',
    bgColor: 'bg-accent/10',
  },
  {
    title: 'Event-Aware',
    description:
      'We track event calendars across 1,500+ venues worldwide. When a match, concert, or festival is coming, we surface the best hostels for that specific event and flag demand surges.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
        />
      </svg>
    ),
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    title: 'Safety First',
    description:
      'Rigorous safety and inclusivity standards for every listing. We assess neighborhood safety, crowd dynamics, and provide specific guidance for solo travelers, women, and LGBTQ+ fans.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
    color: 'text-sport-football',
    bgColor: 'bg-sport-football/10',
  },
  {
    title: 'Budget-Smart',
    description:
      'Always the best value for fans. We track pricing trends around events and flag when prices are inflated. Our recommendations prioritize genuine value over commission kickbacks.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    color: 'text-music-festival',
    bgColor: 'bg-music-festival/10',
  },
];

const evidenceTiers = [
  {
    tier: 'A',
    label: 'Gold Standard',
    description:
      'On-site verification, multiple confirmed fan reviews, operator partnership, and live booking data. The highest level of trust.',
    color: 'text-accent border-accent/30 bg-accent/10',
    barWidth: 'w-full',
  },
  {
    tier: 'B',
    label: 'Verified',
    description:
      'Fan-confirmed reviews plus operator verification. Reliable data from multiple independent sources.',
    color: 'text-sport-football border-sport-football/30 bg-sport-football/10',
    barWidth: 'w-3/4',
  },
  {
    tier: 'C',
    label: 'Community Sourced',
    description:
      'Based on community reports and publicly available data. Good confidence but not independently verified.',
    color: 'text-sport-basketball border-sport-basketball/30 bg-sport-basketball/10',
    barWidth: 'w-2/4',
  },
  {
    tier: 'D',
    label: 'Unverified',
    description:
      'Preliminary listing based on location and basic criteria. Awaiting fan verification and additional evidence.',
    color: 'text-text-muted border-white/10 bg-white/5',
    barWidth: 'w-1/4',
  },
];

const stats = [
  { value: '1,000+', label: 'Fan Hostels', description: 'Verified worldwide' },
  { value: '250+', label: 'Cities', description: 'Across 6 continents' },
  { value: '1,500+', label: 'Venues', description: 'Stadiums & arenas' },
  { value: '12', label: 'Languages', description: 'Coming soon' },
];

const phases = [
  {
    phase: 'Phase 1',
    status: 'current',
    title: 'Foundation',
    description:
      'Launch core platform with 7 flagship cities, venue-hostel mapping, fan verification system, and curated collections. Build the intelligence layer that makes FanHostel different.',
    items: [
      '7 flagship fan cities',
      'Venue-hostel proximity mapping',
      'Fan verification system',
      'Event-aware recommendations',
      'Curated collections',
    ],
  },
  {
    phase: 'Phase 2',
    status: 'upcoming',
    title: 'Expansion',
    description:
      'Scale to 50+ cities, launch mobile app, introduce real-time pricing alerts, and build fan community features including trip planning tools.',
    items: [
      '50+ cities worldwide',
      'Mobile app (iOS & Android)',
      'Real-time price alerts',
      'Fan community profiles',
      'Trip planning tools',
    ],
  },
  {
    phase: 'Phase 3',
    status: 'future',
    title: 'Intelligence',
    description:
      'Full AI-powered recommendation engine, group booking coordination, loyalty program, and partnerships with leagues and touring companies.',
    items: [
      'AI-powered recommendations',
      'Group booking coordination',
      'Fan loyalty program',
      'League & tour partnerships',
      'Predictive pricing engine',
    ],
  },
];

const values = [
  {
    title: 'Fan Safety Above All',
    description:
      'Every recommendation considers the safety of the traveler. We never promote hostels in areas with known safety issues for fans, and we provide honest assessments of crowd dynamics and neighborhood risks.',
  },
  {
    title: 'Radical Inclusivity',
    description:
      'Sports and music are for everyone. We actively verify that hostels welcome fans regardless of nationality, race, gender, sexual orientation, or disability. Discrimination has no place in fan culture.',
  },
  {
    title: 'Anti-Discrimination',
    description:
      'We have a zero-tolerance policy for hostels that discriminate against fans based on team allegiance, nationality, or any other factor. Rivalry stays on the pitch — respect stays in the hostel.',
  },
  {
    title: 'Honest Reviews Only',
    description:
      'No paid placements. No fake reviews. No inflated ratings. Every review on FanHostel comes from a verified fan stay. We would rather have fewer reviews than dishonest ones.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1459865264687-595d652de67e?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/80 via-surface/70 to-surface" />

        {/* Accent lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse-slow" />
          <div
            className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent animate-pulse-slow"
            style={{ animationDelay: '2s' }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav
            items={[
              { label: 'Home', href: '/' },
              { label: 'About' },
            ]}
          />

          <div className="mt-8 text-center max-w-4xl mx-auto">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Story
            </span>
            <h1 className="section-title text-white mt-3">
              About FanHostel
            </h1>
            <p className="mt-6 text-2xl md:text-3xl font-display font-bold text-gradient leading-tight">
              Sleep With the Fans. Wake Up for the Game.
            </p>
            <p className="mt-6 text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              The world&apos;s first accommodation platform built by fans, for fans.
              We believe every supporter deserves a great place to stay near the
              action — without breaking the bank.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Why We Exist
            </span>
            <h2 className="section-title text-white mt-3">Our Mission</h2>
            <div className="mt-8 space-y-6 text-text-secondary text-lg leading-relaxed">
              <p>
                Every year, millions of fans travel to see their teams play and
                their favorite artists perform. They pack stadiums in foreign
                cities, sleep on airport floors, overpay for distant hotels, and
                miss out on the community that makes fan travel special.
              </p>
              <p>
                <strong className="text-white">FanHostel exists to change that.</strong>{' '}
                We are building the world&apos;s definitive fan-first accommodation
                intelligence platform. Not just another booking site — a living,
                breathing knowledge system that understands the relationship
                between events, venues, and the places fans sleep.
              </p>
              <p>
                We map every hostel to the nearest stadium. We track event
                calendars to anticipate demand. We verify every listing through
                real fan experiences. And we do it all with one goal:{' '}
                <strong className="text-primary">
                  make sure every fan finds a safe, affordable, atmospheric place
                  to stay near the action.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              The FanHostel Difference
            </span>
            <h2 className="section-title text-white mt-3">
              What Makes Us Different
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {differentiators.map((diff) => (
              <div
                key={diff.title}
                className="glass-card rounded-2xl p-6 md:p-8 card-hover"
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${diff.bgColor} ${diff.color} mb-5`}
                >
                  {diff.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {diff.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {diff.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evidence System */}
      <section className="py-16 md:py-24 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Trust & Verification
            </span>
            <h2 className="section-title text-white mt-3">
              Our Evidence System
            </h2>
            <p className="mt-4 text-lg text-text-secondary leading-relaxed">
              Every hostel on FanHostel goes through our multi-tier evidence
              system. We believe in transparency — you should always know how
              confident we are in our recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {evidenceTiers.map((tier) => (
              <div
                key={tier.tier}
                className={`glass-card rounded-2xl p-6 border ${tier.color}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-xl font-bold text-lg ${tier.color}`}
                  >
                    {tier.tier}
                  </span>
                  <div>
                    <h3 className="font-bold text-white">{tier.label}</h3>
                  </div>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {tier.description}
                </p>
                <div className="w-full h-1.5 rounded-full bg-white/10">
                  <div
                    className={`h-full rounded-full ${tier.barWidth} ${
                      tier.tier === 'A'
                        ? 'bg-accent'
                        : tier.tier === 'B'
                        ? 'bg-sport-football'
                        : tier.tier === 'C'
                        ? 'bg-sport-basketball'
                        : 'bg-text-muted'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Numbers */}
      <section className="py-16 md:py-24 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              By The Numbers
            </span>
            <h2 className="section-title text-white mt-3">The Numbers</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-2xl p-6 md:p-8 text-center card-hover"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-black text-gradient">
                  {stat.value}
                </div>
                <div className="text-white font-bold mt-2">{stat.label}</div>
                <div className="text-text-muted text-sm mt-1">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phase Roadmap */}
      <section className="py-16 md:py-24 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Where We&apos;re Going
            </span>
            <h2 className="section-title text-white mt-3">Phase Roadmap</h2>
            <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
              Building the future of fan accommodation, one phase at a time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {phases.map((phase, index) => (
              <div
                key={phase.phase}
                className={`relative glass-card rounded-2xl p-6 md:p-8 ${
                  phase.status === 'current' ? 'glow-primary border-primary/30' : ''
                }`}
              >
                {/* Status Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`event-badge border ${
                      phase.status === 'current'
                        ? 'bg-primary/20 text-primary border-primary/30'
                        : phase.status === 'upcoming'
                        ? 'bg-accent/20 text-accent border-accent/30'
                        : 'bg-white/5 text-text-muted border-white/10'
                    }`}
                  >
                    {phase.phase}
                  </span>
                  {phase.status === 'current' && (
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-sport-football">
                      <span className="w-2 h-2 bg-sport-football rounded-full animate-pulse" />
                      Active
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {phase.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-5">
                  {phase.description}
                </p>

                <ul className="space-y-2">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          phase.status === 'current'
                            ? 'text-primary'
                            : 'text-text-muted'
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Timeline connector */}
                {index < phases.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-white/20 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              What We Stand For
            </span>
            <h2 className="section-title text-white mt-3">Our Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="glass-card rounded-2xl p-6 md:p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    {value.title}
                  </h3>
                </div>
                <p className="text-text-secondary leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Community CTA */}
      <section className="py-16 md:py-24 bg-surface-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Be Part of It
            </span>
            <h2 className="section-title text-white mt-3">
              Join the Community
            </h2>
            <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
              FanHostel is built by fans, for fans. Join 50,000+ supporters who
              get exclusive hostel deals, event alerts, and fan travel tips.
            </p>
          </div>

          <NewsletterSignup />

          <div className="mt-12 text-center">
            <p className="text-text-muted text-sm mb-4">
              Want to partner with us or list your hostel?
            </p>
            <Link
              href="/hostels"
              className="btn-secondary"
            >
              Explore Fan Hostels
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
