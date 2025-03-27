import React from 'react';
import { Country } from '@/data/countries';

type QuickTravelFactsSectionProps = {
    country: Country;
};

// Helper to determine safety level color
const getSafetyLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
        case 'very safe':
        case 'safe':
            return 'bg-green-100 text-green-800';
        case 'moderate':
        case 'moderate risk':
            return 'bg-yellow-100 text-yellow-800';
        case 'exercise caution':
            return 'bg-amber-100 text-amber-800';
        case 'high risk':
        case 'dangerous':
            return 'bg-red-100 text-red-800';
        default:
            return 'bg-gray-100 text-gray-800';
    }
};

export default function QuickTravelFactsSection({ country }: QuickTravelFactsSectionProps) {
    // Get main official language - handle both string and object formats
    const officialLanguage = typeof country.languages[0] === 'string'
        ? country.languages[0]
        : country.languages[0]?.name || 'Local language';

    // Safety level - extract from country data or provide default
    const safetyLevel = country.safetyLevel || 'Generally Safe';

    // Determine if country has emergency numbers
    const emergencyNumber = country.emergency?.generalEmergency ||
        country.emergency?.police ||
        'Check local information';

    return (
        <section className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Quick Travel Facts</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Basic Facts Column */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800">Essential Information</h3>
                    <ul className="space-y-2">
                        <li className="flex items-start">
                            <span className="w-24 text-sm font-medium text-gray-500">Capital</span>
                            <span className="flex-1 text-gray-800">{country.capital}</span>
                        </li>
                        <li className="flex items-start">
                            <span className="w-24 text-sm font-medium text-gray-500">Language</span>
                            <span className="flex-1 text-gray-800">{officialLanguage}</span>
                        </li>
                        <li className="flex items-start">
                            <span className="w-24 text-sm font-medium text-gray-500">Currency</span>
                            <span className="flex-1 text-gray-800">
                                {country.currency.name} ({country.currency.code}, {country.currency.symbol})
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="w-24 text-sm font-medium text-gray-500">Population</span>
                            <span className="flex-1 text-gray-800">{country.population}</span>
                        </li>
                        <li className="flex items-start">
                            <span className="w-24 text-sm font-medium text-gray-500">Area</span>
                            <span className="flex-1 text-gray-800">{country.area}</span>
                        </li>
                    </ul>
                </div>

                {/* Travel Essentials Column */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800">Travel Essentials</h3>
                    <ul className="space-y-2">
                        <li className="flex items-start">
                            <span className="w-24 text-sm font-medium text-gray-500">Time Zone</span>
                            <span className="flex-1 text-gray-800">{typeof country.timeZones[0] === 'string' ? country.timeZones[0] : country.timeZones[0].name}</span>
                        </li>
                        <li className="flex items-start">
                            <span className="w-24 text-sm font-medium text-gray-500">Electricity</span>
                            <span className="flex-1 text-gray-800">{country.electricity.split('.')[0]}</span>
                        </li>
                        <li className="flex items-start">
                            <span className="w-24 text-sm font-medium text-gray-500">Emergency #</span>
                            <span className="flex-1 text-gray-800">{emergencyNumber}</span>
                        </li>
                        <li className="flex items-start">
                            <span className="w-24 text-sm font-medium text-gray-500">Visa</span>
                            <span className="flex-1 text-gray-800">
                                {Array.isArray(country.visaRequirements) && country.visaRequirements.length > 0
                                    ? typeof country.visaRequirements[0] === 'string'
                                        ? country.visaRequirements[0]
                                        : country.visaRequirements[0].requirement.replace('-', ' ').replace(/^\w/, c => c.toUpperCase())
                                    : 'Varies by nationality'}
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="w-24 text-sm font-medium text-gray-500">Safety</span>
                            <span className="flex-1">
                                <span className={`px-2 py-0.5 rounded-full text-xs font-medium inline-block ${getSafetyLevelColor(safetyLevel)}`}>
                                    {safetyLevel}
                                </span>
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Top Reasons & Fun Facts Column */}
                <div className="space-y-4">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Top 3 Reasons to Visit</h3>
                        <ul className="space-y-1 mb-4">
                            {(country.topReasons || [
                                "Rich historical and cultural heritage",
                                "Beautiful landscapes and natural attractions",
                                "Delicious local cuisine"
                            ]).slice(0, 3).map((reason, index) => (
                                <li key={index} className="flex items-start text-sm text-gray-600">
                                    <span className="text-blue-500 mr-2">•</span>
                                    <span>{reason}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Fun Fact</h3>
                        <p className="text-sm text-gray-600 italic">{country.funFact || `${country.name} has a rich and fascinating history spanning many centuries.`}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}