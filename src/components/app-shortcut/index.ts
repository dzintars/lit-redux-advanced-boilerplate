import { LitElement, html, css, property } from 'lit-element';

class AppShortcut extends LitElement {
	static get is() {
		return 'app-shortcut';
	}

	@property({ type: String }) public title: string = '';

	static get styles() {
		return [
			css`
				:host {
					height: 140px;
					width: 300px;
					box-sizing: border-box;
					display: flex;
					flex-direction: column;
					background-color: var(--color-dodgerblue-6d);
					box-sizing: border-box;
					color: var(--color-dodgerblue-8l);
					padding: 1rem;
				}
			`,
		];
	}

	//
	// eslint-disable-next-line
	render() {
		return html`
			<h3>${this.title}</h3>
		`;
	}

	connectedCallback() {
		super.connectedCallback();
	}

	// Turn off shadowDOM
	// createRenderRoot() {
	// 	return this;
	// }
}

customElements.define(AppShortcut.is, AppShortcut);
