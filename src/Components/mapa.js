import MapContainer from "./mapContainer";
import React, { useState, useEffect } from 'react';
//import MapWithDirections from "./mapWithDirections";
import RouteList from "./routeList";
import "./styles/mapa.css"
import { getLocations } from "./Supports/GetLocations";

export default function Mapa({ setInstructions, setPoints}) {
    const [routes, setRoutes] = useState(null),
        [infoRoutes, setInfoRoutes] = useState(null),
        [locations, setLocations] = useState(null),
        [initialPoint] = useState({label: 'PP', lat: 4.525516741247419, lng: -74.13747041892492, lvl: 0 });

        useEffect(() => async () => await getLocations().then(data => {
            data.push(initialPoint)
            setLocations(data);
        }), [initialPoint]);

    return (
        <>
            <div className="background">
                <div className="map-routes">
                    {locations && <MapContainer lat={4.655} lng={-74.12} route={routes} setInfoRoutes={setInfoRoutes} locations={locations} />}
                    <RouteList id="list" setRoutes={setRoutes} infoRoute={infoRoutes} locations={locations} setInstructions={setInstructions} SetPoints={setPoints}/>
                    {/* <MapWithDirections /> */}
                </div>
            </div>
        </>
    )
}