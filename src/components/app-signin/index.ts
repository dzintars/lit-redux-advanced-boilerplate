import { LitElement, customElement, property, query } from 'lit-element';
import { connect } from 'pwa-helpers';
import store, { submitSignin, getSigninState } from '../../store';
import GlobalStyle from '../../assets/global-style';
import Style from './style';
import { Router } from '@vaadin/router';
import { SignIn } from './models'
import template from './template';

@customElement('app-signin')
export class AppSignin extends connect(store)(LitElement) {
	public static styles = [GlobalStyle, Style];

	@property({ type: Object }) user = {
		isSignedin: false,
		email: '',
	};

	@property({type: SignIn})
	public signInForm = {
		email: '',
		password: '',
	};

	// TODO: Remove this test thing
	stateChanged(state) {
		this.user = getSigninState(state);
		if (this.user.isSignedin === true) {
			Router.go(`/shipping`);
		}
	}

	protected render() {
		return template.call(this);
	}

	// private get emailInput(): HTMLInputElement {
	// 	return this.shadowRoot!.getElementById('email')! as HTMLInputElement;
	// }

	@query('#email')
	private emailInput: HTMLInputElement;

	// private get passwordInput(): HTMLInputElement {
	// 	return this.shadowRoot!.getElementById('password')! as HTMLInputElement;
	// }

	@query('#password')
	private passwordInput: HTMLInputElement;

	private get formElement(): any {
		return this.shadowRoot!.getElementById('signin-form');
	}

	public signIn() {
		store.dispatch(submitSignin(Object.assign(this.signInForm,
			{
			  email: this.emailInput.value,
			  password: this.passwordInput.value,
			}
		)));
		this.clear();
	}

	private clear() {
		this.formElement.reset();
		this.signInForm = {
		  email: '',
		  password: '',
		};
	  }
}

declare global {
	interface HTMLElementTagNameMap {
	  'app-signin': AppSignin;
	}
}