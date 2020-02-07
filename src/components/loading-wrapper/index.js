import React from 'react';
import PropTypes from 'prop-types';
import Loading from 'react-loading-bar';
// theme
import Theme from '../../theme';
// //////////////////////////////////////////////////

export const LoadingWrapper = ({ loading, children }) => (
  <div>
    <Loading show={loading} color={Theme.colors.red} />
    {children}
  </div>
);

export default LoadingWrapper;

LoadingWrapper.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

LoadingWrapper.displayName = 'LoadingWrapper';
