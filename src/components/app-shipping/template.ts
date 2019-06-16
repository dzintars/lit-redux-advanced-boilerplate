import { html } from 'lit-element';

export default function(sendMessage: Function) {
	return html`
		<div>
			<h1>Shipping</h1>
			<button @click=${() => sendMessage('Message')}>Send WS</button>
		</div>
	`;
}
