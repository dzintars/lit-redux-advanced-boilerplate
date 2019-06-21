import { html } from 'lit-element';
import { MainNavigationPrivate } from './index';
import { Grid } from '../../assets/svg';
import '../main-launcher';

export default function template(this: MainNavigationPrivate) {
	return html`
		<button @click="${this.toggleLauncher}" id="launcher" class="launcher" title="Open Launcher">
			${Grid()}
		</button>
		<h1 @click=${() => this.switchRoute('')}>Oswee</h1>
		${this.launcherIsVisible
				? html`
					<main-launcher></main-launcher>
				`
				: ''
			}
	`;
}
