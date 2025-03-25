import React from 'react';
import { MonthlyClimate } from '@/data/countries';

type ClimateSectionProps = {
    climate: MonthlyClimate[];
};

// Helper function to get color based on temperature
const getTemperatureColor = (temp: number): string => {
    if (temp <= 5) return 'bg-blue-200 text-blue-800';  // Cold
    if (temp <= 15) return 'bg-blue-100 text-blue-800'; // Cool
    if (temp <= 22) return 'bg-green-100 text-green-800'; // Mild
    if (temp <= 28) return 'bg-yellow-100 text-yellow-800'; // Warm
    return 'bg-red-100 text-red-800'; // Hot
};

// Helper function to get color based on rainfall
const getRainfallColor = (rainfall: number): string => {
    if (rainfall <= 10) return 'bg-yellow-100 text-yellow-800'; // Very dry
    if (rainfall <= 50) return 'bg-green-100 text-green-800';   // Moderate
    if (rainfall <= 100) return 'bg-blue-100 text-blue-800';    // Rainy
    return 'bg-blue-200 text-blue-800';                         // Very rainy
};

export default function ClimateSection({ climate }: ClimateSectionProps) {
    // Full year of months (for a real application, you'd want a complete dataset)
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Create a map of month to climate data
    const climateMap = climate.reduce((acc, item) => {
        acc[item.month] = item;
        return acc;
    }, {} as Record<string, MonthlyClimate>);

    return (
        <section className="bg-white rounded-lg shadow-md p-6" id="climate">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Climate & Best Time to Visit</h2>

            <p className="text-gray-600 mb-6">
                Portugal generally enjoys a Mediterranean climate with mild winters and warm summers.
                The north tends to be cooler and wetter, while the south (especially Algarve) is warmer and drier.
                Coastal areas benefit from ocean breezes that moderate temperatures.
            </p>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <thead className="bg-gray-50">
                    <tr>
                        <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
                        <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg. High (°C)</th>
                        <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg. Low (°C)</th>
                        <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rainfall (mm)</th>
                        <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Notes</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                    {months.map((month, index) => {
                        const monthData = climateMap[month] || {
                            month,
                            averageHigh: index < 6 ? 20 + index : 30 - (index - 5),  // Dummy data
                            averageLow: index < 6 ? 10 + index : 20 - (index - 5),   // Dummy data
                            rainfall: index < 3 || index > 8 ? 80 : 20,              // Dummy data
                            notes: ''
                        };

                        return (
                            <tr key={month} className="hover:bg-gray-50">
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
                    <span className={`px-2 py-1 rounded-full text-xs ${getRainfallColor(monthData.rainfall)}`}>
                      {monthData.rainfall} mm
                    </span>
                                </td>
                                <td className="py-3 px-3 text-sm text-gray-500">{monthData.notes}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>

            <div className="mt-6 space-y-4">
                <div>
                    <h3 className="text-lg font-medium text-blue-600">Best Time to Visit</h3>
                    <p className="text-gray-600 mt-1">
                        The best time to visit Portugal is during spring (April-June) and early fall (September-October)
                        when temperatures are pleasant, crowds are smaller, and prices are lower than peak summer.
                        The weather is ideal for sightseeing and outdoor activities.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-medium text-blue-600">Peak Tourist Season</h3>
                    <p className="text-gray-600 mt-1">
                        July and August are the busiest months with higher prices and crowded attractions,
                        especially in coastal areas like the Algarve. Expect hot temperatures and bustling beaches.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-medium text-blue-600">Off-Season Travel</h3>
                    <p className="text-gray-600 mt-1">
                        Winter (November-March) offers the lowest prices and fewest tourists. While some coastal
                        resorts may be quiet or closed, cities like Lisbon and Porto remain lively year-round, with
                        mild temperatures making sightseeing comfortable. Expect more rain, especially in the north.
                    </p>
                </div>
            </div>
        </section>
    );
}