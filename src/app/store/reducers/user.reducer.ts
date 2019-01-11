import * as fromUserActions from '../actions/user.action';

export interface State {
  name: string;
  clickCount: number;
}

export const initialState: State = {
  name: '',
  clickCount: 0
};

export function reducer(state = initialState, action: fromUserActions.UserActions): State {
  switch (action.type) {
    case fromUserActions.UserActionTypes.UpdateName:
      return {...state,name:action.payload};

    default:
      return state;
  }
}

export const getUser = (state: State) => state.name;
export const getCount = (state: State) => state.clickCount;
