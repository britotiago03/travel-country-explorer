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
        fetch('/maps/portugal-regions.json')
            .then((res) => res.json())
            .then((data) => setGeoData(data));
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
                    interactiveLayerIds={['region-fill']}
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
                            <Layer
                                id="region-fill"
                                type="fill"
                                paint={{
                                    'fill-color': '#60a5fa',
                                    'fill-opacity': 0.4,
                                }}
                            />
                            <Layer
                                id="region-outline"
                                type="line"
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
