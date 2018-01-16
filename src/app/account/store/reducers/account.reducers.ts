import * as fromAccountActions from '../actions/account.actions';

export interface AccountState {
  loading: boolean;
  loaded: boolean;
  accountItems: any[];
}

export const initialState: AccountState = {
  loading: false,
  loaded: false,
  accountItems: []
};

export function accountReducer(
  state = initialState,
  action: fromAccountActions.AccountActions
): AccountState {
  switch (action.type) {
    case fromAccountActions.LOAD_ACCOUNT: {
      // console.log(action.type);
      return { ...state, loading: true };
    }
    case fromAccountActions.LOAD_ACCOUNT_FINISHED: {
      console.log('Finished: ' + action.payload);
      return {
        ...state,
        loading: false,
        loaded: true,
        accountItems: action.payload
      };
    }
    case fromAccountActions.LOAD_ACCOUNT_FAILED: {
      return {
        ...state,
        loading: false,
        loaded: false,
        accountItems: []
      };
    }

    default:
      return state;
  }
}

// gibt die teile des States
export const getAccountItems = (state: AccountState) => {
  if (!state) {
    return [];
  }
  return state.accountItems;
};
export const getAccountLoading = (state: AccountState) => state.loading;
export const getAccountLoaded = (state: AccountState) => state.loaded;
