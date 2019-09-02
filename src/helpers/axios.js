import qs from 'qs';
import R from 'ramda';
import Axios from 'axios';
// global
import * as H from './';
// /////////////////////////////////////////////////////////////////////////////////////////////////

// TODO: with env configs

const instance = Axios.create();

const port = 8080;
const domain = 'localhost';

export const makeRequestUrl = endpoint => {
  const protocol = H.ifElse(R.equals(domain, 'localhost'), 'http://', 'https://');
  return H.ifElse(
    R.equals(domain, 'localhost'),
    `${protocol}localhost:${port}/${endpoint}`,
    `${protocol}${domain}/${endpoint}`,
  );
};

export const makeRequestHeaders = customHeaders => {
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

export const createRequestConfig = (method, endpoint, options = {}, isUrlencoded) => {
  const config = {
    method,
    data: R.or(options.data, {}),
    params: R.or(options.params, {}),
    url: makeRequestUrl(endpoint),
    headers: makeRequestHeaders(R.or(options.headers, {})),
  };
  if (H.isNotNil(options.auth)) {
    config.auth = options.auth;
  }
  if (R.and(isUrlencoded, R.equals(method, 'post'))) {
    config.data = qs.stringify(options.data);
  }
  if (options.resType) {
    config.responseType = options.resType;
  }
  return instance(config);
};

export const sendRequest = (method, endpoint, options = {}, isUrlencoded) => {
  const config = createRequestConfig(method, endpoint, options, isUrlencoded);
  return instance(config);
};
