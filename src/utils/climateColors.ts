// Shared utility functions for climate color coding

/**
 * Returns appropriate CSS class for temperature display
 * @param temp Temperature in Celsius
 * @returns CSS class string for background and text color
 */
export const getTemperatureColor = (temp: number): string => {
    if (temp <= 5) return 'bg-blue-200 text-blue-800';  // Cold
    if (temp <= 15) return 'bg-blue-100 text-blue-800'; // Cool
    if (temp <= 22) return 'bg-green-100 text-green-800'; // Mild
    if (temp <= 28) return 'bg-yellow-100 text-yellow-800'; // Warm
    return 'bg-red-100 text-red-800'; // Hot
};

/**
 * Returns appropriate CSS class and label for rainfall display
 * @param rainfall Rainfall in millimeters
 * @returns Object with label and CSS class for background and text color
 */
export const getRainfallInfo = (rainfall: number): { label: string; color: string } => {
    if (rainfall <= 10) return { label: 'Very dry', color: 'bg-red-100 text-red-800' };
    if (rainfall <= 40) return { label: 'Dry', color: 'bg-yellow-100 text-yellow-800' };
    if (rainfall <= 65) return { label: 'Moderate', color: 'bg-green-100 text-green-800' };
    if (rainfall <= 100) return { label: 'Rainy', color: 'bg-blue-100 text-blue-800' };
    return { label: 'Very rainy', color: 'bg-blue-200 text-blue-800' };
};

/**
 * Returns appropriate level and CSS class for tourist crowd display
 * @param month Month name
 * @param providedLevel Optional crowd level if available in data
 * @returns Object with level string and CSS color class
 */
export const getTouristCrowdLevel = (month: string, providedLevel?: string): { level: string; color: string } => {
    if (providedLevel) {
        const colorMap: Record<string, string> = {
            'High': 'bg-red-100 text-red-800',
            'Medium': 'bg-yellow-100 text-yellow-800',
            'Low': 'bg-green-100 text-green-800'
        };
        return { level: providedLevel, color: colorMap[providedLevel] || 'bg-gray-100 text-gray-800' };
    }

    // Default mapping if no level provided
    const highSeasonMonths = ['June', 'July', 'August'];
    const shoulderSeasonMonths = ['April', 'May', 'September', 'October'];

    if (highSeasonMonths.includes(month)) {
        return { level: 'High', color: 'bg-red-100 text-red-800' };
    } else if (shoulderSeasonMonths.includes(month)) {
        return { level: 'Medium', color: 'bg-yellow-100 text-yellow-800' };
    } else {
        return { level: 'Low', color: 'bg-green-100 text-green-800' };
    }
};