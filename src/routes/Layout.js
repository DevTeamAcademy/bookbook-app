import PropTypes from 'prop-types';
import React, { Suspense, useContext } from 'react';
// components
import HeaderNav from '../components/header-nav';
// contexts
import { LocaleContext } from '../contexts/locale';
// global-state
import { dispatch, useGlobalState } from '../global-state';
import { GLOBAL_TOGGLE_SIDEBAR } from '../global-state/action-types';
// hooks
import { useWindowSize } from '../hooks';
////////////////////////////////////////////////////////////////////////////////////////////////////

// TODO: with full ui
const LoadingFallback = ({ error }) => {
  if (error) {
    // our ErrorBoundary will catch this
    throw error;
  }
  return <p>Page Loading...</p>;
};

const toggleSidebarOpened = () => dispatch({ type: GLOBAL_TOGGLE_SIDEBAR });

export const Layout = ({ children, location }) => {
  const { locale } = useContext(LocaleContext);
  const size = useWindowSize();
  const [isSidebarOpened] = useGlobalState('isSidebarOpened');
  return (
    <>
      <HeaderNav
        size={size}
        locale={locale}
        location={location}
        activeMenu={isSidebarOpened}
        handleToggleMenu={toggleSidebarOpened}
      />
      <Suspense fallback={<LoadingFallback />}>{children}</Suspense>
    </>
  );
};

export default Layout;

Layout.propTypes = {
  location: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

Layout.displayName = 'Layout';
