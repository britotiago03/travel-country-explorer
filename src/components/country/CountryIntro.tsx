// components/country/CountryIntro.tsx
import React from 'react';

type Props = {
    name: string;
    capital: string;
};

export default function CountryIntro({ name, capital }: Props) {
    return (
        <section className="bg-white rounded-lg shadow-md p-6" id="intro">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome to {name}</h2>
            <p className="text-gray-600 leading-relaxed">
                {name} is a beautiful country located in Europe, known for its rich history,
                stunning coastlines, and vibrant culture. From the historic streets of {capital} to the
                sun-drenched beaches of the Algarve, there's something for every traveler.
            </p>
        </section>
    );
}
