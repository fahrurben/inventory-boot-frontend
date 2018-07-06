import { createActionThunk } from 'redux-thunk-actions';
import { searchCustomers as searchCustomersService } from '../services/CustomerService';
import { CUSTOMER_LIST_SEARCH } from './constant';

const searchCustomers = createActionThunk(CUSTOMER_LIST_SEARCH, (dto) => 
  Promise.all([searchCustomersService(dto),dto]));

export default { searchCustomers };