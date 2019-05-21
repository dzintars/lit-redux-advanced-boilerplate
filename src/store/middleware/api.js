import axios from 'axios';
import {
	FETCH_USER,
	FETCH_PROJECTS,
	FETCH_WAYLISTS,
	FETCH_ORDERS,
	FETCH_ORDER,
} from '../constants/actionTypes';
import { setProjects } from '../actions/projects';
import { setWaylists } from '../actions/waylists';
import { setOrders, setOrder } from '../actions/orders';
import { setUser } from '../actions/auth';

const user = 'https://api.oswee.com/v1/auth/user';
const projects = 'https://api.oswee.com/v1/shipping/projects';
const waylists = 'https://api.oswee.com/v1/shipping/waylists';
const order = 'https://api.oswee.com/v1/1/shipping/orders/';
const orders = 'https://api.oswee.com/v1/shipping/orders/0987914d-298e-443f-ad78-acf43eb2ec08';

function fetch(url, callback) {
	axios
		// withCredentials required to pass cookie for CORS
		.get(url, { withCredentials: true })
		.then(callback)
		.catch(err => console.log(`Error fetching API: ${err}`));
}

const apiMiddleware = ({ dispatch }) => next => action => {
	if (action.type === FETCH_USER) {
		fetch(user, ({ data }) => dispatch(setUser(data)));
	}
	if (action.type === FETCH_PROJECTS) {
		fetch(projects, ({ data }) => dispatch(setProjects(data.projects)));
	}
	if (action.type === FETCH_WAYLISTS) {
		fetch(waylists, ({ data }) => dispatch(setWaylists(data.routes)));
	}
	if (action.type === FETCH_ORDERS) {
		fetch(orders, ({ data }) => dispatch(setOrders(data.delivery_orders)));
	}
	if (action.type === FETCH_ORDER) {
		// console.log(order + action.uuid);
		fetch(order + action.uuid, ({ data }) => {
			// console.log(data);
			dispatch(setOrder(data));
		});
	}
	next(action);
};

export default apiMiddleware;
