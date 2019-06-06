import { fork } from 'redux-saga/effects';
import { watchOrdersLoad } from './waybills';
import { watchSignupSubmit } from './signup';

// TODO: Fix Saga composition and imports
export default function* root() {
	yield fork(watchOrdersLoad);
	yield fork(watchSignupSubmit);
}
