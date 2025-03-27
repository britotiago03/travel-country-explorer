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
    capital: string;
    area: string;
    population: string;
    image: string;
    climateImage: string;
    slug: string;
    heroImage: string;
    description: string;
};


export type Emergency = {
    police: string;
    ambulance: string;
    fire: string;
    generalEmergency?: string;
    embassy?: {
        us?: string;
        uk?: string;
        eu?: string;
        au?: string;
        ca?: string;
    };
};

export type MonthlyClimate = {
    month: string;
    averageHigh: number; // in Celsius
    averageLow: number; // in Celsius
    rainfall: number; // in mm
    notes?: string;
    crowdLevel?: 'Low' | 'Medium' | 'High';
    events?: string[];
    regionalConditions?: {
        [region: string]: {
            description: string;
            isRecommended: boolean;
        }
    };
};

export type EntryPoint = {
    name: string;
    type: "airport" | "border" | "port";
    nearestCity: string;
    code?: string;
    notes?: string;
};

export type EntryRoute = {
    fromCountry: string;
    options: {
        type: 'flight' | 'land' | 'sea';
        description: string;
        duration?: string;
        frequency?: string;
    }[];
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
    climate: {
        [regionSlug: string]: MonthlyClimate[];
    };
    entryPoints: EntryPoint[];
    commonRoutes?: EntryRoute[];
    funFact: string;
    population: string;
    area: string; // in km²
    safetyLevel?: string;
    topReasons?: string[];
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
            name: "North Region",
            capital: "Porto",
            area: "21,278 km²",
            population: "3,673,861",
            slug: "north-region",
            summary: "Cultural and historical heartland with the city of Porto and the Douro Valley.",
            image: "/images/regions/north-region/north-region.jpg",
            climateImage: "/images/regions/north-region/north-region-1000.jpg",
            heroImage: "/images/regions/north-region/north-region-hero.jpg",
            description: "The North Region is known for its cultural depth and historic significance, highlighted by the city of Porto and the wine-rich Douro Valley. With ancient towns, mountains, and rivers, it offers a mix of tradition and natural beauty."
        },
        {
            name: "Central Region",
            capital: "Coimbra",
            area: "22,636 km²",
            population: "1,695,635",
            slug: "central-region",
            summary: "Home to Coimbra, medieval villages, and Serra da Estrela mountains.",
            image: "/images/regions/central-region/central-region.jpg",
            climateImage: "/images/regions/central-region/central-region-1000.jpg",
            heroImage: "/images/regions/central-region/central-region-hero.jpg",
            description: "Central Portugal offers charming villages, historic university towns, and scenic mountain landscapes, including the highest peak in mainland Portugal — Serra da Estrela."
        },
        {
            name: "West and Tagus Valley",
            capital: "Santarém",
            area: "9,839 km²",
            population: "852,583",
            slug: "west-tagus-valley",
            summary: "Fertile valley known for agriculture, history, and charming towns.",
            image: "/images/regions/west-tagus-valley/west-tagus-valley.jpg",
            climateImage: "/images/regions/west-tagus-valley/west-tagus-valley-1000.jpg",
            heroImage: "/images/regions/west-tagus-valley/west-tagus-valley-hero.jpg",
            description: "This region blends rural charm with rich history and agriculture. It's dotted with traditional towns and rolling vineyards along the Tagus River."
        },
        {
            name: "Greater Lisbon",
            capital: "Lisbon",
            area: "1,580 km²",
            population: "2,126,578",
            slug: "greater-lisbon",
            summary: "Portugal’s vibrant capital region with history, nightlife, and culture.",
            image: "/images/regions/greater-lisbon/greater-lisbon.jpg",
            climateImage: "/images/regions/greater-lisbon/greater-lisbon-1000.jpg",
            heroImage: "/images/regions/greater-lisbon/greater-lisbon-hero.jpg",
            description: "Greater Lisbon is the economic and cultural hub of Portugal. The region features iconic architecture, museums, nightlife, and a dynamic blend of tradition and modernity."
        },
        {
            name: "Setúbal Peninsula",
            capital: "Setúbal",
            area: "1,421 km²",
            population: "834,599",
            slug: "setubal-peninsula",
            summary: "Coastal region known for beaches, seafood, and natural parks.",
            image: "/images/regions/setubal-peninsula/setubal-peninsula.jpg",
            climateImage: "/images/regions/setubal-peninsula/setubal-peninsula-1000.jpg",
            heroImage: "/images/regions/setubal-peninsula/setubal-peninsula-hero.jpg",
            description: "The Setúbal Peninsula offers beautiful beaches, fishing villages, and natural parks like Arrábida. It’s a growing residential region with excellent ferry and train access to Lisbon."
        },
        {
            name: "Alentejo Region",
            capital: "Évora",
            area: "27,329 km²",
            population: "474,701",
            slug: "alentejo-region",
            summary: "Expansive plains, cork trees, vineyards, and historic towns.",
            image: "/images/regions/alentejo-region/alentejo-region.jpg",
            climateImage: "/images/regions/alentejo-region/alentejo-region-1000.jpg",
            heroImage: "/images/regions/alentejo-region/alentejo-region-hero.jpg",
            description: "Known for its slow pace, rolling plains, and medieval towns, Alentejo is the heart of rural Portugal. It’s rich in agriculture, wine production, and historical architecture."
        },
        {
            name: "Algarve Region",
            capital: "Faro",
            area: "4,997 km²",
            population: "484,122",
            slug: "algarve-region",
            summary: "Sunny beaches, golf resorts, and picturesque coastal towns.",
            image: "/images/regions/algarve-region/algarve-region.jpg",
            climateImage: "/images/regions/algarve-region/algarve-region-1000.jpg",
            heroImage: "/images/regions/algarve-region/algarve-region-hero.jpg",
            description: "Algarve is Portugal’s most popular tourist region, famous for its sunny weather, dramatic coastlines, beach resorts, and charming seaside towns like Lagos and Tavira."
        },
        {
            name: "Madeira Autonomous Region",
            capital: "Funchal",
            area: "801 km²",
            population: "256,622",
            slug: "madeira-region",
            summary: "Island paradise with lush landscapes and volcanic origins.",
            image: "/images/regions/madeira-region/madeira-region.jpg",
            climateImage: "/images/regions/madeira-region/madeira-region-1000.jpg",
            heroImage: "/images/regions/madeira-region/madeira-region-hero.jpg",
            description: "Madeira is a subtropical island known for its mountains, levadas (irrigation channels), and botanical beauty. The region offers hiking, ocean views, and vibrant local culture."
        },
        {
            name: "Azores Autonomous Region",
            capital: "Ponta Delgada",
            area: "2,351 km²",
            population: "241,025",
            slug: "azores-region",
            summary: "Remote Atlantic archipelago with crater lakes and whale watching.",
            image: "/images/regions/azores-region/azores-region.jpg",
            climateImage: "/images/regions/azores-region/azores-region-1000.jpg",
            heroImage: "/images/regions/azores-region/azores-region-hero.jpg",
            description: "The Azores archipelago is a group of volcanic islands in the North Atlantic, famous for crater lakes, geothermal springs, whale watching, and green landscapes."
        }
    ],
        emergency: {
            police: "112",
            ambulance: "112",
            fire: "112",
            generalEmergency: "112",
            embassy: {
                us: "+351 21 770 2122",
                uk: "+351 21 392 4000",
                eu: "Various - check with your country's embassy",
                au: "+351 21 310 1500",
                ca: "+351 21 316 4600"
            }
        },
    connectivity: "Good mobile coverage across most of the country. Free WiFi is common in cafes, hotels, and many public spaces. SIM cards are easily available for tourists and can be purchased at airports, mobile carrier stores, and some convenience stores.",
    transportation: "Efficient public transportation in cities, including metro systems in Lisbon and Porto. Trains connect major cities, while buses serve smaller towns. Car rental is a good option for exploring rural areas. Many historic city centers are best explored on foot due to narrow streets and limited parking.",
    electricity: "230V, 50Hz with Type F (Schuko) plugs. Travelers from the UK or US may need adapters. Power outlets typically accommodate two round pins. Most hotels in tourist areas have adapters available upon request.",
    cuisine: "Portuguese cuisine is known for fresh seafood, especially bacalhau (salted cod) which is prepared in hundreds of different ways. Popular dishes include pastéis de nata (custard tarts), caldo verde (kale soup), and grilled sardines. Portugal is famous for Port wine, Vinho Verde, and Madeira wines. Meal times are typically later than in northern Europe or the US, with lunch around 1-3 PM and dinner after 8 PM.",
    climate: {
        "nationwide": [
            {
                month: "January",
                averageHigh: 15,
                averageLow: 8,
                rainfall: 110,
                notes: "Winter month with mild temperatures in the south but cooler and wetter conditions in the north. The Algarve remains pleasant with sunny days.",
                crowdLevel: "Low",
                events: ["New Year's Day Celebrations", "International Chocolate Festival in Óbidos"]
            },
            {
                month: "February",
                averageHigh: 16,
                averageLow: 9,
                rainfall: 90,
                notes: "Similar to January but with early signs of spring. Carnival celebrations bring color and festivities across the country.",
                crowdLevel: "Low",
                events: ["Carnival (varies by date)", "Almond Blossom Festival in the Algarve"]
            },
            {
                month: "March",
                averageHigh: 18,
                averageLow: 10,
                rainfall: 70,
                notes: "Spring begins with wildflowers blooming across the countryside. Weather can be variable with occasional rain showers.",
                crowdLevel: "Low",
                events: ["BTL - Lisbon Travel Market", "International Chocolate Festival in Óbidos"]
            },
            {
                month: "April",
                averageHigh: 19,
                averageLow: 11,
                rainfall: 65,
                notes: "Ideal month for travel with pleasant temperatures and blooming landscapes. Easter celebrations are prominent.",
                crowdLevel: "Medium",
                events: ["Easter Celebrations", "Freedom Day (April 25)", "Flower Torch Festival in São Brás de Alportel"]
            },
            {
                month: "May",
                averageHigh: 22,
                averageLow: 13,
                rainfall: 55,
                notes: "One of the best months to visit with warm days, cool evenings, and relatively few tourists compared to summer months.",
                crowdLevel: "Medium",
                events: ["Queima das Fitas Student Festivities", "Fatima Pilgrimage", "Iberian Mask Festival"]
            },
            {
                month: "June",
                averageHigh: 25,
                averageLow: 16,
                rainfall: 30,
                notes: "Start of summer with warm weather and many cultural events. Popular Saints festivals bring lively street parties to Lisbon and Porto.",
                crowdLevel: "Medium",
                events: ["Santo António Festival (Lisbon)", "São João Festival (Porto)", "Rock in Rio Lisboa"]
            },
            {
                month: "July",
                averageHigh: 28,
                averageLow: 18,
                rainfall: 6,
                notes: "Peak summer month with hot, dry conditions, especially inland. Coastal areas are popular as beaches fill with locals and tourists alike.",
                crowdLevel: "High",
                events: ["MEO Sudoeste Music Festival", "NOS Alive Music Festival", "International Motorcycle Convention in Faro"]
            },
            {
                month: "August",
                averageHigh: 28,
                averageLow: 18,
                rainfall: 8,
                notes: "Hottest and busiest month. Expect crowded beaches and higher prices. Inland areas can be very hot, but coastal areas remain pleasant.",
                crowdLevel: "High",
                events: ["Festa do Avante", "Romaria da Senhora da Agonia in Viana do Castelo", "Boom Festival (biennial)"]
            },
            {
                month: "September",
                averageHigh: 26,
                averageLow: 17,
                rainfall: 35,
                notes: "Excellent month to visit as crowds thin but weather remains warm. Sea temperatures are at their highest after summer heating.",
                crowdLevel: "Medium",
                events: ["Wine Harvest Festivals across wine regions", "Nossa Senhora dos Remédios Festival"]
            },
            {
                month: "October",
                averageHigh: 22,
                averageLow: 14,
                rainfall: 80,
                notes: "Autumn arrives with golden colors in the north. Weather remains pleasant for sightseeing with occasional rain showers starting.",
                crowdLevel: "Medium",
                events: ["Lisbon Architecture Triennale", "Halloween celebrations in growing popularity"]
            },
            {
                month: "November",
                averageHigh: 18,
                averageLow: 11,
                rainfall: 100,
                notes: "Rainy season begins in earnest, particularly in the north. The south (Algarve) remains mild and fairly dry.",
                crowdLevel: "Low",
                events: ["St. Martin's Day (November 11)", "Web Summit in Lisbon", "All Saints' Day (November 1)"]
            },
            {
                month: "December",
                averageHigh: 16,
                averageLow: 9,
                rainfall: 105,
                notes: "Winter arrives but remains mild by European standards. Christmas decorations and markets create a festive atmosphere.",
                crowdLevel: "Low",
                events: ["Christmas Markets", "New Year's Eve celebrations", "Traditional winter festivals"]
            }
        ],
        "north-region": [
            {
                month: "January",
                averageHigh: 13,
                averageLow: 5,
                rainfall: 158,
                notes: "Cold and wet in the North. Good time for indoor activities, museums, and Port wine tasting in Porto.",
                crowdLevel: "Low",
                events: ["New Year's Day Celebrations"]
            },
            {
                month: "April",
                averageHigh: 17,
                averageLow: 9,
                rainfall: 92,
                notes: "Spring brings blooming landscapes. Ideal for exploring historic towns and starting to enjoy outdoor activities.",
                crowdLevel: "Medium",
                events: ["Holy Week Processions", "Freedom Day (April 25)"]
            },
            {
                month: "July",
                averageHigh: 25,
                averageLow: 15,
                rainfall: 18,
                notes: "Pleasant summer temperatures compared to southern Portugal. Great time for hiking in national parks and exploring the Douro Valley.",
                crowdLevel: "High",
                events: ["NOS Alive Music Festival", "São João Festival in Porto"]
            },
            {
                month: "October",
                averageHigh: 19,
                averageLow: 11,
                rainfall: 131,
                notes: "Beautiful autumn foliage, especially in the Douro Valley. Wine harvest season with many festivals.",
                crowdLevel: "Medium",
                events: ["Wine Harvest Festivals", "Musica no Coração"]
            }
        ],
        "algarve-region": [
            {
                month: "January",
                averageHigh: 16,
                averageLow: 9,
                rainfall: 78,
                notes: "Mild winter with plenty of sunny days. Perfect for golfing and peaceful coastal walks without crowds.",
                crowdLevel: "Low",
                events: ["Almond Blossom Starting"]
            },
            {
                month: "April",
                averageHigh: 20,
                averageLow: 12,
                rainfall: 38,
                notes: "Warm pleasant days, cool evenings. Good for beach visits on warmer days and exploring natural parks.",
                crowdLevel: "Medium",
                events: ["Easter Celebrations", "Algarve's Medieval Days"]
            },
            {
                month: "July",
                averageHigh: 29,
                averageLow: 20,
                rainfall: 1,
                notes: "Hot and dry with virtually no rain. Peak beach season with very busy coastal towns and higher prices.",
                crowdLevel: "High",
                events: ["International Motorcycle Convention in Faro", "Portimão Sardine Festival"]
            },
            {
                month: "October",
                averageHigh: 23,
                averageLow: 15,
                rainfall: 67,
                notes: "Warm days continue with occasional rain. Sea remains warm enough for swimming. Much quieter than summer.",
                crowdLevel: "Medium",
                events: ["Algarve Nature Week", "Birdwatching Festival"]
            }
        ],
        "madeira-region": [
            {
                month: "January",
                averageHigh: 19,
                averageLow: 13,
                rainfall: 112,
                notes: "Mild even in winter with occasional rainfall. Great for hiking and enjoying the lush landscapes.",
                crowdLevel: "Medium",
                events: ["New Year's Fireworks in Funchal - among the largest in the world"]
            },
            {
                month: "April",
                averageHigh: 20,
                averageLow: 14,
                rainfall: 68,
                notes: "Flower Festival month with pleasant temperatures and stunning floral displays.",
                crowdLevel: "Medium",
                events: ["Madeira Flower Festival", "Easter Celebrations"]
            },
            {
                month: "July",
                averageHigh: 25,
                averageLow: 18,
                rainfall: 6,
                notes: "Warm and sunny with very little rain. Perfect for swimming, hiking, and outdoor activities.",
                crowdLevel: "High",
                events: ["Madeira Jazz Festival", "Santana Folklore Festival"]
            },
            {
                month: "October",
                averageHigh: 24,
                averageLow: 17,
                rainfall: 93,
                notes: "Still warm with increasing chances of rain. Great month for hiking the levadas (irrigation channels) without summer heat.",
                crowdLevel: "Medium",
                events: ["Columbus Festival in Porto Santo", "Nature Festival"]
            }
        ]
    },
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
        },
        {
            name: "Valença-Tui Border Crossing",
            type: "border",
            nearestCity: "Valença",
            notes: "Main crossing point between northern Portugal and Spain, connecting the A3 and A-55 highways."
        },
        {
            name: "Vila Real de Santo António-Ayamonte Border",
            type: "border",
            nearestCity: "Vila Real de Santo António",
            notes: "Southern crossing point connecting Portugal's Algarve with Spain's Andalusia region."
        },
        {
            name: "Port of Lisbon",
            type: "port",
            nearestCity: "Lisbon",
            notes: "Major cruise ship terminal and commercial port serving Portugal's capital."
        },
        {
            name: "Port of Leixões",
            type: "port",
            nearestCity: "Porto",
            notes: "Second largest artificial port in Portugal, serving the northern region."
        }
    ],
    commonRoutes: [
        {
            fromCountry: "Spain",
            options: [
                {
                    type: "land",
                    description: "Drive across multiple border crossings, most notably via A-55/A3 from Vigo to Porto or A-5/A6 from Badajoz to Lisbon",
                    duration: "30 minutes to 1 hour at the border"
                },
                {
                    type: "flight",
                    description: "Direct flights from Madrid, Barcelona, and other major Spanish cities to Lisbon and Porto",
                    duration: "1-1.5 hours",
                    frequency: "Multiple daily flights"
                },
                {
                    type: "land",
                    description: "Train services from Madrid to Lisbon (Lusitania night train) and from Vigo to Porto",
                    duration: "9-10 hours from Madrid, 2.5 hours from Vigo",
                    frequency: "Daily service"
                }
            ]
        },
        {
            fromCountry: "United Kingdom",
            options: [
                {
                    type: "flight",
                    description: "Direct flights from London, Manchester, Bristol, and Edinburgh to Lisbon, Porto, and Faro",
                    duration: "2.5-3 hours",
                    frequency: "Multiple daily flights"
                },
                {
                    type: "sea",
                    description: "Cruise ships regularly dock at Lisbon and Porto ports as part of European itineraries",
                    frequency: "Seasonal (mainly April-October)"
                }
            ]
        },
        {
            fromCountry: "France",
            options: [
                {
                    type: "flight",
                    description: "Direct flights from Paris, Lyon, Marseille, and other cities to major Portuguese airports",
                    duration: "2-2.5 hours",
                    frequency: "Multiple daily flights"
                },
                {
                    type: "land",
                    description: "Long-distance bus services connecting Paris and other French cities to Lisbon and Porto",
                    duration: "24+ hours",
                    frequency: "Several weekly departures"
                }
            ]
        }
    ],
    funFact: "Portugal is Europe's oldest nation-state with borders virtually unchanged since 1139.",
    population: "10.58 million",
    area: "92,152 km²",
    safetyLevel: "Very Safe",
    topReasons: [
        "Stunning coastal towns and beautiful beaches along the Algarve",
        "Rich maritime history and well-preserved medieval architecture",
        "World-renowned food and wine culture, including port wine and seafood"
    ],
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