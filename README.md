# Raspi Radio

A dark mode clock/radio app for Raspberry Pi, built with vanilla JS. Works on small screens and mobile.

## Features

- **Clock** — live time and date display
- **Radio** — streaming stations with carousel and play/pause control
- Responsive dark mode UI, no dependencies

## Development

Any static file server works:

```bash
python3 -m http.server 9000
```

Or with Docker:

```bash
docker compose up --build
```

Open [http://localhost:9000](http://localhost:9000).

## Clean rebuild

If something looks stale or broken:

```bash
docker compose down --rmi all --volumes --remove-orphans && docker system prune -f
docker compose up --build
```

## Stations

Edit `data/stations.json` to add or remove stations. Each entry needs a `name`, a streaming `src` URL, and an `image` path. Station images live in `data/images/stations/`.

---

## Raspberry Pi setup (fresh Bookworm install)

### 1. Flash the SD card

Download [Raspberry Pi Imager](https://www.raspberrypi.com/software/) and flash **Raspberry Pi OS (64-bit)**.

In the imager settings (gear icon) before flashing:

- Enable SSH
- Set WiFi credentials
- Set hostname (e.g. `radiopi`)

### 2. SSH in and install Docker

```bash
ssh pi@radiopi.local
curl -sSL https://get.docker.com | sh
sudo usermod -aG docker pi
```

Log out and back in for the group change to take effect.

### 3. Clone the repo and start the app

```bash
git clone https://github.com/your-username/raspi-radio-2.git ~/radio
cd ~/radio
docker compose up --build -d
```

### 4. Start Docker and the container on boot

Enable Docker to start automatically:

```bash
sudo systemctl enable docker
```

Create a systemd service to start the container on boot:

```bash
sudo nano /etc/systemd/system/radio.service
```

Paste:

```ini
[Unit]
Description=Radio App
Requires=docker.service
After=docker.service

[Service]
WorkingDirectory=/home/pi/radio
ExecStart=docker compose up
ExecStop=docker compose down
Restart=always
User=pi

[Install]
WantedBy=multi-user.target
```

Enable it:

```bash
sudo systemctl enable radio
sudo systemctl start radio
```

### 5. Kiosk mode — open Chromium on startup

Create the autostart file:

```bash
mkdir -p ~/.config/autostart
nano ~/.config/autostart/kiosk.desktop
```

Paste:

```ini
[Desktop Entry]
Type=Application
Name=Radio Kiosk
Exec=chromium-browser --kiosk --noerrdialogs --disable-infobars --disable-session-crashed-bubble http://localhost:9000
X-GNOME-Autostart-enabled=true
```

### 6. Reboot

```bash
sudo reboot
```

On boot: Docker starts the container, Chromium opens fullscreen on `http://localhost:9000`.

### Exit kiosk

- **Alt+F4** or **F4** to close Chromium
- SSH in and run `docker compose down` to stop the app
