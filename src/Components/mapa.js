import MapContainer from "./mapContainer";
import React, { useState } from 'react';
//import MapWithDirections from "./mapWithDirections";
import RouteList from "./routeList";
import "./styles/mapa.css"

export default function Mapa() {
    const [routes, setRoutes] = useState(null),
        [infoRoutes, setInfoRoutes] = useState(null);

    return (
        <>
            <h1>Ubicaciones</h1>
            <div className="background">
                <div className="map-routes">
                    <MapContainer lat={4.655} lng={-74.12} route={routes} setInfoRoutes={setInfoRoutes} />
                    <RouteList id="list" setRoutes={setRoutes} infoRoute={infoRoutes} />
                    {/* <MapWithDirections /> */}
                </div></div>
            <p>a</p>
        </>
    )
}