// countries/[country]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { countries } from '@/data/countries';
import { getCountryFlag } from '@/lib/getCountryFlag';

import LanguageSection from '@/components/country/LanguageSection';
import QuickFactsBox from '@/components/country/QuickFactsBox';
import RegionalBreakdown from '@/components/country/RegionalBreakdown';
import ClimateSection from '@/components/country/ClimateSection';
import CurrencySection from '@/components/country/CurrencySection';
import TimeZoneSection from '@/components/country/TimeZoneSection';
import VisaSection from '@/components/country/VisaSection';
import SafetySection from '@/components/country/SafetySection';
import CulturalSection from '@/components/country/CulturalSection';
import EmergencySection from '@/components/country/EmergencySection';
import CountryIntro from '@/components/country/CountryIntro';
import RegionalMap from '@/components/country/RegionalMap';

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
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <CountryIntro name={country.name} capital={country.capital} />
                        <LanguageSection languages={country.languages} />
                        <TimeZoneSection timeZones={country.timeZones} countryName={country.name} />
                        <CurrencySection currency={country.currency} countryName={country.name} />
                        <VisaSection visaRequirements={country.visaRequirements} countryName={country.name} />
                        <SafetySection safetyTips={country.safetyTips} countryName={country.name} />
                        <CulturalSection cultural={country.cultural} holidays={country.holidays} />
                        <ClimateSection climate={country.climate} />
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="space-y-8">
                        <QuickFactsBox country={country} />
                        <EmergencySection emergency={country.emergency} />
                    </div>
                </div>

                <RegionalBreakdown regions={country.regions} />
                <RegionalMap />
            </div>
        </main>
    );
}
