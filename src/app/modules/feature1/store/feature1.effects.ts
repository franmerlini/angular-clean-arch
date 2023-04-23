import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { Service1Service, Service2Service } from '../services';
import * as Feature1Actions from './feature1.actions';

@Injectable()
export class Feature1Effects {
  private readonly actions$ = inject(Actions);
  private readonly service1Service = inject(Service1Service);
  private readonly service2Service = inject(Service2Service);

  loadFeature1s$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(Feature1Actions.loadFeature1s),
      concatMap(() =>
        this.service1Service.get().pipe(
          map((data) => Feature1Actions.loadFeature1sSuccess({ data })),
          catchError((error) => of(Feature1Actions.loadFeature1sFailure({ error })))
        )
      )
    );
  });
}
