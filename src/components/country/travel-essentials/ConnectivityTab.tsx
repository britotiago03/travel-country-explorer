import React from 'react';
import { SectionHeader, BulletPoint, TipBox } from './shared';

type ConnectivityTabProps = {
    connectivity: string[];
    countryName: string;
};

export default function ConnectivityTab({ connectivity, countryName }: ConnectivityTabProps) {
    return (
        <div>
            <SectionHeader
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                    </svg>
                }
                title="Internet & Connectivity"
                subtitle={`Stay connected during your trip to ${countryName}`}
            />

            <div className="mt-4 space-y-2">
                {connectivity.map((point, index) => (
                    <BulletPoint key={index} text={point} />
                ))}
            </div>

            <TipBox title="Traveler's Tip">
                <p className="text-sm text-gray-600">
                    Consider downloading offline maps and translation apps before your trip. Many apps allow you
                    to use essential features without an internet connection.
                </p>
            </TipBox>
        </div>
    );
}