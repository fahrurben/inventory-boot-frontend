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
