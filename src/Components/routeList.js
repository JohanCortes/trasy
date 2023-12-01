import "./styles/routeList.css"
import React, { useState, useEffect } from 'react';
import BoxRoute from "./boxRoute";
import './Supports/GetLocations';
import './Supports/GetPoints';
import getPoints from "./Supports/GetPoints";

export default function RouteList({ setRoutes, infoRoute, locations, setInstructions }) {
    const [infoRoutes, setInfoRoutes] = useState(infoRoute),
        [dict, setDict] = useState(null),
        [points, setPoints] = useState(null),
        [ivisible, setIvisible] = useState(null);

    useEffect(() => {
        let dict = {};
        if (locations) {
            setPoints(getPoints(locations));
            locations.forEach(loc => dict[loc.label] = loc.lvl);
            setDict(dict);
        }
    }, [locations]);

    useEffect(() => setInfoRoutes(infoRoute), [infoRoute, infoRoutes]);

    return (
        <div className="list">
            <button className="btn-route" onClick={() => setRoutes(points)}>
                Generar Rutas
            </button>
            {infoRoutes && infoRoutes.map((route, i) =>
                <BoxRoute key={i} keyy={i} route={route} map={route.ref.map} setIvisible={setIvisible} ivisible={ivisible} setInstructions={setInstructions}
                    performance={parseInt((points[i].reduce((a, b) => a + dict[b], 0) - dict[points[i][0]]) * 100) + '%'} />)}
        </div>
    );
}