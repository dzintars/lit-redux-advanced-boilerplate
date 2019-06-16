import { fork } from 'redux-saga/effects';
import { watchOrdersLoad } from './waybills';
import { watchSignupSubmit } from './signup';
import { watchSigninSubmit } from './signin';

// TODO: Fix Saga composition and imports
export default function* root() {
	yield fork(watchOrdersLoad);
	yield fork(watchSignupSubmit);
	yield fork(watchSigninSubmit);
}
