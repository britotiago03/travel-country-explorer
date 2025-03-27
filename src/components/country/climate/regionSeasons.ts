// Region seasonal data for Portugal
export type RegionSeasons = {
    regionName: string;
    bestMonths: string[];
    peakMonths: string[];
    offSeasonMonths: string[];
    description: string;
};

export const regionSeasons: RegionSeasons[] = [
    {
        regionName: 'North Region',
        bestMonths: ['April', 'May', 'June', 'September', 'October'],
        peakMonths: ['July', 'August'],
        offSeasonMonths: ['November', 'December', 'January', 'February', 'March'],
        description: 'Mild maritime climate with rainy winters (5-14°C) and warm summers (15-27°C). More rainfall than southern Portugal. Mountain areas can see occasional snow in winter.'
    },
    {
        regionName: 'Central Region',
        bestMonths: ['April', 'May', 'June', 'September', 'October'],
        peakMonths: ['July', 'August'],
        offSeasonMonths: ['November', 'December', 'January', 'February', 'March'],
        description: 'Continental climate with hotter summers inland (14-29°C) and cooler winters (4-13°C). Serra da Estrela mountains have their own alpine microclimate with winter snow.'
    },
    {
        regionName: 'Greater Lisbon',
        bestMonths: ['April', 'May', 'June', 'September', 'October'],
        peakMonths: ['July', 'August'],
        offSeasonMonths: ['November', 'December', 'January', 'February', 'March'],
        description: 'Mediterranean climate with mild winters (8-15°C) and warm, dry summers (17-28°C). 3,000 hours of sunshine annually with cooling ocean breezes in summer.'
    },
    {
        regionName: 'West and Tagus Valley',
        bestMonths: ['April', 'May', 'June', 'September', 'October'],
        peakMonths: ['July', 'August'],
        offSeasonMonths: ['November', 'December', 'January', 'February', 'March'],
        description: 'Transitional climate between coastal and interior. Milder temperatures along the coast, more extreme inland. Rainy winters and dry, warm summers.'
    },
    {
        regionName: 'Setúbal Peninsula',
        bestMonths: ['April', 'May', 'June', 'September', 'October'],
        peakMonths: ['July', 'August'],
        offSeasonMonths: ['November', 'December', 'January', 'February', 'March'],
        description: 'Mediterranean climate influenced by Atlantic and Tagus River. Warm, dry summers and mild, moderately wet winters. Sea breezes moderate summer temperatures.'
    },
    {
        regionName: 'Alentejo Region',
        bestMonths: ['April', 'May', 'September', 'October'],
        peakMonths: ['June', 'July', 'August'],
        offSeasonMonths: ['November', 'December', 'January', 'February', 'March'],
        description: 'Hot, dry summers (often exceeding 35°C) and mild winters (5-15°C). Very little rainfall (under 600mm yearly) with low humidity in summer.'
    },
    {
        regionName: 'Algarve Region',
        bestMonths: ['March', 'April', 'May', 'June', 'September', 'October'],
        peakMonths: ['July', 'August'],
        offSeasonMonths: ['November', 'December', 'January', 'February'],
        description: '300+ days of sunshine yearly with the mildest winters in mainland Portugal (10-18°C) and warm summers (20-30°C). Lowest rainfall in Portugal with refreshing sea breezes.'
    },
    {
        regionName: 'Madeira Autonomous Region',
        bestMonths: ['April', 'May', 'June', 'September', 'October', 'November'],
        peakMonths: ['July', 'August', 'December'],
        offSeasonMonths: ['January', 'February', 'March'],
        description: 'Subtropical "island of eternal spring" with mild temperatures year-round (16-26°C). Sunnier southern coast, more rainfall in mountains. Pleasant ocean temperatures (18-23°C) all year.'
    },
    {
        regionName: 'Azores Autonomous Region',
        bestMonths: ['May', 'June', 'July', 'August', 'September'],
        peakMonths: ['July', 'August'],
        offSeasonMonths: ['November', 'December', 'January', 'February', 'March', 'April'],
        description: 'Mild maritime climate (14-25°C) with high humidity (70-80%) and frequent brief rain showers. Lush green landscapes with changeable weather throughout the year.'
    }
];

// Function to get region season data by name
export const getRegionSeasonsByName = (name: string): RegionSeasons | undefined => {
    return regionSeasons.find(region => region.regionName === name);
};

// Default season data if region not found
export const defaultSeasons: RegionSeasons = {
    regionName: 'Default',
    bestMonths: ['April', 'May', 'June', 'September', 'October'],
    peakMonths: ['July', 'August'],
    offSeasonMonths: ['November', 'December', 'January', 'February', 'March'],
    description: 'Mediterranean climate with mild winters and warm summers. Seasons vary by region, with northern areas generally wetter and cooler than the south.'
};