import React from 'react';
import { Country } from '@/data/countries';

type QuickFactsBoxProps = {
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

export default function QuickFactsBox({ country }: QuickFactsBoxProps) {
    // Get main official language
    const officialLanguage = country.languages.find(lang => lang.official)?.name || country.languages[0]?.name;

    // Safety level - extract from country data or provide default
    const safetyLevel = country.safetyLevel || 'Generally Safe';

    // Determine if country has emergency numbers
    const emergencyNumber = country.emergency?.generalEmergency ||
        country.emergency?.police ||
        'Check local information';

    return (
        <section className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-600 text-white py-3 px-4">
                <h2 className="text-xl font-semibold">Quick Facts: {country.name}</h2>
            </div>

            <div className="p-4">
                {/* Basic Facts Section */}
                <div className="mb-4">
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <span className="w-28 text-sm font-medium text-gray-500">Capital</span>
                            <span className="flex-1 text-gray-800">{country.capital}</span>
                        </li>

                        <li className="flex items-start">
                            <span className="w-28 text-sm font-medium text-gray-500">Language</span>
                            <span className="flex-1 text-gray-800">{officialLanguage}</span>
                        </li>

                        <li className="flex items-start">
                            <span className="w-28 text-sm font-medium text-gray-500">Currency</span>
                            <span className="flex-1 text-gray-800">
                                {country.currency.name} ({country.currency.code}, {country.currency.symbol})
                            </span>
                        </li>

                        <li className="flex items-start">
                            <span className="w-28 text-sm font-medium text-gray-500">Population</span>
                            <span className="flex-1 text-gray-800">{country.population}</span>
                        </li>

                        <li className="flex items-start">
                            <span className="w-28 text-sm font-medium text-gray-500">Area</span>
                            <span className="flex-1 text-gray-800">{country.area}</span>
                        </li>

                        <li className="flex items-start">
                            <span className="w-28 text-sm font-medium text-gray-500">Time Zone</span>
                            <span className="flex-1 text-gray-800">{country.timeZones[0].gmtOffset}</span>
                        </li>

                        <li className="flex items-start">
                            <span className="w-28 text-sm font-medium text-gray-500">Electricity</span>
                            <span className="flex-1 text-gray-800">{country.electricity.split('.')[0]}</span>
                        </li>

                        <li className="flex items-start">
                            <span className="w-28 text-sm font-medium text-gray-500">Emergency #</span>
                            <span className="flex-1 text-gray-800">{emergencyNumber}</span>
                        </li>

                        <li className="flex items-start">
                            <span className="w-28 text-sm font-medium text-gray-500">Visa</span>
                            <span className="flex-1 text-gray-800">
                                {country.visaRequirements.length > 0
                                    ? country.visaRequirements[0].requirement.replace('-', ' ').replace(/^\w/, c => c.toUpperCase())
                                    : 'Varies by nationality'}
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Safety Level Section */}
                <div className="mb-4 pt-3 border-t border-gray-100">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Travel Safety Level</h3>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium inline-block ${getSafetyLevelColor(safetyLevel)}`}>
                        {safetyLevel}
                    </div>
                    {country.safetyTips && country.safetyTips.length > 0 && (
                        <p className="text-sm text-gray-600 mt-2">
                            {country.safetyTips[0].tip}
                        </p>
                    )}
                </div>

                {/* Top Reasons to Visit */}
                <div className="mb-4 pt-3 border-t border-gray-100">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Top 3 Reasons to Visit</h3>
                    <ul className="space-y-1">
                        {(country.topReasons || [
                            "Rich historical and cultural heritage",
                            "Beautiful landscapes and natural attractions",
                            "Delicious local cuisine and wines"
                        ]).slice(0, 3).map((reason, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-600">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>{reason}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Fun Fact Section */}
                <div className="pt-3 border-t border-gray-100">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Fun Fact</h3>
                    <p className="text-sm text-gray-600 italic">{country.funFact}</p>
                </div>
            </div>
        </section>
    );
}