'use client';

import { useState } from 'react';

const filterOptions = [
  { label: 'All', value: 'all' },
  { label: 'Sports', value: 'sports' },
  { label: 'Concerts', value: 'concerts' },
  { label: 'Cities', value: 'cities' },
  { label: 'Hostels', value: 'hostels' },
] as const;

type FilterValue = (typeof filterOptions)[number]['value'];

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all');

  return (
    <div className="w-full" role="search" aria-label="Search FanHostel">
      {/* Search Input */}
      <div className="relative">
        <label htmlFor="search-input" className="sr-only">
          Search cities, venues, events, or hostels
        </label>
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-text-muted"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <input
          id="search-input"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search cities, venues, events, or hostels..."
          className="w-full pl-12 pr-4 py-4 sm:py-5 bg-surface-card rounded-2xl text-white text-base sm:text-lg placeholder:text-text-muted border border-white/10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            className="absolute inset-y-0 right-0 flex items-center pr-4 text-text-muted hover:text-white transition-colors"
            aria-label="Clear search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Filter Chips */}
      <div
        className="mt-3 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none"
        role="radiogroup"
        aria-label="Filter search results"
      >
        {filterOptions.map((filter) => (
          <button
            key={filter.value}
            type="button"
            role="radio"
            aria-checked={activeFilter === filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 min-h-[44px] ${
              activeFilter === filter.value
                ? 'gradient-primary text-white shadow-lg shadow-primary/25'
                : 'bg-white/5 text-text-secondary hover:bg-white/10 hover:text-white border border-white/10'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
}
