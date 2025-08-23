import Router from './services/Router.js';
import API from './services/API.js';

// Logic for displaying a clock

function drawClock() {
    const clock = document.getElementById('largeClock');

    if (clock) {
        clock.textContent = new Date().toLocaleTimeString();
    }
}

drawClock(); //for a quick initial load

setInterval(drawClock, 1000);

window.router = Router;
window.api = API;

window.addEventListener('DOMContentLoaded', (event) => {
    window.router.init();
    window.api.loadRadioStations();
});
