import { checkStatus, parseJSON, getApiUrl, getHeaderForAjax } from './ServiceHelper';

export function authenticate(user) {
  return fetch(getApiUrl() + '/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })  
    .then(checkStatus)
    .then(response => {
      const authToken = response.headers.get('Authorization');
      return authToken;
    });
}