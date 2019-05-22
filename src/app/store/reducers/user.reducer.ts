import * as fromUserActions from '../actions/user.action';
import { getClickCount } from '.';

export interface UserState {
  name: string;
  clickCount: number;
}

export interface GrocState {
  items: string[];
}

// ------------------
export const initialUserState: UserState = {
  name: '',
  clickCount: 0
};

export const initialGrocState: GrocState = {
  items: ['notebook', 'pen']
}

// ------------------

export function userReducer(state = initialUserState, action: fromUserActions.UserActions): UserState {
  console.log("======= UserReducer triggered with action " , action.type, action);
  switch (action.type) {
    case fromUserActions.UserActionTypes.UpdateName:
      return { ...state, name: action.payload };

    case fromUserActions.UserActionTypes.IncrementClick:
      {
        return { ...state, clickCount: ++state.clickCount };
      }


    default:
      return state;
  }
}

// --------------------

export function grocReducer(state = initialGrocState, action: any): GrocState {
  console.log("======= grocReducer triggered with action ", action.type, action);
  switch (action.type) {
    case 'addGroc':
      return { items: [...state.items, action.payload] };

    case 'flushGroc':
      return { items: [] };

    default:
      return state;
  }
}

// export const getUser = (state: State) => state.name;
// export const getCount = (state: State) => state.clickCount;
