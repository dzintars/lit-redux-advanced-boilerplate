import { LitElement, html, customElement } from 'lit-element';
import { connect } from 'pwa-helpers';
import store, { submitSignin } from '../../store'; //
import GlobalStyle from '../../assets/global-style';
import Style from './style';
// import Template from './template';

@customElement('app-signin')
export class AppSignin extends connect(store)(LitElement) {
	public static styles = [GlobalStyle, Style];

	public render() {
		return html`
		<div>
			<div class="container">
				<form id="signup_form" name="signup" novalidate action="">
					<h1>Sign in</h1>
					<!-- <input type="hidden" name="appActionToken" value="JpvLfj2FzMZj2FoVvEDKWR29i80dN5cj3D" /> -->
					<div class="fieldset">
						<label for="email">Email</label>
						<input id="email" class="input txt" name="email" type="text" />
					</div>
					<div class="fieldset">
						<div class="restore-pass">
							<label for="password">Password</label>
							<a href="/restore-password">Forgot your password?</a>
						</div>
						<input
							id="password"
							class="input txt"
							autocomplete="off"
							name="password"
							type="password"
						/>
					</div>
					<div class="fieldset">
						<input @click=${() => this.signIn()} id="signin" class="input btn" value="Sign in" />
						<label class="keepin">
							<input class="input chk" type="checkbox" value="" />			
							<span>Keep me signed in.</span>
						</label>
					</div>
					<div class="new-client">
						<p>New to Oswee?</p>
						<a class="signup" href="/signup">Create your Oswee account</a>
					</div>
				</form>
			</div>
			<legal-info></legal-info>
		</div>
	`;
	}

	payload = {
		email: 'dzintars@saga.com',
		password: 'sagapass',
	};

	signIn() {
		// console.log("Clicked")
		store.dispatch(submitSignin(this.payload));
		// const data = new Request('http://localhost:8082/v1/signin', {
		// 	method: 'POST',
		// 	mode: 'cors',
		// 	cache: 'no-cache',
		// 	redirect: 'follow',
		// 	credentials: 'include', // same-origin, omit
		// 	headers: new Headers({
		// 		Accept: 'application/json, */*',
		// 		'Content-Type': 'application/json; charset=utf-8',
		// 	}),
		// 	body: JSON.stringify({email: "dzintars@oswee.com", password: "password777"}),
		// });
		// fetch(data)
		// 	.then(res => res.text())
		// 	.then((data) => console.log('Response:', data))
		// 	.catch(err => console.error(err)); // eslint-disable-line
	}
}
