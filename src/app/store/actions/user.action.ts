import { Action } from '@ngrx/store';

export enum UserActionTypes {
  UpdateName = '[User] Update Name',
  IncrementClick = '[User] Increment Count',
  testDummy = '[User] Test Dummy'
}

export class UpdateNameAction implements Action {
  readonly type = UserActionTypes.UpdateName;
  constructor(public payload:string){  }
}


export class IncrementClickAction implements Action {
  readonly type = UserActionTypes.IncrementClick;
}

export class DummyAction implements Action {
  readonly type = UserActionTypes.testDummy;
}


export type UserActions = UpdateNameAction | IncrementClickAction | DummyAction;
