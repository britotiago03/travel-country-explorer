import React from 'react';
import { SectionHeader, BulletPoint } from './shared';

type TransportationTabProps = {
    transportation: string[];
    countryName: string;
};

export default function TransportationTab({ transportation, countryName }: TransportationTabProps) {
    return (
        <div>
            <SectionHeader
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                    </svg>
                }
                title="Getting Around"
                subtitle={`Transportation options in ${countryName}`}
            />

            <div className="mt-4 space-y-2">
                {transportation.map((point, index) => (
                    <BulletPoint key={index} text={point} />
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
    );
}