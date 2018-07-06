import { createActionThunk } from 'redux-thunk-actions';
import 
{ 
  searchCustomers as searchCustomersService,
  createCustomer as createCustomerService,
  getCustomer as getCustomerService,
  updateCustomer as updateCustomerService
} from '../services/CustomerService';
import { 
  CUSTOMER_LIST_SEARCH,
  CUSTOMER_CREATE_INITIAL,
  CUSTOMER_CREATE_SUBMIT,
  CUSTOMER_UPDATE_INITIAL,
  CUSTOMER_UPDATE_SUBMIT
} from './constant';

const searchCustomers = createActionThunk(CUSTOMER_LIST_SEARCH, (dto) => 
  Promise.all([searchCustomersService(dto),dto]));

const createInitial = createActionThunk(CUSTOMER_CREATE_INITIAL, () => Promise.all([{}]));
const createCustomer = createActionThunk(CUSTOMER_CREATE_SUBMIT, (customer) => createCustomerService(customer));   
const getCustomer = createActionThunk(CUSTOMER_UPDATE_INITIAL, (id) => getCustomerService(id));
const updateCustomer = createActionThunk(CUSTOMER_UPDATE_SUBMIT, (customer) => updateCustomerService(customer));

export default { 
  searchCustomers,
  createInitial,
  createCustomer,
  getCustomer,
  updateCustomer
};