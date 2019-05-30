import { combineReducers } from 'redux';
import launcher, { LauncherState } from './main-launcher/reducer';
import system from './system/reducer';
import { SystemState } from './system/types';
import waybills from './waybills/reducer';
import { WaybillsState } from './waybills/types';

export interface RootState {
	readonly launcher: LauncherState;
	readonly system: SystemState;
	readonly waybills: WaybillsState;
}

export default combineReducers<RootState>({
	launcher,
	system,
	waybills,
});
