import React from 'react';
import { Emergency } from '@/data/countries';
import { SectionHeader, BulletPoint } from './shared';

type EmergencyContactCardProps = {
    icon: React.ReactNode;
    title: string;
    number: string;
};

const EmergencyContactCard = ({ icon, title, number }: EmergencyContactCardProps) => (
    <div className="bg-blue-50 rounded-lg p-4 flex items-center">
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
            {icon}
        </div>
        <div>
            <h4 className="text-base font-medium text-gray-800">{title}</h4>
            <p className="text-xl font-bold text-blue-600">{number}</p>
        </div>
    </div>
);

type EmbassyContactCardProps = {
    country: string;
    phone: string;
};

const EmbassyContactCard = ({ country, phone }: EmbassyContactCardProps) => (
    <div className="bg-blue-50 p-3 rounded-md">
        <p className="text-sm font-medium text-gray-700">{country} Embassy</p>
        <p className="text-blue-600">{phone}</p>
    </div>
);

type EmergencyTabProps = {
    emergency: Emergency;
    countryName: string;
};

export default function EmergencyTab({ emergency, countryName }: EmergencyTabProps) {
    return (
        <div>
            <SectionHeader
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                }
                title="Emergency Contacts"
                subtitle={`Important numbers to know when traveling in ${countryName}`}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <EmergencyContactCard
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    }
                    title="General Emergency"
                    number={emergency.generalEmergency || "112"}
                />

                <EmergencyContactCard
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg>
                    }
                    title="Police"
                    number={emergency.police || "112"}
                />

                <EmergencyContactCard
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                        </svg>
                    }
                    title="Ambulance"
                    number={emergency.ambulance || "112"}
                />

                <EmergencyContactCard
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                        </svg>
                    }
                    title="Fire Department"
                    number={emergency.fire || "112"}
                />
            </div>

            {/* Embassy Information */}
            {emergency.embassy && (
                <div className="mt-6">
                    <h4 className="text-base font-medium text-gray-800 mb-3">Embassy & Consulate Contacts</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {emergency.embassy.us && <EmbassyContactCard country="US" phone={emergency.embassy.us} />}
                        {emergency.embassy.uk && <EmbassyContactCard country="UK" phone={emergency.embassy.uk} />}
                        {emergency.embassy.eu && <EmbassyContactCard country="EU Information" phone={emergency.embassy.eu} />}
                        {emergency.embassy.au && <EmbassyContactCard country="Australian" phone={emergency.embassy.au} />}
                        {emergency.embassy.ca && <EmbassyContactCard country="Canadian" phone={emergency.embassy.ca} />}
                    </div>
                </div>
            )}

            <div className="mt-6 bg-gray-50 p-4 rounded-md border border-gray-200">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Safety Tips</h4>
                <div className="space-y-2">
                    <BulletPoint text={`Save these numbers to your phone before traveling.`} />
                    <BulletPoint text={`In ${countryName}, emergency services may have English-speaking operators, especially in tourist areas.`} />
                    <BulletPoint text={`Consider registering with your country's embassy or consulate while traveling.`} />
                </div>
            </div>
        </div>
    );
}