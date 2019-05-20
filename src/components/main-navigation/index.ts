import { LitElement, html, css } from 'lit-element';

	class MainNavigation extends LitElement {
        static get is() { return 'main-navigation' }
        
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
                        margin: 0 1rem;
                        border: none;
                        border-radius: 2px;
                        padding: 0 1rem;
                    }
				`,
			];
		}

	//
		// eslint-disable-next-line
		render() {
			return html`
				<button>Start</button>
			`;
		}

		// Turn off shadowDOM
		// createRenderRoot() {
		// 	return this;
		// }
	}

	customElements.define(MainNavigation.is, MainNavigation);
