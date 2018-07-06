export const STARTED = '_STARTED';
export const SUCCEEDED = '_SUCCEEDED';
export const FAILED = '_FAILED';
export const ENDED = '_ENDED';

export const getStarted = (state) => state + STARTED;
export const getSucceeded = (state) => state + SUCCEEDED;
export const getFailed = (state) => state + FAILED;
export const getEnded = (state) => state + ENDED;

export const statusEnum = Object.freeze({
  DEFAULT: 'default',
  ERROR: 'error',
  SUCCESS: 'success'
});

export const LOGIN_SET_DEFAULT = 'LOGIN_SET_DEFAULT';
export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';
export const CUSTOMER_LIST_SEARCH = 'CUSTOMER_LIST_SEARCH';
export const CUSTOMER_CREATE_SUBMIT = 'CUSTOMER_CREATE_SUBMIT';