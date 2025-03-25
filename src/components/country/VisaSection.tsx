// components/country/VisaSection.tsx
import React from 'react';
import { VisaRequirement } from '@/data/countries';

type VisaSectionProps = {
    visaRequirements: VisaRequirement[];
    countryName: string;
};

const requirementLabel: Record<string, string> = {
    'visa-free': 'Visa-Free',
    'visa-on-arrival': 'Visa on Arrival',
    'e-visa': 'e-Visa Required',
    'visa-required': 'Visa Required',
};

const requirementColor: Record<string, string> = {
    'visa-free': 'text-green-600',
    'visa-on-arrival': 'text-yellow-600',
    'e-visa': 'text-blue-600',
    'visa-required': 'text-red-600',
};

export default function VisaSection({ visaRequirements, countryName }: VisaSectionProps) {
    return (
        <section className="bg-white rounded-lg shadow-md p-6" id="visa">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <svg className="w-6 h-6 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M8.25 18.75a1.5 1.5 0 003 0M3 5.25h18M4.5 3v2.25M19.5 3v2.25M5.25 9h13.5L18 20.25H6L5.25 9z"/>
                </svg>
                Visa Requirements
            </h2>

            <p className="text-gray-600 mb-4">
                Here's a summary of visa policies for travelers visiting <strong>{countryName}</strong> based on nationality:
            </p>

            <div className="space-y-6">
                {visaRequirements.map((entry, index) => (
                    <div key={index} className="border border-gray-200 rounded-md p-4 bg-gray-50">
                        <p className="text-sm text-gray-500 mb-1">
                            Applies to: <span className="text-gray-700 font-medium">{entry.forCitizens.join(', ')}</span>
                        </p>
                        <p className={`font-semibold ${requirementColor[entry.requirement]}`}>
                            {requirementLabel[entry.requirement]} – {entry.duration}
                        </p>
                        {entry.notes && (
                            <p className="text-sm text-gray-600 mt-2">{entry.notes}</p>
                        )}
                    </div>
                ))}
            </div>

            <p className="text-xs text-gray-500 mt-4">
                Always double-check with an official government website or embassy before traveling. Visa rules may change.
            </p>
        </section>
    );
}
