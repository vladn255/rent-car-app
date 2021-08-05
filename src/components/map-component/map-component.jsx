import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { YMaps, Map, Placemark } from "react-yandex-maps";


const defaultlMark = {
    zoom: 5,
    center: [64.6863136, 97.7453061],
    controls: ['zoomControl']
}

const ZOOM = 14;

const MapComponent = ({ activeCity, activeMarker, markersData }) => {

    const [savedYmaps, setSavedYmaps] = useState(null)
    const [zoom, setZoom] = useState(defaultlMark.zoom)
    const [activeCityCoords, setActiveCityCoords] = useState(defaultlMark.center)
    const [activeMarkerCoords, setActiveMarkerCoords] = useState(activeCityCoords)
    const [markers, setMarkers] = useState([])

    useEffect(() => {
        if (savedYmaps !== null) {
            return unmountSequence(savedYmaps)
        }
    }, [activeCity, activeMarker, markersData])

    const geocode = (ymaps, location, callback) => {
        ymaps.geocode(location, {
            results: 1
        }).then((response) => {
            const firstGeoObject = response.geoObjects.get(0)
            const coords = firstGeoObject.geometry.getCoordinates()
            callback(coords)
        })
    }


    const unmountSequence = (ymaps) => {
        const fullAddress = `${activeCity} ${activeMarker}`
        geocode(ymaps, activeCity, setActiveCityCoords)
        geocode(ymaps, fullAddress, setActiveMarkerCoords)
        setZoom(ZOOM)

        const newMarkers = []
        markersData.slice().map(async (marker) => {
            const fullMarkerAddress = `${activeCity} ${marker.value}`

            const getGeocodedMarkers = (coords) => {
                newMarkers.push({
                    id: marker.id,
                    value: coords
                })
            }

            await geocode(ymaps, fullMarkerAddress, getGeocodedMarkers)
        })
        setMarkers(newMarkers)
    }

    return (
        <YMaps
            query={{
                apikey: "feb41a37-c229-4389-b72e-c27b3b11c014",
                load: "package.full"
            }}
        >
            {markers.length === 0
                ? < Map
                    state={{ center: activeCityCoords, zoom: zoom, controls: ['zoomControl'] }}
                    onLoad={async (ymaps) => {
                        await setSavedYmaps(ymaps)
                    }}
                    width={'100%'}
                    height={'352px'} />

                : <Map
                    state={{ center: activeMarkerCoords, zoom: zoom, controls: ['zoomControl'] }}
                    onLoad={async (ymaps) => {
                        await setSavedYmaps(ymaps)
                    }}
                    width={'100%'}
                    height={'352px'}>

                    {markers.map((marker) => <Placemark key={marker.id} geometry={marker.value} options={{
                        preset: 'islands#greenCircleIcon',
                    }} />)}
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