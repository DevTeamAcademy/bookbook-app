// TODO: settings list here (with 2 options for now - languages and push notifications)
import * as R from 'ramda';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
// components
import Switch from '../../../components/form-fields/components/switch';
// contexts
import { LocaleContext } from '../../../contexts/locale';
// helpers
import * as H from '../../../helpers';
//theme
import Theme from '../../../theme';
// ui
import { Box, Flex, Text, PageWrapper } from '../../../ui';
// /////////////////////////////////////////////////////////////////////////////////////////////////

const settingsSections = {
  title: 'settings.notifications',
  fieldSettings: [
    {
      name: 'bookersActivity',
      label: 'settings.bookersActivity',
    },
    {
      name: 'quotesActivity',
      label: 'settings.quotesActivity',
    },
    {
      name: 'responseActivity',
      label: 'settings.responseActivity',
    },
    {
      name: 'booksActivity',
      label: 'settings.booksActivity',
    },
  ],
};

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
      <Formik
        onSubmit={values => console.log(values)}
        initialValues={R.map(() => false, R.indexBy(R.prop('name'), props.item.fieldSettings))}
        render={formProps => (
          <Box>
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
                  name={item.name}
                  setFieldValue={formProps.setFieldValue}
                  value={R.path([item.name], formProps.values)}
                  checked={R.path([item.name], formProps.values)}
                />
              </Flex>
            ))}
          </Box>
        )}
      />
    </Box>
  );
};

export const NotificationsSettingsPage = props => {
  // const [values, setValues] = useState({ notifications: false, quotes: false });
  const { locale } = useContext(LocaleContext);
  return (
    <PageWrapper>
      <Flex flexDirection='column'>
        <SettingsSection item={settingsSections} />
      </Flex>
    </PageWrapper>
  );
};

export default NotificationsSettingsPage;

NotificationsSettingsPage.propTypes = {};

NotificationsSettingsPage.displayName = 'NotificationsSettingsPage';
