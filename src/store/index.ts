import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logMiddleware from './middleware/log';
import rootReducer from './reducer';

// https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md
// https://github.com/zalmoxisus/remote-redux-devtools/issues/129

// Some interesting store wrapping construction - https://youtu.be/Om4Lb8c5Lbg?list=PLMV09mSPNaQlWvqEwF6TfHM-CVM6lXv39&t=790

const configureStore = () => {
	const options = {
		name: `Redux`,
		realtime: true,
		trace: true,
		traceLimit: 25,
	};

	const composeEnhancers = composeWithDevTools(options);

	const middlewares = [logMiddleware];

	const store = createStore(
		rootReducer,
		composeEnhancers(
			applyMiddleware(...middlewares),
			/* other store enhancers if any */
		),
	);

	return store;
};

const store = configureStore();

export default store;

export { RootState } from './reducer';
export * from './main-launcher';
export * from './system';
