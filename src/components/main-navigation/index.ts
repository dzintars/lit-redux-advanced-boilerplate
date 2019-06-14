import { LitElement, html, customElement } from 'lit-element';
import { connect } from 'pwa-helpers';
import store, { toggleLauncher, hideLauncher } from '../../store';
import { Grid } from '../../assets/svg';
import { Router } from '@vaadin/router';
import GlobalStyle from '../../assets/global-style';
import Style from './style';

// let defferedPrompt;

// window.addEventListener('beforeinstallprompt', (e) => {
// 	e.preventDefault();
// 	console.log('beforeinstallprompt was called');
// 	defferedPrompt = e;
// });

@customElement('main-navigation')
export class MainNavigation extends connect(store)(LitElement) {
	public static styles = [GlobalStyle, Style];

	render() {
		return html`
			<button @click="${this.toggleLauncher}" id="launcher" class="launcher" title="Open Launcher">
				${Grid()}
			</button>
			<h1 @click=${() => this.switchRoute('')}>Oswee</h1>
			<div></div>
			<button id="btnSignin" @click=${() => this.switchRoute('signin')}>Sign In</button>
			`;
		}
		
		// <button @click=${() => this.promptInstall(event)} class="install">Install</button>
	// promptInstall(e) {
	// 	defferedPrompt.prompt();
	// 	defferedPrompt.userChoice.then((choiceResult) => {
	// 		if (choiceResult.outcome === 'accepted') {
	// 			console.log('User accepted Installation')
	// 		}
	// 		defferedPrompt = null;
	// 	});
	// }

	toggleLauncher() {
		store.dispatch(toggleLauncher());
	}

	switchRoute(route) {
		// console.log(Router.urlForName('/signin'));
		store.dispatch(hideLauncher());
		Router.go(`/${route}`);
	}

	// Turn off shadowDOM
	// createRenderRoot() {
	// 	return this;
	// }
}
