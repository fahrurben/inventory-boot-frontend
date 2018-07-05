import { createSettingDefaultAction } from '../services/ServiceHelper';
import { authenticate } from '../services/LoginService';
import { createActionThunk } from 'redux-thunk-actions';
import { LOGIN_SET_DEFAULT, LOGIN_SUBMIT } from './constant';

const setDefaultState = createSettingDefaultAction(LOGIN_SET_DEFAULT);
const loginSubmit = createActionThunk(LOGIN_SUBMIT, (user) => authenticate(user));

export default { setDefaultState, loginSubmit };
