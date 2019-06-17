export enum SIGNIN {
	SUBMIT = 'SIGNIN_SUBMIT',
	SUBMIT_SUCCESS = 'SIGNIN_SUBMIT_SUCCESS',
	SUBMIT_FAIL = 'SIGNIN_SUBMIT_FAIL',
}

export interface SigninCmd {
	email: string;
	password: string;
}

export interface SigninRes {
	isSignedin: boolean;
	email: string;
}

export interface SigninState {
	user: SigninRes;
	isLoading: boolean;
}

interface SubmitSigninAction {
	readonly type: SIGNIN.SUBMIT;
	readonly payload: SigninCmd;
}

interface SubmitSuccessSigninAction {
	readonly type: SIGNIN.SUBMIT_SUCCESS;
	readonly payload: SigninRes;
}

interface SubmitFailSigninAction {
	readonly type: SIGNIN.SUBMIT_FAIL;
	readonly error: string;
}

export type SigninActionTypes =
	| SubmitSigninAction
	| SubmitSuccessSigninAction
	| SubmitFailSigninAction;
