import ViewLoader from '/ViewLoader.js';
import LogoView from '/LogoView.js';
import FooterView from '/FooterView.js';
import LastArticlesView from '/LastArticlesView.js';
import Router from "/Router.js";
import NavView from '/NavView.js';


navigator.serviceWorker.register('/CacheWorker.js')
    .then(registration => console.log('registration succeded', registration))
    .catch(error => console.error('registration failed', error));

window.onpopstate = Router.handleLocation;
window.route = Router.route;
Router.handleLocation();