import { combineReducers } from 'redux';
import launcher, { LauncherState } from './main-launcher/reducer';
import system from './system/reducer';
import { SystemState } from './system/types';
import waybills from './waybills/reducer';
import { WaybillsState } from './waybills/types';
import signup from './signup/reducer';
import { SignupState } from './signup/types';
import signin from './signin/reducer';
import { SigninState } from './signin/types';

export interface RootState {
	readonly launcher: LauncherState;
	readonly system: SystemState;
	readonly waybills: WaybillsState;
	readonly signup: SignupState;
	readonly signin: SigninState;
}

export default combineReducers<RootState>({
	launcher,
	system,
	waybills,
	signup,
	signin,
});
