import PropTypes from 'prop-types';
import styled from 'styled-components';
import { top, left, space, right, bottom, position } from 'styled-system';
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

// TODO: check bg from props
export const PageWrapper = styled.div`
  ${space}
  overflow: auto;
  height: calc(100vh - 40px);
  background-color: ${Theme.colors.darkBlue};
`;
PageWrapper.displayName = 'PageWrapper';
