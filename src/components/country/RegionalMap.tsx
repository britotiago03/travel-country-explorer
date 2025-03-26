'use client';

import React, { useEffect, useState } from 'react';
import Map, { Source, Layer, Popup } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';
import { portugal } from '@/data/countries';
import Image from 'next/image';

type RegionFeature = {
    type: 'Feature';
    properties: {
        region: string;
        isBox?: boolean;
        isLabel?: boolean;
        text?: string;
        for?: string;
    };
    geometry: any;
};

type GeoJSONData = {
    type: 'FeatureCollection';
    features: RegionFeature[];
};

export default function RegionalMap() {
    const [geoData, setGeoData] = useState<GeoJSONData | null>(null);
    const [hoverInfo, setHoverInfo] = useState<{
        lngLat: [number, number];
        regionName: string;
    } | null>(null);

    useEffect(() => {
        fetch('/maps/portugal-regions-adjusted.json')
            .then((res) => res.json())
            .then((data) => {
                const boxFeatures = [
                    {
                        type: 'Feature',
                        properties: {
                            isBox: true,
                            for: 'Azores Autonomous Region',
                            region: 'Azores Autonomous Region'
                        },
                        geometry: {
                            type: 'Polygon',
                            coordinates: [[
                                [-19.25, 43.0],
                                [-12.5, 43.0],
                                [-12.5, 39.6],
                                [-19.25, 39.6],
                                [-19.25, 43.0]
                            ]]
                        }
                    },
                    {
                        type: 'Feature',
                        properties: {
                            isBox: true,
                            for: 'Madeira Autonomous Region',
                            region: 'Madeira Autonomous Region'
                        },
                        geometry: {
                            type: 'Polygon',
                            coordinates: [[
                                [-12.0, 38.5],
                                [-10.5, 38.5],
                                [-10.5, 37.25],
                                [-12.0, 37.25],
                                [-12.0, 38.5]
                            ]]
                        }
                    }
                ];

                const newData = {
                    ...data,
                    features: [...data.features, ...boxFeatures]
                };

                setGeoData(newData);
            });
    }, []);

    const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN as string;

    const getRegionData = (regionName: string) =>
        portugal.regions.find(
            (region) => region.name.toLowerCase() === regionName.toLowerCase()
        );

    return (
        <div className="rounded-lg overflow-hidden shadow-md mt-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 px-4 pt-4">
                Visual Regional Map
            </h2>
            <p className="text-gray-600 mb-4 px-4">
                Explore the geographic layout of Portugal's main regions. Hover for quick facts.
            </p>

            <div className="h-[500px] w-full">
                <Map
                    mapboxAccessToken={mapboxToken}
                    mapStyle="mapbox://styles/mapbox/light-v11"
                    projection="equirectangular"
                    initialViewState={{
                        latitude: 39.3,
                        longitude: -9,
                        zoom: 5,
                    }}
                    dragPan={false}
                    scrollZoom={false}
                    dragRotate={false}
                    touchZoomRotate={false}
                    keyboard={false}
                    doubleClickZoom={false}
                    interactiveLayerIds={['region-fill', 'island-box-fill']}
                    onMouseMove={(e) => {
                        const feature = e.features?.[0];
                        if (feature && feature.properties?.region) {
                            setHoverInfo({
                                lngLat: [e.lngLat.lng, e.lngLat.lat],
                                regionName: feature.properties.region,
                            });
                        } else {
                            setHoverInfo(null);
                        }
                    }}
                >
                    {geoData && (
                        <Source id="regions" type="geojson" data={geoData}>
                            {/* Fill for mainland regions */}
                            <Layer
                                id="region-fill"
                                type="fill"
                                filter={['all',
                                    ['!', ['has', 'isBox']],
                                    ['!', ['has', 'isLabel']]
                                ]}
                                paint={{
                                    'fill-color': '#60a5fa',
                                    'fill-opacity': 0.4,
                                }}
                            />

                            {/* Outline for mainland regions */}
                            <Layer
                                id="region-outline"
                                type="line"
                                filter={['all',
                                    ['!', ['has', 'isBox']],
                                    ['!', ['has', 'isLabel']]
                                ]}
                                paint={{
                                    'line-color': '#1d4ed8',
                                    'line-width': 1,
                                }}
                            />

                            {/* Fill for island boxes (so hover works inside) */}
                            <Layer
                                id="island-box-fill"
                                type="fill"
                                filter={['has', 'isBox']}
                                paint={{
                                    'fill-color': '#bfdbfe',
                                    'fill-opacity': 0.3,
                                }}
                            />

                            {/* Outline for island boxes */}
                            <Layer
                                id="island-box-outline"
                                type="line"
                                filter={['has', 'isBox']}
                                paint={{
                                    'line-color': '#1d4ed8',
                                    'line-width': 1,
                                }}
                            />
                        </Source>
                    )}

                    {hoverInfo && (
                        <Popup
                            longitude={hoverInfo.lngLat[0]}
                            latitude={hoverInfo.lngLat[1]}
                            closeButton={false}
                            closeOnClick={false}
                            anchor="left"
                            offset={25}
                        >
                            <div className="w-64 rounded-md overflow-hidden shadow-lg bg-white">
                                {getRegionData(hoverInfo.regionName)?.image && (
                                    <div className="relative w-full h-28">
                                        <Image
                                            src={getRegionData(hoverInfo.regionName)!.image}
                                            alt={hoverInfo.regionName}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                )}
                                <div className="p-3">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {hoverInfo.regionName}
                                    </h3>
                                    <p className="text-sm text-gray-700 mb-1">
                                        <strong>🏙 Capital:</strong> {getRegionData(hoverInfo.regionName)?.capital}
                                    </p>
                                    <p className="text-sm text-gray-700 mb-1">
                                        <strong>📐 Area:</strong> {getRegionData(hoverInfo.regionName)?.area}
                                    </p>
                                    <p className="text-sm text-gray-700">
                                        <strong>👥 Population:</strong> {getRegionData(hoverInfo.regionName)?.population}
                                    </p>
                                </div>
                            </div>
                        </Popup>
                    )}
                </Map>
            </div>
        </div>
    );
}
