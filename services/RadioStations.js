import API from './API.js';

export async function loadData() {
    app.store.radioStations = API.loadRadioStations();
}
