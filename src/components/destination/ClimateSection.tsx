'use client';

import React, { useState } from 'react';

type ClimateSectionProps = {
    regionName: string;
    bestTimeToVisit: string;
    monthsToAvoid: string;
};

export default function ClimateSection({
                                           regionName,
                                           bestTimeToVisit,
                                           monthsToAvoid
                                       }: ClimateSectionProps) {
    const [activeMonth, setActiveMonth] = useState<number>(new Date().getMonth());

    // Months of the year
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Placeholder climate data for visualization
    const getClimateData = (monthIndex: number) => {
        // This would be replaced with real data in a production environment
        const dummyData = [
            { temp: 14, rain: 110, crowds: 'Low' },    // Jan
            { temp: 15, rain: 90, crowds: 'Low' },     // Feb
            { temp: 17, rain: 70, crowds: 'Low' },     // Mar
            { temp: 19, rain: 65, crowds: 'Medium' },  // Apr
            { temp: 22, rain: 55, crowds: 'Medium' },  // May
            { temp: 25, rain: 30, crowds: 'Medium' },  // Jun
            { temp: 28, rain: 6, crowds: 'High' },     // Jul
            { temp: 28, rain: 8, crowds: 'High' },     // Aug
            { temp: 26, rain: 35, crowds: 'Medium' },  // Sep
            { temp: 22, rain: 80, crowds: 'Medium' },  // Oct
            { temp: 18, rain: 100, crowds: 'Low' },    // Nov
            { temp: 15, rain: 108, crowds: 'Low' }     // Dec
        ];

        return dummyData[monthIndex];
    };

    const currentClimate = getClimateData(activeMonth);

    // Get crowd level color
    const getCrowdColor = (level: string) => {
        switch (level) {
            case 'Low': return 'text-green-600';
            case 'Medium': return 'text-yellow-600';
            case 'High': return 'text-red-600';
            default: return 'text-gray-600';
        }
    };

    return (
        <section id="climate" className="mt-8 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Climate & Best Time to Visit</h2>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <div className="flex flex-wrap gap-4">
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-blue-800 mb-1">Best Time to Visit</h3>
                            <p className="text-blue-700">{bestTimeToVisit}</p>
                        </div>
                        {monthsToAvoid && (
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-amber-800 mb-1">Months to Avoid</h3>
                                <p className="text-amber-700">{monthsToAvoid}</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="mb-6 overflow-x-auto">
                    <div className="flex space-x-2 min-w-max">
                        {months.map((month, index) => (
                            <button
                                key={index}
                                className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition ${
                                    activeMonth === index
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                                onClick={() => setActiveMonth(index)}
                            >
                                {month}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Temperature Card */}
                    <div className="bg-gradient-to-br from-orange-50 to-yellow-100 rounded-lg p-4 border border-orange-200">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-orange-800 font-medium">Average Temperature</h3>
                                <p className="text-3xl font-bold mt-2 text-orange-700">
                                    {currentClimate.temp}°C
                                </p>
                            </div>
                            <span className="text-4xl">🌡️</span>
                        </div>
                        <div className="mt-4 text-sm text-orange-700">
                            {months[activeMonth]} is {
                            currentClimate.temp > 25 ? 'hot' :
                                currentClimate.temp > 20 ? 'warm' :
                                    currentClimate.temp > 15 ? 'mild' : 'cool'
                        } in {regionName}.
                        </div>
                    </div>

                    {/* Rainfall Card */}
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-lg p-4 border border-blue-200">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-blue-800 font-medium">Average Rainfall</h3>
                                <p className="text-3xl font-bold mt-2 text-blue-700">
                                    {currentClimate.rain} mm
                                </p>
                            </div>
                            <span className="text-4xl">💧</span>
                        </div>
                        <div className="mt-4 text-sm text-blue-700">
                            {months[activeMonth]} is {
                            currentClimate.rain > 100 ? 'very wet' :
                                currentClimate.rain > 50 ? 'somewhat rainy' :
                                    currentClimate.rain > 20 ? 'slightly rainy' : 'mostly dry'
                        } in {regionName}.
                        </div>
                    </div>

                    {/* Crowd Level Card */}
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 border border-gray-200">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-gray-800 font-medium">Crowd Levels</h3>
                                <p className={`text-3xl font-bold mt-2 ${getCrowdColor(currentClimate.crowds)}`}>
                                    {currentClimate.crowds}
                                </p>
                            </div>
                            <span className="text-4xl">👥</span>
                        </div>
                        <div className="mt-4 text-sm text-gray-700">
                            {months[activeMonth]} typically has {
                            currentClimate.crowds === 'High' ? 'many tourists' :
                                currentClimate.crowds === 'Medium' ? 'a moderate number of visitors' :
                                    'fewer tourists'
                        } in {regionName}.
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Seasonal Overview</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                            <h4 className="font-medium text-green-800 mb-2">Spring (Mar-May)</h4>
                            <p className="text-sm text-gray-700">
                                Pleasant temperatures with flowers in bloom. Some rainfall early in the season.
                                Ideal for exploring cities and countryside without summer crowds.
                            </p>
                        </div>
                        <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                            <h4 className="font-medium text-yellow-800 mb-2">Summer (Jun-Aug)</h4>
                            <p className="text-sm text-gray-700">
                                Hot and dry with clear skies. Peak tourist season with higher prices.
                                Perfect for beaches and outdoor activities.
                            </p>
                        </div>
                        <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                            <h4 className="font-medium text-orange-800 mb-2">Fall (Sep-Nov)</h4>
                            <p className="text-sm text-gray-700">
                                Cooling temperatures with increasing chance of rain later in the season.
                                Beautiful autumn colors and lower tourist numbers than summer.
                            </p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                            <h4 className="font-medium text-blue-800 mb-2">Winter (Dec-Feb)</h4>
                            <p className="text-sm text-gray-700">
                                Mild but rainy in most regions. Quieter tourist season with better deals.
                                Some regions may experience occasional snow.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}