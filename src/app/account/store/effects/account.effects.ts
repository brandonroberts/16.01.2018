import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import * as accountActions from '../actions/account.actions';

import { AccountService } from '../../../core/dataservices/account.service';

@Injectable()
export class AccountEffects {
  @Effect()
  loadAccount$ = this.actions$.ofType(accountActions.LOAD_ACCOUNT).pipe(
    switchMap(() => {
      return this.accountService.all().pipe(
        map((data: any[]) => {
          return new accountActions.LoadAccountFinishedAction(data);
        }),
        catchError((error: any) =>
          of(new accountActions.LoadAccountFailedAction(error))
        )
      );
    })
  );

  constructor(
    private accountService: AccountService,
    private actions$: Actions
  ) {}
}
