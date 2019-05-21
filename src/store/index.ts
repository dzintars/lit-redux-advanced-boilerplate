import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory, routerMiddleware, startListener } from 'redux-first-routing';
import { composeWithDevTools } from 'redux-devtools-extension';
// import createSagaMiddleware from 'redux-saga';
import logMiddleware from './middleware/log';
import rootReducer from './reducer';
// import rootSaga from './sagas';

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

	// Create the history object
	const history = createBrowserHistory();
	const routeMiddleware = routerMiddleware(history);
	const composeEnhancers = composeWithDevTools(options);
	// const sagaMiddleware = createSagaMiddleware();

	const middlewares = [logMiddleware, routeMiddleware];

	const store = createStore(
		rootReducer,
		/* preloadedState, */
		// compose(
		// 	applyMiddleware(sagaMiddleware),
		// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
		// ),
		composeEnhancers(
			applyMiddleware(...middlewares),
			/* other store enhancers if any */
		),
	);

	startListener(history, store);
	// sagaMiddleware.run(rootSaga);

	return store;
};

const store = configureStore();

export default store;
