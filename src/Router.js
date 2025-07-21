// Router handles client-side navigation and dispatches route events
export default class Router {
    // Handles link clicks and updates browser history
    static route = (event) => {
        if (!event) {
            throw new Error('Event must be passed to Router.route');
        }
        event.preventDefault();
        const href = event.target.href;

        // Only push state if navigating to a different path
        if (href && href !== window.location.href) {
            window.history.pushState({}, '', href);
            this.handleLocation();
        }
    };

    // Dispatches a custom event with the current route info
    static handleLocation = () => {
        const path = window.location.pathname
            .split('/')
            .filter(Boolean)
            .shift() || '';
        const event = new CustomEvent('route-nav', {
            detail: {
                component: path,
                path: window.location.pathname,
                search: window.location.search,
            },
        });
        document.dispatchEvent(event);
    };
}