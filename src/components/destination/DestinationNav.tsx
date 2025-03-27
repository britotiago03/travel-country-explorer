'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

type NavItem = {
    id: string;
    label: string;
    href: string;
    icon: React.ReactNode;
};

type DestinationNavProps = {
    countrySlug: string;
    regionSlug: string;
};

export default function DestinationNav({ countrySlug }: DestinationNavProps) {
    const [activeSection, setActiveSection] = useState('overview');

    // Handle scroll to update active section
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;

            // Get all sections on the page
            const sections = document.querySelectorAll('section[id]');

            // Find the section that's currently in view
            let currentSection = 'overview';
            sections.forEach((section) => {
                const sectionTop = (section as HTMLElement).offsetTop;
                const sectionHeight = (section as HTMLElement).offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    currentSection = section.id;
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Navigation items
    const navItems: NavItem[] = [
        {
            id: 'overview',
            label: 'Overview',
            href: `#overview`,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            id: 'highlights',
            label: 'Highlights',
            href: `#highlights`,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
            )
        },
        {
            id: 'map',
            label: 'Map',
            href: `#map`,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
            )
        },
        {
            id: 'attractions',
            label: 'Attractions',
            href: `#attractions`,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
            )
        },
        {
            id: 'climate',
            label: 'Climate',
            href: `#climate`,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
            )
        }
    ];

    return (
        <div className="bg-white shadow-md rounded-lg mb-8 sticky top-4 z-10">
            <div className="px-1 py-1 overflow-x-auto">
                <div className="flex space-x-1">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            className={`px-3 py-2 text-sm font-medium rounded-md whitespace-nowrap flex items-center ${
                                activeSection === item.id
                                    ? 'bg-blue-100 text-blue-700'
                                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                            }`}
                            onClick={(e) => {
                                e.preventDefault();
                                const element = document.getElementById(item.id);
                                if (element) {
                                    const offsetTop = element.offsetTop - 80; // Adjust for any fixed headers
                                    window.scrollTo({
                                        top: offsetTop,
                                        behavior: 'smooth'
                                    });
                                    setActiveSection(item.id);
                                }
                            }}
                        >
                            <span className="mr-1.5">{item.icon}</span>
                            {item.label}
                        </a>
                    ))}

                    {/* Spacer */}
                    <div className="flex-grow"></div>

                    {/* Back to country link */}
                    <Link
                        href={`/countries/${countrySlug}`}
                        className="px-3 py-2 text-sm font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md whitespace-nowrap flex items-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Country
                    </Link>
                </div>
            </div>
        </div>
    );
}