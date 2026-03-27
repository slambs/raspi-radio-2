const FALLBACKS = ['📻', '🎙️', '🔊', '📡', '🎵', '🛸', '🤷', '👻', '🫠', '🎤'];

function randomFallback() {
    return FALLBACKS[Math.floor(Math.random() * FALLBACKS.length)];
}

export class RadioPage extends HTMLElement {
    constructor() {
        super();
        this._audio = new Audio();
        this._currentIdx = null;
        this._playing = false;
    }

    connectedCallback() {
        this._render();
        this._audio.addEventListener('error', () => this._setPlaying(false));
    }

    disconnectedCallback() {
        this._audio.pause();
    }

    _render() {
        const stations = app.store.RadioStations || [];

        this.innerHTML = `
            <div class="carousel-wrapper">
                <ul class="carousel">
                    ${stations
                        .map(
                            (s, i) => `
                        <li class="carousel-card" data-index="${i}">
                            <div class="card-img-wrap">
                                <img
                                    src="${s.image}"
                                    alt="${s.name}"
                                    draggable="false"
                                    data-fallback="${randomFallback()}"
                                />
                            </div>
                            <span class="card-label">${s.name}</span>
                        </li>
                    `,
                        )
                        .join('')}
                </ul>
            </div>
            <div class="player">
                <div class="player-info">
                    <span class="player-label">Now Playing</span>
                    <span class="player-name">—</span>
                </div>
                <button class="play-btn" disabled>&#9654;</button>
            </div>
        `;

        this.querySelectorAll('.card-img-wrap img').forEach((img) => {
            img.addEventListener('error', () => {
                img.parentElement.innerHTML = `<span class="img-fallback">${img.dataset.fallback}</span>`;
            });
        });

        this.querySelectorAll('.carousel-card').forEach((card) => {
            card.addEventListener('click', () => {
                this._selectStation(parseInt(card.dataset.index, 10));
            });
        });

        this.querySelector('.play-btn').addEventListener('click', () =>
            this._togglePlay(),
        );
    }

    _selectStation(idx) {
        const station = app.store.RadioStations[idx];

        this.querySelectorAll('.carousel-card').forEach((card, i) => {
            card.classList.toggle('active', i === idx);
        });

        const activeCard = this.querySelectorAll('.carousel-card')[idx];
        activeCard.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center',
        });

        this.querySelector('.player-name').textContent = station.name;
        this.querySelector('.play-btn').disabled = false;

        this._currentIdx = idx;
        this._audio.src = station.src;
        this._audio.play();
        this._setPlaying(true);
    }

    _togglePlay() {
        if (this._playing) {
            this._audio.pause();
            this._setPlaying(false);
        } else {
            this._audio.play();
            this._setPlaying(true);
        }
    }

    _setPlaying(playing) {
        this._playing = playing;
        const btn = this.querySelector('.play-btn');
        if (btn) btn.innerHTML = playing ? '&#9646;&#9646;' : '&#9654;';
    }
}

customElements.define('radio-page', RadioPage);
