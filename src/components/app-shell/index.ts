import { LitElement, html, css } from 'lit-element';
import '../main-navigation';
import '../app-shipping';

	class AppShell extends LitElement {
		static get is() { return 'app-shell' }

		private text : string

		static get properties() {
			return {
			  text: {
				type: String
			  },
			}
		  }

		constructor() {
			super()
			this.text = 'App Shell Component';
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
				`,
			];
		}

	//
		// eslint-disable-next-line
		render() {
			return html`
				<main-navigation></main-navigation>
				<app-shipping></app-shipping>
			`;
		}

		// Turn off shadowDOM
		// createRenderRoot() {
		// 	return this;
		// }
	}

	customElements.define(AppShell.is, AppShell);
