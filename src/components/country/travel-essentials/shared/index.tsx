import React from 'react';

// Common checkmark icon component for consistency
export const CheckmarkIcon = () => (
    <svg className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

// Component for section headers
export const SectionHeader = ({ icon, title, subtitle }: { icon: React.ReactNode, title: string, subtitle: string }) => (
    <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
            {icon}
        </div>
        <div>
            <h3 className="text-lg font-medium text-blue-600">{title}</h3>
            <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
    </div>
);

// Component for bullet points
export const BulletPoint = ({ text }: { text: string }) => (
    <div className="flex items-start">
        <CheckmarkIcon />
        <p className="text-gray-700">{text}</p>
    </div>
);

// Component for tip boxes
export const TipBox = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="mt-6 bg-blue-50 p-4 rounded-md">
        <h4 className="text-sm font-medium text-blue-700 mb-2">{title}</h4>
        {children}
    </div>
);