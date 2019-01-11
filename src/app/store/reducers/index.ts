import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  Action
} from '@ngrx/store';
import { environment } from '../../../environments/environment';


export interface State {
  user:string,
  clicks:number
}

export const reducers: ActionReducerMap<State> = {
user: userReducer,
clicks: clickReducer
};

export  function userReducer(state="Ashish",action){
  console.log("=== userReducer execution ===");
  if(action.type == 'changename') {
    return action.payload;
  }
  else{
    return state;
  }

}

export  function clickReducer(state=0,action){
  console.log("=== clickReducer execution ===");
  console.log(state);
  if(action.type == 'incrementclick') {
    return ++state;
  }
  else{
    return state;
  }
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
