import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import loginReducer from './loginReducer';
import customerListReducer from './customerListReducer';
import customerCreateReducer from './customerCreateReducer';
import customerUpdateReducer from './customerUpdateReducer';

const reducers = combineReducers({
  form: formReducer,
  login: loginReducer,
  customerList: customerListReducer,
  customerCreate: customerCreateReducer,
  customerUpdate: customerUpdateReducer
});

export default reducers;
