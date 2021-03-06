import _ from 'lodash';
import { checkStatus, parseJSON, getApiUrl, getHeaderForAjax } from './ServiceHelper';

export function searchCustomers(dto) {
  return fetch(getApiUrl() + '/api/customers/search', {
    method: 'POST',
    headers: getHeaderForAjax(),
    body: JSON.stringify(dto)
  })
    .then(checkStatus)
    .then(parseJSON);
}

export function createCustomer(customer) {
  return fetch(getApiUrl() + '/api/customers', {
    method: 'POST',
    headers: getHeaderForAjax(),
    body: JSON.stringify(customer)
  })
    .then(checkStatus)
    .then(parseJSON);
}

export function updateCustomer(customer) {
  return fetch(getApiUrl() + '/api/customers/' + customer.id, {
    method: 'PUT',
    headers: getHeaderForAjax(),
    body: JSON.stringify(customer)
  })
    .then(checkStatus)
    .then(parseJSON);
}

export function getCustomer(id) {
  return fetch(getApiUrl() + '/api/customers/' + id, {
    method: 'GET',
    headers: getHeaderForAjax()
  })
    .then(checkStatus)
    .then(parseJSON);
}