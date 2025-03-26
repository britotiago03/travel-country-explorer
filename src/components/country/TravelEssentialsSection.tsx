'use client';

import React, { useState } from 'react';
import { Emergency } from '@/data/countries';
import EmergencyTab from '@/components/country/travel-essentials/EmergencyTab';
import ConnectivityTab from '@/components/country/travel-essentials/ConnectivityTab';
import TransportationTab from '@/components/country/travel-essentials/TransportationTab';
import ElectricityTab from '@/components/country/travel-essentials/ElectricityTab';
import CuisineTab from '@/components/country/travel-essentials/CuisineTab';
import { processParagraph } from '@/utils/textProcessing';

type TravelEssentialsSectionProps = {
    connectivity: string;
    transportation: string;
    electricity: string;
    cuisine: string;
    emergency: Emergency;
    countryName: string;
};

export default function TravelEssentialsSection({
                                                    connectivity,
                                                    transportation,
                                                    electricity,
                                                    cuisine,
                                                    emergency,
                                                    countryName
                                                }: TravelEssentialsSectionProps) {
    const [activeTab, setActiveTab] = useState('emergency');

    return (
        <section className="bg-white rounded-lg shadow-md" id="travel-essentials">
            <h2 className="text-2xl font-semibold text-gray-800 p-6 border-b">
                Travel Essentials
            </h2>

            {/* Navigation Tabs */}
            <div className="flex overflow-x-auto border-b">
                <button
                    onClick={() => setActiveTab('emergency')}
                    className={`px-4 py-3 font-medium text-sm whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                        activeTab === 'emergency'
                            ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                            : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                    }`}
                >
                    Emergency
                </button>
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
                {activeTab === 'emergency' && (
                    <EmergencyTab
                        emergency={emergency}
                        countryName={countryName}
                    />
                )}

                {activeTab === 'connectivity' && (
                    <ConnectivityTab
                        connectivity={processParagraph(connectivity)}
                        countryName={countryName}
                    />
                )}

                {activeTab === 'transportation' && (
                    <TransportationTab
                        transportation={processParagraph(transportation)}
                        countryName={countryName}
                    />
                )}

                {activeTab === 'electricity' && (
                    <ElectricityTab
                        electricity={processParagraph(electricity)}
                    />
                )}

                {activeTab === 'cuisine' && (
                    <CuisineTab
                        cuisine={processParagraph(cuisine)}
                        countryName={countryName}
                    />
                )}
            </div>
        </section>
    );
}