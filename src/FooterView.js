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
                <a href="https://www.youtube.com/channel/UCabPQ7vbNQjpvUZx5AZoDBw">
                    <img alt="YouTube" src="/logo/youtube-logo-16px.png">
                </a>
            </li>
            <li>
                <a href="https://twitter.com/JavaNerdRu">
                    <img alt="GitHub" src="/logo/twitter-logo-16px.png">
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/java_nerd/">
                    <img alt="Instagram" src="/logo/instagram-logo-16px.png">
                </a>
            </li>
            <li>
                <small>copyright alexnerd.com ${this.currentYear}</small>
            </li>
        </ul>
        `;
    }
}

customElements.define('footer-view', FooterView);