import React from 'react';

type RegionMonthTagsProps = {
    months: string[];
    colorClass: string;
};

export default function RegionMonthTags({ months, colorClass }: RegionMonthTagsProps) {
    return (
        <div className="mt-3 flex flex-wrap gap-2">
            {months.map(month => (
                <span
                    key={month}
                    className={`px-3 py-1 ${colorClass} text-xs rounded-full font-medium`}
                >
                    {month}
                </span>
            ))}
        </div>
    );
}