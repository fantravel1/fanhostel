'use client';

import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section
      className="glass-card rounded-2xl p-6 sm:p-8 md:p-12 glow-primary"
      aria-label="Newsletter signup"
    >
      <div className="max-w-2xl mx-auto text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl gradient-primary mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </div>

        <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
          Never Miss a Match-Day Deal
        </h2>
        <p className="mt-3 text-text-secondary text-sm sm:text-base leading-relaxed">
          Get exclusive hostel deals near upcoming events, new city launches,
          and fan travel tips delivered to your inbox.
        </p>

        {/* Social Proof */}
        <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full bg-primary/30 border-2 border-surface-card" />
            <div className="w-6 h-6 rounded-full bg-accent/30 border-2 border-surface-card" />
            <div className="w-6 h-6 rounded-full bg-sport-football/30 border-2 border-surface-card" />
          </div>
          <span className="text-xs font-medium text-text-secondary">
            Join <strong className="text-white">50,000+</strong> fans
          </span>
        </div>

        {submitted ? (
          <div className="mt-8 p-4 rounded-xl bg-success/10 border border-success/20">
            <div className="flex items-center justify-center gap-2 text-success">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-semibold">
                You&apos;re in! Check your inbox for confirmation.
              </span>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-5 py-3.5 bg-surface rounded-xl text-white placeholder:text-text-muted border border-white/10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-base min-h-[48px]"
            />
            <button
              type="submit"
              className="btn-primary text-base px-8 py-3.5 shrink-0 min-h-[48px]"
            >
              Subscribe
            </button>
          </form>
        )}

        {/* Privacy Note */}
        <p className="mt-4 text-xs text-text-muted">
          We respect your privacy. Unsubscribe at any time.{' '}
          <a href="/privacy" className="underline hover:text-primary transition-colors">
            Privacy Policy
          </a>
        </p>
      </div>
    </section>
  );
}
