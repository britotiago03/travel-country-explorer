'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { getRegionDistricts } from '@/data/regionDistricts';
import { District } from '@/types/district';

type MiniMapProps = {
    countrySlug: string;
    regionSlug: string;
};

export default function MiniMap({ countrySlug, regionSlug }: MiniMapProps) {
    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<mapboxgl.Map | null>(null);
    const [selectedDistrict, setSelectedDistrict] = useState<District | null>(null);
    const [hoverDistrict, setHoverDistrict] = useState<District | null>(null);
    const [mapError, setMapError] = useState<string | null>(null);
    const [isClient, setIsClient] = useState(false);
    const districts = getRegionDistricts(regionSlug);
    const popup = useRef<mapboxgl.Popup | null>(null);

    // Default center points for regions
    const regionCenters: Record<string, [number, number]> = {
        'north-region': [-8.4256, 41.5518],
        'algarve-region': [-8.2518, 37.0892],
        'greater-lisbon': [-9.1393, 38.7223],
        'central-region': [-8.4, 40.2],
        'west-tagus-valley': [-8.9, 39.5],
        'madeira-region': [-16.9, 32.7],
        'azores-region': [-25.5, 37.7],
        'setubal-peninsula': [-8.9, 38.5],
        'alentejo-region': [-7.9, 38.6]
    };

    // First, ensure we're running in the browser
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Map district names from GeoJSON to our district data
    // This function will help match GeoJSON districts with our district data
    const findDistrictByName = (name: string): District | undefined => {
        // Normalize names for comparison (remove accents, lowercase, etc.)
        const normalizedName = name.toLowerCase()
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Remove accents
            .replace(/\s+/g, '-'); // Replace spaces with hyphens

        // Try to find district by direct name match first
        let district = districts.find(d => {
            const dName = d.name.toLowerCase()
                .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                .replace(/\s+/g, '-');

            return dName === normalizedName ||
                dName === normalizedName + '-district' ||
                dName.includes(normalizedName);
        });

        // If not found, try a simpler approach with slug
        if (!district) {
            district = districts.find(d => {
                const simpleGeoName = name.toLowerCase().replace(/\s+/g, '-');
                return d.slug === simpleGeoName || d.slug.includes(simpleGeoName);
            });
        }

        return district;
    };

    // Initialize Mapbox map with a delay to ensure DOM is ready
    useEffect(() => {
        if (!isClient) return;

        // Use a small delay to ensure the DOM is ready
        const initMapWithDelay = setTimeout(() => {
            console.log(`Initializing map for region: ${regionSlug}`);
            if (!mapContainer.current) {
                console.log('Map container not found, trying again later');
                return;
            }

            // Reset errors
            setMapError(null);

            // Check if map is already initialized
            if (map.current) {
                console.log('Map already initialized, skipping');
                return;
            }

            // Initialize the map
            const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
            console.log(`Mapbox token available: ${Boolean(mapboxToken)}`);

            if (!mapboxToken) {
                const errorMsg = "Mapbox token not found in environment variables";
                console.error(errorMsg);
                setMapError(errorMsg);
                return;
            }

            try {
                mapboxgl.accessToken = mapboxToken;

                // Use center coordinates from our predefined list or fallback to Lisbon
                const center = regionCenters[regionSlug] || [-9.1393, 38.7223];
                console.log(`Using map center: [${center[0]}, ${center[1]}]`);

                console.log('Creating new map instance');
                map.current = new mapboxgl.Map({
                    container: mapContainer.current,
                    style: 'mapbox://styles/mapbox/light-v11',
                    center: center,
                    zoom: 8,
                    interactive: false, // Disable all interactions
                    attributionControl: false, // Hide attribution control
                });

                // Initialize popup
                popup.current = new mapboxgl.Popup({
                    closeButton: false,
                    closeOnClick: false,
                    offset: 25,
                    className: 'district-popup'
                });

                // Set up map when loaded
                map.current.on('load', () => {
                    console.log('Map loaded event fired');
                    if (!map.current) {
                        console.log('Map reference lost after load');
                        return;
                    }

                    const geoJsonPath = `/maps/districts/${regionSlug}-districts.json`;
                    console.log(`Fetching GeoJSON from: ${geoJsonPath}`);

                    // Add the GeoJSON source for the districts
                    fetch(geoJsonPath)
                        .then(response => {
                            if (!response.ok) {
                                throw new Error(`Districts GeoJSON not found: ${response.status} ${response.statusText}`);
                            }
                            console.log('GeoJSON fetch successful');
                            return response.json();
                        })
                        .then(geojsonData => {
                            console.log('GeoJSON parsed successfully');
                            if (!map.current) {
                                console.log('Map reference lost before adding source');
                                return;
                            }

                            // Validate GeoJSON structure
                            if (!geojsonData.features || !Array.isArray(geojsonData.features)) {
                                throw new Error('Invalid GeoJSON: features array missing');
                            }

                            // Add IDs to features for state management
                            geojsonData.features = geojsonData.features.map((feature: any, index: number) => {
                                // Use GID_1 if available, otherwise generate an ID
                                const id = feature.properties?.GID_1?.replace(/\W/g, '_') || `feature_${index}`;
                                return { ...feature, id };
                            });

                            // Log the first feature to help debugging
                            if (geojsonData.features.length > 0) {
                                console.log('First feature sample:',
                                    JSON.stringify({
                                        id: geojsonData.features[0].id,
                                        properties: {
                                            NAME_1: geojsonData.features[0].properties?.NAME_1,
                                            // Include other key properties
                                        }
                                    }));
                            } else {
                                console.warn('GeoJSON contains no features');
                            }

                            // Add source for district boundaries
                            map.current.addSource('region-districts', {
                                type: 'geojson',
                                data: geojsonData
                            });

                            console.log('Adding map layers');

                            // Add a region outline layer (combines all districts)
                            map.current.addLayer({
                                id: 'region-outline',
                                type: 'line',
                                source: 'region-districts',
                                paint: {
                                    'line-color': '#1d4ed8',
                                    'line-width': 3,
                                    'line-opacity': 1
                                }
                            });

                            // Add district boundaries layer
                            map.current.addLayer({
                                id: 'district-boundaries',
                                type: 'line',
                                source: 'region-districts',
                                paint: {
                                    'line-color': '#1d4ed8',
                                    'line-width': 1
                                }
                            });

                            // Add district fill layer
                            map.current.addLayer({
                                id: 'district-fills',
                                type: 'fill',
                                source: 'region-districts',
                                paint: {
                                    'fill-color': '#60a5fa',
                                    'fill-opacity': [
                                        'case',
                                        ['boolean', ['feature-state', 'hover'], false],
                                        0.7,  // Hover opacity
                                        0.4   // Default opacity
                                    ]
                                }
                            });

                            // Variables to track the hover state
                            let hoveredDistrictId: string | number | null = null;

                            // Add hover effect
                            map.current.on('mousemove', 'district-fills', (e) => {
                                if (e.features && e.features.length > 0) {
                                    const feature = e.features[0];
                                    const districtName = feature.properties?.NAME_1;

                                    if (hoveredDistrictId !== null) {
                                        map.current!.setFeatureState(
                                            { source: 'region-districts', id: hoveredDistrictId },
                                            { hover: false }
                                        );
                                    }

                                    hoveredDistrictId = feature.id || null;

                                    if (hoveredDistrictId !== null) {
                                        map.current!.setFeatureState(
                                            { source: 'region-districts', id: hoveredDistrictId },
                                            { hover: true }
                                        );

                                        // Find the district data
                                        if (districtName) {
                                            const district = findDistrictByName(districtName);
                                            if (district && district !== hoverDistrict) {
                                                setHoverDistrict(district);

                                                if (popup.current) {
                                                    // Create popup content
                                                    const popupContent = document.createElement('div');
                                                    popupContent.className = 'w-64 rounded-md overflow-hidden shadow-lg bg-white';

                                                    // Add image if available
                                                    if (district.image) {
                                                        const imageContainer = document.createElement('div');
                                                        imageContainer.className = 'relative w-full h-28';
                                                        imageContainer.style.backgroundImage = `url(${district.image})`;
                                                        imageContainer.style.backgroundSize = 'cover';
                                                        imageContainer.style.backgroundPosition = 'center';
                                                        popupContent.appendChild(imageContainer);
                                                    }

                                                    // Add info content
                                                    const infoContent = document.createElement('div');
                                                    infoContent.className = 'p-3';
                                                    infoContent.innerHTML = `
                                                        <h3 class="text-lg font-semibold text-gray-900 mb-2">${district.name}</h3>
                                                        <p class="text-sm text-gray-700 mb-1"><strong>Main city:</strong> ${district.mainCity || 'N/A'}</p>
                                                    `;
                                                    popupContent.appendChild(infoContent);

                                                    // Show popup
                                                    popup.current
                                                        .setLngLat(e.lngLat)
                                                        .setDOMContent(popupContent)
                                                        .addTo(map.current!);
                                                }
                                            }
                                        }
                                    }
                                }
                            });

                            // Reset hover state when mouse leaves
                            map.current.on('mouseleave', 'district-fills', () => {
                                if (hoveredDistrictId !== null) {
                                    map.current!.setFeatureState(
                                        { source: 'region-districts', id: hoveredDistrictId },
                                        { hover: false }
                                    );
                                }
                                hoveredDistrictId = null;
                                setHoverDistrict(null);

                                // Reset cursor
                                map.current!.getCanvas().style.cursor = '';

                                // Remove popup
                                popup.current!.remove();
                            });

                            // Try to fit the map to the districts boundaries
                            try {
                                console.log('Fitting map to district boundaries');
                                const bounds = new mapboxgl.LngLatBounds();
                                geojsonData.features.forEach((feature: any) => {
                                    if (feature.geometry.type === 'Polygon') {
                                        feature.geometry.coordinates[0].forEach((coord: [number, number]) => {
                                            bounds.extend(coord);
                                        });
                                    } else if (feature.geometry.type === 'MultiPolygon') {
                                        feature.geometry.coordinates.forEach((polygon: any) => {
                                            polygon[0].forEach((coord: [number, number]) => {
                                                bounds.extend(coord);
                                            });
                                        });
                                    }
                                });

                                if (!bounds.isEmpty()) {
                                    map.current.fitBounds(bounds, {
                                        padding: 40,
                                        maxZoom: 10
                                    });
                                } else {
                                    console.warn('No valid bounds found in GeoJSON');
                                }
                            } catch (e) {
                                console.warn("Could not fit to bounds:", e);
                            }
                        })
                        .catch(error => {
                            const errorMsg = `Could not load districts GeoJSON: ${error.message}`;
                            console.error(errorMsg);
                            setMapError(errorMsg);
                        });
                });

                // Handle errors
                map.current.on('error', (e) => {
                    console.error('Mapbox error:', e.error);
                    setMapError(`Map error: ${e.error.message || 'Unknown error'}`);
                });

            } catch (error: any) {
                const errorMsg = `Error initializing map: ${error.message || 'Unknown error'}`;
                console.error(errorMsg);
                setMapError(errorMsg);
            }
        }, 300); // 300ms delay to ensure DOM is ready

        // Cleanup on unmount
        return () => {
            clearTimeout(initMapWithDelay);
            console.log('Cleaning up map');
            if (map.current) {
                map.current.remove();
                map.current = null;
            }
        };
    }, [regionSlug, countrySlug, districts, isClient, hoverDistrict]);

    // If no districts are available, show a fallback
    if (districts.length === 0) {
        return (
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                    <p className="text-gray-600 mb-2">District information coming soon</p>
                    <Link
                        href={`/countries/${countrySlug}#map`}
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                        View on Country Map
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200">
            <div className="flex flex-col md:flex-row">
                {/* Map Container */}
                <div className="w-full md:w-3/5">
                    {mapError ? (
                        <div className="h-64 md:h-96 w-full bg-gray-100 flex items-center justify-center p-4">
                            <div className="text-center">
                                <p className="text-red-600 mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                    Map Error
                                </p>
                                <p className="text-gray-700 text-sm">{mapError}</p>
                                <p className="text-gray-500 text-xs mt-2">Please check the browser console for more details.</p>
                            </div>
                        </div>
                    ) : (
                        <div
                            ref={mapContainer}
                            className="h-64 md:h-96 w-full bg-gray-50"
                            data-testid="map-container"
                        />
                    )}
                </div>

                {/* District Info Panel */}
                <div className="w-full md:w-2/5 p-4 bg-gray-50">
                    {selectedDistrict ? (
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">{selectedDistrict.name}</h3>
                            {selectedDistrict.mainCity && (
                                <p className="text-sm text-gray-500 mb-2">Main city: {selectedDistrict.mainCity}</p>
                            )}

                            {selectedDistrict.image && (
                                <div className="relative h-32 mb-3 rounded-md overflow-hidden">
                                    <Image
                                        src={selectedDistrict.image}
                                        alt={selectedDistrict.name}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 300px"
                                    />
                                </div>
                            )}

                            <p className="text-sm text-gray-600 mb-3">{selectedDistrict.description}</p>

                            {selectedDistrict.highlights && selectedDistrict.highlights.length > 0 && (
                                <div className="mb-3">
                                    <h4 className="text-sm font-medium text-gray-700 mb-1">Highlights:</h4>
                                    <ul className="text-sm text-gray-600 list-disc pl-5">
                                        {selectedDistrict.highlights.map((highlight: string, index: number) => (
                                            <li key={index}>{highlight}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className="mt-3 flex justify-between items-center">
                                <button
                                    onClick={() => setSelectedDistrict(null)}
                                    className="text-sm text-gray-600 hover:text-gray-800 flex items-center"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                    Back to all districts
                                </button>

                                <Link
                                    href={`/countries/${countrySlug}/regions/${regionSlug}/districts/${selectedDistrict.slug}`}
                                    className="text-sm text-blue-600 hover:text-blue-800 hover:underline flex items-center"
                                >
                                    Explore {selectedDistrict.name}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Districts of {regionSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</h3>
                            <p className="text-sm text-gray-600 mb-3">
                                Click on a district on the map to learn more about it, or select from the list below:
                            </p>

                            {/* Modified district list to make items non-clickable */}
                            <ul className="text-sm space-y-2">
                                {districts.map((district: District, index: number) => (
                                    <li key={index} className="flex items-center">
                                        <svg className="h-3 w-3 text-gray-400 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                        <span className="text-gray-600">
                {district.name}
            </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="mt-4 pt-4 border-t border-gray-200">
                        <Link
                            href={`/countries/${countrySlug}#map`}
                            className="text-sm text-blue-600 hover:text-blue-800 hover:underline flex items-center"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                            </svg>
                            View Country Map
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}