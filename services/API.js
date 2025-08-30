const API = {
    loadRadioStations: async () => {
        const stations = await fetch('./data/stations.json');
        const stationsJson = await stations.json();

        //todo(vse): add try catch block for error handling
        // console.log(stationsJson);
        return stationsJson;
    },
};

export default API;
