const fs = require('fs');
const path = require('path');

// Path to the brightness file. Adjust if your system uses a different path.
const brightnessPath = '/sys/class/backlight/rpi_backlight/brightness';

// Function to set brightness
function setBrightness(value) {
    // Ensure the value is within a safe range, this might need adjustment based on your hardware
    const maxBrightness = 255; // Example max value, check your system's max_brightness file for the real value
    value = Math.max(10, Math.min(value, maxBrightness));

    fs.writeFile(brightnessPath, value.toString(), (err) => {
        if (err) {
            console.error('Failed to set brightness:', err);
        } else {
            console.log(`Brightness set to ${value}`);
        }
    });
}

// Example usage: Set brightness to 100
if (process.argv.length > 2) {
    const brightnessValue = parseInt(process.argv[2], 10);
    if (!isNaN(brightnessValue)) {
        setBrightness(brightnessValue);
    } else {
        console.log('Please provide a numeric value for brightness.');
    }
} else {
    console.log('Usage: node scriptName.js <brightnessValue>');
}
