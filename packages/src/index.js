// Logic for displaying a clock
function drawClock() {
    const clock = document.getElementById('largeClock');

    if (clock) {
        clock.textContent = new Date().toLocaleTimeString();
    }
}

drawClock(); //for a quick initial load

setInterval(drawClock, 1000);
