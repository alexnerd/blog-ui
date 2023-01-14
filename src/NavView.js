export default class NavView extends HTMLElement {
    
    constructor() {
        super();
        this.root = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.root.innerHTML = this.createView();
        const links = this.root.querySelectorAll('a');
        links.forEach(e => this.registerListener(e));
    }

    createView() {
        return `
            <link rel="stylesheet" type="text/css" href="/styles/style-nav.css">
            <h4>Рубрики</h4>
            <ul>
                <li><a href="/blog">Блог</a></li>
                <li><a href="/about">О проекте</a></li>
                <li><a href="/contacts">Контакты</a></li>
            </ul>
        `;
    }

    registerListener(e) { 
        e.onclick = evt => this.onLinkClicked(evt);
    }

    onLinkClicked(e) { 
        e.preventDefault();
        window.route(e);
    }
}

customElements.define('nav-view', NavView);