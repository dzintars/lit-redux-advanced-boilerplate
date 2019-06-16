import { takeEvery, call, put } from 'redux-saga/effects';
import { setSignin, setSigninError } from './actions';
import { SIGNIN } from './types';
import { fetchSignin } from './api';

function* handleSigninSubmit(action) {
	try {
		// console.log("Payload", action)
		const signin = yield call(fetchSignin, action);
		yield put(setSignin(signin));
	} catch (error) {
		yield put(setSigninError(error.toString()));
	}
}

// watcher saga
function* watchSigninSubmit() {
	yield takeEvery(SIGNIN.SUBMIT, handleSigninSubmit);
}

// TODO: Fix Saga composition and exports

export { watchSigninSubmit };
