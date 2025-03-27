import React from 'react';
import { seasonalActivities } from './data';

export default function SeasonalActivitiesTab() {
    return (
        <div>
            <p className="text-gray-600 mb-6">
                Portugal offers unique experiences throughout the year. Here's what to do during each season:
            </p>

            <div className="space-y-6">
                {seasonalActivities.map((season, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow transition-shadow duration-200">
                        <h3 className="text-lg font-medium text-blue-800 mb-3">{season.season}</h3>

                        <h4 className="font-medium text-gray-700 mb-2">Popular Activities:</h4>
                        <ul className="space-y-2 mb-4">
                            {season.activities.map((activity, idx) => (
                                <li key={idx} className="flex items-start text-gray-700">
                                    <svg className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>{activity}</span>
                                </li>
                            ))}
                        </ul>

                        <h4 className="font-medium text-gray-700 mb-2">Best Regions:</h4>
                        <p className="text-gray-600">{season.regions}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}