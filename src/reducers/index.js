import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import loginReducer from './loginReducer';
import customerListReducer from './customerListReducer';

const reducers = combineReducers({
  form: formReducer,
  login: loginReducer,
  customerList: customerListReducer
});

export default reducers;
