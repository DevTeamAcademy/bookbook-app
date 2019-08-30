import R from 'ramda';
import React, { useState } from 'react';
// components
import { TextEllipsed } from '../../../components';
// helpers
import * as H from '../../../helpers';
// icons
import * as I from '../../../icons';
// theme
import Theme from '../../../theme';
// ui
import { Box, Flex } from '../../../ui';
////////////////////////////////////////////////////////////////////////////////////////////////////

export const BookerInfo = props => (
  <Flex alignItems='center' width='calc(100% - 55px)'>
    {/* TODO: with img */}
    <Box mr='13px' bg='black' width='50px' height='50px' borderRadius='50%' />
    <Box>
      <TextEllipsed fontSize='14px' color={Theme.booker.nickNameText}>
        {props.nickName}
      </TextEllipsed>
      <Box mt='7px'>
        {H.isNotNilAndNotEmpty(props.descriptions) &&
          H.mapIndexed(
            (description, index) => (
              <TextEllipsed
                key={index}
                width='100%'
                fontSize='11px'
                lineHeight='20px'
                title={description}
                color={Theme.booker.descriptionText}
              >
                {description}
              </TextEllipsed>
            ),
            props.descriptions,
          )}
      </Box>
    </Box>
  </Flex>
);

export const AddBookerComponent = props => {
  const [addedBooker, setAddedBooker] = useState(false);
  return (
    <I.IconWrapper>
      <I.AddBooker width={30} height={30} color={Theme.booker.addBookerIcon} />
    </I.IconWrapper>
  );
};

export const BookerComponent = props => (
  <Flex my='15px' width='100%' alignItems='center' justifyContent='space-between'>
    <BookerInfo {...props} />
    <AddBookerComponent />
  </Flex>
);

export default BookerComponent;
BookerComponent.displayName = 'BookerComponent';
