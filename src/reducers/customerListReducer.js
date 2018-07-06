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
  page: 1,
  totalPage: 0
};

// Login reducer
function reducer(state = initialState, action) {
  switch (action.type) {
  case getStarted(CUSTOMER_LIST_SEARCH):
    return { ...state, isLoading: true };
  case getSucceeded(CUSTOMER_LIST_SEARCH):
    return { 
      ...state, 
      status: statusEnum.SUCCESS, 
      customers: action.payload[0].data, 
      totalPage: action.payload[0].total,
      page: action.payload[1].page 
    };
  case getFailed(CUSTOMER_LIST_SEARCH):
    return { ...state, actionResponse: action.payload, status: statusEnum.ERROR };
  case getEnded(CUSTOMER_LIST_SEARCH):
    return { ...state, isLoading: false }
  default:
    return state;
  }
}

export default reducer;
