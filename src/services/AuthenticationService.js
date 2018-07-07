import { ACCESS_TOKEN_KEY } from './constant';

// Get and store access_token in local storage
export function getAccessToken() {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
  return accessToken;
}

export function setAccessToken(accessToken) {
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
}

export function isLoggedIn() {
  const accessToken = getAccessToken();
  return !!accessToken;
}

export function getLoggedInUser() {
  const loggedUser = JSON.parse(localStorage.getItem('user'));
  return loggedUser;
}

export function logout() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}
