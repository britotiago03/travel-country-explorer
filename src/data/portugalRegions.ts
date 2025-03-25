export type RegionMeta = {
    name: string;
    slug: string;
    capital: string;
    area: string;
    population: string;
};

export const portugalRegions: RegionMeta[] = [
    {
        name: 'North Region',
        slug: 'north',
        capital: 'Porto',
        area: '21,278 km²',
        population: '3,673,861',
    },
    {
        name: 'Central Region',
        slug: 'central',
        capital: 'Coimbra',
        area: '22,636 km²',
        population: '1,695,635',
    },
    {
        name: 'West and Tagus Valley',
        slug: 'tagus-valley',
        capital: 'Santarém',
        area: '9,839 km²',
        population: '852,583',
    },
    {
        name: 'Greater Lisbon',
        slug: 'greater-lisbon',
        capital: 'Lisbon',
        area: '1,580 km²',
        population: '2,126,578',
    },
    {
        name: 'Setúbal Peninsula',
        slug: 'setubal-peninsula',
        capital: 'Setúbal',
        area: '1,421 km²',
        population: '834,599',
    },
    {
        name: 'Alentejo Region',
        slug: 'alentejo',
        capital: 'Évora',
        area: '27,329 km²',
        population: '474,701',
    },
    {
        name: 'Algarve Region',
        slug: 'algarve',
        capital: 'Faro',
        area: '4,997 km²',
        population: '484,122',
    },
    {
        name: 'Madeira Autonomous Region',
        slug: 'madeira',
        capital: 'Funchal',
        area: '801 km²',
        population: '256,622',
    },
    {
        name: 'Azores Autonomous Region',
        slug: 'azores',
        capital: 'Ponta Delgada',
        area: '2,351 km²',
        population: '241,025',
    },
];
