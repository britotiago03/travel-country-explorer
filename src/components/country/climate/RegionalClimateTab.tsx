import React from 'react';
import { MonthlyClimate, Region } from '@/data/countries';
import { portugal } from '@/data/countries'; // Import portugal data directly
import RegionClimateCard from './components/region/RegionClimateCard';

type RegionalClimateTabProps = {
    regions?: Region[];
    climateByRegion?: { [regionSlug: string]: MonthlyClimate[] };
};

export default function RegionalClimateTab({ regions: passedRegions }: RegionalClimateTabProps) {
    // Use passed regions if available, otherwise use regions from portugal data
    const regions = passedRegions || portugal.regions;

    if (!regions || regions.length === 0) {
        return <div className="text-gray-600">No regional information available.</div>;
    }

    return (
        <div>
            <p className="text-gray-600 mb-6">
                Portugal's diverse geography creates distinct climate zones. From the cooler, rainier north to
                the warm, sunny Algarve in the south, climate conditions can vary significantly by region.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {regions.map((region) => (
                    <RegionClimateCard
                        key={region.slug}
                        region={region}
                    />
                ))}
            </div>
        </div>
    );
}