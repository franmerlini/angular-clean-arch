import { createFeature, createReducer, on } from '@ngrx/store';
import * as Feature1Actions from './feature1.actions';

export const feature1FeatureKey = 'feature1';

export interface Feature1State {
  someProperty: boolean;
}

export const initialState: Feature1State = {
  someProperty: false,
};

export const reducer = createReducer(
  initialState,
  on(Feature1Actions.loadFeature1s, (state): Feature1State => state),
  on(Feature1Actions.loadFeature1sSuccess, (state, action): Feature1State => state),
  on(Feature1Actions.loadFeature1sFailure, (state, action): Feature1State => state)
);

export const feature1Feature = createFeature({
  name: feature1FeatureKey,
  reducer,
});
