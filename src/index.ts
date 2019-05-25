import './scss/main.scss';
import './components/app-shell';
import './components/app-home';
import './components/app-signup';
import './components/app-restore-password';
import './components/app-not-found';

import { LitElement, html, css } from 'lit-element';
import { Router } from '@vaadin/router';

class Bootstrap extends LitElement {
	static get styles() {
		return [
			css`
				main > .leaving {
					animation: 5s fadeOut ease-in-out;
				}

				main > .entering {
					animation: 5s fadeIn linear;
				}

				@keyframes fadeOut {
					from {
						opacity: 1;
					}

					to {
						opacity: 0;
					}
				}

				@keyframes fadeIn {
					from {
						opacity: 0;
					}

					to {
						opacity: 1;
					}
				}
			`,
		];
	}

	firstUpdated() {
		const router = new Router(this.shadowRoot.querySelector('main'));
		router.setRoutes([
			{
				path: '/',
				animate: true,
				component: 'app-shell',
				children: [
					{ path: '/', component: 'app-home' },
					{ path: '/signin', component: 'app-signin' },
					{ path: '/signup', component: 'app-signup' },
					{ path: '/restore-password', component: 'app-restore-password' },
					{ path: '(.*)', component: 'app-not-found' },
				],
			},
		]);
	}

	render() {
		return html`
			<main></main>
		`;
	}
}

customElements.define('system-bootstrap', Bootstrap);
