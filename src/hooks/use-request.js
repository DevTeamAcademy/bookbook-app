import useFetch from 'use-http';
// /////////////////////////////////////////////////////////////////////////////////////////////////

export const useRequest = (options = {}) => {
  // TODO: merge options and check onMount, headers, query
  const defaultOptions = {
    url: 'http://localhost:8080',
    baseUrl: 'http://localhost:8080',
    // headers: {
    //   authorization: 'Basic ZnJvbnRlbmQ6c2VjcmV0',
    // },
    ...options,
  };
  const request = useFetch(defaultOptions);
  return request;
};
