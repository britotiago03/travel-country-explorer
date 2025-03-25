import flags from '@/data/flags.json';

export function getCountryFlag(countryName: string): string | null {
    const flag = flags.find((f) => f.name.toLowerCase() === countryName.toLowerCase());
    return flag?.flag || null;
}
