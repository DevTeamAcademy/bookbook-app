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
