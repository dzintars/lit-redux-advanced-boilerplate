import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers';
import store from '../../store'
import { getLauncherVisibility } from '../../store/main-launcher/selectors'
import { hideLauncher, launcherShown } from '../../store/main-launcher/actions'
// import { getAugmentedOrders } from '../redux/selectors/selectedOrders';

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
            // this.orders = getAugmentedOrders(state);
            this.isVisible = getLauncherVisibility(state)
        }
        
		static get styles() {
			return [
				css`
					:host {
						height: 400px;
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
                <h1>Main Launcher</h1>
                <p>${this.isVisible}</p>
                <button @click="${this.changeState}">Change State</button>
			`;
        }

        connectedCallback() {
            super.connectedCallback()
            store.dispatch(launcherShown());
        }
        
        changeState() {
            store.dispatch(hideLauncher());
        }

		// Turn off shadowDOM
		// createRenderRoot() {
		// 	return this;
		// }
	}

	customElements.define(MainLauncher.is, MainLauncher);
