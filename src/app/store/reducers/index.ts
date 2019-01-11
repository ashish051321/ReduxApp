import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";


import { environment } from "../../../environments/environment";
import * as fromUserReducer from "./user.reducer";

export interface State {
  userState: fromUserReducer.State;
}

export const reducers: ActionReducerMap<State> = {
  userState: fromUserReducer.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

// UserState  selector
export const selectUserState = createFeatureSelector<fromUserReducer.State>("userState");

//These are the state slices that I am exporting

//entire userState object
export const getUserState = createSelector(selectUserState,(state)=>state);

//the username only
export const getUserName = createSelector(
  selectUserState,
  fromUserReducer.getUser
);

// the clickcoint only
export const getClickCount = createSelector(
  selectUserState,
  fromUserReducer.getCount
);

