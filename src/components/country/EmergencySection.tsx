import React from 'react';
import { Emergency } from '@/data/countries';

type EmergencySectionProps = {
    emergency: Emergency;
};

export default function EmergencySection({ emergency }: EmergencySectionProps) {
    return (
        <section className="bg-white rounded-lg shadow-md p-6" id="emergency">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Emergency Contacts</h2>
            <div className="space-y-2 text-gray-600">
                <p><span className="font-medium">Emergency:</span> {emergency.generalEmergency}</p>
                <p><span className="font-medium">Police:</span> {emergency.police}</p>
                <p><span className="font-medium">Ambulance:</span> {emergency.ambulance}</p>
                <p><span className="font-medium">Fire:</span> {emergency.fire}</p>
            </div>
        </section>
    );
}
