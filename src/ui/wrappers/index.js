import PropTypes from 'prop-types';
import styled from 'styled-components';
import { top, left, right, bottom, position } from 'styled-system';
// theme
import Theme from '../../theme';
// ui
import { Box } from '../box';
import { animation } from '../animations';
// //////////////////////////////////////////////////////////////////////////////

const defaultPositionedBoxPropTypes = {
  ...top.propTypes,
  ...left.propTypes,
  ...right.propTypes,
  ...bottom.propTypes,
  ...position.propTypes,
};

export const PositionedBox = styled(Box)`
  ${top}
  ${left}
  ${right}
  ${bottom}
  ${position}
`;

PositionedBox.propTypes = defaultPositionedBoxPropTypes;
PositionedBox.displayName = 'PositionedBox';

export const AnimatedPositionBox = styled(PositionedBox)`
  ${animation}
`;

AnimatedPositionBox.propTypes = {
  ...defaultPositionedBoxPropTypes,
  animationName: PropTypes.string.isRequired,
  animationProps: PropTypes.string.isRequired,
};
AnimatedPositionBox.displayName = 'AnimatedPositionBox';

export const AuthPagesWrapper = styled.div`
  height: 100vh;
  background: url(${props => require('../../images/main-bg.png')});
`;
AuthPagesWrapper.displayName = 'AuthPagesWrapper';

export const PageWrapper = styled.div`
  height: 100vh;
  background-color: ${Theme.colors.darkBlue};
`;
PageWrapper.displayName = 'PageWrapper';
