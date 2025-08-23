const API = {
    loadRadioStations: async () => {
        // console.log('getting stations');
        const stations = await fetch('../public/stations.json');

        // console.log(stations);
        // console.log('attempting to read...');

        const stationsJson = await stations.json();

        //todo(vse): add try catch block for error handling
        console.log(stationsJson);
        return stationsJson;
    },
};

export default API;
