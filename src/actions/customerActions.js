import { createActionThunk } from 'redux-thunk-actions';
import 
{ 
  searchCustomers as searchCustomersService,
  createCustomer as createCustomerService,
  getCustomer as getCustomerService
} from '../services/CustomerService';
import { 
  CUSTOMER_LIST_SEARCH, 
  CUSTOMER_CREATE_SUBMIT,
  CUSTOMER_UPDATE_INITIAL
} from './constant';

const searchCustomers = createActionThunk(CUSTOMER_LIST_SEARCH, (dto) => 
  Promise.all([searchCustomersService(dto),dto]));

const createCustomer = createActionThunk(CUSTOMER_CREATE_SUBMIT, (customer) => createCustomerService(customer));   
const getCustomer = createActionThunk(CUSTOMER_UPDATE_INITIAL, (id) => createCustomerService(id));

export default { 
  searchCustomers,
  createCustomer,
  getCustomer
};