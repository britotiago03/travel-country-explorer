// data/regionDistricts.ts
import { District } from '@/types/district';

/**
 * Districts within each region of Portugal
 */
const regionDistricts: Record<string, District[]> = {
    'north-region': [
        {
            name: 'Porto',
            slug: 'porto',
            description: 'Home to Portugal\'s second-largest city and the birthplace of Port wine, featuring historic neighborhoods, bridges, and a vibrant cultural scene.',
            mainCity: 'Porto',
            coordinates: [-8.6291, 41.1579],
            image: '/images/districts/porto-district.jpg',
            highlights: ['Dom Luís I Bridge', 'Ribeira District', 'Port Wine Cellars']
        },
        {
            name: 'Braga',
            slug: 'braga',
            description: 'Known for religious heritage, baroque architecture, and being one of Portugal\'s oldest cities with Roman ruins and medieval streets.',
            mainCity: 'Braga',
            coordinates: [-8.4256, 41.5518],
            image: '/images/districts/braga-district.jpg',
            highlights: ['Bom Jesus do Monte', 'Braga Cathedral', 'Roman Ruins of Bracara Augusta']
        },
        {
            name: 'Viana do Castelo',
            slug: 'viana-do-castelo',
            description: 'Coastal district known for its picturesque towns, folk traditions, and beautiful beaches along the Atlantic coast.',
            mainCity: 'Viana do Castelo',
            coordinates: [-8.8320, 41.6932],
            image: '/images/districts/viana-district.jpg',
            highlights: ['Santa Luzia Basilica', 'Traditional Folk Festivals', 'Coastal Beaches']
        },
        {
            name: 'Vila Real',
            slug: 'vila-real',
            description: 'Mountainous district in the heart of the Douro Valley wine region with stunning terraced vineyards and historic estates.',
            mainCity: 'Vila Real',
            coordinates: [-7.7444, 41.3002],
            image: '/images/districts/vila-real-district.jpg',
            highlights: ['Douro Valley Vineyards', 'Mateus Palace', 'Natural Parks']
        },
        {
            name: 'Bragança',
            slug: 'braganca',
            description: 'Portugal\'s northeastern district with preserved medieval villages, traditional culture, and protected natural landscapes.',
            mainCity: 'Bragança',
            coordinates: [-6.7506, 41.8072],
            image: '/images/districts/braganca-district.jpg',
            highlights: ['Montesinho Natural Park', 'Bragança Castle', 'Traditional Rural Architecture']
        }
    ],
    'central-region': [
        {
            name: 'Aveiro',
            slug: 'aveiro',
            description: 'The capital district of the Algarve with a historic old town, archaeological museum, and gateway to nearby beaches and natural parks.',
            mainCity: 'Faro',
            coordinates: [-7.9347, 37.0146],
            image: '/images/districts/faro-district.jpg',
            highlights: ['Faro Old Town', 'Ria Formosa Natural Park', 'Cathedral of Faro']
        },
        {
            name: 'Coimbra',
            slug: 'coimbra',
            description: 'Portugal\'s northeastern district with preserved medieval villages, traditional culture, and protected natural landscapes.',
            mainCity: 'Bragança',
            coordinates: [-6.7506, 41.8072],
            image: '/images/districts/braganca-district.jpg',
            highlights: ['Montesinho Natural Park', 'Bragança Castle', 'Traditional Rural Architecture']
        },
        {
            name: 'Viseu',
            slug: 'viseu',
            description: 'Portugal\'s northeastern district with preserved medieval villages, traditional culture, and protected natural landscapes.',
            mainCity: 'Bragança',
            coordinates: [-6.7506, 41.8072],
            image: '/images/districts/braganca-district.jpg',
            highlights: ['Montesinho Natural Park', 'Bragança Castle', 'Traditional Rural Architecture']
        },
        {
            name: 'Guarda',
            slug: 'guarda',
            description: 'Portugal\'s northeastern district with preserved medieval villages, traditional culture, and protected natural landscapes.',
            mainCity: 'Bragança',
            coordinates: [-6.7506, 41.8072],
            image: '/images/districts/braganca-district.jpg',
            highlights: ['Montesinho Natural Park', 'Bragança Castle', 'Traditional Rural Architecture']
        },
        {
            name: 'Castelo Branco',
            slug: 'castelo-branco',
            description: 'Portugal\'s northeastern district with preserved medieval villages, traditional culture, and protected natural landscapes.',
            mainCity: 'Bragança',
            coordinates: [-6.7506, 41.8072],
            image: '/images/districts/braganca-district.jpg',
            highlights: ['Montesinho Natural Park', 'Bragança Castle', 'Traditional Rural Architecture']
        },
        {
            name: 'Leiria',
            slug: 'leiria',
            description: 'Portugal\'s northeastern district with preserved medieval villages, traditional culture, and protected natural landscapes.',
            mainCity: 'Bragança',
            coordinates: [-6.7506, 41.8072],
            image: '/images/districts/braganca-district.jpg',
            highlights: ['Montesinho Natural Park', 'Bragança Castle', 'Traditional Rural Architecture']
        }
    ],
    'west-tagus-valley': [
        {
            name: 'Santarém',
            slug: 'santarem',
            description: 'The capital district of the Algarve with a historic old town, archaeological museum, and gateway to nearby beaches and natural parks.',
            mainCity: 'Faro',
            coordinates: [-7.9347, 37.0146],
            image: '/images/districts/faro-district.jpg',
            highlights: ['Faro Old Town', 'Ria Formosa Natural Park', 'Cathedral of Faro']
        }
    ],
    'alentejo-region': [
        {
            name: 'Portalegere',
            slug: 'portalegre',
            description: 'The capital district of the Algarve with a historic old town, archaeological museum, and gateway to nearby beaches and natural parks.',
            mainCity: 'Faro',
            coordinates: [-7.9347, 37.0146],
            image: '/images/districts/faro-district.jpg',
            highlights: ['Faro Old Town', 'Ria Formosa Natural Park', 'Cathedral of Faro']
        },{
            name: 'Évora',
            slug: 'evora',
            description: 'The capital district of the Algarve with a historic old town, archaeological museum, and gateway to nearby beaches and natural parks.',
            mainCity: 'Faro',
            coordinates: [-7.9347, 37.0146],
            image: '/images/districts/faro-district.jpg',
            highlights: ['Faro Old Town', 'Ria Formosa Natural Park', 'Cathedral of Faro']
        },{
            name: 'Beja',
            slug: 'beja',
            description: 'The capital district of the Algarve with a historic old town, archaeological museum, and gateway to nearby beaches and natural parks.',
            mainCity: 'Faro',
            coordinates: [-7.9347, 37.0146],
            image: '/images/districts/faro-district.jpg',
            highlights: ['Faro Old Town', 'Ria Formosa Natural Park', 'Cathedral of Faro']
        }
    ],
    'setubal-peninsula': [
        {
            name: 'Setúbal',
            slug: 'setubal',
            description: 'The capital district of the Algarve with a historic old town, archaeological museum, and gateway to nearby beaches and natural parks.',
            mainCity: 'Faro',
            coordinates: [-7.9347, 37.0146],
            image: '/images/districts/faro-district.jpg',
            highlights: ['Faro Old Town', 'Ria Formosa Natural Park', 'Cathedral of Faro']
        }
    ],
    'algarve-region': [
        {
            name: 'Faro',
            slug: 'faro',
            description: 'The capital district of the Algarve with a historic old town, archaeological museum, and gateway to nearby beaches and natural parks.',
            mainCity: 'Faro',
            coordinates: [-7.9347, 37.0146],
            image: '/images/districts/faro-district.jpg',
            highlights: ['Faro Old Town', 'Ria Formosa Natural Park', 'Cathedral of Faro']
        }
    ],
    'madeira-region': [
        {
            name: 'Madeira',
            slug: 'madeira',
            description: 'The capital district of the Algarve with a historic old town, archaeological museum, and gateway to nearby beaches and natural parks.',
            mainCity: 'Faro',
            coordinates: [-7.9347, 37.0146],
            image: '/images/districts/faro-district.jpg',
            highlights: ['Faro Old Town', 'Ria Formosa Natural Park', 'Cathedral of Faro']
        }
    ],
    'azores-region': [
        {
            name: 'Azores',
            slug: 'azores',
            description: 'The capital district of the Algarve with a historic old town, archaeological museum, and gateway to nearby beaches and natural parks.',
            mainCity: 'Faro',
            coordinates: [-7.9347, 37.0146],
            image: '/images/districts/faro-district.jpg',
            highlights: ['Faro Old Town', 'Ria Formosa Natural Park', 'Cathedral of Faro']
        }
    ],
    'greater-lisbon': [
        {
            name: 'Lisbon',
            slug: 'lisbon-center',
            description: 'The historic heart of Portugal\'s capital with iconic neighborhoods like Alfama, Chiado, and Bairro Alto, famous for its culture, architecture, and vibrant atmosphere.',
            mainCity: 'Lisbon',
            coordinates: [-9.1393, 38.7223],
            image: '/images/districts/lisbon-center.jpg',
            highlights: ['São Jorge Castle', 'Alfama District', 'Praça do Comércio']
        },
        {
            name: 'Belém District',
            slug: 'belem',
            description: 'Riverside district famous for its monumental architecture celebrating the Age of Discoveries, cultural institutions, and the original pastéis de nata.',
            mainCity: 'Lisbon (Belém)',
            coordinates: [-9.2156, 38.6971],
            image: '/images/districts/belem-district.jpg',
            highlights: ['Belém Tower', 'Jerónimos Monastery', 'Monument to the Discoveries']
        }
    ],
};

/**
 * Get districts for a specific region
 * @param regionSlug The slug of the region
 * @returns Array of districts or empty array if none found
 */
export function getRegionDistricts(regionSlug: string): District[] {
    return regionDistricts[regionSlug] || [];
}