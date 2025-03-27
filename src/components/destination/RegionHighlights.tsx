'use client';

import React from 'react';
import { RegionHighlight } from '@/types/region';

type RegionHighlightsProps = {
    highlights: RegionHighlight[];
};

export default function RegionHighlights({ highlights }: RegionHighlightsProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                    <div className="p-6">
                        <div className="flex items-center mb-3">
                            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-3">
                                <span className="text-xl">{highlight.icon}</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800">{highlight.title}</h3>
                        </div>
                        <p className="text-gray-600">{highlight.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}