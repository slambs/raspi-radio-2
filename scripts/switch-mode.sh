#!/bin/bash

RADIO_DIR="$HOME/raspi-radio-2"

case "$1" in
  radio)
    pkill emulationstation 2>/dev/null
    sleep 2
    cd "$RADIO_DIR" && docker compose up -d
    sleep 5
    unclutter -idle 0 &
    chromium --noerrdialogs --disable-infobars --kiosk --password-store=basic http://localhost:9000 &
    echo "Switched to radio mode"
    ;;
  retropie)
    pkill chromium 2>/dev/null
    pkill unclutter 2>/dev/null
    cd "$RADIO_DIR" && docker compose down
    sleep 2
    emulationstation
    echo "Switched to retropie mode"
    ;;
  *)
    echo "Usage: switch-mode.sh [radio|retropie]"
    exit 1
    ;;
esac
