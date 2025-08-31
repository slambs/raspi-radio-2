import Router from './services/Router.js';
import API from './services/API.js';
//components
import { ClockPage } from './components/clock.js';
import { RadioPage } from './components/radio.js';

window.router = Router;
window.api = API;

window.addEventListener('DOMContentLoaded', (event) => {
    window.router.init();
    window.api.loadRadioStations();
});
