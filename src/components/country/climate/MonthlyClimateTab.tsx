'use client';

import React, { useState } from 'react';
import { MonthlyClimate } from '@/data/countries';
import { getTemperatureColor, getRainfallInfo, getTouristCrowdLevel } from '@/utils/climateColors';

type MonthlyClimateTabProps = {
    months: string[];
    climateMap: Record<string, MonthlyClimate>;
};

// Helper to get regional climate recommendations based on month
const getRegionalRecommendations = (month: string): { [key: string]: string } => {
    // Simplified for demonstration, ideally this would come from a more structured data source
    const recommendations: { [key: string]: { [key: string]: string } } = {
        'January': {
            'North Region': 'Cold and rainy, but beautiful winter landscapes. Good time for indoor activities and wine tasting.',
            'Central Region': 'Cooler temperatures with occasional rain. Good for city visits and indoor attractions.',
            'Algarve Region': 'Mild and least crowded. Great for peaceful coastal walks and exploring without crowds.'
        },
        'April': {
            'North Region': 'Pleasant spring weather with blooming landscapes. Perfect for hiking and outdoor exploration.',
            'Central Region': 'Comfortable temperatures and spring flowers. Ideal for visiting historic sites and natural parks.',
            'Algarve Region': 'Warming up but not too hot yet. Beaches are quiet and towns are not crowded.'
        },
        'July': {
            'North Region': 'Warm but not too hot, good for Porto visits and vineyard tours.',
            'Central Region': 'Hot with occasional heatwaves. Early morning or evening activities recommended.',
            'Algarve Region': 'Peak season - hot and crowded. Expect busy beaches and higher prices.'
        },
        'October': {
            'North Region': 'Fall colors and harvest festivals. Great time for wine tours and scenic drives.',
            'Central Region': 'Pleasant fall temperatures. Good for hiking and outdoor activities.',
            'Algarve Region': 'Still warm enough for beach days but much quieter than summer.'
        }
    };

    // Return recommendations for the specific month, or empty object if not available
    return recommendations[month] || {};
};

export default function MonthlyClimateTab({ months, climateMap }: MonthlyClimateTabProps) {
    const [selectedMonth, setSelectedMonth] = useState('January');

    // Get regional recommendations for the selected month
    const regionalRecommendations = getRegionalRecommendations(selectedMonth);

    return (
        <div>
            <p className="text-gray-600 mb-4">
                Select a month to see detailed climate information and tourism insights:
            </p>

            {/* Month selector */}
            <div className="flex flex-wrap gap-2 mb-6">
                {months.map((month) => (
                    <button
                        key={month}
                        onClick={() => setSelectedMonth(month)}
                        className={`px-3 py-1.5 text-sm rounded-full transition-colors duration-200 cursor-pointer ${
                            selectedMonth === month
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                        {month.substring(0, 3)}
                    </button>
                ))}
            </div>

            {/* Selected month details */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5 mb-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">{selectedMonth}</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {/* Temperature */}
                    <div className="bg-gray-50 p-4 rounded-md">
                        <h4 className="font-medium text-gray-700 mb-2">Temperature</h4>
                        <div className="flex justify-between items-center">
                            <span className={`px-2 py-1 rounded-full text-sm ${getTemperatureColor(climateMap[selectedMonth]?.averageHigh || 20)}`}>
                                High: {climateMap[selectedMonth]?.averageHigh || '--'}°C
                            </span>
                            <span className={`px-2 py-1 rounded-full text-sm ${getTemperatureColor(climateMap[selectedMonth]?.averageLow || 10)}`}>
                                Low: {climateMap[selectedMonth]?.averageLow || '--'}°C
                            </span>
                        </div>
                    </div>

                    {/* Rainfall */}
                    <div className="bg-gray-50 p-4 rounded-md">
                        <h4 className="font-medium text-gray-700 mb-2">Rainfall</h4>
                        {(() => {
                            const rainfallInfo = getRainfallInfo(climateMap[selectedMonth]?.rainfall || 30);
                            return (
                                <span className={`px-2 py-1 rounded-full text-sm ${rainfallInfo.color}`}>
                                    {rainfallInfo.label}
                                </span>
                            );
                        })()}
                    </div>

                    {/* Crowds */}
                    <div className="bg-gray-50 p-4 rounded-md">
                        <h4 className="font-medium text-gray-700 mb-2">Tourist Crowds</h4>
                        <span className={`px-2 py-1 rounded-full text-sm ${getTouristCrowdLevel(selectedMonth, climateMap[selectedMonth]?.crowdLevel).color}`}>
                            {getTouristCrowdLevel(selectedMonth, climateMap[selectedMonth]?.crowdLevel).level}
                        </span>
                    </div>
                </div>

                {/* Notes or special events */}
                <div className="bg-yellow-50 p-4 rounded-md border border-yellow-200 mb-6">
                    <h4 className="font-medium text-yellow-800 mb-2">Notes & Events</h4>
                    <p className="text-gray-700">
                        {climateMap[selectedMonth]?.notes ||
                            `${selectedMonth} in Portugal ${
                                ['June', 'July', 'August'].includes(selectedMonth)
                                    ? 'is peak tourist season with hot weather, ideal for beaches.'
                                    : ['April', 'May', 'September', 'October'].includes(selectedMonth)
                                        ? 'offers pleasant weather and fewer crowds, perfect for sightseeing.'
                                        : 'is quieter with lower prices, though expect cooler temperatures and some rain.'
                            }`
                        }
                    </p>
                    {climateMap[selectedMonth]?.events && climateMap[selectedMonth].events!.length > 0 && (
                        <div className="mt-3">
                            <h5 className="font-medium text-yellow-800 mb-1">Events:</h5>
                            <ul className="list-disc pl-5 text-gray-700 text-sm">
                                {climateMap[selectedMonth].events!.map((event, idx) => (
                                    <li key={idx}>{event}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Regional recommendations for the selected month */}
                {Object.keys(regionalRecommendations).length > 0 && (
                    <div>
                        <h4 className="font-medium text-gray-800 mb-3">Regional Insights for {selectedMonth}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {Object.entries(regionalRecommendations).map(([region, recommendation]) => (
                                <div key={region} className="bg-blue-50 p-3 rounded-md border border-blue-100">
                                    <h5 className="font-medium text-blue-800 mb-1">{region}</h5>
                                    <p className="text-sm text-gray-700">{recommendation}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Monthly comparison table */}
            <div>
                <h3 className="text-lg font-medium text-gray-800 mb-4">Annual Climate Overview</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                        <thead className="bg-gray-50">
                        <tr>
                            <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
                            <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg. High (°C)</th>
                            <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg. Low (°C)</th>
                            <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rainfall</th>
                            <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Crowds</th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                        {months.map((month, index) => {
                            const monthData = climateMap[month] || {
                                month,
                                averageHigh: index < 6 ? 20 + index : 30 - (index - 5),  // Dummy data
                                averageLow: index < 6 ? 10 + index : 20 - (index - 5),   // Dummy data
                                rainfall: index < 3 || index > 8 ? 80 : 20,              // Dummy data
                                notes: '',
                                crowdLevel: undefined
                            };
                            const crowds = getTouristCrowdLevel(month, monthData.crowdLevel);
                            const rainfallInfo = getRainfallInfo(monthData.rainfall);

                            return (
                                <tr
                                    key={month}
                                    className={`hover:bg-gray-50 ${selectedMonth === month ? 'bg-blue-50' : ''} cursor-pointer`}
                                    onClick={() => setSelectedMonth(month)}
                                >
                                    <td className="py-3 px-3 text-sm font-medium text-gray-900">{month}</td>
                                    <td className="py-3 px-3 text-sm text-gray-500">
                                        <span className={`px-2 py-1 rounded-full text-xs ${getTemperatureColor(monthData.averageHigh)}`}>
                                            {monthData.averageHigh}°C
                                        </span>
                                    </td>
                                    <td className="py-3 px-3 text-sm text-gray-500">
                                        <span className={`px-2 py-1 rounded-full text-xs ${getTemperatureColor(monthData.averageLow)}`}>
                                            {monthData.averageLow}°C
                                        </span>
                                    </td>
                                    <td className="py-3 px-3 text-sm text-gray-500">
                                        <span className={`px-2 py-1 rounded-full text-xs ${rainfallInfo.color}`}>
                                            {rainfallInfo.label}
                                        </span>
                                    </td>
                                    <td className="py-3 px-3 text-sm text-gray-500">
                                        <span className={`px-2 py-1 rounded-full text-xs ${crowds.color}`}>
                                            {crowds.level}
                                        </span>
                                    </td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}