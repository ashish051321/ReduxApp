import { Action } from '@ngrx/store';

export enum UserActionTypes {
  UpdateName = '[User] Update Name',
  IncrementClick = '[User] Increment Count'
}

export class UpdateNameAction implements Action {
  readonly type = UserActionTypes.UpdateName;
  constructor(public payload:string){  }
}


export class IncrementClickAction implements Action {
  readonly type = UserActionTypes.IncrementClick;
}

export type UserActions = UpdateNameAction | IncrementClickAction;
