// components/country/CulturalSection.tsx
'use client';

import React, { useState } from 'react';
import { Cultural, Holiday } from '@/data/countries';

type CulturalSectionProps = {
    cultural: Cultural;
    holidays: Holiday[];
};

export default function CulturalSection({ cultural, holidays }: CulturalSectionProps) {
    const [activeTab, setActiveTab] = useState('customs');

    return (
        <section className="bg-white rounded-lg shadow-md" id="culture">
            <h2 className="text-2xl font-semibold text-gray-800 p-6 border-b">
                Cultural Insights
            </h2>

            {/* Navigation Tabs */}
            <div className="flex overflow-x-auto border-b">
                <button
                    onClick={() => setActiveTab('customs')}
                    className={`px-4 py-3 font-medium text-sm whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                        activeTab === 'customs'
                            ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                            : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                    }`}
                >
                    Local Customs
                </button>
                <button
                    onClick={() => setActiveTab('etiquette')}
                    className={`px-4 py-3 font-medium text-sm whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                        activeTab === 'etiquette'
                            ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                            : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                    }`}
                >
                    Dress & Tipping
                </button>
                <button
                    onClick={() => setActiveTab('values')}
                    className={`px-4 py-3 font-medium text-sm whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                        activeTab === 'values'
                            ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                            : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                    }`}
                >
                    Cultural Values
                </button>
                <button
                    onClick={() => setActiveTab('holidays')}
                    className={`px-4 py-3 font-medium text-sm whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                        activeTab === 'holidays'
                            ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                            : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                    }`}
                >
                    National Holidays
                </button>
            </div>

            {/* Content Sections */}
            <div className="p-6">
                {/* Local Customs Section */}
                {activeTab === 'customs' && (
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            {/* Do's */}
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4 shadow-sm hover:shadow transition-shadow duration-200">
                                <h3 className="text-lg font-medium text-green-700 mb-3">Do's</h3>
                                <ul className="space-y-2">
                                    {cultural.dos.map((item, index) => (
                                        <li key={index} className="flex items-start text-gray-700">
                                            <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Don'ts */}
                            <div className="bg-red-50 border border-red-200 rounded-lg p-4 shadow-sm hover:shadow transition-shadow duration-200">
                                <h3 className="text-lg font-medium text-red-700 mb-3">Don'ts</h3>
                                <ul className="space-y-2">
                                    {cultural.donts.map((item, index) => (
                                        <li key={index} className="flex items-start text-gray-700">
                                            <svg className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-6 bg-blue-50 p-4 rounded-md border border-blue-200">
                            <h4 className="font-medium text-blue-700 mb-2">Traveler's Tip</h4>
                            <p className="text-sm text-gray-600">
                                Showing respect for local customs goes a long way in creating positive interactions. When in doubt about what's appropriate, observe what locals are doing or politely ask for guidance.
                            </p>
                        </div>
                    </div>
                )}

                {/* Dress & Tipping Section */}
                {activeTab === 'etiquette' && (
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Dress Code */}
                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow transition-shadow duration-200">
                                <div className="flex items-center mb-3">
                                    <svg className="h-6 w-6 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                                    <h3 className="text-lg font-medium text-gray-800">Dress Code</h3>
                                </div>
                                <p className="text-gray-700">{cultural.dressCode}</p>
                            </div>

                            {/* Tipping Culture */}
                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow transition-shadow duration-200">
                                <div className="flex items-center mb-3">
                                    <svg className="h-6 w-6 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 01-.75.75h-.75m-6-1.5H4.5m0 0l-.621-.085A2.25 2.25 0 012.25 15.75v-2.625a2.25 2.25 0 011.5-2.13m9.75 0a2.25 2.25 0 011.5 2.13v2.625a2.25 2.25 0 01-1.629 2.165L14.25 18" />
                                    </svg>
                                    <h3 className="text-lg font-medium text-gray-800">Tipping Culture</h3>
                                </div>
                                <p className="text-gray-700">{cultural.tipping}</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Cultural Values Section */}
                {activeTab === 'values' && (
                    <div>
                        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 shadow-sm">
                            <h3 className="text-lg font-medium text-purple-700 mb-3">Core Cultural Values</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {cultural.values.map((value, index) => (
                                    <div key={index} className="bg-white p-3 rounded border border-purple-100 shadow-sm hover:shadow transition-shadow duration-200">
                                        <p className="text-gray-700">{value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-6 bg-blue-50 p-4 rounded-md border border-blue-200">
                            <h4 className="font-medium text-blue-700 mb-2">Why This Matters</h4>
                            <p className="text-sm text-gray-600">
                                Understanding the core values of a culture helps you connect more deeply with locals and appreciate the cultural context behind many customs and traditions.
                            </p>
                        </div>
                    </div>
                )}

                {/* National Holidays Section */}
                {activeTab === 'holidays' && (
                    <div>
                        <p className="text-gray-600 mb-4">
                            Important dates and celebrations that may affect your travel plans or provide unique cultural experiences.
                        </p>

                        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Holiday</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                {holidays.map((holiday, index) => (
                                    <tr key={index} className={holiday.isPublic ? "bg-green-50" : ""}>
                                        <td className="px-4 py-3 whitespace-nowrap">
                                            <div className="font-medium text-gray-900">{holiday.name}</div>
                                            {holiday.isPublic && (
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                        Public Holiday
                                                    </span>
                                            )}
                                        </td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                                            {holiday.date}
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-500">
                                            {holiday.description}
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>

                        <p className="text-xs text-gray-500 mt-4">
                            Note: Dates for some holidays may vary year to year. Banks, government offices, and many businesses close on public holidays.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}