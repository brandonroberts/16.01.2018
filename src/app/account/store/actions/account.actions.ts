import { Action } from '@ngrx/store';

export const LOAD_ACCOUNT = '[Account] Load';
export const LOAD_ACCOUNT_FINISHED = '[Account] Load finished';
export const LOAD_ACCOUNT_FAILED = '[Account] Load failed';

export class LoadAccountAction implements Action {
  readonly type = LOAD_ACCOUNT;

  constructor() {}
}

export class LoadAccountFinishedAction implements Action {
  readonly type = LOAD_ACCOUNT_FINISHED;

  constructor(public payload: any[]) {}
}

export class LoadAccountFailedAction implements Action {
  readonly type = LOAD_ACCOUNT_FAILED;

  constructor(public payLoad: any) {}
}

export type AccountActions =
  | LoadAccountAction
  | LoadAccountFinishedAction
  | LoadAccountFailedAction;
