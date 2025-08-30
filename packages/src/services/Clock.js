// Logic for displaying a clock
function drawClock() {
    const clock = document.getElementById('largeClock');

    if (clock) {
        clock.textContent = new Date().toLocaleTimeString();
    }
}

export function startClock() {
    drawClock(); //initial load
    setInterval(drawClock, 1000);
}
