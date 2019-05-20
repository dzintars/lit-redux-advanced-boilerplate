import { LitElement, html, css } from 'lit-element';

export default () => {
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
						background-color: var(--color-dodgerblue-main);
						color: var(--color-dodgerblue-10l);
					}
				`,
			];
		}

	//
		// eslint-disable-next-line
		render() {
			return html`
				<p>${this.text}</p>
			`;
		}

		// Turn off shadowDOM
		// createRenderRoot() {
		// 	return this;
		// }
	}

	customElements.define(AppShell.is, AppShell);

}