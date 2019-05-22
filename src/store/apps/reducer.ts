import { Reducer } from 'redux';
import { LauncherActions, LAUNCHER } from './actions';

export interface ApplicationState {
	applications: object;
	modules: object;
}

const initialState: ApplicationState = {
	applications: {},
	modules: {},
};

export default <Reducer>(state: ApplicationState = initialState, action: LauncherActions) => {
	switch (action.type) {
		default:
			return state;
	}
};
