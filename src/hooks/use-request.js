import useFetch from 'use-http';
// /////////////////////////////////////////////////////////////////////////////////////////////////

export const useRequest = (options = {}) => {
  // TODO: merge options and check onMount, headers, query
  const defaultOptions = {
    url: 'https://localhost:4000',
    baseUrl: 'https://localhost:4000',
    ...options,
  };
  const request = useFetch(defaultOptions);
  return request;
};
