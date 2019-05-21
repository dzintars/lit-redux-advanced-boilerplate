
import { combineReducers, Reducer } from 'redux';
import launcher, { LauncherState } from './main-launcher/reducer';
// import { routerReducer as router, RouterState } from './router';

export interface RootState {
  readonly launcher : LauncherState;
}

export default combineReducers<RootState>({
  launcher,
})