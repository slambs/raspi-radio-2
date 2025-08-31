export class ClockPage extends HTMLElement {
    constructor() {
        super();

        this._interval = null;
    }

    connectedCallback() {
        const template = document.getElementById('clock-template');
        const content = template.content.cloneNode(true);
        this.appendChild(content);

        const clock = this.querySelector('#largeClock');
        this._startClock(clock);
    }

    disconnectedCallback() {
        if (this._interval) {
            clearInterval(this._interval);
        }
    }

    _drawClock(clock) {
        if (clock) {
            clock.textContent = new Date().toLocaleTimeString();
        }
    }

    _startClock(clock) {
        this._drawClock(clock); // initial load
        this._interval = setInterval(() => this._drawClock(clock), 1000);
    }
}
customElements.define('clock-page', ClockPage);
