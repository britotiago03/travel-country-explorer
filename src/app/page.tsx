'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { countryList } from '@/data/countries';

export default function HomePage() {
  return (
      <main className="min-h-screen pt-16"> {/* Added pt-16 for navbar space */}
        {/* Hero Section */}
        <section className="relative text-white">
          <div className="relative h-[600px]">
            <Image
                src="/images/hero-lisbon.jpg"
                alt="Beautiful view of Lisbon, Portugal"
                fill
                className="object-cover brightness-75"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-black/40">
              <div className="max-w-5xl mx-auto text-center h-full flex flex-col justify-center items-center px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
                  Travel Country Explorer
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md">
                  Discover everything you need to know about a country before you travel - from cultural tips and regional insights to the best times to visit.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                      href={`/countries/portugal`}
                      className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-colors shadow-lg"
                  >
                    Explore Portugal
                  </Link>
                  <Link
                      href={`#countries`}
                      className="bg-transparent border border-white text-white hover:bg-white/30 px-6 py-3 rounded-md font-medium transition-colors shadow-lg"
                  >
                    View All Countries
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Everything You Need for Smart Travel Planning
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Cultural Insights</h3>
                <p className="text-gray-600">
                  Learn about local customs, etiquette, and language to ensure respectful and meaningful interactions with local communities.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Regional Breakdown</h3>
                <p className="text-gray-600">
                  Discover the unique character of each region within a country, from bustling cities to tranquil countryside and coastal gems.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Best Time to Visit</h3>
                <p className="text-gray-600">
                  Get month-by-month insights on weather, crowds, and events to plan your trip during the perfect season.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Countries Section */}
        <section id="countries" className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Explore Countries
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {countryList.map((country) => (
                  <Link
                      key={country.slug}
                      href={`/countries/${country.slug}`}
                      className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="relative h-40 w-full overflow-hidden">
                      <Image
                          src={`/images/countries/${country.slug}-card.jpg`}
                          alt={country.name}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                        <div className="absolute bottom-3 left-3 text-white font-semibold text-lg">
                          {country.name}
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800">{country.name}</h3>
                      <div className="mt-2 text-blue-600 text-sm font-medium flex items-center">
                        Explore
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </div>
                    </div>
                  </Link>
              ))}

              {/* Coming Soon Placeholder */}
              <div className="block bg-white rounded-lg shadow-md overflow-hidden border-2 border-dashed border-gray-300">
                <div className="h-40 bg-gray-50 flex items-center justify-center">
                  <span className="text-gray-400 font-medium">Coming Soon</span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-400">More Countries</h3>
                  <p className="mt-2 text-gray-400 text-sm">We're expanding our coverage!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-600 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Explore Portugal?</h2>
            <p className="text-xl mb-8">
              Start your journey with our comprehensive guide to Portuguese culture, regions, and travel essentials.
            </p>
            <Link
                href={`/countries/portugal`}
                className="inline-block bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-md font-medium text-lg transition-colors"
            >
              Discover Portugal
            </Link>
          </div>
        </section>
      </main>
  );
}