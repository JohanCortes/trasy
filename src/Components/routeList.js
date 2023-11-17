import "./styles/routeList.css"
import React, { useState, useEffect } from 'react';
import BoxRoute from "./boxRoute";
import './Supports/GetLocations';
import { getLocations } from "./Supports/GetLocations";

export default function RouteList({ setRoutes, infoRoute }) {
    const [infoRoutes, setInfoRoutes] = useState(infoRoute),
        [dict, setDict] = useState(null),
        routes = [
            ['B', 'F', 'A', 'D'],
            ['A', 'C', 'E', 'D'],
            ['E', 'B', 'C', 'F']];
    /* getPerf = async (point) => {
        let locs = await getLocations(),
            perf = locs.filter(loc => loc.label === point);
        console.log(perf[0].lvl);
        return perf[0].lvl;
    }; */

    useEffect(() => setInfoRoutes(infoRoute), [infoRoute, infoRoutes]);

    useEffect(() => async () => {
        let locs = await getLocations(),
            dict = {};
        locs.forEach(loc => dict[loc.label] = loc.lvl);
        setDict(dict);
    }, []);

    return (
        <div className="list">
            <button className="btn-route" onClick={() => setRoutes(routes)}>
                Generar Rutas
            </button>
            {infoRoutes && infoRoutes.map((route, i) =>
                <BoxRoute key={i} route={route} map={route.ref.map}
                    performance={parseInt(routes[i].reduce((a, b) => a + dict[b], 0) * 100) + '%'} />)}
        </div>
    );
}