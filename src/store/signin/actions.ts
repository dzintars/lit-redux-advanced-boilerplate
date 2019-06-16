import { SIGNIN, SigninActionTypes } from './types';

export const submitSignin = (payload): SigninActionTypes => ({
	type: SIGNIN.SUBMIT,
	payload,
});

export const setSignin = (payload): SigninActionTypes => ({
	type: SIGNIN.SUBMIT_SUCCESS,
	payload,
});

export const setSigninError = (error): SigninActionTypes => ({
	type: SIGNIN.SUBMIT_FAIL,
	error,
});
