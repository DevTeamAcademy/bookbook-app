import PropTypes from 'prop-types';
import React, { Suspense, useContext } from 'react';
// components
import HeaderNav from '../components/header-nav';
import SidebarMenu from '../components/sidebar-menu';
import { AddItemsList } from '../components/add-item';
// contexts
import { LocaleContext } from '../contexts/locale';
// global-state
import { useGlobalState } from '../global-state';
import { toggleActionList, toggleSidebarOpened } from '../global-state/dispatchers';
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

export const Layout = ({ children, location }) => {
  const { locale } = useContext(LocaleContext);
  const size = useWindowSize();
  const [isSidebarOpened] = useGlobalState('isSidebarOpened');
  const [isActionListOpened] = useGlobalState('isActionListOpened');
  return (
    <>
      <SidebarMenu
        locale={locale}
        location={location}
        sidebarOpened={isSidebarOpened}
        handleToggleSidebar={toggleSidebarOpened}
      />
      <HeaderNav
        size={size}
        locale={locale}
        location={location}
        sidebarOpened={isSidebarOpened}
        handleToggleSidebar={toggleSidebarOpened}
      />
      <Suspense fallback={<LoadingFallback />}>{children}</Suspense>
      <AddItemsList toggleActionList={toggleActionList} isActionListOpened={isActionListOpened} />
    </>
  );
};

export default Layout;

Layout.propTypes = {
  location: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

Layout.displayName = 'Layout';
