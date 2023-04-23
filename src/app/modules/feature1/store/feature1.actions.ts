import { createAction, props } from '@ngrx/store';

export const loadFeature1s = createAction('[Feature1] Load Feature1s');

export const loadFeature1sSuccess = createAction('[Feature1] Load Feature1s Success', props<{ data: any }>());

export const loadFeature1sFailure = createAction('[Feature1] Load Feature1s Failure', props<{ error: any }>());
