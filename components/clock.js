export class ClockPage extends HTMLElement {
    constructor() {
        super();
        this._interval = null;
    }

    connectedCallback() {
        const template = document.getElementById('clock-template');
        this.appendChild(template.content.cloneNode(true));

        this._timeEl = this.querySelector('.clock-time');
        this._dateEl = this.querySelector('.clock-date');
        this._tick();
        this._interval = setInterval(() => this._tick(), 1000);
    }

    disconnectedCallback() {
        if (this._interval) clearInterval(this._interval);
    }

    _tick() {
        const now = new Date();
        this._timeEl.textContent = now.toLocaleTimeString('en-GB');
        this._dateEl.textContent = now.toLocaleDateString('en-GB', {
            weekday: 'long',
            day: 'numeric',
            month: 'short',
        });
    }
}

customElements.define('clock-page', ClockPage);
