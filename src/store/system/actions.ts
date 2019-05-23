export enum SYSTEM {
	TOGGLE = 'SYSTEM_TOGGLE',
}

interface ToggleSystemAction {
	readonly type: SYSTEM.TOGGLE;
}

export type SystemActions = ToggleSystemAction;

export const toggleSystem = (): ToggleSystemAction => ({
	type: SYSTEM.TOGGLE,
});
