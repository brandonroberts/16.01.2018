import { createSelector } from '@ngrx/store';
import * as fromReducer from '../reducers/account.reducers';
import * as fromFeature from '../reducers';

// gibt teile vom state retour

export const getCompleteAccountState = createSelector(
  fromFeature.getAccountState,
  (state: fromFeature.AccountState) => state.account
);
export const getAccountLoading = createSelector(
  this.getCompleteAccountState,
  fromReducer.getAccountLoading
);
export const getAccountLoaded = createSelector(
  this.getCompleteAccountState,
  fromReducer.getAccountLoaded
);
export const getAllAccountItems = createSelector(
  this.getCompleteAccountState,
  fromReducer.getAccountItems
);
