import { createActionThunk } from 'redux-thunk-actions';
import 
{ 
  searchCustomers as searchCustomersService,
  createCustomer as createCustomerService 
} from '../services/CustomerService';
import { 
  CUSTOMER_LIST_SEARCH, 
  CUSTOMER_CREATE_SUBMIT 
} from './constant';

const searchCustomers = createActionThunk(CUSTOMER_LIST_SEARCH, (dto) => 
  Promise.all([searchCustomersService(dto),dto]));

const createCustomer = createActionThunk(CUSTOMER_CREATE_SUBMIT, (customer) => createCustomerService(customer));   
export default { 
  searchCustomers,
  createCustomer
};