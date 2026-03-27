import Router from './services/Router.js';
import API from './services/API.js';
import Store from './services/Store.js';
import { loadData } from './services/RadioStations.js';

//Load components - they may stay unused
import { ClockPage } from './components/clock.js';
import { RadioPage } from './components/radio.js';

window.app = {};
app.store = Store;
app.router = Router;

window.addEventListener('DOMContentLoaded', async () => {
    await loadData();
    app.router.init();
});
