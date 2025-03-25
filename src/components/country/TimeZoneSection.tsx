// components/country/TimeZoneSection.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { TimeZone } from '@/data/countries';

type TimeZoneSectionProps = {
    timeZones: TimeZone[];
    countryName: string;
};

export default function TimeZoneSection({ timeZones }: TimeZoneSectionProps) {
    const [currentTimes, setCurrentTimes] = useState<string[]>([]);

    useEffect(() => {
        const updateTimes = () => {
            const times = timeZones.map((tz) => {
                const gmtOffset = parseGMTOffset(tz.gmtOffset);
                const utc = new Date(new Date().toUTCString().slice(0, -4)); // Removes GMT
                const localTime = new Date(utc.getTime() + gmtOffset * 60 * 60 * 1000);
                return localTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            });
            setCurrentTimes(times);
        };

        updateTimes();
        const interval = setInterval(updateTimes, 60 * 1000); // Update every minute
        return () => clearInterval(interval);
    }, [timeZones]);

    const parseGMTOffset = (offset: string): number => {
        const match = offset.match(/GMT([+-])(\d+)/);
        if (!match) return 0;
        const sign = match[1] === '+' ? 1 : -1;
        const hours = parseInt(match[2], 10);
        return sign * hours;
    };

    return (
        <section className="bg-white rounded-lg shadow-md p-6" id="timezones">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <svg className="w-6 h-6 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Time Zones & Local Time
            </h2>

            <ul className="divide-y divide-gray-200">
                {timeZones.map((tz, index) => (
                    <li key={index} className="py-3">
                        <p className="text-gray-800 font-medium">{tz.name}</p>
                        <p className="text-sm text-gray-600">
                            <span className="mr-2">GMT Offset: {tz.gmtOffset}</span>
                            <span className="text-blue-700">Current Time: {currentTimes[index]}</span>
                        </p>
                        {tz.notes && (
                            <p className="text-sm text-gray-500 italic mt-1">{tz.notes}</p>
                        )}
                    </li>
                ))}
            </ul>

            <p className="text-xs text-gray-500 mt-4">
                Times are updated live every minute based on your browser's clock.
            </p>
        </section>
    );
}
