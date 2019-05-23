import { combineReducers } from 'redux';
import launcher, { LauncherState } from './main-launcher/reducer';
import system, { SystemState } from './system/reducer';
// import { routerReducer as router, RouterState } from './router';

export interface RootState {
	readonly launcher: LauncherState;
	readonly system: SystemState;
}

export default combineReducers<RootState>({
	launcher,
	system,
});
