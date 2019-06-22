import { html } from 'lit-element';
import { MainNavigationPublic } from './index';

export default function template(this: MainNavigationPublic) {
	return html`
		<a href="/marketplace">Marketplace</a>
		<a href="/services">Services</a>
		<a href="/organizations">Organizations</a>
		<a href="/applications">Applications</a>
		<a href="/about">About</a>
	`;
}
