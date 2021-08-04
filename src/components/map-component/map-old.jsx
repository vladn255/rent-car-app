import React, { useRef, useEffect } from "react";
import PropTypes from 'prop-types';
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";


const ZOOM = 15;
const initialMark = {
    zoom: 5,
    latitude: 64.6863136,
    longitude: 97.7453061
}

const Map = ({ markers, activeMarker, activeCity }) => {
    const mapRef = useRef();
    const customIcon = leaflet.icon({
        // eslint-disable-next-line no-undef
        iconUrl: `${process.env.PUBLIC_URL}/img/map-pin.svg`,

        iconSize: [18, 18]
    })

    useEffect(() => {
        if (activeCity === null) {
            mapRef.current = leaflet.map(`map`, {
                center: [initialMark.latitude, initialMark.longitude],
                zoom: initialMark.zoom,
                zoomControl: false,
                marker: true
            });

            mapRef.current.setView([initialMark.latitude, initialMark.longitude], initialMark.zoom);

            leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
                attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
            })
                .addTo(mapRef.current);

        } else {
            mapRef.current = leaflet.map(`map`, {
                center: activeCity,
                zoom: ZOOM,
                zoomControl: false,
                marker: true
            });

            mapRef.current.setView([activeMarker.latitude, activeMarker.longitude], ZOOM);

            leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
                attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
            })
                .addTo(mapRef.current);

            markers.forEach(({ latitude, longitude }) => {
                leaflet.marker([latitude, longitude], { icon: customIcon })
                    .addTo(mapRef.current);
            })
        }
        return () => {
            mapRef.current.remove();
        };

    }, [markers, activeMarker, activeCity]);

    return (
        <div id="map" style={{ height: `352px`, width: `100%` }} ref={mapRef}></div>
    )
};
Map.propTypes = {
    markers: PropTypes.array.isRequired,
    activeMarker: PropTypes.object.isRequired,
    activeCity: PropTypes.array.isRequired,
}

export default Map;