import { combineReducers } from 'redux';
import launcher, { LauncherState } from './modules/main-launcher/reducer';
import socket from './modules/websocket/reducer';
import { SocketState } from './modules/websocket/types';
import system from './modules/system/reducer';
import { SystemState } from './modules/system/types';
import waybills from './modules/waybills/reducer';
import { WaybillsState } from './modules/waybills/types';
import signup from './modules/signup/reducer';
import { SignupState } from './modules/signup/types';
import signin from './modules/signin/reducer';
import { SigninState } from './modules/signin/types';

export interface RootState {
	readonly socket: SocketState;
	readonly launcher: LauncherState;
	readonly system: SystemState;
	readonly waybills: WaybillsState;
	readonly signup: SignupState;
	readonly signin: SigninState;
}

export default combineReducers<RootState>({
	socket,
	launcher,
	system,
	waybills,
	signup,
	signin,
});
