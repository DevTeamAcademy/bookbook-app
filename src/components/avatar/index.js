import R from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { borderRadius } from 'styled-system';
// components
import { TextEllipsed } from '../text-ellipsed';
// helpers
import * as H from '../../helpers';
// ui
import { Flex } from '../../ui';
////////////////////////////////////////////////////////////////////////////////////////////////////////

const Image = styled.img`
  ${borderRadius};
`;
Image.PropTypes = { ...borderRadius.propTypes };

// TODO: check loginId and logic
const getBookerInitials = nickName =>
  R.compose(
    R.join(''),
    R.map(item => R.take(1, item)),
  )(nickName);

export const AvatarComponent = props => (
  <Flex
    mr={props.mr}
    cursor='pointer'
    alignItems='center'
    width={props.width}
    height={props.height}
    border={props.border}
    justifyContent='center'
    bg={props.initialsBackground}
    borderRadius={props.borderRadius}
    onClick={props.bookerAvatarAction}
  >
    {H.isNotNilAndNotEmpty(props.avatar) && (
      <Image
        src={props.avatar}
        width={props.width}
        height={props.height}
        borderRadius={props.borderRadius}
        alt={`${props.firstName} ${props.lastName}`}
      />
    )}
    {H.isNilOrEmpty(props.avatar) && (
      <TextEllipsed
        fontWeight='bold'
        textTransform='uppercase'
        color={props.initialsText}
        title={`${props.firstName} ${props.lastName}`}
      >
        {getBookerInitials([props.firstName, props.lastName])}
      </TextEllipsed>
    )}
  </Flex>
);

AvatarComponent.propTypes = {
  avatar: PropTypes.string,
  border: PropTypes.string,
  initialsText: PropTypes.string,
  borderRadius: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  initialsBackground: PropTypes.string,
  lastName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  bookerAvatarAction: PropTypes.func.isRequired,
};

AvatarComponent.displayName = 'AvatarComponent';
