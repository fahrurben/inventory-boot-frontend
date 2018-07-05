import { createActionThunk } from 'redux-thunk-actions';
import { searchCustomers as searchCustomersService } from '../services/CustomerService';
import { CUSTOMER_LIST_SEARCH } from './constant';

const searchCustomers = createActionThunk(CUSTOMER_LIST_SEARCH, (dto) => searchCustomersService(dto));

export default { searchCustomers };