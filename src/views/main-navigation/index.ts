import { LitElement, html, customElement, property } from 'lit-element';
import { connect } from 'pwa-helpers';
import store, { toggleLauncher, getLauncherVisibility, hideLauncher, getSession, submitSignout } from '../../store';
import { Grid } from '../../assets/svg';
import { Router } from '@vaadin/router';
import GlobalStyle from '../../assets/global-style';
import Style from './style';
import '../../views/main-navigation';

@customElement('main-navigation')
export class MainNavigation extends connect(store)(LitElement) {
	public static styles = [GlobalStyle, Style];

	@property({ type: Object }) session = {
		live: false,
	};

	@property({ type: Boolean }) launcherIsVisible = false;

	stateChanged(state) {
		this.session = getSession(state);
		this.launcherIsVisible = getLauncherVisibility(state);
	}

	render() {
		return html`
			<nav>
				<button @click="${this.toggleLauncher}" id="launcher" class="launcher" title="Open Launcher">
					${Grid()}
				</button>
				<h1 @click=${() => this.switchRoute('')}>Oswee</h1>
				<div></div>
				${ this.session.live ?
					html`
						<button @click=${() => this.signOut()}>Sign Out</button>
					` : html`
						<button id="btnSignin" @click=${() => this.switchRoute('signin')}>Sign In</button>
					`
				}
			</nav>
			${this.launcherIsVisible
				? html`
					<main-launcher></main-launcher>
				`
				: ''
			}
		`;
	}
		
	toggleLauncher() {
		store.dispatch(toggleLauncher());
	}

	switchRoute(route) {
		// console.log(Router.urlForName('/signin'));
		store.dispatch(hideLauncher());
		Router.go(`/${route}`);
	}

	public signOut() {
		console.log("Sign out clicked!")
		store.dispatch(submitSignout());
	}
}
