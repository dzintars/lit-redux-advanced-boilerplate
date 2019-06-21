import { css } from 'lit-element';

export default css`
	* {
		box-sizing: border-box;
	}
	:host {
		height: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		box-sizing: border-box;
	}
	nav {
		min-height: var(--size-sl);
		width: 100%;
		display: flex;
		flex-direction: row;
		background-color: var(--color-dodgerblue-10d);
		border-bottom: 1px solid var(--color-dodgerblue-6d);
		align-items: center;
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

	div {
		flex: 1;
	}
	main-launcher {
        position: fixed;
        top: var(--size-sl);
    }
`;
