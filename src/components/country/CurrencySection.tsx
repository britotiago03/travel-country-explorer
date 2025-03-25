// components/country/CurrencySection.tsx
import React from 'react';
import { Currency } from '@/data/countries';

type CurrencySectionProps = {
    currency: Currency;
    countryName: string;
};

export default function CurrencySection({ currency, countryName }: CurrencySectionProps) {
    return (
        <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <svg
                    className="w-6 h-6 text-blue-600 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8c-2.5 0-4 1.5-4 4s1.5 4 4 4 4-1.5 4-4-1.5-4-4-4z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 2v2m0 16v2m8-10h2M2 12h2m14.364 5.636l1.414 1.414M4.222 4.222l1.414 1.414m0 11.314l-1.414 1.414M19.778 4.222l-1.414 1.414"
                    />
                </svg>
                Currency & Exchange Tips
            </h2>

            <p className="text-gray-600 mb-2">
                The official currency of {countryName} is the{' '}
                <strong>
                    {currency.name} ({currency.code}, {currency.symbol})
                </strong>
                .
            </p>

            <p className="text-gray-600">{currency.exchangeTips}</p>
        </section>
    );
}
