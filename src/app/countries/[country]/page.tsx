import { notFound } from 'next/navigation';
import Image from 'next/image';
import { countries } from '@/data/countries';
import LanguageSection from '@/components/country/LanguageSection';
import QuickFactsBox from '@/components/country/QuickFactsBox';
import RegionalBreakdown from '@/components/country/RegionalBreakdown';
import ClimateSection from '@/components/country/ClimateSection';

type CountryPageProps = {
    params: {
        country: string;
    };
};

export function generateStaticParams() {
    return Object.keys(countries).map(slug => ({
        country: slug,
    }));
}

export default async function CountryPage({ params }: CountryPageProps) {
    // Add async and await the params to fix the warning
    const { country: countrySlug } = await Promise.resolve(params);
    const country = countries[countrySlug];

    if (!country) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-gray-50 pt-16"> {/* Added pt-16 for navbar space */}
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
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                            {country.name}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Country Introduction */}
                        <section className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome to {country.name}</h2>
                            <p className="text-gray-600 leading-relaxed">
                                {country.name} is a beautiful country located in Europe, known for its rich history,
                                stunning coastlines, and vibrant culture. From the historic streets of {country.capital}
                                to the sun-drenched beaches of the Algarve, there's something for every traveler.
                            </p>
                        </section>

                        {/* Language Section */}
                        <LanguageSection languages={country.languages} />

                        {/* Cultural Insights Section */}
                        <section className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cultural Insights</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-medium text-blue-600">Do's</h3>
                                    <ul className="list-disc pl-5 mt-2 space-y-1">
                                        {country.cultural.dos.map((item, index) => (
                                            <li key={index} className="text-gray-600">{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-blue-600">Don'ts</h3>
                                    <ul className="list-disc pl-5 mt-2 space-y-1">
                                        {country.cultural.donts.map((item, index) => (
                                            <li key={index} className="text-gray-600">{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-blue-600">Dress Code</h3>
                                    <p className="text-gray-600 mt-1">{country.cultural.dressCode}</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-blue-600">Tipping Culture</h3>
                                    <p className="text-gray-600 mt-1">{country.cultural.tipping}</p>
                                </div>
                            </div>
                        </section>

                        {/* Climate Section */}
                        <ClimateSection climate={country.climate} />
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="space-y-8">
                        {/* Quick Facts Box */}
                        <QuickFactsBox country={country} />

                        {/* Safety Tips */}
                        <section className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">Safety Tips</h2>
                            <ul className="space-y-2">
                                {country.safetyTips.map((tip, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-green-500 mr-2">✓</span>
                                        <span className="text-gray-600">{tip.tip}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Emergency Information */}
                        <section className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">Emergency Contacts</h2>
                            <div className="space-y-2 text-gray-600">
                                <p><span className="font-medium">Emergency:</span> {country.emergency.generalEmergency}</p>
                                <p><span className="font-medium">Police:</span> {country.emergency.police}</p>
                                <p><span className="font-medium">Ambulance:</span> {country.emergency.ambulance}</p>
                                <p><span className="font-medium">Fire:</span> {country.emergency.fire}</p>
                            </div>
                        </section>
                    </div>
                </div>

                {/* Regional Breakdown */}
                <RegionalBreakdown regions={country.regions} />
            </div>
        </main>
    );
}