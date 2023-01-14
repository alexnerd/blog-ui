import Post from "/views//Post.js";

export default class PostView extends HTMLElement { 
    constructor(path) { 
        super();
        this.root = this.attachShadow({mode: 'open'});
        this.path = path;
    }
    connectedCallback() { 
        this.root.innerHTML = this.createView();
        document.addEventListener('post-loaded-event', e => this.onPostLoaded(e));
        Post.get(this.path);
    }

    createView() { 
        return `
        <link rel="stylesheet" type="text/css" href="/styles/style-post.css">
        <p>
            Загрузка...
        </p>
        `;
    }

    onPostLoaded({ detail }) {
        console.log('post -> ', detail);
        this.root.innerHTML = `
        <link rel="stylesheet" type="text/css" href="/styles/style-post.css">
        <link rel="stylesheet" type="text/css" href="/styles/style-post-control.css">
        ${detail}
        `;
    }
}

customElements.define('post-view',PostView);