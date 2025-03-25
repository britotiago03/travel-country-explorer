'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { countryList } from '@/data/countries';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                // Only needed for mobile now
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Close menu when navigating
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link href="/" className="font-bold text-xl text-blue-600">
                            Travel Explorer
                        </Link>
                    </div>

                    <div className="hidden sm:flex sm:items-center sm:space-x-8">
                        <Link
                            href="/"
                            className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                                pathname === '/'
                                    ? 'border-blue-500 text-blue-600'
                                    : 'border-transparent text-gray-500 hover:border-blue-500 hover:text-blue-600'
                            }`}
                        >
                            Home
                        </Link>

                        {/* Countries Dropdown - Now using hover */}
                        <div className="relative group" ref={dropdownRef}>
                            <button
                                type="button"
                                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                                    pathname.startsWith('/countries')
                                        ? 'border-blue-500 text-blue-600'
                                        : 'border-transparent text-gray-500 hover:border-blue-500 hover:text-blue-600'
                                }`}
                            >
                                Countries
                                <svg
                                    className="ml-2 h-5 w-5 transition-transform group-hover:rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>

                            <div className="absolute z-10 mt-1 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none invisible group-hover:visible transition-all opacity-0 group-hover:opacity-100">
                                {countryList.map((country) => (
                                    <Link
                                        key={country.slug}
                                        href={`/countries/${country.slug}`}
                                        className={`block px-4 py-2 text-sm hover:bg-gray-100 ${
                                            pathname === `/countries/${country.slug}`
                                                ? 'text-blue-600 bg-gray-50'
                                                : 'text-gray-700'
                                        }`}
                                    >
                                        {country.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <Link
                            href={`/about`}
                            className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                                pathname === '/about'
                                    ? 'border-blue-500 text-blue-600'
                                    : 'border-transparent text-gray-500 hover:border-blue-500 hover:text-blue-600'
                            }`}
                        >
                            About
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="sm:hidden flex items-center">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isMenuOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="sm:hidden bg-white shadow-lg">
                    <div className="pt-2 pb-3 space-y-1">
                        <Link
                            href="/"
                            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                                pathname === '/'
                                    ? 'bg-blue-50 text-blue-600 border-blue-500'
                                    : 'bg-white text-gray-500 hover:bg-gray-50 hover:text-gray-700 border-transparent'
                            }`}
                        >
                            Home
                        </Link>

                        {/* Mobile Countries Section */}
                        <div>
                            <div
                                className={`w-full text-left pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                                    pathname.startsWith('/countries')
                                        ? 'bg-blue-50 text-blue-600 border-blue-500'
                                        : 'bg-white text-gray-500 hover:bg-gray-50 hover:text-gray-700 border-transparent'
                                }`}
                            >
                                Countries
                            </div>

                            <div className="pl-6 space-y-1">
                                {countryList.map((country) => (
                                    <Link
                                        key={country.slug}
                                        href={`/countries/${country.slug}`}
                                        className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                                            pathname === `/countries/${country.slug}`
                                                ? 'bg-blue-50 text-blue-600 border-blue-500'
                                                : 'bg-white text-gray-500 hover:bg-gray-50 hover:text-gray-700 border-transparent'
                                        }`}
                                    >
                                        {country.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <Link
                            href={`/about`}
                            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                                pathname === '/about'
                                    ? 'bg-blue-50 text-blue-600 border-blue-500'
                                    : 'bg-white text-gray-500 hover:bg-gray-50 hover:text-gray-700 border-transparent'
                            }`}
                        >
                            About
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}