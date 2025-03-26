'use client';

import React, { useState } from 'react';

type TravelEssentialsSectionProps = {
    connectivity: string;
    transportation: string;
    electricity: string;
    cuisine: string;
    countryName: string;
};

export default function TravelEssentialsSection({
                                                    connectivity,
                                                    transportation,
                                                    electricity,
                                                    cuisine,
                                                    countryName
                                                }: TravelEssentialsSectionProps) {
    const [activeTab, setActiveTab] = useState('connectivity');

    // Split multi-sentence content into bullet points
    const processParagraph = (text: string) => {
        const sentences = text.split(/\.(?:\s|$)/).filter(sentence => sentence.trim().length > 0);
        return sentences.map(sentence => sentence.trim() + (sentence.trim().endsWith('.') ? '' : '.'));
    };

    const connectivityPoints = processParagraph(connectivity);
    const transportationPoints = processParagraph(transportation);
    const electricityPoints = processParagraph(electricity);
    const cuisinePoints = processParagraph(cuisine);

    // Common checkmark icon component for consistency
    const CheckmarkIcon = () => (
        <svg className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );

    return (
        <section className="bg-white rounded-lg shadow-md" id="travel-essentials">
            <h2 className="text-2xl font-semibold text-gray-800 p-6 border-b">
                Travel Essentials
            </h2>

            {/* Navigation Tabs */}
            <div className="flex overflow-x-auto border-b">
                <button
                    onClick={() => setActiveTab('connectivity')}
                    className={`px-4 py-3 font-medium text-sm whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                        activeTab === 'connectivity'
                            ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                            : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                    }`}
                >
                    Connectivity
                </button>
                <button
                    onClick={() => setActiveTab('transportation')}
                    className={`px-4 py-3 font-medium text-sm whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                        activeTab === 'transportation'
                            ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                            : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                    }`}
                >
                    Transportation
                </button>
                <button
                    onClick={() => setActiveTab('electricity')}
                    className={`px-4 py-3 font-medium text-sm whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                        activeTab === 'electricity'
                            ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                            : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                    }`}
                >
                    Electricity
                </button>
                <button
                    onClick={() => setActiveTab('cuisine')}
                    className={`px-4 py-3 font-medium text-sm whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                        activeTab === 'cuisine'
                            ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                            : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                    }`}
                >
                    Local Cuisine
                </button>
            </div>

            {/* Content Sections */}
            <div className="p-6">
                {/* Connectivity */}
                {activeTab === 'connectivity' && (
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-blue-600">Internet & Connectivity</h3>
                                <p className="text-sm text-gray-500">Stay connected during your trip to {countryName}</p>
                            </div>
                        </div>

                        <div className="mt-4 space-y-2">
                            {connectivityPoints.map((point, index) => (
                                <div key={index} className="flex items-start">
                                    <CheckmarkIcon />
                                    <p className="text-gray-700">{point}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 bg-blue-50 p-4 rounded-md">
                            <h4 className="text-sm font-medium text-blue-700 mb-2">Traveler's Tip</h4>
                            <p className="text-sm text-gray-600">
                                Consider downloading offline maps and translation apps before your trip. Many apps allow you
                                to use essential features without an internet connection.
                            </p>
                        </div>
                    </div>
                )}

                {/* Transportation */}
                {activeTab === 'transportation' && (
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-blue-600">Getting Around</h3>
                                <p className="text-sm text-gray-500">Transportation options in {countryName}</p>
                            </div>
                        </div>

                        <div className="mt-4 space-y-2">
                            {transportationPoints.map((point, index) => (
                                <div key={index} className="flex items-start">
                                    <CheckmarkIcon />
                                    <p className="text-gray-700">{point}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-blue-50 p-4 rounded-md">
                                <h4 className="text-sm font-medium text-blue-700 mb-2">Public Transport</h4>
                                <p className="text-sm text-gray-600">
                                    Look for multi-day passes or tourist cards which can save money if you plan to use public transportation frequently.
                                </p>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-md">
                                <h4 className="text-sm font-medium text-blue-700 mb-2">Car Rental</h4>
                                <p className="text-sm text-gray-600">
                                    International driver's license may be required. Book in advance during peak tourist season.
                                </p>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-md">
                                <h4 className="text-sm font-medium text-blue-700 mb-2">Taxis & Rideshares</h4>
                                <p className="text-sm text-gray-600">
                                    Uber and local taxi services are available in major cities. Always check if the meter is running in traditional taxis.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Electricity */}
                {activeTab === 'electricity' && (
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-blue-600">Electricity & Plugs</h3>
                                <p className="text-sm text-gray-500">Power information for your devices</p>
                            </div>
                        </div>

                        <div className="mt-4 space-y-2">
                            {electricityPoints.map((point, index) => (
                                <div key={index} className="flex items-start">
                                    <CheckmarkIcon />
                                    <p className="text-gray-700">{point}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 flex justify-center">
                            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 inline-flex items-center space-x-6">
                                <div className="text-center">
                                    <div className="text-3xl mb-2">F</div>
                                    <div className="text-sm text-gray-500">Type F Plug</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl mb-2">230V</div>
                                    <div className="text-sm text-gray-500">Voltage</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl mb-2">50Hz</div>
                                    <div className="text-sm text-gray-500">Frequency</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 bg-blue-50 p-4 rounded-md">
                            <h4 className="text-sm font-medium text-blue-700 mb-2">Traveler's Tip</h4>
                            <p className="text-sm text-gray-600">
                                Many modern hotels have USB outlets for charging devices, but it's still recommended to bring
                                appropriate adapters for all your electronics.
                            </p>
                        </div>
                    </div>
                )}

                {/* Local Cuisine */}
                {activeTab === 'cuisine' && (
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-blue-600">Local Cuisine</h3>
                                <p className="text-sm text-gray-500">Food specialties and dining customs in {countryName}</p>
                            </div>
                        </div>

                        <div className="mt-4 space-y-2">
                            {cuisinePoints.map((point, index) => (
                                <div key={index} className="flex items-start">
                                    <CheckmarkIcon />
                                    <p className="text-gray-700">{point}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 bg-blue-50 p-4 rounded-md">
                            <h4 className="text-sm font-medium text-blue-700 mb-2">Dining Tips</h4>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <svg className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-sm text-gray-600">Lunch is typically served from 12:30-3:00 PM and dinner from 7:30-10:30 PM.</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                    </svg>
                                    <span className="text-sm text-gray-600">A service charge may not be included; tipping 5-10% is customary for good service.</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                    </svg>
                                    <span className="text-sm text-gray-600">When in doubt, ask for menu recommendations from locals or your hotel staff.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}