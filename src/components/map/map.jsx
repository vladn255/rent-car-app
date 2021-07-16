import React, { useRef, useEffect } from "react";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

import { Markers } from "../../mocks";

const ZOOM = 13;
const LOCATION = [54.3112, 48.3656];

const Map = () => {
    const mapRef = useRef();
    const customIcon = leaflet.icon({
        // eslint-disable-next-line no-undef
        iconUrl: `${process.env.PUBLIC_URL}/img/map-pin.svg`,

        iconSize: [18, 18]
    })

    useEffect(() => {
        mapRef.current = leaflet.map(`map`, {
            center: LOCATION,
            zoom: ZOOM,
            zoomControl: false,
            marker: true
        });

        mapRef.current.setView(LOCATION, ZOOM);

        leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
            attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        })
            .addTo(mapRef.current);

        Markers.forEach(({ latitude, longitude }) => {
            leaflet.marker([latitude, longitude], { icon: customIcon })
                .addTo(mapRef.current);
        })

    }, []);

    return (
        <div id="map" style={{ height: `352px`, width: `100%` }} ref={mapRef}></div>
    )
};

export default Map;