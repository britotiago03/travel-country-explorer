'use client';

import React, { useState, useEffect } from 'react';
import { Language, Currency, TimeZone, VisaRequirement, SafetyTip } from '@/data/countries';
import LanguagePhrases from './LanguagePhrases';

type BasicCountryInformationProps = {
    languages: Language[];
    currency: Currency;
    timeZones: TimeZone[];
    visaRequirements: VisaRequirement[];
    safetyTips: SafetyTip[];
    countryName: string;
};

// Helper functions from the individual components
const parseGMTOffset = (offset: string): number => {
    const match = offset.match(/GMT([+-])(\d+)/);
    if (!match) return 0;
    const sign = match[1] === '+' ? 1 : -1;
    const hours = parseInt(match[2], 10);
    return sign * hours;
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

export default function BasicCountryInformation({
                                                    languages,
                                                    currency,
                                                    timeZones,
                                                    visaRequirements,
                                                    safetyTips,
                                                    countryName
                                                }: BasicCountryInformationProps) {
    const [activeTab, setActiveTab] = useState('languages');
    const [showPhrases, setShowPhrases] = useState(false);
    const [currentTimes, setCurrentTimes] = useState<string[]>([]);

    // Sort languages: official languages first, then by percentage
    const sortedLanguages = [...languages].sort((a, b) => {
        if (a.official !== b.official) {
            return a.official ? -1 : 1;
        }
        const aPercentage = a.percentage || 0;
        const bPercentage = b.percentage || 0;
        return bPercentage - aPercentage;
    });

    // Update times for timezone section
    useEffect(() => {
        const updateTimes = () => {
            const times = timeZones.map((tz) => {
                const gmtOffset = parseGMTOffset(tz.gmtOffset);
                const utc = new Date(new Date().toUTCString().slice(0, -4));
                const localTime = new Date(utc.getTime() + gmtOffset * 60 * 60 * 1000);
                return localTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            });
            setCurrentTimes(times);
        };

        updateTimes();
        const interval = setInterval(updateTimes, 60 * 1000); // Update every minute
        return () => clearInterval(interval);
    }, [timeZones]);

    // Group safety tips by category
    const groupedSafetyTips = safetyTips.reduce((acc, tip) => {
        if (!acc[tip.category]) acc[tip.category] = [];
        acc[tip.category].push(tip.tip);
        return acc;
    }, {} as Record<string, string[]>);

    // Define language phrases based on the country's primary language
    const getLanguagePhrases = () => {
        const primaryLanguage = sortedLanguages.find(lang => lang.official);

        if (primaryLanguage?.name === "Portuguese") {
            return {
                language: "Portuguese",
                phrases: [
                    {
                        original: "Olá",
                        pronunciation: "oh-LA",
                        translation: "Hello"
                    },
                    {
                        original: "Bom dia",
                        pronunciation: "bom DEE-ah",
                        translation: "Good morning"
                    },
                    {
                        original: "Boa tarde",
                        pronunciation: "BOH-ah TAR-deh",
                        translation: "Good afternoon"
                    },
                    {
                        original: "Boa noite",
                        pronunciation: "BOH-ah NOY-teh",
                        translation: "Good evening/night"
                    },
                    {
                        original: "Obrigado / Obrigada",
                        pronunciation: "oh-bree-GAH-doo / oh-bree-GAH-dah",
                        translation: "Thank you (male/female speaker)"
                    },
                    {
                        original: "Por favor",
                        pronunciation: "por fah-VOR",
                        translation: "Please"
                    },
                    {
                        original: "Desculpe",
                        pronunciation: "desh-KOOL-peh",
                        translation: "Excuse me/Sorry"
                    },
                    {
                        original: "Fala inglês?",
                        pronunciation: "FAH-lah een-GLESH",
                        translation: "Do you speak English?"
                    },
                    {
                        original: "Quanto custa?",
                        pronunciation: "KWAN-too KOOS-tah",
                        translation: "How much does it cost?"
                    },
                    {
                        original: "Onde fica...?",
                        pronunciation: "ON-deh FEE-kah",
                        translation: "Where is...?"
                    }
                ]
            };
        }

        // Default to an empty array if no language phrases are defined
        return {
            language: primaryLanguage?.name || "",
            phrases: []
        };
    };

    const { language, phrases } = getLanguagePhrases();

    return (
        <section className="bg-white rounded-lg shadow-md" id="basic-info">
            <h2 className="text-2xl font-semibold text-gray-800 p-6 border-b">
                Basic Country Information
            </h2>

            {/* Navigation Tabs */}
            <div className="flex overflow-x-auto border-b">
                <button
                    onClick={() => setActiveTab('languages')}
                    className={`px-4 py-3 font-medium text-sm whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                        activeTab === 'languages'
                            ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                            : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                    }`}
                >
                    Languages
                </button>
                <button
                    onClick={() => setActiveTab('currency')}
                    className={`px-4 py-3 font-medium text-sm whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                        activeTab === 'currency'
                            ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                            : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                    }`}
                >
                    Currency
                </button>
                <button
                    onClick={() => setActiveTab('timezone')}
                    className={`px-4 py-3 font-medium text-sm whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                        activeTab === 'timezone'
                            ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                            : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                    }`}
                >
                    Time Zones
                </button>
                <button
                    onClick={() => setActiveTab('visa')}
                    className={`px-4 py-3 font-medium text-sm whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                        activeTab === 'visa'
                            ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                            : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                    }`}
                >
                    Visa Requirements
                </button>
                <button
                    onClick={() => setActiveTab('safety')}
                    className={`px-4 py-3 font-medium text-sm whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                        activeTab === 'safety'
                            ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                            : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                    }`}
                >
                    Safety & Health
                </button>
            </div>

            {/* Content Sections */}
            <div className="p-6">
                {/* Language Section */}
                {activeTab === 'languages' && (
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            {/* Official Languages */}
                            <div className="bg-gray-50 p-4 rounded-md">
                                <h3 className="text-base font-medium text-gray-700 mb-2">Official Languages</h3>
                                <ul className="space-y-1">
                                    {sortedLanguages
                                        .filter(language => language.official)
                                        .map((language, index) => (
                                            <li key={index} className="flex items-center text-gray-800">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                                                <span>{language.name} {language.percentage && <span className="text-sm text-gray-500">({language.percentage}%)</span>}</span>
                                                {language.notes && (
                                                    <div className="relative group inline-block">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500 cursor-help" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        <div className="absolute z-10 left-1/2 transform -translate-x-1/2 top-6 w-64 px-4 py-3 bg-gray-800 text-white text-xs rounded shadow-lg
                                                            invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                                            {language.notes}
                                                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 rotate-45 w-2 h-2 bg-gray-800"></div>
                                                        </div>
                                                    </div>
                                                )}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>

                            {/* Other Languages */}
                            <div className="bg-gray-50 p-4 rounded-md">
                                <h3 className="text-base font-medium text-gray-700 mb-2">Other Common Languages</h3>
                                <ul className="space-y-1">
                                    {sortedLanguages
                                        .filter(language => !language.official)
                                        .map((language, index) => (
                                            <li key={index} className="flex items-center text-gray-800">
                                                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                                <span>{language.name} {language.percentage && <span className="text-sm text-gray-500">({language.percentage}%)</span>}</span>
                                                {language.notes && (
                                                    <div className="relative group inline-block">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 cursor-help" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        <div className="absolute z-10 left-1/2 transform -translate-x-1/2 top-6 w-64 px-4 py-3 bg-gray-800 text-white text-xs rounded shadow-lg
                                                            invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                                            {language.notes}
                                                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 rotate-45 w-2 h-2 bg-gray-800"></div>
                                                        </div>
                                                    </div>
                                                )}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>

                        {/* No separate language notes section as they'll be shown on hover */}

                        {/* Useful Phrases */}
                        {phrases.length > 0 && (
                            <div className="mt-4 p-4 bg-blue-50 rounded-md">
                                <div className="flex justify-between items-center">
                                    <h4 className="font-medium text-blue-700">Useful Phrases</h4>
                                    <button
                                        onClick={() => setShowPhrases(!showPhrases)}
                                        className="text-blue-600 hover:text-blue-800 hover:bg-blue-100 text-sm font-medium flex items-center px-3 py-1 rounded-full transition-colors duration-200 cursor-pointer"
                                    >
                                        {showPhrases ? 'Hide' : 'Show'}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`h-4 w-4 ml-1 transition-transform ${showPhrases ? 'rotate-180' : ''}`}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                </div>
                                {!showPhrases && (
                                    <p className="text-sm text-gray-600 mt-1">
                                        Learning a few basic {language} phrases can enhance your experience in {countryName}. Click "Show" to see essential expressions.
                                    </p>
                                )}
                                {showPhrases && <LanguagePhrases language={language} phrases={phrases} />}
                            </div>
                        )}
                    </div>
                )}

                {/* Currency Section */}
                {activeTab === 'currency' && (
                    <div>
                        <div className="flex items-center mb-4">
                            <span className="text-4xl text-blue-600 mr-4">{currency.symbol}</span>
                            <div>
                                <h3 className="text-lg font-medium text-gray-800">{currency.name} ({currency.code})</h3>
                                <p className="text-sm text-gray-600">Official currency of {countryName}</p>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-md mb-4">
                            <h4 className="font-medium text-gray-800 mb-2">Exchange Tips</h4>
                            <p className="text-gray-600">{currency.exchangeTips}</p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-md">
                            <h4 className="font-medium text-blue-700 mb-2">Traveler's Tip</h4>
                            <p className="text-sm text-gray-600">
                                It's always good to carry a small amount of local currency for small purchases, tips, and places that don't accept cards.
                                In {countryName}, most tourist areas will accept major credit cards, but having some cash is recommended.
                            </p>
                        </div>
                    </div>
                )}

                {/* Time Zone Section */}
                {activeTab === 'timezone' && (
                    <div>
                        <ul className="divide-y divide-gray-200">
                            {timeZones.map((tz, index) => (
                                <li key={index} className="py-3 first:pt-0">
                                    <div className="flex justify-between items-center mb-1">
                                        <p className="text-gray-800 font-medium">{tz.name}</p>
                                        <span className="text-blue-700 font-medium">{currentTimes[index]}</span>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        <span className="bg-gray-100 px-2 py-1 rounded text-gray-700">{tz.gmtOffset}</span>
                                    </p>
                                    {tz.notes && (
                                        <p className="text-sm text-gray-500 italic mt-2">{tz.notes}</p>
                                    )}
                                </li>
                            ))}
                        </ul>

                        <p className="text-xs text-gray-500 mt-4">
                            Times are updated live every minute based on your browser's clock.
                        </p>
                    </div>
                )}

                {/* Visa Requirements Section */}
                {activeTab === 'visa' && (
                    <div>
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
                    </div>
                )}

                {/* Safety & Health Section */}
                {activeTab === 'safety' && (
                    <div>
                        <p className="text-gray-600 mb-4">
                            Important safety information and health tips for travelers visiting <strong>{countryName}</strong>:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            {Object.entries(groupedSafetyTips).map(([category, tips], index) => {
                                // Use custom styling based on category
                                let bgColor = "bg-blue-50";
                                let borderColor = "border-blue-200";
                                let headerColor = "text-blue-700";

                                if (category === "general") {
                                    bgColor = "bg-purple-50";
                                    borderColor = "border-purple-200";
                                    headerColor = "text-purple-700";
                                } else if (category === "health") {
                                    bgColor = "bg-green-50";
                                    borderColor = "border-green-200";
                                    headerColor = "text-green-700";
                                } else if (category === "theft" || category === "scams") {
                                    bgColor = "bg-amber-50";
                                    borderColor = "border-amber-200";
                                    headerColor = "text-amber-700";
                                }

                                return (
                                    <div key={index} className={`${bgColor} border ${borderColor} rounded-lg p-4 shadow-sm hover:shadow transition-shadow duration-200 cursor-default`}>
                                        <h3 className={`font-medium ${headerColor} mb-2`}>
                                            {category.charAt(0).toUpperCase() + category.slice(1)} Safety
                                        </h3>
                                        <ul className="space-y-2">
                                            {tips.map((tip, idx) => (
                                                <li key={idx} className="text-gray-700 flex items-start">
                                                    <svg className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span>{tip}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Safety Resources */}
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-4 hover:shadow transition-shadow duration-200 cursor-default">
                            <h3 className="font-medium text-gray-800 mb-2">Safety Resources</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center text-gray-700">
                                    <svg className="h-5 w-5 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                    </svg>
                                    Travel advisories: Check with your country's foreign ministry before travel
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <svg className="h-5 w-5 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                    Health information: Consult your doctor about recommended vaccinations
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <svg className="h-5 w-5 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                                    </svg>
                                    Keep important documents (passport, insurance) in both digital and physical copies
                                </li>
                            </ul>
                        </div>

                        <p className="text-xs text-gray-500 mt-4">
                            Note: Travel conditions can change. Check official sources before your trip for the most current information.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}