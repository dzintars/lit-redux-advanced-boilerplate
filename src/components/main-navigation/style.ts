import { css } from 'lit-element';

export default css`
	* {
		box-sizing: border-box;
	}
	:host {
		min-height: var(--size-sl);
		width: 100%;
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		background-color: var(--color-dodgerblue-10d);
		border-bottom: 1px solid var(--color-dodgerblue-6d);
		box-sizing: border-box;
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
	svg {
		width: 1.5rem;
		height: 1.5rem;
		fill: var(--color-dodgerblue-10l);
	}
	.launcher {
		height: var(--size-m);
		width: var(--size-m);
		padding: 0;
		justify-content: center;
		border-radius: 50%;
		color: white;
		outline: none;
	}
	h1 {
		margin: 0 1rem;
		color: var(--color-dodgerblue-10l);
		cursor: pointer;
		font-weight: 700;
		font-size: 2rem;
	}
	div {
		flex: 1;
	}
	#btnSignin {
		font-weight: 500;
		color: white;
	}
`;
