const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const { exec } = require('child_process');

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

app.use(bodyParser.json());

const brightnessPath = '/sys/class/backlight/rpi_backlight/brightness';

app.post('/set-brightness', (req, res) => {
    const brightnessValue = req.body.brightness;

    // Basic validation
    if (
        typeof brightnessValue !== 'number' ||
        brightnessValue < 10 ||
        brightnessValue > 255
    ) {
        return res.status(400).json({ message: 'Invalid brightness value' });
    }

    // Here, instead of directly writing to the file, we'll use a child process to run our Node script with sudo
    exec(
        `sudo node ./set_brightness.js ${brightnessValue}`,
        (error, stdout, stderr) => {
            if (error) {
                res.status(500).json({
                    message: `Failed to set brightness: ${error.message}`,
                });
                return;
            }
            res.json({ message: `Brightness set to ${brightnessValue}` });
        }
    );
});

app.listen(9000);
