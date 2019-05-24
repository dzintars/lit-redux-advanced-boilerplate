import './scss/main.scss';
import './components/app-shell';
import './components/app-shipping';
import './components/app-not-found';

import { LitElement, html, css } from 'lit-element';
import { Router } from '@vaadin/router';

class OpenWcDemo extends LitElement {
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
				// animate: true,
				component: 'app-shell',
				children: [
					{ path: '/', animate: true, component: 'app-shipping' },
					{ path: '/shipping', component: 'app-shipping' },
					{ path: '/signin', animate: true, component: 'app-signin' },
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

customElements.define('open-wc-demo', OpenWcDemo);
