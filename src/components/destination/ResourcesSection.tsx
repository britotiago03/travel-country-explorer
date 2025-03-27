'use client';

import React from 'react';
import Link from 'next/link';

type ResourcesSectionProps = {
    regionName: string;
    countryName: string;
    regionSlug: string;
    countrySlug: string;
};

export default function ResourcesSection({
                                             regionName,
                                             countryName,
                                             regionSlug,
                                             countrySlug
                                         }: ResourcesSectionProps) {
    return (
        <section className="mt-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Plan Your Trip to {regionName}</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Essential Resources */}
                    <div className="bg-white rounded-lg shadow-sm p-5">
                        <div className="text-2xl mb-3">📚</div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Essential Resources</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <svg className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <Link href={`/countries/${countrySlug}/travel-guide`} className="text-blue-600 hover:underline">
                                    {countryName} Travel Guide
                                </Link>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <Link href={`/countries/${countrySlug}/practical-info`} className="text-blue-600 hover:underline">
                                    Practical Information
                                </Link>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <Link href={`/countries/${countrySlug}/transportation`} className="text-blue-600 hover:underline">
                                    Transportation Guide
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Nearby Regions */}
                    <div className="bg-white rounded-lg shadow-sm p-5">
                        <div className="text-2xl mb-3">🗺️</div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Explore Nearby</h3>
                        <ul className="space-y-2 text-gray-700">
                            {getNearbyRegions(regionSlug).map((region, index) => (
                                <li key={index} className="flex items-start">
                                    <svg className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <Link href={`/countries/${countrySlug}/regions/${region.slug}`} className="text-blue-600 hover:underline">
                                        {region.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Trip Planning Tools */}
                    <div className="bg-white rounded-lg shadow-sm p-5">
                        <div className="text-2xl mb-3">🧩</div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Trip Planning Tools</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <svg className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <Link href={`/countries/${countrySlug}/itinerary-planner`} className="text-blue-600 hover:underline">
                                    Itinerary Planner
                                </Link>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <Link href={`/countries/${countrySlug}/budget-calculator`} className="text-blue-600 hover:underline">
                                    Budget Calculator
                                </Link>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <Link href={`/countries/${countrySlug}/travel-advice`} className="text-blue-600 hover:underline">
                                    Personalized Advice
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <Link
                        href={`/countries/${countrySlug}`}
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                        Back to {countryName} Overview
                    </Link>
                </div>
            </div>
        </section>
    );
}

// Helper function to get nearby regions based on the current region
function getNearbyRegions(regionSlug: string): Array<{ name: string, slug: string }> {
    const nearbyRegionsMap: Record<string, Array<{ name: string, slug: string }>> = {
        'north-region': [
            { name: 'Central Region', slug: 'central-region' },
            { name: 'West & Tagus Valley', slug: 'west-tagus-valley' },
            { name: 'Greater Lisbon', slug: 'greater-lisbon' }
        ],
        'central-region': [
            { name: 'North Region', slug: 'north-region' },
            { name: 'Greater Lisbon', slug: 'greater-lisbon' },
            { name: 'West & Tagus Valley', slug: 'west-tagus-valley' }
        ],
        'greater-lisbon': [
            { name: 'Central Region', slug: 'central-region' },
            { name: 'Setúbal Peninsula', slug: 'setubal-peninsula' },
            { name: 'Alentejo Region', slug: 'alentejo-region' }
        ],
        'algarve-region': [
            { name: 'Alentejo Region', slug: 'alentejo-region' },
            { name: 'Setúbal Peninsula', slug: 'setubal-peninsula' },
            { name: 'Madeira Autonomous Region', slug: 'madeira-region' }
        ],
        'alentejo-region': [
            { name: 'Greater Lisbon', slug: 'greater-lisbon' },
            { name: 'Algarve Region', slug: 'algarve-region' },
            { name: 'Setúbal Peninsula', slug: 'setubal-peninsula' }
        ],
        'madeira-region': [
            { name: 'Azores Autonomous Region', slug: 'azores-region' },
            { name: 'Algarve Region', slug: 'algarve-region' },
            { name: 'Greater Lisbon', slug: 'greater-lisbon' }
        ],
        'azores-region': [
            { name: 'Madeira Autonomous Region', slug: 'madeira-region' },
            { name: 'North Region', slug: 'north-region' },
            { name: 'Greater Lisbon', slug: 'greater-lisbon' }
        ],
        'setubal-peninsula': [
            { name: 'Greater Lisbon', slug: 'greater-lisbon' },
            { name: 'Alentejo Region', slug: 'alentejo-region' },
            { name: 'Algarve Region', slug: 'algarve-region' }
        ],
        'west-tagus-valley': [
            { name: 'Central Region', slug: 'central-region' },
            { name: 'North Region', slug: 'north-region' },
            { name: 'Greater Lisbon', slug: 'greater-lisbon' }
        ]
    };

    return nearbyRegionsMap[regionSlug] || [
        { name: 'North Region', slug: 'north-region' },
        { name: 'Central Region', slug: 'central-region' },
        { name: 'Greater Lisbon', slug: 'greater-lisbon' }
    ];
}