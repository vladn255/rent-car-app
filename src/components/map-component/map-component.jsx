import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { YMaps, Map, Placemark } from "react-yandex-maps";


const defaultlMark = {
    defaultZoom: 5,
    center: [64.6863136, 97.7453061],
    controls: ['zoomControl']
}

const ZOOM = 14;

const MapComponent = ({ activeCity, activeMarker, markersData }) => {
    const { defaultZoom, center, controls } = defaultlMark;

    const [savedYmaps, setSavedYmaps] = useState(null)
    const [zoom, setZoom] = useState(defaultZoom)
    const [activeCityCoords, setActiveCityCoords] = useState(center)
    const [activeMarkerCoords, setActiveMarkerCoords] = useState(activeCityCoords)
    const [markers, setMarkers] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setActiveMarkerCoords(activeMarkerCoords)
        if (savedYmaps !== null) {
            loadSequence(savedYmaps)
        }
    }, [activeCity, activeMarker, markersData])

    const geocode = async (ymaps, location, callback) => {
        await ymaps.geocode(location, {
            results: 1
        }).then((response) => {
            const firstGeoObject = response.geoObjects.get(0)
            const coords = firstGeoObject.geometry.getCoordinates()
            callback(coords)
        })
    }


    const loadSequence = (ymaps) => {
        const fullAddress = `${activeCity} ${activeMarker}`
        geocode(ymaps, activeCity, setActiveCityCoords)
        geocode(ymaps, fullAddress, setActiveMarkerCoords)
        setZoom(ZOOM)

        const newMarkers = []
        const getMarkers = async () => {
            setIsLoading(true)

            await markersData.slice().map(async (marker) => {
                const fullMarkerAddress = `${activeCity} ${marker.value}`

                const getGeocodedMarkers = (coords) => {
                    newMarkers.push({
                        id: marker.id,
                        value: coords
                    })

                    if (markersData.length === newMarkers.length) {
                        setMarkers(newMarkers)
                        setIsLoading(false)
                    }
                }
                await geocode(ymaps, fullMarkerAddress, getGeocodedMarkers)
            })
        }
        getMarkers()
    }

    return (
        <YMaps
            query={{
                apikey: "feb41a37-c229-4389-b72e-c27b3b11c014",
                load: "package.full"
            }}
        >
            {markers.length === 0 && isLoading
                ? < Map
                    state={{ center: activeCityCoords, zoom: zoom, controls: controls }}
                    onLoad={async (ymaps) => {
                        await setSavedYmaps(ymaps)
                    }}
                    width={'100%'}
                    height={'352px'} />

                : <Map
                    state={{ center: activeMarkerCoords, zoom: zoom, controls: controls }}
                    onLoad={async (ymaps) => {
                        await setSavedYmaps(ymaps)
                    }}
                    width={'100%'}
                    height={'352px'}>

                    {markers.map((marker) => {
                        return <Placemark key={marker.id} geometry={marker.value} options={{
                            preset: 'islands#greenCircleIcon',
                        }} />
                    }
                    )}
                </Map>
            }
        </YMaps>
    )
}



MapComponent.propTypes = {
    activeCity: PropTypes.string,
    activeMarker: PropTypes.string,
    markersData: PropTypes.array.isRequired
}

export default MapComponent;