'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Region } from '@/data/countries';

type RegionalBreakdownProps = {
    regions: Region[];
};

export default function RegionalBreakdown({ regions }: RegionalBreakdownProps) {
    return (
        <section className="mt-12" id="regions">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Regions of Portugal</h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
                Portugal is divided into diverse regions, each with its own unique character, landscapes, and attractions.
                Explore the different areas to get a better understanding of what each has to offer.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regions.map((region) => (
                    <Link
                        href={`/regions/${region.slug}`}
                        key={region.slug}
                        className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                        <div className="relative h-48 w-full">
                            <Image
                                src={`/images/regions/${region.slug}.jpg`}
                                alt={`${region.name} region`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                                <div className="absolute bottom-3 left-3 text-white font-semibold text-lg">
                                    {region.name}
                                </div>
                            </div>
                        </div>

                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{region.name}</h3>
                            <p className="text-gray-600 text-sm">{region.summary}</p>

                            <div className="mt-4 text-blue-600 text-sm font-medium flex items-center">
                                Explore region
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-4 h-4 ml-1"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}