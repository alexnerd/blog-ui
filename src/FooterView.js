export default class FooterView extends HTMLElement {
    
    constructor() {
        super();
        this.root = this.attachShadow({mode: 'open'});
        this.currentYear = new Date().getFullYear();
    }

    connectedCallback() {
        this.root.innerHTML = `
        <link rel="stylesheet" type="text/css" href="/styles/style-footer.css">

        <ul>
            <li>
                <a href="https://github.com/javanerdru">
                    <img alt="GitHub" src="/logo/github-logo-16px.png">
                </a>
            </li>
            <li>
                <small>copyright Popov Aleksey ${this.currentYear}</small>
            </li>
        </ul>
        `;
    }
}

customElements.define('footer-view', FooterView);