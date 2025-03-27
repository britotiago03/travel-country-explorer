'use client';

import React, { useState } from 'react';
import { MonthlyClimate, Region } from '@/data/countries';
import { portugal } from '@/data/countries'; // Import portugal data directly
import {
    ClimateOverviewTab,
    MonthlyClimateTab,
    SeasonalActivitiesTab,
    RegionalClimateTab
} from './climate';

type ClimateSectionProps = {
    climate: { [regionSlug: string]: MonthlyClimate[] };
    regions?: Region[]; // Optional regions to show regional climate info
};

export default function ClimateSection({ climate, regions }: ClimateSectionProps) {
    const [activeTab, setActiveTab] = useState('overview');

    // Full year of months
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Get the nationwide climate data (or fallback to the first region if none exists)
    const climateData = climate['nationwide'] || Object.values(climate)[0] || [];

    // Create a map of month to climate data
    const climateMap = climateData.reduce((acc, item) => {
        acc[item.month] = item;
        return acc;
    }, {} as Record<string, MonthlyClimate>);

    // Use regions from props if available, otherwise fallback to portugal regions data
    const availableRegions = regions || portugal.regions;

    return (
        <section className="bg-white rounded-lg shadow-md" id="climate">
            <h2 className="text-2xl font-semibold text-gray-800 p-6 border-b">
                Climate & Best Time to Visit
            </h2>

            {/* Navigation Tabs */}
            <div className="flex overflow-x-auto border-b">
                <button
                    onClick={() => setActiveTab('overview')}
                    className={`px-4 py-3 font-medium text-sm whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                        activeTab === 'overview'
                            ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                            : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                    }`}
                >
                    Climate Overview
                </button>
                <button
                    onClick={() => setActiveTab('monthly')}
                    className={`px-4 py-3 font-medium text-sm whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                        activeTab === 'monthly'
                            ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                            : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                    }`}
                >
                    Month by Month
                </button>
                <button
                    onClick={() => setActiveTab('seasons')}
                    className={`px-4 py-3 font-medium text-sm whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                        activeTab === 'seasons'
                            ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                            : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                    }`}
                >
                    Seasonal Activities
                </button>
                <button
                    onClick={() => setActiveTab('regions')}
                    className={`px-4 py-3 font-medium text-sm whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                        activeTab === 'regions'
                            ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                            : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                    }`}
                >
                    Regional Climate
                </button>
            </div>

            <div className="p-6">
                {/* Climate Overview */}
                {activeTab === 'overview' && (
                    <ClimateOverviewTab />
                )}

                {/* Monthly Climate Table */}
                {activeTab === 'monthly' && (
                    <MonthlyClimateTab
                        months={months}
                        climateMap={climateMap}
                    />
                )}

                {/* Seasonal Activities */}
                {activeTab === 'seasons' && (
                    <SeasonalActivitiesTab />
                )}

                {/* Regional Climate */}
                {activeTab === 'regions' && (
                    <RegionalClimateTab
                        regions={availableRegions}
                        climateByRegion={climate}
                    />
                )}
            </div>
        </section>
    );
}