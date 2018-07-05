import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import loginReducer from './loginReducer';

const reducers = combineReducers({
  form: formReducer,
  login: loginReducer
});

export default reducers;
