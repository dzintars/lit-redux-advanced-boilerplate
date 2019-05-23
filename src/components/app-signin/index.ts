import { LitElement, html, css } from 'lit-element';
import './legal-info';

class AppSignin extends LitElement {
	static get is() {
		return 'app-signin';
	}

	static get styles() {
		return [
			css`
				:host {
					width: 100%;
					height: 100%;
					display: grid;
					place-items: center center;
				}
				.container {
					width: 320px;
					border: 1px solid var(--main-background);
					padding: var(--size-xs);
					border-radius: 5px;
					box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14),
						0 9px 46px 8px rgba(0, 0, 0, 0.12);
					margin-bottom: var(--size-xl);
					background: var(--lt-color-light);
				}
				.fieldset {
					display: flex;
					flex-direction: column;
					margin-bottom: 1.1rem;
				}
				label {
					font-size: var(--text-md);
					font-weight: 500;
				}
				h1,
				p,
				input,
				label {
					color: var(--lt-color-light-10d);
				}
				h1 {
					margin-top: 0;
				}
				.input {
					height: 2rem;
					/* width: 100%; */
					border-radius: 3px;
					background: var(--main-background);
					border: 1px solid var(--main-background);
					padding: 0 6px;
					outline: none;
					box-sizing: border-box;
					font-family: var(--font-main);
				}
				.input.txt:focus {
					border: 1px solid var(--lt-color-primary, hsl(215 100% 50%));
				}
				#signin {
					color: white;
					background-color: var(--lt-color-primary, hsl(215 100% 50%));
					font-family: var(--font-main);
					font-size: var(--text-md);
					margin: 1.1rem 0;
					cursor: pointer;
				}
				.new-client {
					width: 100%;
					height: auto;
					display: grid;
					grid-template-columns: 1fr;
					grid-gap: 1rem;
					justify-items: center;
				}
				.new-client a {
					color: white;
				}
				.signup {
					display: inline-block;
					width: 100%;
					/* height: var(--size-xm); */
					height: 2rem;
					line-height: 2rem;
					border: 1px solid var(--lt-color-success);
					border-radius: 3px;
					text-decoration: none;
					font-size: var(--text-md);
					color: var(--lt-color-light-10d);
					text-align: center;
					background-color: var(--lt-color-success);
				}
				.signup:hover {
					cursor: pointer;
					background-color: var(--lt-color-success-30pct);
				}
				p {
					margin: 0;
					font-size: var(--text-sm);
				}
				.have-account {
					font-size: var(--text-md);
					font-weight: 500;
				}
				.keepin {
					width: auto;
					display: flex;
					flex-direction: row;
					align-items: center;
				}
				.restore-pass {
					display: flex;
					flex-direction: row;
				}
				.restore-pass label {
					flex: 1;
				}
				.restore-pass a {
					font-size: var(--text-md);
					text-decoration: none;
					color: var(--lt-color-primary);
				}
				@media only screen and (max-width: 600px) {
					.container {
						width: 280px;
					}
				}
			`,
		];
	}

	// eslint-disable-next-line
	render() {
		return html`
			<div>
				<div class="container">
					<form id="signup_form" name="signup" method="POST" novalidate action="">
						<h1>Sign in</h1>
						<input type="hidden" name="appActionToken" value="JpvLfj2FzMZj2FoVvEDKWR29i80dN5cj3D" />
						<div class="fieldset">
							<label for="email">Email</label>
							<input id="email" class="input txt" name="email" type="text" autofocus />
						</div>
						<div class="fieldset">
							<div class="restore-pass">
								<label for="password">Password</label>
								<a href="/forgot-password">Forgot your password?</a>
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
							<input id="signin" class="input btn" type="submit" value="Sign in" />
							<label class="keepin">
								<input class="input chk" type="checkbox" value="" />
								<span>Keep me signed in.</span>
							</label>
						</div>
						<div class="new-client">
							<p>New to Hooli?</p>
							<a class="signup" href="/signup">Create your Hooli account</a>
						</div>
					</form>
				</div>
				<legal-info></legal-info>
			</div>
		`;
	}
}

customElements.define(AppSignin.is, AppSignin);
