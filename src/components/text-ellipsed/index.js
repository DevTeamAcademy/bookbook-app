import React from 'react';
import PropTypes from 'prop-types';
import R from 'ramda';
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
  fontWeight,
  borderLeft,
  borderColor,
  borderRight,
  borderBottom,
  borderRadius,
} from 'styled-system';
// global
import * as H from '../../helpers';
// /////////////////////////////////////////////////////////////////////////////////////////////////

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
  ${borderColor}
  ${borderRight}
  ${borderBottom}
  ${borderRadius}

  cursor: ${({ cursor }: Object) => R.or(cursor, 'initial')};
  overflow: ${({ overflow }: Object) => R.or(overflow, 'hidden')};
  word-break: ${({ wordBreak }: Object) => R.or(wordBreak, 'unset')};
  white-space: ${({ whiteSpace }: Object) => R.or(whiteSpace, 'nowrap')};
  text-transform: ${({ textTransform }: Object) => R.or(textTransform, 'unset')};
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
  ...fontWeight.propTypes,
  ...boxShadow.propTypes,
  ...borderLeft.propTypes,
  ...borderColor.propTypes,
  ...borderRight.propTypes,
  ...borderBottom.propTypes,
  ...borderRadius.propTypes,
  title: PropTypes.string,
  cursor: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

TextEllipsed.displayName = 'TextEllipsed';
