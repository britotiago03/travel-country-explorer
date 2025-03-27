import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Region } from '@/data/countries';
import { getRegionSeasonsByName, defaultSeasons } from '../../../climate/regionSeasons';
import RegionMonthTags from './RegionMonthTags';

type RegionClimateCardProps = {
    region: Region;
};

export default function RegionClimateCard({ region }: RegionClimateCardProps) {
    // Get seasonal data for this region
    const seasonData = getRegionSeasonsByName(region.name) || defaultSeasons;

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-40 w-full">
                <Image
                    src={region.climateImage}
                    alt={`${region.name} region`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="absolute bottom-3 left-3 text-white font-semibold text-lg">
                        {region.name}
                    </div>
                </div>
            </div>

            <div className="p-4">
                {/* Climate description */}
                <div className="mb-4">
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Climate</h3>
                    <p className="text-gray-600 text-sm">{seasonData.description}</p>
                </div>

                {/* Best time to visit */}
                <div className="mb-4">
                    <h3 className="text-lg font-medium text-blue-800 mb-2">Best Time to Visit</h3>
                    <RegionMonthTags
                        months={seasonData.bestMonths}
                        colorClass="bg-green-100 text-green-800"
                    />
                </div>

                {/* Peak Season */}
                <div className="mb-4">
                    <h3 className="text-lg font-medium text-amber-800 mb-2">Peak Season</h3>
                    <RegionMonthTags
                        months={seasonData.peakMonths}
                        colorClass="bg-red-100 text-red-800"
                    />
                </div>

                {/* Link to region page */}
                <Link
                    href={`/countries/portugal/regions/${region.slug}`}
                    className="mt-2 text-blue-600 text-sm font-medium flex items-center"
                >
                    Explore {region.name}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4 ml-1"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}