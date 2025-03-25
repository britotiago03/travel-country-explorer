'use client';

import React from 'react';

type Phrase = {
    original: string;
    pronunciation: string;
    translation: string;
};

type LanguagePhrasesProps = {
    language: string;
    phrases: Phrase[];
};

export default function LanguagePhrases({ language, phrases }: LanguagePhrasesProps) {
    return (
        <div className="mt-6 bg-blue-50 rounded-md p-4">
            <h3 className="font-medium text-blue-700 mb-3">Essential {language} Phrases</h3>

            <div className="overflow-x-auto rounded-md shadow">
                <table className="min-w-full bg-white rounded-md overflow-hidden">
                    <thead className="bg-blue-100">
                    <tr>
                        <th className="py-2 px-4 text-left text-sm font-medium text-blue-800">Phrase</th>
                        <th className="py-2 px-4 text-left text-sm font-medium text-blue-800">Pronunciation</th>
                        <th className="py-2 px-4 text-left text-sm font-medium text-blue-800">Meaning</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                    {phrases.map((phrase, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-blue-50'}>
                            <td className="py-2 px-4 text-sm font-medium text-gray-700">{phrase.original}</td>
                            <td className="py-2 px-4 text-sm text-gray-600 italic">{phrase.pronunciation}</td>
                            <td className="py-2 px-4 text-sm text-gray-600">{phrase.translation}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <p className="text-xs text-gray-500 mt-3">
                Note: Pronunciations are approximate and written for English speakers.
            </p>
        </div>
    );
}