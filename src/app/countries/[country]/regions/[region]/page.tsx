// app/countries/[country]/regions/[region]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { countries } from '@/data/countries';

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

    return (
        <main className="min-h-screen bg-gray-50 pt-16">
            {/* Hero Banner */}
            <div className="relative h-64 md:h-80 w-full">
                <Image
                    src={region.heroImage || `/images/regions/${region.slug}-hero.jpg`}
                    alt={`${region.name} region`}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                        {region.name}
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-5xl mx-auto px-4 py-12 space-y-10">
                {/* Back Link */}
                <Link
                    href={`/countries/${countrySlug}`}
                    className="text-blue-600 hover:underline text-sm font-medium"
                >
                    ← Back to {country.name}
                </Link>

                {/* Summary */}
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        About {region.name}
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        {region.description || 'This region is known for its unique culture, attractions, and landscapes.'}
                    </p>
                </section>

                {/* Coming Soon / Future Sections */}
                <section className="bg-white p-6 rounded-lg shadow-md border border-dashed border-gray-300 text-center">
                    <p className="text-gray-600">More details about {region.name} coming soon!</p>
                </section>
            </div>
        </main>
    );
}