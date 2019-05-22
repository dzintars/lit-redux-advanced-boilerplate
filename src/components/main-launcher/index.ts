import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers';
import store, { getLauncherVisibility, hideLauncher, launcherShown, launcherHidden} from '../../store'

	class MainLauncher extends connect(store)(LitElement) {
        static get is() { return 'main-launcher' }

        private isVisible : boolean

		static get properties() {
			return {
			  isVisible: {
				type: Boolean
			  },
			}
		  }

		constructor() {
			super()
			this.isVisible = false;
        }
        
        stateChanged(state) {
            this.isVisible = getLauncherVisibility(state)
        }
        
		static get styles() {
			return [
				css`
					:host {
                        height: auto;
                        max-height: calc(100vh - var(--size-sl));
						width: 100%;
						box-sizing: border-box;
						display: flex;
                        flex-direction: column;
                        background-color: var(--color-dodgerblue-9d);
                        box-sizing: border-box;
                        align-items: center;
                        justify-content: center;
                        color: var(--color-dodgerblue-8l);
                        overflow: auto;
                    }
				`,
			];
		}

	//
		// eslint-disable-next-line
		render() {
			return html`
                <h1>Main Launcher</h1>
                <p>${this.isVisible}</p>
			`;
        }

        changeState() {
            store.dispatch(hideLauncher());
        }

        connectedCallback() {
            super.connectedCallback()
            store.dispatch(launcherShown());
        }
        
        disconnectedCallback() {
            super.disconnectedCallback()
            store.dispatch(launcherHidden());
        }

		// Turn off shadowDOM
		// createRenderRoot() {
		// 	return this;
		// }
	}

	customElements.define(MainLauncher.is, MainLauncher);
