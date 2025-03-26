import React from 'react';
import { SectionHeader, BulletPoint, TipBox } from './shared';

type ElectricityTabProps = {
    electricity: string[];
};

export default function ElectricityTab({ electricity }: ElectricityTabProps) {
    return (
        <div>
            <SectionHeader
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                }
                title="Electricity & Plugs"
                subtitle="Power information for your devices"
            />

            <div className="mt-4 space-y-2">
                {electricity.map((point, index) => (
                    <BulletPoint key={index} text={point} />
                ))}
            </div>

            <div className="mt-6 flex justify-center">
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200 inline-flex items-center space-x-6">
                    <div className="text-center">
                        <div className="text-3xl mb-2">F</div>
                        <div className="text-sm text-gray-500">Type F Plug</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl mb-2">230V</div>
                        <div className="text-sm text-gray-500">Voltage</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl mb-2">50Hz</div>
                        <div className="text-sm text-gray-500">Frequency</div>
                    </div>
                </div>
            </div>

            <TipBox title="Traveler's Tip">
                <p className="text-sm text-gray-600">
                    Many modern hotels have USB outlets for charging devices, but it's still recommended to bring
                    appropriate adapters for all your electronics.
                </p>
            </TipBox>
        </div>
    );
}