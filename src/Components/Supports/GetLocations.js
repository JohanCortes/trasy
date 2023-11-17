export const getLocations = async () => await
    fetch("data/locations.json")
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => console.log(error));