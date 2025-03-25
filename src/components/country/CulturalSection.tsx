// components/country/CulturalSection.tsx
import React from 'react';
import { Cultural, Holiday } from '@/data/countries';

type CulturalSectionProps = {
    cultural: Cultural;
    holidays: Holiday[];
};

export default function CulturalSection({ cultural, holidays }: CulturalSectionProps) {
    return (
        <section className="bg-white rounded-lg shadow-md p-6" id="culture">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cultural Insights</h2>

            <div className="space-y-6">
                {/* Do's */}
                <div>
                    <h3 className="text-lg font-medium text-blue-600">Do's</h3>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        {cultural.dos.map((item, index) => (
                            <li key={index} className="text-gray-600">{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Don'ts */}
                <div>
                    <h3 className="text-lg font-medium text-blue-600">Don'ts</h3>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        {cultural.donts.map((item, index) => (
                            <li key={index} className="text-gray-600">{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Dress Code */}
                <div>
                    <h3 className="text-lg font-medium text-blue-600">Dress Code</h3>
                    <p className="text-gray-600 mt-1">{cultural.dressCode}</p>
                </div>

                {/* Tipping Culture */}
                <div>
                    <h3 className="text-lg font-medium text-blue-600">Tipping Culture</h3>
                    <p className="text-gray-600 mt-1">{cultural.tipping}</p>
                </div>

                {/* Cultural Values */}
                <div>
                    <h3 className="text-lg font-medium text-blue-600">Cultural Values</h3>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        {cultural.values.map((value, index) => (
                            <li key={index} className="text-gray-600">{value}</li>
                        ))}
                    </ul>
                </div>

                {/* National Holidays */}
                <div>
                    <h3 className="text-lg font-medium text-blue-600">National Holidays</h3>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        {holidays.map((holiday, index) => (
                            <li key={index} className="text-gray-600">
                                <span className="font-semibold">{holiday.name}</span> ({holiday.date}) – {holiday.description}
                                {holiday.isPublic && <span className="text-xs text-green-600 ml-2">(Public Holiday)</span>}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
