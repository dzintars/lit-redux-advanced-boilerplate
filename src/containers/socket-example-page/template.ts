import { html } from 'lit-element';
import { SocketExamplePage } from './index';
import '../../components/socket-connection-log';
import '../../components/socket-message-log';

export default function template(this: SocketExamplePage) {
	return html`
        <div class="container">

            <h1>Socket Exapmle Page</h1>
            <p>Sockets not connected</p>

            <socket-connection-log .loaded=${this.loaded} .message=${this.message} .connected=${this.connected} .history=${this.history}></socket-connection-log>
            <socket-message-log></socket-message-log>
        </div>
    `;
}