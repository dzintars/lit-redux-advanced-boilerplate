import { Router } from '@vaadin/router';
import './scss/main.scss';
import './containers/system-shell'
import '../src/containers/socket-example-page';
import './routes/app-home';
import './routes/app-signup';
import './routes/app-signin';
import './routes/app-restore-password';
import './routes/app-shipping';
import './routes/app-not-found';

window.addEventListener('load', () => {
    initRouter();
})

function initRouter() {
    const router = new Router(document.querySelector('main'));
    router.setRoutes([
        {
            path: '/',
            component: 'system-shell',
            // animate: true,
            children: [
                { path: '/', component: 'app-home' },
                {
                    path: '/signin',
                    component: 'app-signin',
                    animate: false,
                },
                { path: '/signup', component: 'app-signup' },
                { path: '/restore-password', component: 'app-restore-password' },
                { path: '/shipping', component: 'app-shipping' },
                { path: '/ws', component: 'socket-example-page' },
                { path: '(.*)', component: 'app-not-found' },
            ],
        },
    ])
}