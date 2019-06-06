import { LitElement, html, css } from 'lit-element';

class AppHome extends LitElement {
	static get is() {
		return 'app-home';
	}

	static get styles() {
		return [
			css`
				:host {
					flex: 1;
					box-sizing: border-box;
					display: flex;
					flex-direction: column;
					background-color: var(--color-dodgerblue-8d);
					box-sizing: border-box;
					align-items: center;
					justify-content: center;
					color: var(--color-dodgerblue-8l);
				}
			`,
		];
	}

	//
	// eslint-disable-next-line
	render() {
		return html`
			<h1>Welcome to Oswee</h1>
			<h2>You have nothing to do there!</h2>
			<p>This page is under continous development. Your actions are tracked.</p>
		`;
	}

	// Turn off shadowDOM
	// createRenderRoot() {
	// 	return this;
	// }
}

customElements.define(AppHome.is, AppHome);
