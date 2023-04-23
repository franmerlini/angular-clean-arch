import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterStateUrl } from './custom-serializer';

const selectRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');

const selectCurrentRoute = createSelector(selectRouterState, (router) => router?.state);

export const RouterSelectors = {
  selectCurrentRoute,
};
