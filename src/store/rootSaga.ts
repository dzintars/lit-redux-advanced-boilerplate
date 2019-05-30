import { fork } from 'redux-saga/effects';
import waybillsSaga from './waybills';

// TODO: Fix Saga composition and imports
export default function* root() {
	yield fork(waybillsSaga);
}
