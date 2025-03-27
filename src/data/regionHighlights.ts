// data/regionHighlights.ts
import { RegionHighlight } from '@/types/region';

type RegionHighlightsMap = {
    [regionSlug: string]: RegionHighlight[];
};

/**
 * Map of region slugs to their key highlights
 */
export const regionHighlights: RegionHighlightsMap = {
    'north-region': [
        {
            title: 'Port Wine',
            description: 'Home to the famous Douro Valley wine region, where Port wine is produced and aged in historic cellars.',
            icon: '🍷'
        },
        {
            title: 'Historic Porto',
            description: 'Explore the charming riverside city with its iconic Dom Luís I Bridge, colorful Ribeira district, and historic port wine cellars.',
            icon: '🏙️'
        },
        {
            title: 'Traditional Culture',
            description: 'Experience authentic Portuguese traditions, festivals, folklore, and the warmth of northern hospitality.',
            icon: '🎭'
        }
    ],
    'algarve-region': [
        {
            title: 'Stunning Beaches',
            description: 'Famous for golden cliffs, hidden coves, and azure waters along the Atlantic coast, with over 100 beaches to explore.',
            icon: '🏖️'
        },
        {
            title: 'Year-round Sunshine',
            description: 'Enjoys more than 300 days of sunshine per year, making it a perfect beach destination even in winter months.',
            icon: '☀️'
        },
        {
            title: 'Golf Paradise',
            description: 'Home to over 40 world-class golf courses with stunning coastal views and championship designs.',
            icon: '⛳'
        }
    ],
    'greater-lisbon': [
        {
            title: 'Historic Neighborhoods',
            description: 'Explore charming districts like Alfama, Bairro Alto, and Belém, each with its own unique character and history.',
            icon: '🏛️'
        },
        {
            title: 'Cultural Hotspot',
            description: 'Discover world-class museums, galleries, and architectural masterpieces spanning several centuries.',
            icon: '🎭'
        },
        {
            title: 'Culinary Excellence',
            description: 'Sample traditional pastéis de nata, fresh seafood, and innovative restaurants pushing Portuguese cuisine forward.',
            icon: '🍽️'
        }
    ],
    'madeira-region': [
        {
            title: 'Lush Landscapes',
            description: 'Explore subtropical gardens, dramatic mountains, and unique levada walking trails through verdant scenery.',
            icon: '🌿'
        },
        {
            title: 'Volcanic Wonders',
            description: 'Discover dramatic cliffs, natural swimming pools, and stunning viewpoints formed by the island\'s volcanic origins.',
            icon: '🌋'
        },
        {
            title: 'Madeira Wine',
            description: 'Sample the famous fortified wine that has been produced on the island for over 500 years using traditional methods.',
            icon: '🍷'
        }
    ],
    'azores-region': [
        {
            title: 'Volcanic Landscapes',
            description: 'Discover crater lakes, hot springs, and dramatic volcanic scenery across the archipelago.',
            icon: '🌋'
        },
        {
            title: 'Marine Wildlife',
            description: 'Experience world-class whale watching, dolphin encounters, and diverse marine ecosystems.',
            icon: '🐋'
        },
        {
            title: 'Outdoor Adventure',
            description: 'Enjoy hiking, diving, surfing, and canyoning in one of Europe\'s most pristine natural environments.',
            icon: '🥾'
        }
    ],
    'alentejo-region': [
        {
            title: 'Wine Country',
            description: 'Sample distinctive wines from one of Portugal\'s most respected wine regions, known for bold reds.',
            icon: '🍷'
        },
        {
            title: 'Historic Towns',
            description: 'Wander through whitewashed villages and medieval cities like Évora with its Roman temple and chapel of bones.',
            icon: '🏛️'
        },
        {
            title: 'Traditional Gastronomy',
            description: 'Enjoy rustic bread soups, acorn-fed black pork, sheep\'s cheese, and olive oil from ancient groves.',
            icon: '🍲'
        }
    ],
    'central-region': [
        {
            title: 'Historic Universities',
            description: 'Visit the University of Coimbra, one of Europe\'s oldest universities, with its stunning library and traditions.',
            icon: '📚'
        },
        {
            title: 'Mountain Scenery',
            description: 'Explore the Serra da Estrela mountains, Portugal\'s highest range, with skiing in winter and hiking in summer.',
            icon: '⛰️'
        },
        {
            title: 'Religious Heritage',
            description: 'Discover the sacred site of Fátima, one of Catholicism\'s most important pilgrimage destinations.',
            icon: '⛪'
        }
    ],
    'setubal-peninsula': [
        {
            title: 'Arrábida Natural Park',
            description: 'Explore stunning limestone cliffs, dense Mediterranean forest, and hidden beaches with crystal clear waters.',
            icon: '🏞️'
        },
        {
            title: 'Dolphin Watching',
            description: 'Observe resident bottlenose dolphins in the Sado Estuary, one of the few places in Europe to see them year-round.',
            icon: '🐬'
        },
        {
            title: 'Seafood Paradise',
            description: 'Enjoy fresh fish and the famous fried cuttlefish in seaside towns known for their seafood traditions.',
            icon: '🦑'
        }
    ],
    'west-tagus-valley': [
        {
            title: 'Medieval Towns',
            description: 'Visit well-preserved castle towns like Óbidos, with its complete walls and charming whitewashed houses.',
            icon: '🏰'
        },
        {
            title: 'Religious Architecture',
            description: 'Explore the Gothic monasteries of Alcobaça and Batalha, masterpieces of medieval religious architecture.',
            icon: '⛪'
        },
        {
            title: 'Atlantic Coastline',
            description: 'Discover dramatic coastal scenery, fishing villages, and some of Europe\'s best surfing spots.',
            icon: '🏄'
        }
    ]
};

/**
 * Default highlights if none are defined for a region
 */
export const defaultHighlights: RegionHighlight[] = [
    {
        title: 'Natural Beauty',
        description: 'Explore stunning landscapes and natural wonders throughout the region.',
        icon: '🏞️'
    },
    {
        title: 'Rich History',
        description: 'Discover centuries of culture, architecture, and historical significance.',
        icon: '🏛️'
    },
    {
        title: 'Local Cuisine',
        description: 'Savor authentic regional dishes and traditional Portuguese flavors.',
        icon: '🍽️'
    }
];

/**
 * Get the highlights for a specific region
 * @param regionSlug The slug of the region
 * @returns Array of region highlights
 */
export function getRegionHighlights(regionSlug: string): RegionHighlight[] {
    return regionHighlights[regionSlug] || defaultHighlights;
}