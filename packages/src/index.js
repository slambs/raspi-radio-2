// Logic for displaying a clock

const clock = document.getElementById('largeClock');

function drawClock(){
    clock.textContent = new Date().toLocaleTimeString();
}
  
setInterval(drawClock, 1000);
