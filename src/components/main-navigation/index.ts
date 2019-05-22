import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers';
import store, { toggleLauncher, hideLauncher} from '../../store'
import { Grid } from '../../assets/svg';

	class MainNavigation extends connect(store)(LitElement) {
        static get is() { return 'main-navigation' }

        private wrapperRef : any

        constructor() {
            super();
            this.setWrapperRef = this.setWrapperRef.bind(this);
            this.handleClickOutside = this.handleClickOutside.bind(this);
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

        connectedCallback() {
            super.connectedCallback();
            document.addEventListener('mousedown', this.handleClickOutside);
        }
    
        disconnectedCallback() {
            super.disconnectedCallback();
            document.removeEventListener('mousedown', this.handleClickOutside);
        }

        toggleLauncher() {
            store.dispatch(toggleLauncher());
        }

        setWrapperRef(node) {
            this.wrapperRef = node;
        }
    
        handleClickOutside(e) {
            if (
                this.getRootNode().contains(this) &&
                (!e.composedPath().includes(this) && !this.eventPathIncludes(e, '#launcher'))
            ) {
                store.dispatch(hideLauncher());
            }
        }
    
        // https://github.com/codebryo/event-path-includes/blob/master/dist/index.js
    
        // eslint-disable-next-line
        parseSelector(selector) {
            const logic = {
                isClass: selector.startsWith('.'),
                isId: selector.startsWith('#'),
            };
    
            const key = logic.isClass ? 'className' : logic.isId ? 'id' : '';
    
            return {
                key,
                val: selector.substr(1),
            };
        }
    
        eventPathIncludes(event, selector) {
            // https://stackoverflow.com/questions/39245488/event-path-undefined-with-firefox-and-vue-js
            if (!event || !(event.path || (event.composedPath && event.composedPath()))) return false;
    
            const selectorDetails = this.parseSelector(selector);
            return (event.path || (event.composedPath && event.composedPath())).some(el => {
                if (!el[selectorDetails.key]) return false;
                return el[selectorDetails.key].includes(selectorDetails.val);
            });
        }

		// Turn off shadowDOM
		// createRenderRoot() {
		// 	return this;
		// }
	}

	customElements.define(MainNavigation.is, MainNavigation);
