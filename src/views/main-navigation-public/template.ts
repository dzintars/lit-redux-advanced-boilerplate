import { html } from 'lit-element';
import { MainNavigationPublic } from './index';

export default function template(this: MainNavigationPublic) {
	return html`
		<button>Marketplace</button>
		<button>Services</button>
		<button>Organizations</button>
	`;
}
