// Define types for our data structure
export type Language = {
    name: string;
    official: boolean;
    percentage?: number; // Percentage of population that speaks it
    notes?: string; // Additional information about the language
};

export type Currency = {
    name: string;
    code: string;
    symbol: string;
    exchangeTips?: string;
};

export type TimeZone = {
    name: string;
    gmtOffset: string;
    notes?: string;
};

export type VisaRequirement = {
    forCitizens: string[]; // Array of countries
    requirement: string; // "visa-free" | "visa-on-arrival" | "e-visa" | "visa-required"
    duration: string; // e.g., "90 days", "30 days"
    notes?: string;
};

export type SafetyTip = {
    category: string; // "general" | "health" | "transportation" | "scams" | etc.
    tip: string;
};

export type Cultural = {
    dos: string[];
    donts: string[];
    dressCode: string;
    tipping: string;
    values: string[];
};

export type Holiday = {
    name: string;
    date: string; // Format: "MM-DD" or "varies" for holidays with changing dates
    description: string;
    isPublic: boolean;
};

export type Region = {
    name: string;
    summary: string;
    image?: string;
    slug: string; // For URL routing
};

export type Emergency = {
    police: string;
    ambulance: string;
    fire: string;
    generalEmergency?: string;
};

export type MonthlyClimate = {
    month: string;
    averageHigh: number; // in Celsius
    averageLow: number; // in Celsius
    rainfall: number; // in mm
    notes?: string;
};

export type EntryPoint = {
    name: string;
    type: "airport" | "border" | "port";
    nearestCity: string;
    code?: string; // Airport code, if applicable
    notes?: string;
};

export type Country = {
    name: string;
    slug: string;
    capital: string;
    languages: Language[];
    currency: Currency;
    timeZones: TimeZone[];
    visaRequirements: VisaRequirement[];
    safetyTips: SafetyTip[];
    cultural: Cultural;
    holidays: Holiday[];
    regions: Region[];
    emergency: Emergency;
    connectivity: string;
    transportation: string;
    electricity: string;
    cuisine: string;
    climate: MonthlyClimate[];
    entryPoints: EntryPoint[];
    funFact: string;
    population: string;
    area: string; // in km²
};

// Portugal data
export const portugal: Country = {
    name: "Portugal",
    slug: "portugal",
    capital: "Lisbon",
    languages: [
        {
            name: "Portuguese",
            official: true,
            percentage: 100,
            notes: "The official language of Portugal. The European Portuguese dialect differs from Brazilian Portuguese in accent, vocabulary, and some grammar rules."
        },
        {
            name: "English",
            official: false,
            percentage: 27,
            notes: "Widely spoken in tourist areas, especially in Lisbon, Porto, and Algarve. Many younger Portuguese speak good English."
        },
        {
            name: "Spanish",
            official: false,
            percentage: 10,
            notes: "Due to geographical proximity, Spanish is understood in many border regions and tourist destinations."
        },
        {
            name: "French",
            official: false,
            percentage: 15,
            notes: "Historically a popular second language, especially among older generations."
        },
        {
            name: "Mirandese",
            official: true,
            percentage: 0.1,
            notes: "A secondary official language spoken in a small region in northeastern Portugal near Miranda do Douro. Protected by law but has only about 10,000 speakers."
        }
    ],
    currency: {
        name: "Euro",
        code: "EUR",
        symbol: "€",
        exchangeTips: "ATMs are widely available in cities and tourist areas. Credit cards are accepted in most establishments, though some small restaurants and shops may prefer cash."
    },
    timeZones: [
        {
            name: "Western European Time",
            gmtOffset: "GMT+0",
            notes: "Mainland Portugal and Madeira use WET (GMT+0) in winter and WEST (GMT+1) in summer."
        },
        {
            name: "Azores Time",
            gmtOffset: "GMT-1",
            notes: "The Azores archipelago is one hour behind mainland Portugal."
        }
    ],
    visaRequirements: [
        {
            forCitizens: ["European Union", "United Kingdom", "United States", "Canada", "Australia", "New Zealand"],
            requirement: "visa-free",
            duration: "90 days",
            notes: "As part of the Schengen Area, Portugal allows visa-free entry for many countries, but stay is limited to 90 days within any 180-day period across all Schengen countries combined."
        }
    ],
    safetyTips: [
        {
            category: "general",
            tip: "Portugal is considered one of the safest countries in Europe with a low crime rate."
        },
        {
            category: "theft",
            tip: "Pickpocketing can occur in tourist areas of Lisbon and Porto. Keep valuables secure and be aware in crowded areas and on public transport."
        }
    ],
    cultural: {
        dos: [
            "Greet with a handshake or, between friends, with two kisses (starting from the left).",
            "Be patient and respectful of the slower pace of life, especially outside major cities.",
            "Learn a few Portuguese words - locals appreciate the effort."
        ],
        donts: [
            "Don't rush meals - dining is a social experience to be enjoyed slowly.",
            "Don't confuse Portugal with Spain or assume cultural similarities.",
            "Don't be overly loud in public places - Portuguese tend to be more reserved."
        ],
        dressCode: "Casual but neat attire is acceptable in most places. Beach attire should be confined to beach areas. When visiting churches, shoulders and knees should be covered.",
        tipping: "Not mandatory but appreciated. 5-10% is typical in restaurants if service charge is not included.",
        values: ["Family-oriented", "Respectful of tradition", "Hospitality", "Melancholic yet optimistic (concept of 'saudade')"]
    },
    holidays: [
        {
            name: "New Year's Day",
            date: "01-01",
            description: "Public holiday celebrating the new year.",
            isPublic: true
        },
        {
            name: "Freedom Day",
            date: "04-25",
            description: "Commemorates the Carnation Revolution of 1974 which ended the dictatorship.",
            isPublic: true
        }
    ],
    regions: [
        {
            name: "Lisbon Region",
            summary: "The capital region, blending historic charm with modern European city life.",
            slug: "lisbon-region",
            image: "/images/lisbon-region.jpg"
        },
        {
            name: "Porto and North",
            summary: "Home to the historic city of Porto, the Douro Valley wine region, and traditional villages.",
            slug: "porto-north",
            image: "/images/porto-north.jpg"
        },
        {
            name: "Algarve",
            summary: "Southern coastal region famous for beaches, golf, and resort towns.",
            slug: "algarve",
            image: "/images/algarve.jpg"
        },
        {
            name: "Alentejo",
            summary: "Rural heartland known for cork production, vineyards, and whitewashed villages.",
            slug: "alentejo",
            image: "/images/alentejo.jpg"
        },
        {
            name: "Central Portugal",
            summary: "Historic university city of Coimbra, Serra da Estrela mountains, and medieval villages.",
            slug: "central-portugal",
            image: "/images/central-portugal.jpg"
        },
        {
            name: "Madeira",
            summary: "Lush Atlantic island known for its tropical gardens, hiking trails, and Madeira wine.",
            slug: "madeira",
            image: "/images/madeira.jpg"
        },
        {
            name: "Azores",
            summary: "Remote archipelago with volcanic landscapes, crater lakes, and whale watching.",
            slug: "azores",
            image: "/images/azores.jpg"
        }
    ],
    emergency: {
        police: "112",
        ambulance: "112",
        fire: "112",
        generalEmergency: "112"
    },
    connectivity: "Good mobile coverage across most of the country. Free WiFi is common in cafes, hotels, and many public spaces. SIM cards are easily available for tourists.",
    transportation: "Efficient public transportation in cities, including metro systems in Lisbon and Porto. Trains connect major cities, while buses serve smaller towns. Car rental is a good option for exploring rural areas.",
    electricity: "230V, 50Hz with Type F (Schuko) plugs. Travelers from the UK or US may need adapters.",
    cuisine: "Known for fresh seafood, bacalhau (salted cod), pastéis de nata (custard tarts), Port wine, and olive oil. Meal times are typically later than in northern Europe or the US.",
    climate: [
        {
            month: "January",
            averageHigh: 15,
            averageLow: 8,
            rainfall: 110,
            notes: "Mild but rainy winter month, especially in the north."
        },
        {
            month: "July",
            averageHigh: 28,
            averageLow: 18,
            rainfall: 6,
            notes: "Peak summer month, hot and dry, especially in the interior."
        }
    ],
    entryPoints: [
        {
            name: "Lisbon Portela Airport",
            type: "airport",
            nearestCity: "Lisbon",
            code: "LIS",
            notes: "The main international gateway to Portugal."
        },
        {
            name: "Francisco Sá Carneiro Airport",
            type: "airport",
            nearestCity: "Porto",
            code: "OPO",
            notes: "Second largest international airport, serving the northern region."
        }
    ],
    funFact: "Portugal is Europe's oldest nation-state with borders virtually unchanged since 1139.",
    population: "10.3 million",
    area: "92,212 km²"
};

// Export collection of countries
export const countries: { [key: string]: Country } = {
    portugal
};

// Export a list of all countries for navigation
export const countryList = Object.values(countries).map(country => ({
    name: country.name,
    slug: country.slug
}));