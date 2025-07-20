import Post from "/views/Post.js";
export default class BlogView extends HTMLElement {

    constructor() {
        super();
        this.root = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        document.title = 'JavaNerd - Блог о программировании на Java';
        this.root.innerHTML = this.createView();
        document.addEventListener('last-loaded-event', e => this.onPostLoaded(e));
        Post.lastPosts();
    }

    createView() { 
        return `
        <p>
            Загрузка...
        </p>
        `;
    }

    onPostLoaded({ detail }) {
        this.root.innerHTML = `
        <link rel="stylesheet" type="text/css" href="/styles/style-post.css">
        <link rel="stylesheet" type="text/css" href="/styles/style-post-control.css">
        ${detail}
        `;
        const links = this.root.querySelectorAll('a.read-more-link');
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

customElements.define('blog-view', BlogView);