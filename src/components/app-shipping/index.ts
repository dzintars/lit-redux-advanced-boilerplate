import { LitElement,html, customElement } from 'lit-element';
import GlobalStyle from '../../assets/global-style';
import Style from './style';
import template from './template';

@customElement('app-shipping')
export class AppShipping extends LitElement {
	private socket = new WebSocket("ws://localhost:7070/v1/ws/private");
	
	public sendMessage(m: string) {
		const socket = this.socket;
		console.log(m);
		this.socket.send(m);
	}
	
	public static styles = [GlobalStyle, Style];
	public render() {
		return 	html`
		<div>
			<h1>Shipping</h1>
			<button @click=${() => this.sendMessage('Message')}>Send WS</button>
		</div>
	`;
	}


	connectedCallback() {
		super.connectedCallback();
		console.log("Connecting...");
		this.socket.onopen = () => {
			console.log("Connected!");
			this.socket.send("Hello from client!");
		}
		this.socket.onclose = (event) => {
			console.log("Socket Closed", event);
		}
		this.socket.onerror = (error) => {
			console.log("Socket Error: ", error);
		}
		this.socket.onmessage = (msg) => {
			console.log(msg);
		}
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		this.socket.close(1000, "Work complete");
	}
}
