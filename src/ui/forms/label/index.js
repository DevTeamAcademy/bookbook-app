import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, space, width, fontSize, fontWeight } from 'styled-system';
// helpers
import * as H from '../../../helpers';
// //////////////////////////////////////////////////////////////////////////////

export const Label = styled.label`
  ${color}
  ${space}
  ${width}
  ${fontSize}
  ${fontWeight}
  &::after {
    color: ${({ requiredStarColor }: Object) => requiredStarColor};
    content: ${({ required }: Object) => H.ifElse(required, '*', '')};
  }
`;

Label.propTypes = {
  ...color.propTypes,
  ...space.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  requiredStarColor: PropTypes.string,
};

Label.displayName = 'Label';
