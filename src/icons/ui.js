import React from 'react';
import PropTypes from 'prop-types';
import posed from 'react-pose';
import { or } from 'ramda';
import styled from 'styled-components';
import { color, space, width, height, border, display, opacity, boxShadow } from 'styled-system';
// ////////////////////////////////////////////////////////////////////////////////////////////////////

// TODO: check types from styled-system

const iconWrapperPropTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  opacity: PropTypes.number,
};

const defaultIconWrapperProps = {
  opacity: 0.8,
  cursor: 'pointer',
  display: 'inline-block',
};

export const IconWrapper = styled.div`
  ${color}
  ${space}
  ${width}
  ${height}
  ${border}
  ${display}
  ${opacity}
  ${boxShadow}
  cursor: ${({ cursor }) => or(cursor, 'initial')}
  &:hover {
    opacity: 1;
  }
`;

IconWrapper.propTypes = iconWrapperPropTypes;
IconWrapper.defaultProps = defaultIconWrapperProps;

// export const IconWrapper = posed(styled.div`
//   ${color}
//   ${space}
//   ${width}
//   ${height}
//   ${border}
//   ${display}
//   ${opacity}
//   ${boxShadow}
// `)({
//   hovered: { opacity: 1 },
//   unHovered: { opacity: 0.8 }
// });

// export const BarNavigationItemWrapper = posed(styled('div')`
// position: relative;

// &::before {
//   top: 0px;
//   left: -15px;
//   content: '>';
//   font-weight: 700;
//   position: absolute;
//   opacity: ${({ active }) => ifElse(active, 1, 0)};
//   color: ${themeGet('colors.mainOrange', 'white')};
// }
// `)({
// opened: { opacity: 1 },
// closed: { opacity: 0 },
// });

{
  /* <HeadSectionSecondTextWrapper
mb={80}
opacity={0}
pose='visible'
textAlign='center'
initialPose='hidden'
width={[230, 300, 400]}
fontSize={[18, 24, 32]}
color={themeGet('colors.mainOrange', 'white')(props)}
>
{H.getLocaleItem(['mainPage', 'mainSectionSecondText'], props.locale)}
</HeadSectionSecondTextWrapper> */
}
