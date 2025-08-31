export class RadioPage extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        //todo(vse): create a base class that takes care of doing this
        const template = document.getElementById('radio-template');
        const content = template.content.cloneNode(true);
        this.appendChild(content);
    }
}

customElements.define('radio-page', RadioPage);
