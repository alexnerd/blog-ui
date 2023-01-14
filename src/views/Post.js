export default class Post {

    static async get(path) {
        const response = await fetch(`http://localhost:8080/reactor/resources${path}`);
        this.handleResponse(response, 'post-loaded-event');
    }    

    static async lastPosts() {
        const response = await fetch(`http://localhost:8080/reactor/resources/last?lang=ru&type=POST&limit=10`);
        this.handleResponse(response, 'last-loaded-event');
    }

    static async lastArticles() {
        const response = await fetch(`http://localhost:8080/reactor/resources/last?type=LAST_ARTICLES&limit=10`);
        this.handleResponse(response, 'last-articles-loaded-event');
    }

    static async handleResponse(response, eventName) {
        if (response.status === 200) {
            const post = await response.text();
            const postEvent = new CustomEvent(eventName, {
                detail: post
            })
            document.dispatchEvent(postEvent);

        } else {
            const errorEvent = new CustomEvent('route-nav', {
                detail: {
                    status: response.status ?? 418,
                    message: response.headers.get('message') ?? 'Что-то пошло не так :(',
                    component: "error"
                }
            });
            document.dispatchEvent(errorEvent);
        }
    } 
}