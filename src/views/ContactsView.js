export default class ContactsView extends HTMLElement { 

    constructor() { 
        super();
        this.root = this.attachShadow({mode: 'open'});
    }
    connectedCallback() { 
        this.root.innerHTML = this.createView();
    }

    createView() { 
        return `
        <link rel="stylesheet" type="text/css" href="/styles/style-post.css">

        <div class="blog-post">
            <h2 class="post-header">
                Связаться со мной
            </h2>
            <section class="meta_data">
                <span>Рубрика: Контакты</span>
                <span>Декабрь 15, 2020</span>
            </section>
            <section class="content">
                <p>
                    Все замечания, вопросы и предложения Вы можете направлять на почту <a href="mailto: javanerd.ru@gmail.com">javanerd.ru@gmail.com</a>
                    я постараюсь ответить Вам на столько быстро, на сколько это возможно.
                </p>
            </section>
        </div>
        `;
    }
}

customElements.define('contacts-view',ContactsView);