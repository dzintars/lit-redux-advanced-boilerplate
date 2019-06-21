import { LitElement, customElement, html, property } from 'lit-element';
import { connect } from 'pwa-helpers';
import store, { getSession } from '../../store';
import GlobalStyle from '../../assets/global-style';
import Style from './style';

import '../../views/main-navigation';
import '../../views/main-launcher';

@customElement('app-shell')
export class AppShell extends connect(store)(LitElement) {
	public static styles = [ GlobalStyle, Style ];

	@property({ type: Object }) session = {
		live: false,
		email: '',
	};

	private lastUsedApp: string;

	static get properties() {
		return {
			lastUsedApp: {
				type: String,
			},
		};
	}

	constructor() {
		super();
		this.lastUsedApp = 'app-home';
	}

	stateChanged(state) {
		this.session = getSession(state);
		// if (this.session.live === true) {
		// 	Router.go(`/shipping`);
		// }
	}


	protected render() {
		return html`
			<main-navigation></main-navigation>
			<slot></slot>
		`;
	}

	connectedCallback() {
		super.connectedCallback();
		if (localStorage.getItem('lastUsedApp') !== null) {
			this.lastUsedApp = localStorage.getItem('lastUsedApp');
		}
		console.log("Last Used App:", this.lastUsedApp);
		// store.dispatch(initializeWeSocketsChannel());
	}

	disconnectedCallback() {
		super.disconnectedCallback();
	}
}

declare global {
	interface HTMLElementTagNameMap {
	  'app-shell': AppShell;
	}
}