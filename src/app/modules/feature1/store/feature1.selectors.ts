import { createFeatureSelector } from '@ngrx/store';
import { Feature1State, feature1FeatureKey } from './feature1.reducer';

export const selectFeature1State = createFeatureSelector<Feature1State>(feature1FeatureKey);
