import { css } from 'lit-element';

export default css`
	:host {
		/* width: 100%; */
		min-height: var(--size-sl);
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		border-bottom: 1px solid var(--color-dodgerblue-6d);
		background-color: var(--color-dodgerblue-10d);
	}

	nav {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		box-sizing: border-box;
	}

	div {
		flex: 1;
	}

	button {
		height: var(--size-s);
		font-family: var(--font-main);
		font-size: 1rem;
		background-color: var(--color-dodgerblue-main);
		color: var(--color-dodgerblue-10l);
		border: none;
		border-radius: 2px;
		margin: 0 0.5rem;
		padding: 0 1rem;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
`;
