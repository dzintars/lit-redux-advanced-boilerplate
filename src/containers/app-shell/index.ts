import { LitElement, customElement, html, property } from 'lit-element';
import { connect } from 'pwa-helpers';
import store, { getLauncherVisibility, getSession } from '../../store';
import GlobalStyle from '../../assets/global-style';
import Style from './style';

import '../../components/main-navigation';
import '../../components/main-launcher';
// import '../../components/app-signin';

@customElement('app-shell')
export class AppShell extends connect(store)(LitElement) {
	public static styles = [ GlobalStyle, Style ];

	@property({ type: Object }) session = {
		live: false,
		email: '',
	};

	private launcherIsVisible: boolean;
	private lastUsedApp: string;

	static get properties() {
		return {
			launcherIsVisible: {
				type: Boolean,
			},
			lastUsedApp: {
				type: String,
			},
		};
	}

	constructor() {
		super();
		this.lastUsedApp = 'app-home';
		// this.launcherIsVisible = true
	}

	stateChanged(state) {
		this.launcherIsVisible = getLauncherVisibility(state);
		this.session = getSession(state);
		// if (this.session.live === true) {
		// 	Router.go(`/shipping`);
		// }
	}


	protected render() {
		return html`
			<main-navigation></main-navigation>
			${this.launcherIsVisible
				? html`
						<main-launcher></main-launcher>
				  `
				: ''}
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

	// Turn off shadowDOM
	// createRenderRoot() {
	// 	return this;
	// }
}

declare global {
	interface HTMLElementTagNameMap {
	  'app-shell': AppShell;
	}
}