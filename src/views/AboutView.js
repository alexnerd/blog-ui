export default class AboutView extends HTMLElement { 

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
                О проекте
            </h2>
            <section class="meta_data">
                <span>Рубрика: О проекте</span>
                <span>Декабрь 15, 2020</span>
            </section>
            <section class="content">
                <p>
                    Спасибо за то, что посетили мой сайт. Этот сайт для меня, нечто вроде хобби, способа пообщаться с миром и 
                    не стоит его воспринимать слишком серьезно. Все статьи, которые вы здесь можете прочитать написаны лично мной 
                    и выражают мое мнение на затронутые темы, если вы с ним не согласны или нашли ошибки в статьях, просто свяжитесь 
                    со мной и мы попробуем найти компромисс :)
                <p>
            </section>
        </div>
        `;
    }
}

customElements.define('about-view',AboutView);