import { customElement } from 'lit-element';
import { connect } from 'pwa-helpers';
import store from '../../store';
import { AppShell } from '../../containers/app-shell';
import GlobalStyle from '../../assets/global-style';
import Style from './style';
import template from './template';

@customElement('app-restricted-access')
export class AppRestrictedAccess extends connect(store)(AppShell) {
	public static styles = [GlobalStyle, Style];

	protected render() {
		return template.call(this);
	}
}

declare global {
	interface HTMLElementTagNameMap {
	  'app-restricted-access': AppRestrictedAccess;
	}
}