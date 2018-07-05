import {
  getFailed,
  getStarted, 
  getSucceeded,
  getEnded,
  statusEnum,
  LOGIN_SET_DEFAULT,
  LOGIN_SUBMIT
} from '../actions/constant';

import { setAccessToken } from '../services/AuthenticationService';

const initialState = {
  isLoading: false,
  status: statusEnum.DEFAULT,
  actionResponse: null
};

// Login reducer
function reducer(state = initialState, action) {
  switch (action.type) {
  case LOGIN_SET_DEFAULT:
    return initialState;
  case getStarted(LOGIN_SUBMIT):
    return { ...state, isLoading: true };
  case getSucceeded(LOGIN_SUBMIT):
    setAccessToken(action.payload);
    return { ...state, status: statusEnum.SUCCESS };
  case getFailed(LOGIN_SUBMIT):
    return { ...state, actionResponse: action.payload, status: statusEnum.ERROR };
  case getEnded(LOGIN_SUBMIT):
    return { ...state, isLoading: false }
  default:
    return state;
  }
}

export default reducer;
