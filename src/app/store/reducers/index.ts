import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";


import { environment } from "../../../environments/environment";
import * as fromUserReducer from "./user.reducer";

export interface GlobalState {
  userState: fromUserReducer.UserState;
  grocState: fromUserReducer.GrocState;
}

export const reducers: ActionReducerMap<GlobalState> = {
  userState: fromUserReducer.userReducer,
  grocState: fromUserReducer.grocReducer
};

// UserState  selector
export const selectUserState = createFeatureSelector<fromUserReducer.UserState>("userState");

//These are the state slices that I am exporting

//entire userState object
export const getUserState = createSelector(selectUserState, (state) => state);

//the username only
export const getUserName = createSelector(
  selectUserState,
  state => state.name
);

// the clickcount only
export const getClickCount = createSelector(
  selectUserState,
  state => state.clickCount
);

// ------------------------------------
// GrocState  selector
export const selectGrocState = createFeatureSelector<fromUserReducer.GrocState>("grocState");

// the clickcount only
export const getGrocItems = createSelector(
  selectGrocState,
  state => state.items
);

