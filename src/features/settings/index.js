// TODO: settings list here (with 2 options for now - languages and push notifications)
import * as R from 'ramda';
import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
// components
import Switch from '../../components/form-fields/components/switch';
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
        name: 'quotes',
        label: 'quotes',
      },
    ],
  },
  {
    title: 'settings.notifications',
    fieldSettings: [
      {
        name: 'notifications',
        label: 'settings.notifications',
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
        height={45}
        fontWeight='bold'
        alignItems='center'
        color={Theme.colors.white}
        justifyContent='space-between'
        backgroundColor={Theme.colors.middleBlue}
      >
        {H.getLocale(props.item.title)}
      </Flex>
      {R.pathOr([], ['fieldSettings'], props.item).map((item, index) => (
        <Flex
          p={15}
          key={index}
          height={45}
          fontWeight='bold'
          alignItems='center'
          justifyContent='space-between'
          color={Theme.colors.inactiveGrey}
          backgroundColor={Theme.colors.darkBlue}
        >
          <Box>{H.getLocale(item.label)}</Box>
          <Switch
            checked={R.path([item.label], props.values)}
            handleChange={value => props.setValues(R.assoc(item.label, value, props.values))}
          />
        </Flex>
      ))}
    </Box>
  );
};

export const SettingsPage = props => {
  const [values, setValues] = useState({ notifications: false, quotes: false });
  const { locale } = useContext(LocaleContext);
  return (
    <PageWrapper>
      <Flex flexDirection='column'>
        {settingsSections.map((item, index) => (
          <SettingsSection key={index} item={item} values={values} setValues={setValues} />
        ))}
      </Flex>
    </PageWrapper>
  );
};

export default SettingsPage;

SettingsPage.propTypes = {};

SettingsPage.displayName = 'SettingsPage';
