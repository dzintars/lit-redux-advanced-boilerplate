import { combineReducers } from 'redux';
import launcher, { LauncherState } from './main-launcher/reducer';
import system from './system/reducer';
import { SystemState } from './system/types';

export interface RootState {
	readonly launcher: LauncherState;
	readonly system: SystemState;
}

export default combineReducers<RootState>({
	launcher,
	system,
});
