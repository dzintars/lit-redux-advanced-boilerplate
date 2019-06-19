// import { Reducer } from 'redux';
import { SIGNIN, SigninActionTypes, SigninState } from './types';

const initialState: SigninState = {
	user: {
		email: '',
		isSignedin: false,
	},
	isLoading: false,
};

export default <Reducer>(state: SigninState = initialState, action: SigninActionTypes) => {
	switch (action.type) {
		case SIGNIN.SUBMIT:
			console.log(action.payload)
			return {
				...state,
				isLoading: true,
			};
		case SIGNIN.SUBMIT_SUCCESS:
			return {
				...state,
				user: action.payload,
				isLoading: false,
			};
		case SIGNIN.SUBMIT_FAIL:
			return state;
		default:
			return state;
	}
};
