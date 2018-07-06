import {
  getFailed,
  getStarted, 
  getSucceeded,
  getEnded,
  statusEnum,
  CUSTOMER_UPDATE_INITIAL,
  CUSTOMER_UPDATE_SUBMIT
} from '../actions/constant';

const initialState = {
  isLoading: false,
  status: statusEnum.DEFAULT,
  actionResponse: null,
  initialData: null,
  customer: null
};

// Customer update reducer
function reducer(state = initialState, action) {
  switch (action.type) {
  case getStarted(CUSTOMER_UPDATE_SUBMIT):
    return { ...state, isLoading: true };
  case getSucceeded(CUSTOMER_UPDATE_SUBMIT):
    return { ...state, status: statusEnum.SUCCESS };
  case getFailed(CUSTOMER_UPDATE_SUBMIT):
    return { ...state, actionResponse: action.payload, status: statusEnum.ERROR };
  case getEnded(CUSTOMER_UPDATE_SUBMIT):
    return { ...state, isLoading: false }
  default:
    return state;
  }
}

export default reducer;
