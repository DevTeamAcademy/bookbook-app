import { or } from 'ramda';
import useFetch from 'use-http';
// helpers
import * as H from '../helpers';
// /////////////////////////////////////////////////////////////////////////////////////////////////

export const makeRequestHeaders = (customHeaders: Object) => {
  let token;
  let sessionHeaders = {};
  try {
    token = H.getToken();
  } catch (error) {
    token = null;
  }
  if (token) {
    sessionHeaders = {
      Authorization: `Bearer ${token}`,
    };
  }
  return {
    ...sessionHeaders,
    ...customHeaders,
  };
};

export const useRequest = (options = {}) => {
  const customHeader = or(options.headers, {});
  const headers = makeRequestHeaders(customHeader);
  // TODO: merge options and check onMount, headers, query
  const defaultOptions = {
    url: 'http://localhost:8080',
    baseUrl: 'http://localhost:8080',
    // headers: {
    //   authorization: 'Basic ZnJvbnRlbmQ6c2VjcmV0',
    // },
    // ...options,
    headers,
  };
  const request = useFetch(defaultOptions);
  return request;
};
