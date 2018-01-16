import * as fromReducer from './account.reducers';
import { ActionReducerMap } from '@ngrx/store';
import { createFeatureSelector } from '@ngrx/store';

export interface AccountState {
  account: fromReducer.AccountState;
}

export const reducers: ActionReducerMap<AccountState> = {
  account: fromReducer.accountReducer
};

export const getAccountState = createFeatureSelector<AccountState>('account');
