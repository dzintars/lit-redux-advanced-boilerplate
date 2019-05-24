import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers';
import store, { getLauncherVisibility } from '../../store';
import '../main-navigation';
import '../app-shipping';
import '../main-launcher';
import '../app-signin';

class AppShell extends connect(store)(LitElement) {
	static get is() {
		return 'app-shell';
	}

	private text: string;
	private launcherIsVisible: boolean;
	private lastUsedApp: string;
	private defaultApp: string;

	static get properties() {
		return {
			text: {
				type: String,
			},
			launcherIsVisible: {
				type: Boolean,
			},
			lastUsedApp: {
				type: String,
			},
			defaultApp: {
				type: String,
			},
		};
	}

	constructor() {
		super();
		this.text = 'App Shell Component';
		this.defaultApp = 'app-signin';
		this.lastUsedApp = 'app-shipping';
		// this.launcherIsVisible = true
	}

	stateChanged(state) {
		this.launcherIsVisible = getLauncherVisibility(state);
		// console.log(this.launcherIsVisible)
	}

	static get styles() {
		return [
			css`
				:host {
					height: 100vh;
					width: 100vw;
					box-sizing: border-box;
					display: flex;
					flex-direction: column;
					background-color: var(--color-base-light);
					color: var(--color-dodgerblue-10d);
				}
				main-launcher {
					position: fixed;
					top: var(--size-sl);
				}
			`,
		];
	}

	render() {
		return html`
			<main-navigation></main-navigation>
			<!-- TODO: Application should be injected dynamically -->

			${this.launcherIsVisible
				? html`
						<main-launcher></main-launcher>
				  `
				: ''}
			<slot></slot>
		`;
	}

	connectedCallback() {
		super.connectedCallback();
		if (localStorage.getItem('lastUsedApp') !== null) {
			this.lastUsedApp = localStorage.getItem('lastUsedApp');
		}
		console.log(this.lastUsedApp);
	}

	// Turn off shadowDOM
	// createRenderRoot() {
	// 	return this;
	// }
}

customElements.define(AppShell.is, AppShell);
