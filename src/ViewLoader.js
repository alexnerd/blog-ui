import BlogView from '/views/BlogView.js';
import AboutView from '/views/AboutView.js';
import ContactsView from '/views/ContactsView.js';
import PostView from '/views/PostView.js';
import ErrorView from '/views/ErrorView.js';


export default class ViewLoader extends HTMLElement {

    constructor() {
        super();
        this.oldChild = null;
        this.root = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.root.innerHTML = ``;
        document.addEventListener('route-nav', e => this.onNavigation(e));
        this.oldChild = this.root.querySelector("[name=view]");
    }

    onNavigation(evt) {
        const { detail } = evt;
        const { component } = detail;
        this.loadView(component, detail);
    }

    async loadView(linkName, detail) {
        let newChild;
        switch (linkName) {
            case '':
            case 'blog':
                newChild = new BlogView();
                break;
            case 'about':
                newChild = new AboutView();
                break;
            case 'contacts':
                newChild = new ContactsView();
                break;
            case 'post':
                const{ path, search } = detail;
                const fullPath = path + search;
                newChild = new PostView(fullPath);
                break;
            case 'error':        
            default:
                const { status, message } = detail;
                newChild = new ErrorView(status, message);            
        }
        if (this.oldChild) {   
             this.root.replaceChild(newChild, this.oldChild);
        } else {
            this.root.appendChild(newChild);
        } 
        this.oldChild = newChild;
    }
}

customElements.define('view-loader', ViewLoader);