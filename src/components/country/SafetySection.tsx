// components/country/SafetySection.tsx
import React from 'react';
import { SafetyTip } from '@/data/countries';

type SafetySectionProps = {
    safetyTips: SafetyTip[];
    countryName: string;
};

const categoryIcons: Record<string, string> = {
    general: '🚨',
    health: '💉',
    transportation: '🚗',
    scams: '⚠️',
    weather: '⛅',
    food: '🍽️',
    water: '🚱',
};

export default function SafetySection({ safetyTips, countryName }: SafetySectionProps) {
    // Group by category
    const grouped = safetyTips.reduce((acc, tip) => {
        if (!acc[tip.category]) acc[tip.category] = [];
        acc[tip.category].push(tip.tip);
        return acc;
    }, {} as Record<string, string[]>);

    return (
        <section className="bg-white rounded-lg shadow-md p-6" id="safety">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <svg className="w-6 h-6 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M12 9v2.25m0 2.25h.008v.008H12v-.008zM20.25 12c0 4.556-3.694 8.25-8.25 8.25S3.75 16.556 3.75 12 7.444 3.75 12 3.75s8.25 3.694 8.25 8.25z"/>
                </svg>
                Safety & Health Tips
            </h2>

            <p className="text-gray-600 mb-4">
                Stay informed and stay safe when traveling to <strong>{countryName}</strong>. Here are helpful safety tips and health precautions to consider:
            </p>

            <div className="space-y-6">
                {Object.entries(grouped).map(([category, tips], index) => (
                    <div key={index}>
                        <h3 className="text-lg font-medium text-blue-600 flex items-center">
                            <span className="mr-2">{categoryIcons[category] || '📌'}</span>
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </h3>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            {tips.map((tip, idx) => (
                                <li key={idx} className="text-gray-700">{tip}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <p className="text-xs text-gray-500 mt-6">
                Note: This is general advice only. Always consult your doctor or an official travel health advisory before visiting a new country.
            </p>
        </section>
    );
}
