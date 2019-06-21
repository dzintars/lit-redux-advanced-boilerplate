import { LitElement, customElement, property } from 'lit-element';
import { connect } from 'pwa-helpers';
import store from '../../store';
import GlobalStyle from '../../assets/global-style';
import template from './template';
import Style from './style';

@customElement('main-navigation-public')
export class MainNavigationPublic extends connect(store)(LitElement) {
	public static styles = [GlobalStyle, Style];

	protected render() {
		return template.call(this);
	}
}

declare global {
	interface HTMLElementTagNameMap {
	  'main-navigation-public': MainNavigationPublic;
	}
}