import Post from "/views/Post.js";

export default class LastArticlesView extends HTMLElement {
    
    constructor() {
        super();
        this.root = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.root.innerHTML = this.createView();
        document.addEventListener('last-articles-loaded-event', e => this.onPostLoaded(e));
        Post.lastArticles();
    }

    createView() { 
        return `
        <link rel="stylesheet" type="text/css" href="/styles/style-last-articles.css">
        <h4>Новые статьи</h4>
        <ul>
           Загрузка... 
        </ul>
        `;
    }

    onPostLoaded({ detail }) {
        this.root.innerHTML = `
        <link rel="stylesheet" type="text/css" href="/styles/style-last-articles.css">
        <h4>Новые статьи</h4>
        <ul>
            ${detail}
        </ul>
        `;
        const links = this.root.querySelectorAll('a');
        links.forEach(e => this.registerListener(e));
    }

    registerListener(e) { 
        e.onclick = evt => this.onLinkClicked(evt);
    }

    onLinkClicked(e) { 
        e.preventDefault();
        window.route(e);
    }
}

customElements.define('last-articles-view', LastArticlesView);