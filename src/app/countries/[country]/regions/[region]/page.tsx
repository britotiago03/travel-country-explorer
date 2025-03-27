// app/countries/[country]/regions/[region]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { countries } from '@/data/countries';
import RegionHighlights from '@/components/destination/RegionHighlights';
import MiniMap from '@/components/destination/MiniMap';
import DestinationNav from '@/components/destination/DestinationNav';
import AttractionsPlaceholder from '@/components/destination/AttractionsPlaceholder';
import ClimateSection from '@/components/destination/ClimateSection';
import ResourcesSection from '@/components/destination/ResourcesSection';
import { getRegionHighlights } from '@/data/regionHighlights';
import { getBestTimeToVisit, getMonthsToAvoid, getRegionTags, getRegionDirection } from '@/utils/regionHelpers';

type RegionPageProps = {
    params: Promise<{
        country: string;
        region: string;
    }>;
};

export function generateStaticParams() {
    const paths: { country: string; region: string }[] = [];

    for (const [countrySlug, country] of Object.entries(countries)) {
        for (const region of country.regions) {
            paths.push({ country: countrySlug, region: region.slug });
        }
    }

    return paths;
}

export default async function RegionPage({ params }: RegionPageProps) {
    // Await the params object before accessing its properties
    const { country: countrySlug, region: regionSlug } = await params;

    const country = countries[countrySlug];
    if (!country) return notFound();

    const region = country.regions.find((r) => r.slug === regionSlug);
    if (!region) return notFound();

    // Get region highlights
    const highlights = getRegionHighlights(regionSlug);

    return (
        <main className="min-h-screen bg-gray-50 pt-16">
            {/* Hero Banner */}
            <div className="relative h-80 md:h-96 lg:h-[480px] w-full">
                <Image
                    src={region.heroImage || `/images/regions/${region.slug}-hero.jpg`}
                    alt={`${region.name} region`}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                    <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-8">
                        <div className="text-white max-w-3xl">
                            <div className="flex items-center mb-4">
                                <Link
                                    href={`/countries/${countrySlug}`}
                                    className="text-sm font-medium bg-white/20 hover:bg-white/30 backdrop-blur-sm px-3 py-1 rounded-full transition"
                                >
                                    {country.name}
                                </Link>
                                <span className="mx-2 text-white/70">›</span>
                                <span className="text-sm font-medium bg-white/30 backdrop-blur-sm px-3 py-1 rounded-full">
                                    {region.name}
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-2">
                                {region.name}
                            </h1>
                            <p className="text-xl text-white/90 drop-shadow-md max-w-2xl">
                                {region.summary}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-6xl mx-auto px-4 py-8">
                {/* Navigation Bar */}
                <DestinationNav countrySlug={countrySlug} regionSlug={regionSlug} />

                {/* Destination Summary Section */}
                <section id="overview" className="mt-8 bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="md:flex">
                        {/* Left column: Description */}
                        <div className="p-6 md:p-8 md:w-2/3">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">About {region.name}</h2>

                            <div className="prose prose-blue max-w-none mb-6">
                                <p className="text-gray-700 leading-relaxed">
                                    {region.description || 'This region is known for its unique culture, attractions, and landscapes.'}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4 text-sm text-gray-700 mt-6">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span><strong>Capital:</strong> {region.capital}</span>
                                </div>
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span><strong>Best time to visit:</strong> {getBestTimeToVisit(country, regionSlug)}</span>
                                </div>
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                    <span><strong>Good for:</strong> {getRegionTags(regionSlug)}</span>
                                </div>
                                {getMonthsToAvoid(regionSlug) && (
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span><strong>Avoid:</strong> {getMonthsToAvoid(regionSlug)}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right column: Image */}
                        <div className="md:w-1/3">
                            <div className="relative h-64 md:h-full w-full">
                                <Image
                                    src={region.image}
                                    alt={region.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Region Highlights Section */}
                <section id="highlights" className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Highlights</h2>
                    <RegionHighlights highlights={highlights} />
                </section>

                {/* Mini Map Section */}
                <section id="map" className="mt-8 bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Location Overview</h2>
                        <MiniMap countrySlug={countrySlug} regionSlug={regionSlug} />
                        <p className="text-sm text-gray-600 mt-3">
                            {region.name} is located in the {getRegionDirection(regionSlug)} of {country.name}, covering an area of {region.area}.
                        </p>
                    </div>
                </section>

                {/* Attractions Section */}
                <AttractionsPlaceholder regionName={region.name} />

                {/* Climate Section */}
                <ClimateSection
                    regionName={region.name}
                    bestTimeToVisit={getBestTimeToVisit(country, regionSlug)}
                    monthsToAvoid={getMonthsToAvoid(regionSlug)}
                />

                {/* Resources Section */}
                <ResourcesSection
                    regionName={region.name}
                    countryName={country.name}
                    regionSlug={regionSlug}
                    countrySlug={countrySlug}
                />
            </div>
        </main>
    );
}