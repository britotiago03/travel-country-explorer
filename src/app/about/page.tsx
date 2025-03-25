import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-gray-50 pt-16"> {/* Added pt-16 for navbar space */}
            {/* Hero Section */}
            <div className="relative h-64 md:h-80 w-full">
                <Image
                    src="/images/about-hero.jpg"
                    alt="World travel concept with map and compass"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-black/50 flex items-center justify-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                        About Travel Country Explorer
                    </h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                <section className="bg-white rounded-lg shadow-md p-8 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Travel Country Explorer was created to help travelers understand a country deeply before
                        visiting—from its regions and culture to climate, top attractions, and the best months to go.
                        We believe that meaningful travel starts with informed exploration.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        Our comprehensive guides go beyond basic travel tips, offering genuine cultural insights,
                        regional breakdowns, and season-aware recommendations that help you plan the perfect trip
                        based on your interests and timing.
                    </p>
                </section>

                <section className="bg-white rounded-lg shadow-md p-8 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Offer</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-medium text-blue-600">Country Overview Pages</h3>
                            <p className="text-gray-600 mt-2">
                                Essential travel information, cultural etiquette, and regional breakdowns to give you
                                the big picture for each destination.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-blue-600">Destination Guides</h3>
                            <p className="text-gray-600 mt-2">
                                In-depth guides for specific cities and regions with curated attractions and
                                seasonal travel advice.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-blue-600">Interactive Maps</h3>
                            <p className="text-gray-600 mt-2">
                                Visual exploration tools that help you discover locations and plan your journey
                                with geographic context.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-blue-600">Month-by-Month Guides</h3>
                            <p className="text-gray-600 mt-2">
                                Seasonal recommendations to help you choose the perfect time for your visit based on
                                weather, events, and tourism trends.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Future Plans</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        We're starting with Portugal, but we plan to expand our coverage to many more countries
                        around the world. Future enhancements will include personalized itinerary builders,
                        community reviews, and specialized guides for different travel styles.
                    </p>
                    <div className="flex justify-center">
                        <Link
                            href={`/countries/portugal`}
                            className="inline-block bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition-colors"
                        >
                            Start Exploring Portugal
                        </Link>
                    </div>
                </section>

                <section className="bg-white rounded-lg shadow-md p-8 mt-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Approach</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        We believe that travel is about more than just seeing famous landmarks. It's about connecting
                        with different cultures, understanding local customs, and experiencing destinations as more than
                        just a tourist. Our guides are designed to help you travel more authentically and responsibly.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        Each country guide is carefully researched to provide accurate, up-to-date information that
                        helps you navigate cultural differences, find hidden gems, and plan your trip during the
                        ideal season. We focus on helping you make informed decisions about where and when to travel
                        based on your interests and preferences.
                    </p>
                </section>

                <section className="bg-white rounded-lg shadow-md p-8 mt-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Have suggestions for countries we should add next? Found information that needs updating?
                        Or just want to share your experience using our guides? We'd love to hear from you!
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        Email us at: <a href="mailto:contact@travelcountryexplorer.com" className="text-blue-600 hover:underline">contact@travelcountryexplorer.com</a>
                    </p>
                </section>
            </div>
        </main>
    );
}