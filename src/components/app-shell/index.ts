import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers';
import store, { getLauncherVisibility } from '../../store';
import '../main-navigation';
import '../app-shipping';
import '../main-launcher';

class AppShell extends connect(store)(LitElement) {
	static get is() {
		return 'app-shell';
	}

	private text: string;
	private launcherIsVisible: boolean;

	static get properties() {
		return {
			text: {
				type: String,
			},
			launcherIsVisible: {
				type: Boolean,
			},
		};
	}

	constructor() {
		super();
		this.text = 'App Shell Component';
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
				app-shipping {
					flex: 1;
				}
				main-launcher {
					position: fixed;
					top: var(--size-sl);
				}
			`,
		];
	}

	//
	// eslint-disable-next-line
	render() {
		return html`
			<main-navigation></main-navigation>
			<!-- TODO: Application should be injected dynamically -->
			<app-shipping></app-shipping>
			${this.launcherIsVisible
				? html`
						<main-launcher></main-launcher>
				  `
				: ''}
		`;
	}

	// Turn off shadowDOM
	// createRenderRoot() {
	// 	return this;
	// }
}

customElements.define(AppShell.is, AppShell);
