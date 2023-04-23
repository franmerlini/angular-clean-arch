import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  router: RouterReducerState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  router: routerReducer,
};

export const ROOT_EFFECTS = [];
