import Router from './services/Router.js';
import API from './services/API.js';
import { startClock } from './services/Clock.js';

startClock();

window.router = Router;
window.api = API;

window.addEventListener('DOMContentLoaded', (event) => {
    window.router.init();
    window.api.loadRadioStations();
});
