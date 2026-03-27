const API = {
    loadRadioStations: async () => {
        const stations = await fetch('/data/stations.json');
        const stationsJson = await stations.json();

        return stationsJson;
    },
};

export default API;
