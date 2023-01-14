export default class ErrorView extends HTMLElement {

    constructor(status, message) {
        super();
        this.root = this.attachShadow({mode: 'open'});
        this.status = status;
        this.message = message;
    }

    connectedCallback() { 
        this.root.innerHTML = this.createView();
    }

    createView() { 
        return `
        <link rel="stylesheet" type="text/css" href="/styles/style-not-found.css">

        <header>
            <h1>
                ${this.status}
            </h1>
        </header>
        <section>
            <p>
                ${this.message}
            </p>
        </section>
        `;
    }
}

customElements.define('error-view', ErrorView);