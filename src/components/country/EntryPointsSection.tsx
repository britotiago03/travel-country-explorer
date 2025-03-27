'use client';

import React, { useState, useEffect } from 'react';
import { EntryPoint } from '@/data/countries';

// Extended type that includes common entry routes
type EntryPointsSectionProps = {
    entryPoints: EntryPoint[];
    countryName: string;
    commonRoutes?: {
        fromCountry: string;
        options: {
            type: 'flight' | 'land' | 'sea';
            description: string;
            duration?: string;
            frequency?: string;
        }[];
    }[];
};

export default function EntryPointsSection({ entryPoints, countryName, commonRoutes }: EntryPointsSectionProps) {
    const [activeTab, setActiveTab] = useState('airports');

    // Group entry points by type
    const airports = entryPoints.filter(point => point.type === 'airport');
    const borders = entryPoints.filter(point => point.type === 'border');
    const ports = entryPoints.filter(point => point.type === 'port');

    // Determine which tabs to show based on available data
    const hasAirports = airports.length > 0;
    const hasBorders = borders.length > 0;
    const hasPorts = ports.length > 0;
    const hasRoutes = commonRoutes && commonRoutes.length > 0;

    // Set default active tab based on what data is available
    useEffect(() => {
        if (hasAirports) {
            setActiveTab('airports');
        } else if (hasBorders) {
            setActiveTab('borders');
        } else if (hasPorts) {
            setActiveTab('ports');
        } else if (hasRoutes) {
            setActiveTab('routes');
        }
    }, [hasAirports, hasBorders, hasPorts, hasRoutes]);

    return (
        <section className="bg-white rounded-lg shadow-md" id="entry-points">
            <h2 className="text-2xl font-semibold text-gray-800 p-6 border-b">
                Entry Points to {countryName}
            </h2>

            {/* Navigation Tabs */}
            <div className="flex overflow-x-auto border-b">
                {hasAirports && (
                    <button
                        onClick={() => setActiveTab('airports')}
                        className={`px-4 py-3 font-medium text-sm whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                            activeTab === 'airports'
                                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                                : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                        }`}
                    >
                        Airports
                    </button>
                )}

                {hasBorders && (
                    <button
                        onClick={() => setActiveTab('borders')}
                        className={`px-4 py-3 font-medium text-sm whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                            activeTab === 'borders'
                                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                                : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                        }`}
                    >
                        Land Borders
                    </button>
                )}

                {hasPorts && (
                    <button
                        onClick={() => setActiveTab('ports')}
                        className={`px-4 py-3 font-medium text-sm whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                            activeTab === 'ports'
                                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                                : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                        }`}
                    >
                        Ports & Ferries
                    </button>
                )}

                {hasRoutes && (
                    <button
                        onClick={() => setActiveTab('routes')}
                        className={`px-4 py-3 font-medium text-sm whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                            activeTab === 'routes'
                                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                                : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                        }`}
                    >
                        Common Routes
                    </button>
                )}
            </div>

            {/* Content Sections */}
            <div className="p-6">
                {/* Airports Tab */}
                {activeTab === 'airports' && (
                    <div>
                        <p className="text-gray-600 mb-4">
                            Major international airports serving {countryName}.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {airports.map((airport) => (
                                <div key={airport.name} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                    <div className="flex justify-between items-start">
                                        <h4 className="font-medium text-gray-800">{airport.name}</h4>
                                        {airport.code && (
                                            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded">
                                                {airport.code}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-gray-600 text-sm mt-1">
                                        Near {airport.nearestCity}
                                    </p>
                                    {airport.notes && (
                                        <p className="text-gray-500 text-sm mt-2 italic">{airport.notes}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Land Borders Tab */}
                {activeTab === 'borders' && (
                    <div>
                        <p className="text-gray-600 mb-4">
                            Major border crossings for entering {countryName} by land.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {borders.map((border) => (
                                <div key={border.name} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                    <h4 className="font-medium text-gray-800">{border.name}</h4>
                                    <p className="text-gray-600 text-sm mt-1">
                                        Near {border.nearestCity}
                                    </p>
                                    {border.notes && (
                                        <p className="text-gray-500 text-sm mt-2 italic">{border.notes}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Ports Tab */}
                {activeTab === 'ports' && (
                    <div>
                        <p className="text-gray-600 mb-4">
                            Major ports and ferry terminals for entering {countryName} by sea.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {ports.map((port) => (
                                <div key={port.name} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                    <h4 className="font-medium text-gray-800">{port.name}</h4>
                                    <p className="text-gray-600 text-sm mt-1">
                                        Near {port.nearestCity}
                                    </p>
                                    {port.notes && (
                                        <p className="text-gray-500 text-sm mt-2 italic">{port.notes}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Common Routes Tab */}
                {activeTab === 'routes' && commonRoutes && (
                    <div>
                        <p className="text-gray-600 mb-4">
                            Popular transportation options when traveling to {countryName} from nearby countries.
                        </p>

                        <div className="space-y-4">
                            {commonRoutes.map((route, idx) => (
                                <div key={idx} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                    <h4 className="font-medium text-gray-800 mb-2">From {route.fromCountry}</h4>
                                    <div className="space-y-3">
                                        {route.options.map((option, index) => (
                                            <div key={index} className="flex items-start">
                                                <div className="mt-0.5 mr-3 flex-shrink-0">
                                                    {option.type === 'flight' ? (
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-600">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                                        </svg>
                                                    ) : option.type === 'land' ? (
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-600">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                                                        </svg>
                                                    ) : (
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-indigo-600">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z" />
                                                        </svg>
                                                    )}
                                                </div>
                                                <div>
                                                    <p className="text-gray-700">{option.description}</p>
                                                    {(option.duration || option.frequency) && (
                                                        <p className="text-gray-500 text-sm mt-1">
                                                            {option.duration && <span className="mr-2">Duration: {option.duration}</span>}
                                                            {option.frequency && <span>Frequency: {option.frequency}</span>}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {entryPoints.length === 0 && !commonRoutes && (
                    <p className="text-gray-500 italic">Information on entry points will be added soon.</p>
                )}

                {/* Helpful Traveler Tip */}
                <div className="mt-8 bg-blue-50 p-4 rounded-md border border-blue-200">
                    <h4 className="font-medium text-blue-700 mb-2">Traveler's Tip</h4>
                    <p className="text-sm text-gray-600">
                        Always check visa requirements and entry regulations before planning your trip, as these can change.
                        If you're flying internationally, aim to arrive at the airport at least 3 hours before departure.
                        For land crossings, be aware that operating hours and processing times may vary.
                    </p>
                </div>
            </div>
        </section>
    );
}