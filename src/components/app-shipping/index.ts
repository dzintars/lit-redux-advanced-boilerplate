import { LitElement, html, css } from 'lit-element';
import '../main-launcher'

	class AppShipping extends LitElement {
        static get is() { return 'app-shipping' }
        
		static get styles() {
			return [
				css`
					:host {
						height: 100%;
						width: 100%;
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
                <h1>Shipping App</h1>
                <main-launcher></main-launcher>
			`;
        }
    

		// Turn off shadowDOM
		// createRenderRoot() {
		// 	return this;
		// }
	}

	customElements.define(AppShipping.is, AppShipping);
