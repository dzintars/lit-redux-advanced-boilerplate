import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers';
import store, { toggleLauncher } from '../../store';
import { Grid } from '../../assets/svg';

class MainNavigation extends connect(store)(LitElement) {
	static get is() {
		return 'main-navigation';
	}

	static get styles() {
		return [
			css`
				:host {
					min-height: var(--size-sl);
					width: 100%;
					box-sizing: border-box;
					display: flex;
					flex-direction: row;
					background-color: var(--color-dodgerblue-10d);
					border-bottom: 1px solid var(--color-dodgerblue-6d);
					box-sizing: border-box;
					align-items: center;
				}
				button {
					height: var(--size-s);
					font-family: var(--font-main);
					font-size: 1rem;
					background-color: var(--color-dodgerblue-main);
					color: var(--color-dodgerblue-10l);
					border: none;
					border-radius: 2px;
					margin: 0 0.5rem;
					padding: 0 1rem;
					display: flex;
					flex-direction: row;
					align-items: center;
				}
				svg {
					width: 1.5rem;
					height: 1.5rem;
					fill: var(--color-dodgerblue-10l);
				}
				.launcher {
					height: var(--size-m);
					width: var(--size-m);
					padding: 0;
					justify-content: center;
					border-radius: 50%;
					color: white;
					outline: none;
				}
				div {
					flex: 1;
				}
			`,
		];
	}

	render() {
		return html`
			<button @click="${this.toggleLauncher}" id="launcher" class="launcher" title="Open Launcher">
				${Grid()}
			</button>
			<div></div>
			<button>Sign In</button>
		`;
	}

	toggleLauncher() {
		store.dispatch(toggleLauncher());
	}

	// Turn off shadowDOM
	// createRenderRoot() {
	// 	return this;
	// }
}

customElements.define(MainNavigation.is, MainNavigation);
