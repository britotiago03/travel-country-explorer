// types/district.ts

/**
 * Represents a district within a region
 */
export type District = {
    /**
     * The name of the district
     */
    name: string;

    /**
     * URL-friendly slug for the district
     */
    slug: string;

    /**
     * Brief description of the district
     */
    description: string;

    /**
     * Main city or town in the district
     */
    mainCity?: string;

    /**
     * Geographic coordinates [longitude, latitude]
     */
    coordinates: [number, number];

    /**
     * Path to district image
     */
    image?: string;

    /**
     * Optional district-specific highlights or attractions
     */
    highlights?: string[];
};