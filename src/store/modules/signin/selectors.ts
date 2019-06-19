import { createSelector } from 'reselect';
import { RootState } from '../../reducer';

const sessionSelector = (state: RootState) => state.signin.user;

export const getSigninState = createSelector(
	[sessionSelector],
	user => user,
);
