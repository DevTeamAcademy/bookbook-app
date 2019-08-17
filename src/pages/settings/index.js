import * as R from 'ramda';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
// contexts
import { LocaleContext } from '../../contexts/locale';
// helpers
import * as H from '../../helpers';
//theme
import Theme from '../../theme';
// ui
import { Box, Flex, Text, PageWrapper } from '../../ui';
// /////////////////////////////////////////////////////////////////////////////////////////////////

const settingsSections = [
  {
    title: 'settings.homeList',
    fieldSettings: [
      {
        label: 'quotes',
      },
    ],
  },
  {
    title: 'settings.notifications',
    fieldSettings: [
      {
        label: 'quotes',
      },
    ],
  },
];

const fieldItem = item => {
  H.getLocale(item.label);
};

const SettingsSection = props => {
  return (
    <Box
      alignItems='center'
      flexDirection='column'
      justifyContent='space-between'
      backgroundColor={Theme.colors.darkBlue}
      borderBottom={Theme.borders.itemBorderBottom}
    >
      <Flex
        p={15}
        height={70}
        alignItems='center'
        justifyContent='space-between'
        backgroundColor={Theme.colors.darkBlue}
        borderBottom={Theme.borders.itemBorderBottom}
      >
        {H.getLocale(props.item.title)}
      </Flex>
      {R.pathOr([], ['fieldSettings'], props.item).map((item, index) => (
        <Flex
          p={15}
          key={index}
          height={70}
          alignItems='center'
          justifyContent='space-between'
          backgroundColor={Theme.colors.darkBlue}
          borderBottom={Theme.borders.itemBorderBottom}
        >
          {H.getLocale(item.label)}
        </Flex>
      ))}
    </Box>
  );
};

export const SettingsPage = props => {
  const { locale } = useContext(LocaleContext);
  return (
    <PageWrapper>
      <Flex flexDirection='column'>
        {settingsSections.map((item, index) => (
          <SettingsSection key={index} item={item} />
        ))}
      </Flex>
    </PageWrapper>
  );
};

export default SettingsPage;

SettingsPage.propTypes = {};

SettingsPage.displayName = 'SettingsPage';
