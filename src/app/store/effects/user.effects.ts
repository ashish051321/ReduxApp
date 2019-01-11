import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import * as fromUserActions from '../actions/user.action';

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions,
              private http: HttpClient) {}

  @Effect()
  loadAuths$: Observable<Action> = this.actions$.pipe(
    ofType(fromUserActions.UserActionTypes.UpdateName),
    switchMap(() => {
      console.log("The effects caught the action with type "+ fromUserActions.UserActionTypes.UpdateName)
      return this.http.get<any>(`https://swapi.co/api/people/1/`)
        .pipe(
          map((person) => {
            return new fromUserActions.DummyAction;
          })
        )

    })
  );
}
