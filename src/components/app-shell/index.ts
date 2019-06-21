import { LitElement, customElement, html, css, property } from 'lit-element';
import { connect } from 'pwa-helpers';
import store, { getLauncherVisibility, getSession } from '../../store';
import { Router } from '@vaadin/router';
import '../main-navigation';
import '../main-launcher';
import '../app-signin';

@customElement('app-shell')
export class AppShell extends connect(store)(LitElement) {

	@property({ type: Object }) session = {
		live: false,
		email: '',
	};

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
		this.lastUsedApp = 'app-home';
		// this.launcherIsVisible = true
	}

	stateChanged(state) {
		this.launcherIsVisible = getLauncherVisibility(state);
		this.session = getSession(state);
		// if (this.session.live === true) {
		// 	Router.go(`/shipping`);
		// }
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
		console.log("Last Used App:", this.lastUsedApp);
		// store.dispatch(initializeWeSocketsChannel());
	}

	disconnectedCallback() {
		super.disconnectedCallback();
	}

	// Turn off shadowDOM
	// createRenderRoot() {
	// 	return this;
	// }
}