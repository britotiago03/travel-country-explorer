import React from 'react';

export default function ClimateOverviewTab() {
    return (
        <div>
            <p className="text-gray-600 mb-6">
                Portugal generally enjoys a Mediterranean climate with mild winters and warm summers.
                The north tends to be cooler and wetter, while the south (especially Algarve) is warmer and drier.
                Coastal areas benefit from ocean breezes that moderate temperatures.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Best Time to Visit */}
                <div className="bg-blue-50 p-5 rounded-lg border border-blue-200 shadow-sm">
                    <h3 className="text-lg font-medium text-blue-800 mb-3">Best Time to Visit</h3>
                    <p className="text-gray-700">
                        The ideal time to visit Portugal is during spring (April-June) and early fall (September-October)
                        when temperatures are pleasant, crowds are smaller, and prices are lower than peak summer.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium">April</span>
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium">May</span>
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium">June</span>
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium">September</span>
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium">October</span>
                    </div>
                </div>

                {/* Peak Tourist Season */}
                <div className="bg-amber-50 p-5 rounded-lg border border-amber-200 shadow-sm">
                    <h3 className="text-lg font-medium text-amber-800 mb-3">Peak Season</h3>
                    <p className="text-gray-700">
                        July and August are the busiest months with higher prices and crowded attractions,
                        especially in coastal areas like the Algarve. Expect hot temperatures and bustling beaches.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-red-100 text-red-800 text-xs rounded-full font-medium">July</span>
                        <span className="px-3 py-1 bg-red-100 text-red-800 text-xs rounded-full font-medium">August</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Off Season */}
                <div className="bg-purple-50 p-5 rounded-lg border border-purple-200 shadow-sm">
                    <h3 className="text-lg font-medium text-purple-800 mb-3">Off-Season Travel</h3>
                    <p className="text-gray-700">
                        Winter (November-March) offers the lowest prices and fewest tourists. While some coastal
                        resorts may be quiet or closed, cities like Lisbon and Porto remain lively year-round, with
                        mild temperatures making sightseeing comfortable. Expect more rain, especially in the north.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium">November</span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium">December</span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium">January</span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium">February</span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium">March</span>
                    </div>
                </div>

                {/* Weather Considerations */}
                <div className="bg-green-50 p-5 rounded-lg border border-green-200 shadow-sm">
                    <h3 className="text-lg font-medium text-green-800 mb-3">Weather Considerations</h3>
                    <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>North: Cooler and wetter than the rest of the country</span>
                        </li>
                        <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Interior: Hotter summers and colder winters than coastal areas</span>
                        </li>
                        <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Algarve: Sunniest and warmest region year-round</span>
                        </li>
                        <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Madeira: Subtropical climate with year-round mild temperatures</span>
                        </li>
                        <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Azores: Mild but unpredictable maritime climate with frequent rain showers</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}