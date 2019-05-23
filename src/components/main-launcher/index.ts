import { LitElement, html, css } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import { connect } from 'pwa-helpers';
import store, {
	getPublicApps,
	getLauncherVisibility,
	hideLauncher,
	launcherShown,
	launcherHidden,
} from '../../store';

class MainLauncher extends connect(store)(LitElement) {
	static is = 'main-launcher';

	private isVisible: boolean;
	private wrapperRef: any;
	private apps: Array<any>;

	static get properties() {
		return {
			isVisible: {
				type: Boolean,
			},
			apps: {
				type: Array,
			},
		};
	}

	constructor() {
		super();
		this.isVisible = false;
		this.setWrapperRef = this.setWrapperRef.bind(this);
		this.handleClickOutside = this.handleClickOutside.bind(this);
	}

	stateChanged(state) {
		this.isVisible = getLauncherVisibility(state);
		this.apps = getPublicApps(state);
		console.log(typeof this.apps);
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
					flex-direction: row;
					background-color: var(--color-dodgerblue-9d);
					box-sizing: border-box;
					align-items: center;
					justify-content: center;
					color: var(--color-dodgerblue-8l);
					overflow: auto;
				}
				button {
					margin: 1rem;
				}
			`,
		];
	}

	//
	// eslint-disable-next-line
	render() {
		return html`
			${repeat(
				this.apps,
				app => app.uuid,
				app => html`
					<button>${app.title}</button>
				`,
			)}
		`;
	}

	changeState() {
		store.dispatch(hideLauncher());
	}

	connectedCallback() {
		super.connectedCallback();
		document.addEventListener('mousedown', this.handleClickOutside);
		store.dispatch(launcherShown());
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		document.removeEventListener('mousedown', this.handleClickOutside);
		store.dispatch(launcherHidden());
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

customElements.define(MainLauncher.is, MainLauncher);
