import { FETCH_APPS, SystemActionTypes } from './types';

export function fetchApps(): SystemActionTypes {
	return {
		type: FETCH_APPS,
	};
}
