import React, { useState, Suspense } from 'react';
import { not } from 'ramda';
// components
import HeaderNav from '../components/header-nav';
////////////////////////////////////////////////////////////////////////////////////////////////////

// TODO: with test and full ui and bar nav

function LoadingFallback({ error, pastDelay }) {
  if (error) {
    // our ErrorBoundary will catch this
    throw error;
  }
  return <p>Page Loading...</p>;
}

function Layout({ children, location }) {
  const [activeMenu, setActiveMenu] = useState(false);
  function handleToggleMenu() {
    alert('hi');
    return setActiveMenu(not(activeMenu));
  }
  return (
    <>
      <div onClick={handleToggleMenu}>click</div>
      <HeaderNav location={location} activeMenu={activeMenu} handleToggleMenu={handleToggleMenu} />
      <Suspense fallback={LoadingFallback}>{children}</Suspense>
    </>
  );
}

export default Layout;
