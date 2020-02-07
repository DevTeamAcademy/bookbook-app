import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  color,
  space,
  width,
  border,
  display,
  fontSize,
  maxWidth,
  minWidth,
  maxHeight,
  minHeight,
  textAlign,
  boxShadow,
  background,
  fontWeight,
  borderLeft,
  lineHeight,
  borderColor,
  borderRight,
  borderBottom,
  borderRadius,
} from 'styled-system';
// global
import * as H from '../../helpers';
// //////////////////////////////////////////////////

export const Text = styled.div`
  ${color}
  ${space}
  ${width}
  ${border}
  ${display}
  ${fontSize}
  ${maxWidth}
  ${minWidth}
  ${maxHeight}
  ${minHeight}
  ${textAlign}
  ${boxShadow}
  ${fontWeight}
  ${borderLeft}
  ${background}
  ${lineHeight}
  ${borderColor}
  ${borderRight}
  ${borderBottom}
  ${borderRadius}
  cursor: ${({ cursor }: Object) => cursor};
  overflow: ${({ overflow }: Object) => overflow};
  word-break: ${({ wordBreak }: Object) => wordBreak};
  white-space: ${({ whiteSpace }: Object) => whiteSpace};
  text-transform: ${({ textTransform }: Object) => textTransform};
  text-overflow: ${({ withEllipsis }: Object) => H.ifElse(H.isTrue(withEllipsis), 'ellipsis', 'clip')};
`;

export const TextEllipsed = props => {
  const { title, children } = props;
  if (H.isNotNil(title)) {
    return (
      <Text {...props} title={title}>
        {children}
      </Text>
    );
  }
  return <Text {...props}>{children}</Text>;
};

export default TextEllipsed;

TextEllipsed.propTypes = {
  ...color.propTypes,
  ...space.propTypes,
  ...width.propTypes,
  ...border.propTypes,
  ...display.propTypes,
  ...fontSize.propTypes,
  ...minWidth.propTypes,
  ...minWidth.propTypes,
  ...maxHeight.propTypes,
  ...minHeight.propTypes,
  ...textAlign.propTypes,
  ...boxShadow.propTypes,
  ...fontWeight.propTypes,
  ...background.propTypes,
  ...borderLeft.propTypes,
  ...lineHeight.propTypes,
  ...borderColor.propTypes,
  ...borderRight.propTypes,
  ...borderBottom.propTypes,
  ...borderRadius.propTypes,
  title: PropTypes.string,
  cursor: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

TextEllipsed.displayName = 'TextEllipsed';
