// TODO: settings list here (with 2 options for now - languages and push notifications)
import R from 'ramda';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, { useContext, useState } from 'react';
// components
import Switch from '../../components/form-fields/components/switch';
// contexts
import { LocaleContext } from '../../contexts/locale';
// constants
import * as C from '../../constants';
// helpers
import * as H from '../../helpers';
// icons
import * as I from '../../icons';
// theme
import Theme from '../../theme';
// ui
import { Box, Flex, Text, PageWrapper } from '../../ui';
// //////////////////////////////////////////////////

const settingsSections = [
  {
    route: C.ROUTE_HOME_PAGE_SETTINGS_PAGE,
    title: 'settings.homeList',
  },
  {
    route: C.ROUTE_NOTIFICATIONS_SETTINGS_PAGE,
    title: 'settings.notifications',
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
      <Link to={props.item.route}>
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
          <I.IconWrapper pl={10} opacity='1'>
            <I.Arrow width={14} height={11} color={Theme.colors.white} />
          </I.IconWrapper>
        </Flex>
      </Link>
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
