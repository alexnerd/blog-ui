export default class Router {    

    static route = (event) => {
        event = event || window.event;
        event.preventDefault();
        event.target.href.includes(window.location.pathname)
        if(window.location.pathname == '/' 
            || !event.target.href.includes(window.location.pathname)) {
            window.history.pushState({}, "", event.target.href);
            this.handleLocation();
        } 
    };

    static handleLocation = async () => {
        const path = window.location.pathname.split("/")
                                             .filter(function(e) { return e !== '' })
                                             .shift() || "";
        const event = new CustomEvent('route-nav', {
            detail: {
                component: path,
                path: window.location.pathname,
                search: window.location.search
            }
        });
        document.dispatchEvent(event);
    };
}