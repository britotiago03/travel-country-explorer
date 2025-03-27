'use client';

import React from 'react';
import Link from 'next/link';

type MiniMapProps = {
    countrySlug: string;
    regionSlug: string;
};

export default function MiniMap({ countrySlug }: MiniMapProps) {
    return (
        <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
            <div className="text-center">
                <p className="text-gray-600 mb-2">Interactive map coming soon</p>
                <Link
                    href={`/countries/${countrySlug}#map`}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    View on Country Map
                </Link>
            </div>
        </div>
    );
}