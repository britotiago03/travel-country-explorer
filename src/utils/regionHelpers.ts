// utils/regionHelpers.ts

/**
 * Helper functions for working with region data
 */

/**
 * Maps region slugs to their best visiting periods
 */
type BestTimesMap = {
    [regionSlug: string]: string;
};

/**
 * Determines the best time to visit a region based on climate data
 * @param country The country data that contains climate information
 * @param regionSlug The slug of the region to check
 * @returns A string describing the best time to visit
 */
export function getBestTimeToVisit(country: any, regionSlug: string): string {
    // Check if climate data exists for this region
    if (country.climate && country.climate[regionSlug]) {
        const regionClimate = country.climate[regionSlug];
        // Find months with good conditions (example logic - customize as needed)
        const goodMonths = regionClimate
            .filter((month: any) =>
                month.notes?.toLowerCase().includes('ideal') ||
                month.notes?.toLowerCase().includes('best') ||
                month.crowdLevel === 'Medium'
            )
            .map((month: any) => month.month);

        if (goodMonths.length) {
            if (goodMonths.length > 2) {
                // If there are consecutive months, show them as a range
                return formatMonthRange(goodMonths);
            }
            return goodMonths.slice(0, 2).join(', ');
        }
    }

    // Fallback for regions without specific climate data
    if (country.climate && country.climate.nationwide) {
        const goodMonths = country.climate.nationwide
            .filter((month: any) =>
                month.notes?.toLowerCase().includes('ideal') ||
                month.notes?.toLowerCase().includes('best') ||
                month.crowdLevel === 'Medium'
            )
            .map((month: any) => month.month);

        if (goodMonths.length) {
            if (goodMonths.length > 2) {
                return formatMonthRange(goodMonths);
            }
            return goodMonths.slice(0, 2).join(', ');
        }
    }

    // Default fallbacks by region
    const bestTimesMap: BestTimesMap = {
        'north-region': 'May to September',
        'algarve-region': 'April to June, September',
        'greater-lisbon': 'March to June, September to October',
        'madeira-region': 'Year-round (best: April to October)',
        'azores-region': 'June to September',
        'alentejo-region': 'April to June, September to October',
        'central-region': 'May to October',
        'setubal-peninsula': 'May to September',
        'west-tagus-valley': 'April to October',
    };

    return bestTimesMap[regionSlug] || "May to October";
}

/**
 * Helper to format a list of months into a range if they're consecutive
 */
function formatMonthRange(months: string[]): string {
    const monthOrder = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Sort months chronologically
    const sortedMonths = [...months].sort(
        (a, b) => monthOrder.indexOf(a) - monthOrder.indexOf(b)
    );

    // Check if they're consecutive
    let isConsecutive = true;
    for (let i = 0; i < sortedMonths.length - 1; i++) {
        const currentIndex = monthOrder.indexOf(sortedMonths[i]);
        const nextIndex = monthOrder.indexOf(sortedMonths[i + 1]);
        if (nextIndex !== (currentIndex + 1) % 12) {
            isConsecutive = false;
            break;
        }
    }

    if (isConsecutive && sortedMonths.length > 1) {
        return `${sortedMonths[0]} to ${sortedMonths[sortedMonths.length - 1]}`;
    } else {
        return sortedMonths.join(', ');
    }
}

/**
 * Maps region slugs to months that travelers should avoid
 */
const monthsToAvoidMap: Record<string, string> = {
    'north-region': 'December-February (rain)',
    'algarve-region': 'July-August (crowds, high prices)',
    'greater-lisbon': 'August (heat and crowds)',
    'madeira-region': 'November (rain)',
    'azores-region': 'November-March (rain and wind)',
    'alentejo-region': 'July-August (extreme heat)',
    'central-region': 'December-February (cold)',
    'setubal-peninsula': 'August (crowds)',
    'west-tagus-valley': 'January-February (rain)',
};

/**
 * Gets months to avoid for a specific region
 */
export function getMonthsToAvoid(regionSlug: string): string {
    return monthsToAvoidMap[regionSlug] || '';
}

/**
 * Maps region slugs to their characteristic tags
 */
const regionTagsMap: Record<string, string> = {
    'north-region': 'Wine, History, Nature',
    'algarve-region': 'Beaches, Golf, Seafood',
    'greater-lisbon': 'Culture, Nightlife, Architecture',
    'madeira-region': 'Hiking, Gardens, Relaxation',
    'azores-region': 'Nature, Whale Watching, Adventure',
    'alentejo-region': 'Gastronomy, Wine, Rural Tourism',
    'central-region': 'Heritage, Universities, Mountains',
    'setubal-peninsula': 'Beaches, Nature, Wildlife',
    'west-tagus-valley': 'Medieval Towns, Surfing, Monasteries',
};

/**
 * Gets characteristic tags for a specific region
 */
export function getRegionTags(regionSlug: string): string {
    return regionTagsMap[regionSlug] || 'Culture, Nature, Food';
}

/**
 * Maps region slugs to their geographical directions within Portugal
 */
const regionDirectionsMap: Record<string, string> = {
    'north-region': 'northern part',
    'central-region': 'central part',
    'greater-lisbon': 'western central area',
    'algarve-region': 'southernmost part',
    'alentejo-region': 'southern central area',
    'madeira-region': 'Atlantic Ocean, southwest',
    'azores-region': 'Atlantic Ocean, far west',
    'setubal-peninsula': 'central coastal area',
    'west-tagus-valley': 'west central area',
};

/**
 * Gets the geographical direction description for a region
 */
export function getRegionDirection(regionSlug: string): string {
    return regionDirectionsMap[regionSlug] || 'various parts';
}