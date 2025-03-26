import React from 'react';
import { EntryPoint } from '@/data/countries';

type EntryPointsSectionProps = {
    entryPoints: EntryPoint[];
    countryName: string;
};

// Helper to get icon based on entry point type
const getEntryPointIcon = (type: string) => {
    switch (type) {
        case 'airport':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
            );
        case 'border':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                </svg>
            );
        case 'port':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0a3.75 3.75 0 01-3.14 1.75 3.75 3.75 0 01-3.14-1.75M4.5 12.75l7.5-7.5 7.5 7.5M4.5 12.75L12 5.25l7.5 7.5" />
                </svg>
            );
        default:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
            );
    }
};

export default function EntryPointsSection({ entryPoints, countryName }: EntryPointsSectionProps) {
    // Group entry points by type
    const airports = entryPoints.filter(point => point.type === 'airport');
    const borders = entryPoints.filter(point => point.type === 'border');
    const ports = entryPoints.filter(point => point.type === 'port');

    return (
        <section className="bg-white rounded-lg shadow-md p-6" id="entry-points">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Entry Points to {countryName}</h2>
            <p className="text-gray-600 mb-6">
                The main gateways for entering {countryName} by air, land, or sea.
            </p>

            {/* Airports */}
            {airports.length > 0 && (
                <div className="mb-6">
                    <h3 className="text-lg font-medium text-blue-600 mb-3">Major Airports</h3>
                    <div className="space-y-4">
                        {airports.map((airport) => (
                            <div key={airport.name} className="flex">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 flex-shrink-0">
                                    {getEntryPointIcon('airport')}
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-800">
                                        {airport.name} {airport.code && `(${airport.code})`}
                                    </h4>
                                    <p className="text-gray-600 text-sm">Near {airport.nearestCity}</p>
                                    {airport.notes && <p className="text-gray-500 text-sm mt-1">{airport.notes}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Border Crossings */}
            {borders.length > 0 && (
                <div className="mb-6">
                    <h3 className="text-lg font-medium text-blue-600 mb-3">Land Border Crossings</h3>
                    <div className="space-y-4">
                        {borders.map((border) => (
                            <div key={border.name} className="flex">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 flex-shrink-0">
                                    {getEntryPointIcon('border')}
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-800">{border.name}</h4>
                                    <p className="text-gray-600 text-sm">Near {border.nearestCity}</p>
                                    {border.notes && <p className="text-gray-500 text-sm mt-1">{border.notes}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Sea Ports */}
            {ports.length > 0 && (
                <div>
                    <h3 className="text-lg font-medium text-blue-600 mb-3">Major Ports & Ferry Terminals</h3>
                    <div className="space-y-4">
                        {ports.map((port) => (
                            <div key={port.name} className="flex">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 flex-shrink-0">
                                    {getEntryPointIcon('port')}
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-800">{port.name}</h4>
                                    <p className="text-gray-600 text-sm">Near {port.nearestCity}</p>
                                    {port.notes && <p className="text-gray-500 text-sm mt-1">{port.notes}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {entryPoints.length === 0 && (
                <p className="text-gray-500 italic">Information on entry points will be added soon.</p>
            )}
        </section>
    );
}