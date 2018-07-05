import {
  getFailed,
  getStarted, 
  getSucceeded,
  getEnded,
  statusEnum,
  CUSTOMER_LIST_SEARCH
} from '../actions/constant';

const initialState = {
  isLoading: false,
  status: statusEnum.DEFAULT,
  actionResponse: null,
  customers: null,
  page: 0,
  total: 0
};

// Login reducer
function reducer(state = initialState, action) {
  switch (action.type) {
  case getStarted(CUSTOMER_LIST_SEARCH):
    return { ...state, isLoading: true };
  case getSucceeded(CUSTOMER_LIST_SEARCH):
    return { ...state, status: statusEnum.SUCCESS };
  case getFailed(CUSTOMER_LIST_SEARCH):
    return { ...state, actionResponse: action.payload, status: statusEnum.ERROR };
  case getEnded(CUSTOMER_LIST_SEARCH):
    return { ...state, isLoading: false }
  default:
    return state;
  }
}

export default reducer;
