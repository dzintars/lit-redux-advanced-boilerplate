import { wsConnected, wsDisconnected } from '../actions/websocket';
import { WS_ROOT } from '../constants/global';

const SOCKET_STATES = {
	CONNECTING: 0,
	OPEN: 1,
	CLOSING: 2,
	CLOSED: 3,
};

const wsMiddleware = ({ dispatch }) => next => {
	const websocket = new WebSocket(WS_ROOT);
	Object.assign(websocket, {
		onopen: () => dispatch(wsConnected()),
		onclose: () => dispatch(wsDisconnected()),
		onerror: error => console.log(`WS Error: ${error.data} `),
		onmessage: event => {
			dispatch(JSON.parse(event.data));
		},
	});

	return action => {
		if (websocket.readyState === SOCKET_STATES.OPEN && action.meta && action.meta.websocket) {
			// Remove action metadata before sending
			const cleanAction = Object.assign({}, action, {
				meta: undefined,
			});
			websocket.send(JSON.stringify(cleanAction));
		}
		next(action);
	};
};

export default wsMiddleware;
