/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { YMaps, Map, Placemark } from "react-yandex-maps";


const defaultlMark = {
    zoom: 5,
    center: [64.6863136, 97.7453061],
    controls: ['zoomControl']
}

const ZOOM = 13;

const MapComponent = ({ activeCity, markersData }) => {

    const [savedYmaps, setSavedYmaps] = useState(null)
    const [zoom, setZoom] = useState(defaultlMark.zoom)
    const [activeCityCoords, setActiveCityCoords] = useState(defaultlMark.center)
    const [markers, setMarkers] = useState([])

    const unmountSequence = () => {
        geocode(savedYmaps, activeCity, setActiveCityCoords)
        setZoom(ZOOM)
        console.log('unmount sequence', markersData, markers)

        markersData.slice().map((marker) => {
            const fullAddress = `${activeCity} ${marker.value}`
            console.log('setMarkers worked', marker, geocode(savedYmaps, fullAddress, getGeocodedValue))

            // return {
            //     id: marker.id,
            //     value: geocode(savedYmaps, fullAddress, getGeocodedValue)
            // }
        })
    }

    useEffect(() => {
        if (savedYmaps !== null) {
            return unmountSequence()
        }
    }, [activeCity, markersData])

    const geocode = async (ymaps, location, callback) => {
        ymaps.geocode(location, {
            results: 1
        }).then((response) => {
            const firstGeoObject = response.geoObjects.get(0)
            const coords = firstGeoObject.geometry.getCoordinates()
            console.log('geocode', coords)
            callback(coords)
        })
    }

    const getGeocodedValue = async (coords) => {
        return await coords
    }

    console.log('map render', activeCity, activeCityCoords, markersData, markers)

    return (
        <YMaps
            query={{
                apikey: "feb41a37-c229-4389-b72e-c27b3b11c014",
                load: "package.full"
            }}
        >
            <Map
                state={{ center: activeCityCoords, zoom: zoom, controls: ['zoomControl'] }}
                onLoad={async (ymaps) => {
                    await setSavedYmaps(ymaps)
                    console.log('onLoad', activeCityCoords, markers)
                    if (activeCity !== null) {
                        geocode(ymaps, activeCity)
                    }
                }}
                width={'100%'}
                height={'352px'}>
                {markers.length === 0
                    ? ''
                    : markers.map((marker) => {
                        console.log('marker', marker)
                        return (<Placemark
                            key={marker.id}
                            geometry={marker.value}
                            options={{
                                preset: 'islands#greenCircleIcon',
                            }} />)
                    })}
            </Map>
        </YMaps>
    )
}



MapComponent.propTypes = {
    activeCity: PropTypes.string,
    markersData: PropTypes.array.isRequired
}

export default MapComponent;