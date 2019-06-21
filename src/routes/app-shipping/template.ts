import { html } from 'lit-element';
import { AppShipping } from './index';

export default function template(this: AppShipping) {
	return html`
		<div>
			<h1>Shipping</h1>
			<button @click=${() => this.sendMessage('Message')}>Send WS</button>
		</div>
	`;
}
