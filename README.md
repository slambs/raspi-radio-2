# Raspi Radio

A dark mode clock/radio app for Raspberry Pi, built with vanilla JS. Works on small screens and mobile.

## Features

- **Clock** — live time and date display
- **Radio** — streaming stations with carousel and play/pause control
- Responsive dark mode UI, no dependencies

## Run

```bash
docker compose up --build
```

Open [http://localhost:8080](http://localhost:8080).

## Clean rebuild

If something looks stale or broken:

```bash
docker compose down --rmi all --volumes --remove-orphans && docker system prune -f
```

Then run again with `docker compose up --build`.

## Raspberry Pi kiosk mode

Make Docker start on boot:

```bash
sudo systemctl enable docker
```

Create `~/.config/autostart/radio.desktop`:

```ini
[Desktop Entry]
Type=Application
Name=Radio
Exec=chromium-browser --kiosk --noerrdialogs --disable-infobars http://localhost:8080
```

## Stations

Edit `data/stations.json` to add or remove stations. Each entry needs a `name`, a streaming `src` URL, and an `image` path. Station images live in `data/images/stations/`.

## Development

Any static file server works:

```bash
python3 -m http.server 8080
```
