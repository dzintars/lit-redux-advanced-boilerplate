import { LitElement, customElement } from 'lit-element';
import GlobalStyle from '../../assets/global-style';
import Style from './style';
import Template from './template';

@customElement('app-signin')
export class AppSignin extends LitElement {
	public static styles = [GlobalStyle, Style];

	public render() {
		return Template.bind(this)();
	}
}
