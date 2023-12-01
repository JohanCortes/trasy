import './styles/boxRoute.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BoxRoute({ keyy, route, map, performance, setIvisible, ivisible, setInstructions }) {
    const [stats, setStats] = useState(null),
        [visible, setVisible] = useState(true),
        [uvisible, setUvisible] = useState(false),
        navigate = useNavigate(),
        sec2text = (sec) => sec >= 3600 ? parseInt(sec / 3600) + 'h ' + parseInt(sec % 3600 / 60) + 'm' : parseInt(sec / 60) + 'm',
        details = (e) => {
            setInstructions(route.res);
            navigate('/rutas');
        };

    useEffect(() => {
        //setInstructions(route.res.directions.routes[0].legs[0].steps);
        const stats = {
            distance: 0,
            duration: 0,
            performance: 0
        };
        route.res.forEach((res) => {
            stats.distance += res.distance.value;
            stats.duration += res.duration.value;
        });
        setStats(stats);
    }, [route]);

    useEffect(() => {
        ivisible !== null && keyy !== ivisible && setVisible(false);
        keyy === ivisible ? setUvisible(true) : setUvisible(false);
        visible
            ? route.ref.polylineOptions.strokeOpacity = 0.9
            : route.ref.polylineOptions.strokeOpacity = 0;
        map && route.ref.setMap(map);
    }, [visible, uvisible, setVisible, ivisible, keyy, map, route]);

    return (
        <div className="box-route" style={{
            backgroundColor: route.ref.polylineOptions.strokeColor + '4A',
            borderColor: route.ref.polylineOptions.strokeColor + 'C0',
        }}>
            <div className="info-data">
                <article>Distancia: {stats && parseInt(stats.distance / 10) / 100 + 'km'} </article>
                <article>Duración: {stats && sec2text(stats.duration)}</article>
                <article>Rendimiento: {performance}</article>
            </div>
            <div className="info-buttons">
                <button className='show' style={{ backgroundColor: !uvisible ? '#f0f0f096' : '#ffcfa0d2' }}
                    onClick={() => {
                        uvisible ? setIvisible(null) : setIvisible(keyy);
                        !uvisible && setVisible(true);
                        setUvisible(!uvisible);
                    }}></button>
                <button className='hide' style={{ backgroundColor: visible ? '#f0f0f096' : '#ffcfa0d2' }}
                    onClick={() => {
                        visible && setUvisible(false);
                        setIvisible(null);
                        setVisible(!visible)
                    }}></button>
            </div>
            <div className="info-details" onClick={details} style={
                { borderLeft: '1px solid ' + route.ref.polylineOptions.strokeColor + 'B8' }
            }>
                <span>&gt;</span>
            </div>
        </div>
    )
}