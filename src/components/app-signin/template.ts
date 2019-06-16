import { html } from 'lit-element';
import '../legal-info';

export default function(signIn) {
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
						<input @click=${() => signIn()} id="signin" class="input btn" value="Sign in" />
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
