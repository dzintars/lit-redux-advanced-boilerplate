import { fork } from 'redux-saga/effects';
import { mySaga } from './modules/system';
import { watchOrdersLoad } from './modules/waybills';
import { watchSignupSubmit } from './modules/signup';
import { watchSigninSubmit } from './modules/signin';

// TODO: Fix Saga composition and imports
export default function* root() {
	yield fork(mySaga);
	yield fork(watchOrdersLoad);
	yield fork(watchSignupSubmit);
	yield fork(watchSigninSubmit);
}
