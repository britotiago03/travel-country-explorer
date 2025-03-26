// countries/[country]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { countries } from '@/data/countries';
import { getCountryFlag } from '@/lib/getCountryFlag';

import BasicCountryInformation from '@/components/country/BasicCountryInformation';
import QuickFactsBox from '@/components/country/QuickFactsBox';
import RegionalBreakdown from '@/components/country/RegionalBreakdown';
import ClimateSection from '@/components/country/ClimateSection';
import EmergencySection from '@/components/country/EmergencySection';
import CountryIntro from '@/components/country/CountryIntro';
import RegionalMap from '@/components/country/RegionalMap';
import TravelEssentialsSection from '@/components/country/TravelEssentialsSection';
import EntryPointsSection from '@/components/country/EntryPointsSection';
import CulturalSection from '@/components/country/CulturalSection';

type CountryPageProps = {
    params: {
        country: string;
    };
};

export function generateStaticParams() {
    return Object.keys(countries).map((slug) => ({
        country: slug,
    }));
}

export default async function CountryPage({ params }: CountryPageProps) {
    const { country: countrySlug } = await Promise.resolve(params);
    const country = countries[countrySlug];

    if (!country) {
        notFound();
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
                <CountryIntro name={country.name} capital={country.capital} />

                {/* Regional Information - Moved up as requested */}
                <div className="my-8">
                    <RegionalBreakdown regions={country.regions} />
                    <div className="mt-6">
                        <RegionalMap />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Unified Basic Country Information */}
                        <BasicCountryInformation
                            languages={country.languages}
                            currency={country.currency}
                            timeZones={country.timeZones}
                            visaRequirements={country.visaRequirements}
                            safetyTips={country.safetyTips}
                            countryName={country.name}
                        />

                        <CulturalSection cultural={country.cultural} holidays={country.holidays} />

                        {/* Travel Essentials Section */}
                        <TravelEssentialsSection
                            connectivity={country.connectivity}
                            transportation={country.transportation}
                            electricity={country.electricity}
                            cuisine={country.cuisine}
                            countryName={country.name}
                        />

                        <ClimateSection climate={country.climate} />

                        {/* Entry Points Section */}
                        <EntryPointsSection
                            entryPoints={country.entryPoints}
                            countryName={country.name}
                        />
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="space-y-8">
                        <QuickFactsBox country={country} />
                        <EmergencySection emergency={country.emergency} />
                    </div>
                </div>
            </div>
        </main>
    );
}