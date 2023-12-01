export const renderRoute = async (map, routes, locations) => {
    let cols = routes.map(() => '#' + Math.floor(Math.random() * 10000000).toString(16)),
        dict = {}
        locations = locations.map((loc) => ({ [loc.label]: { lat: loc.lat, lng: loc.lng } }))
        locations.forEach((e) => dict = { ...dict, ...e });

    const request = [];
    routes.forEach((route) => {
        request.push({
            origin: dict[route[0]],
            waypoints: route.slice(1, -1).map((loc) => ({ location: dict[loc], stopover: true })),
            destination: dict[route[route.length - 1]],
            travelMode: window.google.maps.TravelMode.DRIVING,
            optimizeWaypoints: true,
        });
    })

    const routePromises = request.map(async (req, i) => {
        return new Promise((resolve) => {
          new window.google.maps.DirectionsService().route(req, (result, status) => {
            if (status === window.google.maps.DirectionsStatus.OK) {
              const dr = new window.google.maps.DirectionsRenderer({
                directions: result,
                map,
                suppressMarkers: true,
                polylineOptions: {
                  strokeColor: cols[i],
                  strokeOpacity: 0.9,
                  strokeWeight: 4,
                },
              });
              resolve({ res: result.routes[0].legs, ref: dr});
            } else {
              console.error("Error al calcular la ruta:", status);
              resolve({ res: null, ref: null });
            }
          });
        });
      });
    
      const routeResults = await Promise.all(routePromises);
      
      return routeResults;
}