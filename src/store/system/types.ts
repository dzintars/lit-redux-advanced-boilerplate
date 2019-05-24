export interface Application {
	uuid: string;
	title: string;
	type: string;
	componentTag: string;
	default: boolean;
}

export interface Module {
	title: string;
	application: string;
}

export interface SystemState {
	applications: { [key: string]: Application };
	publicApplications: string[];
	modules: { [key: string]: Module };
}

export const FETCH_APPS = 'FETCH_APPS';

interface FetchAppsAction {
	type: typeof FETCH_APPS;
}

export type SystemActionTypes = FetchAppsAction;
