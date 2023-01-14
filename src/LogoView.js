export default class LogoView extends HTMLElement {
    
    constructor() {
        super();
        this.root = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.root.innerHTML = `
            <link rel="stylesheet" type="text/css" href="/styles/style-logo.css">
            <header>
                <a title="JavaNerd" href="https://javanerd.ru/" rel="home">JavaNerd</a>
                <span>.</span>
            </header>
        `;
    }
}

customElements.define('logo-view', LogoView);