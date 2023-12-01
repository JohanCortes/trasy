
export const getLocations1 = async () => await
    fetch("data/locations.json")
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => console.log(error));

export const getVariables = async (url) => await
    fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'X-Auth-Token': 'BBUS-TT1bGDHnO4oNbCESnVzFO4H9DL1Kep' }
    }).then((response) => response.json())
        .then((data) => ({ label: data.results[0].name, lvl: data.results[0].lastValue.value }))
        .catch((error) => console.log(error));


export const getLocations = async () => await
    fetch("https://industrial.api.ubidots.com/api/v2.0/devices/", {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'X-Auth-Token': 'BBUS-TT1bGDHnO4oNbCESnVzFO4H9DL1Kep' }
    })
        .then((response) => response.json())
        .then(async (data) => {
            let devices = data.results;
            let q = devices.map(async d =>
                await getVariables(d.variables)
                    .then((res) => ({
                        label: res.label,
                        lat: d.properties._location_fixed.lat,
                        lng: d.properties._location_fixed.lng,
                        lvl: res.lvl / 100
                    })));
            q = await Promise.all(q);
            return q;
        }).catch((error) => console.log(error));
