import { css } from 'lit-element';

export default css`
	* {
		box-sizing: border-box;
	}
    :host {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        background-color: var(--color-base-light);
        color: var(--color-dodgerblue-10d);
    }
    main-launcher {
        position: fixed;
        top: var(--size-sl);
    }

`;
