import React, { Component } from "react";

class MapWithDirections extends Component {
  componentDidMount() {
    const { google } = window;
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();

    const map = new google.maps.Map(this.mapRef, {
      zoom: 10,
      center: { lat: 4.76, lng: -74.11 },
    });

    directionsRenderer.setMap(map);
    console.log(map);
    const request = {
      origin: { lat: 4.75, lng: -74.11 },
      destination: { lat: 4.77, lng: -74.12 },
      travelMode: google.maps.TravelMode.DRIVING,
    };

    directionsService.route(request, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsRenderer.setDirections(result);
      } else {
        console.error("Error al calcular la ruta:", status);
      }
    });
  }

  render() {
    return <div ref={(ref) => (this.mapRef = ref)} style={{ width: "100%", height: "400px" }} />;
  }
}

export default MapWithDirections;