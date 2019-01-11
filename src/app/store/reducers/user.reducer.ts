import * as fromUserActions from '../actions/user.action';
import { getClickCount } from '.';

export interface State {
  name: string;
  clickCount: number;
}

export const initialState: State = {
  name: '',
  clickCount: 0
};

export function reducer(state = initialState, action: fromUserActions.UserActions): State {
  console.log("======= User Reducer triggered with action "+action.type);
  switch (action.type) {
    case fromUserActions.UserActionTypes.UpdateName:
      return {...state,name:action.payload};

      case fromUserActions.UserActionTypes.IncrementClick:
      {
        return {...state,clickCount:++state.clickCount};
      }
      

    default:
      return state;
  }
}

export const getUser = (state: State) => state.name;
export const getCount = (state: State) => state.clickCount;
