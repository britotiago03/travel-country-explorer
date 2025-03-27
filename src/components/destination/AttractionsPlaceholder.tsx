'use client';

import React from 'react';

type AttractionsPlaceholderProps = {
    regionName: string;
};

export default function AttractionsPlaceholder({ regionName }: AttractionsPlaceholderProps) {
    // Example attraction categories for demonstration
    const categories = [
        { name: 'Cultural', icon: '🏛️' },
        { name: 'Nature', icon: '🏞️' },
        { name: 'Food & Drink', icon: '🍷' },
        { name: 'Beaches', icon: '🏖️' },
        { name: 'Activities', icon: '🥾' }
    ];

    return (
        <section id="attractions" className="mt-8 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Top Attractions</h2>

                <div className="flex overflow-x-auto pb-4 space-x-2 mb-6">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 px-4 py-2 bg-blue-50 hover:bg-blue-100
                                     text-blue-700 rounded-full cursor-pointer flex items-center"
                        >
                            <span className="mr-1.5">{category.icon}</span>
                            {category.name}
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Placeholder attraction cards */}
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm border border-gray-200">
                            <div className="h-48 bg-gray-200 animate-pulse"></div>
                            <div className="p-4">
                                <div className="h-5 bg-gray-300 rounded w-3/4 mb-2 animate-pulse"></div>
                                <div className="h-4 bg-gray-200 rounded w-1/4 mb-3 animate-pulse"></div>
                                <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
                                <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
                                <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 flex justify-center">
                    <div className="bg-blue-50 text-blue-800 rounded-lg p-4 max-w-lg text-center">
                        <h3 className="font-medium mb-2">Attractions Coming Soon</h3>
                        <p className="text-sm text-blue-600">
                            We're currently gathering the best attractions in {regionName} for you.
                            Check back soon to discover amazing places to visit!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}