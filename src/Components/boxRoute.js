import './styles/boxRoute.css';
import React, { useState, useEffect } from 'react';

export default function BoxRoute({ route, map, performance }) {
    const [stats, setStats] = useState(null),
        [visible, setVisible] = useState(true),
        sec2text = (sec) => sec >= 3600 ? parseInt(sec / 3600) + 'h ' + parseInt(sec % 3600 / 60) + 'm' : parseInt(sec / 60) + 'm';

    useEffect(() => {
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
        visible ? route.ref.setMap(map) : route.ref.setMap(null);
    }, [visible, map, route]);

    return (
        <div className="box-route" style={{
            backgroundColor: route.ref.polylineOptions.strokeColor + '45',
            borderColor: route.ref.polylineOptions.strokeColor + 'B8',
        }}>
            <div className="info-data">
                <article>Distancia: {stats && parseInt(stats.distance / 10) / 100 + 'km'} </article>
                <article>Duración: {stats && sec2text(stats.duration)}</article>
                <article>Rendimiento: {performance}</article>
            </div>
            <div className="info-buttons">
                <button className='show'></button>
                <button className='hide' style={{ backgroundColor: visible ? '#f0f0f096' : '#ffcfa0d2' }} onClick={() => setVisible(!visible)}></button>
            </div>
            <div className="info-details" style={
                { borderLeft: '1px solid ' + route.ref.polylineOptions.strokeColor + 'B8' }
            }>
                <span>&gt;</span>
            </div>
        </div>
    )
}