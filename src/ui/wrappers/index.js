import styled from 'styled-components';
import { top, left, right, bottom } from 'styled-system';
// //////////////////////////////////////////////////////////////////////////////

export const AbsoluteWrapper = styled.div`
  ${top}
  ${left}
  ${right}
  ${bottom}
  position: absolute;
`;

AbsoluteWrapper.propTypes = {
  ...top.propTypes,
  ...left.propTypes,
  ...right.propTypes,
  ...bottom.propTypes,
};

AbsoluteWrapper.displayName = 'AbsoluteWrapper';

export const AuthPagesWrapper = styled.div`
  height: 100vh;
  background: url(${props => require('../../images/main-bg.png')});
`;

AuthPagesWrapper.displayName = 'AuthPagesWrapper';

// TODO: use color from Theme
export const PageWrapper = styled.div`
  height: 100vh;
  background-color: #1f2532;
`;
