import React from 'react';
import Link from 'next/link';
import { countryList } from '@/data/countries';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About section */}
                    <div className="md:col-span-2">
                        <h2 className="text-xl font-semibold mb-4">Travel Country Explorer</h2>
                        <p className="text-gray-300 mb-4">
                            Comprehensive guides to help travelers understand countries deeply before visiting—from
                            regional insights and culture to climate, attractions, and the best times to visit.
                        </p>
                        <p className="text-gray-300">
                            © {new Date().getFullYear()} Travel Country Explorer. All rights reserved.
                        </p>
                    </div>

                    {/* Countries section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Countries</h3>
                        <ul className="space-y-2">
                            {countryList.map(country => (
                                <li key={country.slug}>
                                    <Link
                                        href={`/countries/${country.slug}`}
                                        className="text-gray-300 hover:text-white transition-colors"
                                    >
                                        {country.name}
                                    </Link>
                                </li>
                            ))}
                            <li className="text-gray-400">More coming soon...</li>
                        </ul>
                    </div>

                    {/* Quick Links section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={`/about`}
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={`/countries/portugal`}
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    Explore Portugal
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}