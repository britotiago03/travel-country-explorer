'use client';

import React, { useState } from 'react';
import { Language } from '@/data/countries';
import LanguagePhrases from './LanguagePhrases';

type LanguageSectionProps = {
    languages: Language[];
};

export default function LanguageSection({ languages }: LanguageSectionProps) {
    const [showPhrases, setShowPhrases] = useState(false);

    // Sort languages: official languages first, then by percentage (if available)
    const sortedLanguages = [...languages].sort((a, b) => {
        if (a.official !== b.official) {
            return a.official ? -1 : 1;
        }
        const aPercentage = a.percentage || 0;
        const bPercentage = b.percentage || 0;
        return bPercentage - aPercentage;
    });

    // Portuguese phrases for travelers
    const portuguesePhrases = [
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
    ];

    return (
        <section className="bg-white rounded-lg shadow-md p-6" id="languages">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Languages</h2>

            <div className="space-y-6">
                {sortedLanguages.map((language, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                        <div className="flex flex-wrap items-center mb-2">
                            <h3 className="text-lg font-medium text-blue-600 mr-3">
                                {language.name}
                                {language.official && (
                                    <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                    Official
                  </span>
                                )}
                            </h3>
                            {language.percentage && (
                                <div className="mt-1 sm:mt-0 text-sm text-gray-500">
                                    Spoken by approximately {language.percentage}% of the population
                                </div>
                            )}
                        </div>

                        {language.notes && (
                            <p className="text-gray-600 text-sm mt-1">{language.notes}</p>
                        )}

                        {/* Language proficiency visualization bar */}
                        {language.percentage && (
                            <div className="mt-2">
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div
                                        className={`${language.official ? 'bg-blue-600' : 'bg-green-500'} h-2.5 rounded-full`}
                                        style={{ width: `${language.percentage}%` }}
                                    />
                                </div>
                                <div className="flex justify-between text-xs text-gray-500 mt-1">
                                    <span>0%</span>
                                    <span>50%</span>
                                    <span>100%</span>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-md">
                <div className="flex justify-between items-center">
                    <h4 className="font-medium text-blue-700">Traveler's Tip</h4>
                    <button
                        onClick={() => setShowPhrases(!showPhrases)}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                    >
                        {showPhrases ? 'Hide Phrases' : 'Show Common Phrases'}
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
                <p className="text-sm text-gray-600 mt-1">
                    Learning a few basic phrases in Portuguese can greatly enhance your travel experience.
                    Even simple greetings like "olá" (hello), "obrigado/a" (thank you), and "por favor" (please)
                    are appreciated by locals and can make your interactions more enjoyable.
                </p>

                {showPhrases && <LanguagePhrases language="Portuguese" phrases={portuguesePhrases} />}
            </div>
        </section>
    );
}