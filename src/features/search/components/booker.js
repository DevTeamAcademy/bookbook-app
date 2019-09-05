import React from 'react';
import PropTypes from 'prop-types';
// components
import { TextEllipsed, AvatarComponent } from '../../../components';
// helpers
import * as H from '../../../helpers';
// icons
import * as I from '../../../icons';
// theme
import Theme from '../../../theme';
// ui
import { Box, Flex } from '../../../ui';
////////////////////////////////////////////////////////////////////////////////////////////////////
// TODO: with proper routing and check using propTypes for all components

export const BookerInfo = props => (
  <Flex alignItems='center' width='calc(100% - 55px)'>
    <AvatarComponent
      mr='13px'
      width={50}
      height={50}
      borderRadius='50%'
      lastName={props.lastName}
      firstName={props.firstName}
      initialsText={Theme.avatar.initialsText}
      initialsBackground={Theme.avatar.initialsBackground}
      bookerAvatarAction={() => console.log('go to profile page')}
    />
    <Box width='calc(100% - 63px)'>
      <TextEllipsed fontSize='14px' color={Theme.booker.nickNameText} onClick={props.handleGoToBookerProfile}>
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
                overflow='hidden'
                title={description}
                withEllipsis={true}
                whiteSpace='nowrap'
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

BookerInfo.propsTypes = {
  descriptions: PropTypes.array,
  handleGoToBookerProfile: PropTypes.func.isRequired,
};

export const AddBookerComponent = props => (
  <I.IconWrapper onClick={props.handleAddBooker}>
    {H.isTrue(props.addedBooker) && <I.AddedBooker width={30} height={30} color={Theme.booker.addedBookerIcon} />}
    {H.isFalse(props.addedBooker) && <I.AddBooker width={30} height={30} color={Theme.booker.addBookerIcon} />}
  </I.IconWrapper>
);
AddBookerComponent.propTypes = {
  addedBooker: PropTypes.bool.isRequired,
  handleAddBooker: PropTypes.func.isRequired,
};

export const BookerComponent = props => (
  <Flex my='15px' width='100%' alignItems='center' justifyContent='space-between'>
    <BookerInfo {...props} />
    <AddBookerComponent addedBooker={false} handleAddBooker={() => console.log('Add Booker')} />
  </Flex>
);
BookerComponent.propTypes = {
  descriptions: PropTypes.array,
  lastName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
};

export default BookerComponent;
BookerComponent.displayName = 'BookerComponent';
