import { combineReducers } from 'redux';
import { routerReducer } from 'redux-first-routing';
import authReducer from './auth';
import launcherReducer from './launcherReducer';
import shellReducer from './shell';
import projectsReducer from './projects';
import ordersReducer from './orders';
import ordersReducerX from './ordersReducer';
import messagesReducer from './messages';
import { todosReducer } from './todo';
import shippingReducer from './shipping';
import waylistsReducer from './waylists';
import servicesReducer from './services';
import organizationsReducer from './organizations';

export default combineReducers({
	router: routerReducer,
	auth: authReducer,
	launcher: launcherReducer,
	messages: messagesReducer,
	orders: ordersReducer,
	ordersx: ordersReducerX,
	organizations: organizationsReducer,
	projects: projectsReducer,
	shell: shellReducer,
	shipping: shippingReducer,
	services: servicesReducer,
	todos: todosReducer,
	waylists: waylistsReducer,
	// shippingx: combineReducers({
	// 	ui: shippingReducer,
	// 	data: combineReducers({
	// 		orders: ordersReducer,
	// 	}),
	// }),
});
