import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import React, { useState, useEffect } from 'react';
import './styles/mapContainer.css';
import { renderRoute } from "./Supports/RenderRoute";
import './Supports/GetLocations'
import { getLocations } from "./Supports/GetLocations";
import CustomInfoWindow from "./customInfoWindow";


function MapContainer({ lat, lng, route, setInfoRoutes, google }) {
  const [markers, setMarkers] = useState([]),
    [selectedMarker, setSelectedMarker] = useState({ lat: 0, lng: 0, label: '', lvl: 0 }),
    [showInfoWindow, setShowInfoWindow] = useState(false),
    [map, setMap] = useState(null),
    [routes, setRoutes] = useState(route),
    getmark = (label) => markers.map((loc) => (loc.label === label) && [setSelectedMarker(loc), setShowInfoWindow(true)]),
    handleMapReady = (mapProps, map) => setMap(map);

  useEffect(() => async () => await getLocations().then((data) => setMarkers(data)), []);

  useEffect(() => {
    setRoutes(route);
    routes && routes.length >= 2 && renderRoute(map, routes)
      .then(res => setInfoRoutes(res));
  }, [route, map, routes, setInfoRoutes]);

  return (
    <Map
      google={google}
      zoom={11.1}
      className={"mapContainer"}
      initialCenter={{ lat, lng }}
      onReady={handleMapReady}
    >
      {markers.map((loc) => <Marker onClick={() => getmark(loc.label)} key={loc.label} label={loc.label} position={{ lat: loc.lat, lng: loc.lng }} />)}
      {
        selectedMarker && (
          <InfoWindow
            position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
            visible={showInfoWindow}
          >
            <CustomInfoWindow title={selectedMarker.label} content={selectedMarker.lvl.toString()} />
          </InfoWindow>
        )}
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBbz70YKoQQhi7chwaHlfy9EXtuc0a3u28",
})(MapContainer);