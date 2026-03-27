import API from './API.js';

export async function loadData() {
    app.store.RadioStations = await API.loadRadioStations();
}
