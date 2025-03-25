import React from 'react';
import { Country } from '@/data/countries';

type QuickFactsBoxProps = {
    country: Country;
};

export default function QuickFactsBox({ country }: QuickFactsBoxProps) {
    // Get main official language
    const officialLanguage = country.languages.find(lang => lang.official)?.name || country.languages[0]?.name;

    return (
        <section className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-600 text-white py-3 px-4">
                <h2 className="text-xl font-semibold">Quick Facts: {country.name}</h2>
            </div>

            <div className="p-4">
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
                </ul>

                <div className="mt-4 pt-3 border-t border-gray-100">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Fun Fact</h3>
                    <p className="text-sm text-gray-600 italic">{country.funFact}</p>
                </div>
            </div>
        </section>
    );
}