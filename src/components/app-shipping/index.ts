import { LitElement, customElement } from 'lit-element';
import GlobalStyle from '../../assets/global-style';
import Style from './style';
import Template from './template';

@customElement('app-shipping')
export class AppShipping extends LitElement {
	public static styles = [GlobalStyle, Style];
	private socket = new WebSocket("ws://localhost:7070/ws");

	public render() {
		return Template.bind(this)();
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
		this.socket.close();
	}
}
