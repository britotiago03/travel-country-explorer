'use client';

import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { countries } from '@/data/countries';
import { getCountryFlag } from '@/lib/getCountryFlag';

import BasicCountryInformation from '@/components/country/BasicCountryInformation';
import QuickTravelFactsSection from '@/components/country/QuickTravelFactsSection';
import RegionalBreakdown from '@/components/country/RegionalBreakdown';
import ClimateSection from '@/components/country/ClimateSection';
import RegionalMap from '@/components/country/RegionalMap';
import TravelEssentialsSection from '@/components/country/TravelEssentialsSection';
import EntryPointsSection from '@/components/country/EntryPointsSection';
import CulturalSection from '@/components/country/CulturalSection';

type CountryPageProps = {
    params: {
        country: string;
    } | Promise<{ country: string }>;
};

// Type guard to check if an object is a promise
function isPromise<T>(obj: any): obj is Promise<T> {
    return obj && typeof obj.then === 'function';
}

export default function CountryPage({ params }: CountryPageProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [countrySlug, setCountrySlug] = useState<string | null>(null);

    // Handle params being a Promise in Next.js 15
    useEffect(() => {
        const handleParams = async () => {
            try {
                if (isPromise(params)) {
                    const resolvedParams = await params;
                    setCountrySlug(resolvedParams.country);
                } else {
                    setCountrySlug(params.country);
                }
            } catch (error) {
                console.error("Error resolving params:", error);
                // Handle the error appropriately
            }
        };

        handleParams();
    }, [params]);

    // Wait for country slug to be available
    useEffect(() => {
        if (countrySlug) {
            const countryData = countries[countrySlug];
            if (!countryData) {
                notFound();
            }
            setIsLoading(false);
        }
    }, [countrySlug]);

    useEffect(() => {
        if (!countrySlug) return;

        // Scroll to #map if it's in the hash
        if (window.location.hash === '#map') {
            const el = document.getElementById('map');
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: 'smooth' });
                }, 300); // Delay ensures it's rendered
            }
        }
    }, [countrySlug]);

    useEffect(() => {
        const scrollToHash = () => {
            if (window.location.hash === '#map') {
                const el = document.getElementById('map');
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        // Wait a bit longer to ensure DOM is ready
        const timeout = setTimeout(scrollToHash, 600); // You can tweak this

        return () => clearTimeout(timeout);
    }, [isLoading]); // Important: only run this after loading completes

    // Show loading state
    if (isLoading || !countrySlug) {
        return (
            <div className="min-h-screen bg-gray-50 pt-16 flex items-center justify-center">
                <div className="text-center">
                    <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
                    <p className="mt-4">Loading country information...</p>
                </div>
            </div>
        );
    }

    const country = countries[countrySlug];
    if (!country) {
        return null; // This should never happen as notFound() will redirect
    }

    const flagUrl = getCountryFlag(country.name);

    return (
        <main className="min-h-screen bg-gray-50 pt-16">
            {/* Hero Section */}
            <div className="relative h-64 md:h-80 lg:h-96 w-full">
                <Image
                    src={`/images/countries/${countrySlug}-hero.jpg`}
                    alt={`${country.name} landscape`}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40">
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                            {country.name}
                        </h1>
                        {flagUrl && (
                            <div className="mt-4">
                                <Image
                                    src={flagUrl}
                                    alt={`${country.name} flag`}
                                    width={64}
                                    height={42}
                                    className="rounded shadow-lg border"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 py-8">
                {/* Country Intro First */}
                <QuickTravelFactsSection country={country}/>

                {/* Regional Information - Moved up as requested */}
                <div className="my-8">
                    <RegionalBreakdown regions={country.regions}/>
                    <div id="map" className="mt-6">
                        <RegionalMap/>
                    </div>
                </div>

                <div className="space-y-12">
                    {/* Unified Basic Country Information */}
                    <BasicCountryInformation
                        languages={country.languages}
                        currency={country.currency}
                        timeZones={country.timeZones}
                        visaRequirements={country.visaRequirements}
                        safetyTips={country.safetyTips}
                        countryName={country.name}
                    />

                    <CulturalSection cultural={country.cultural} holidays={country.holidays}/>

                    {/* Travel Essentials Section with integrated Emergency info */}
                    <TravelEssentialsSection
                        connectivity={country.connectivity}
                        transportation={country.transportation}
                        electricity={country.electricity}
                        cuisine={country.cuisine}
                        emergency={country.emergency}
                        countryName={country.name}
                    />

                    <ClimateSection climate={country.climate}/>

                    {/* Entry Points Section */}
                    <EntryPointsSection
                        entryPoints={country.entryPoints}
                        countryName={country.name}
                        commonRoutes={country.commonRoutes}
                    />
                </div>
            </div>
        </main>
    );
}