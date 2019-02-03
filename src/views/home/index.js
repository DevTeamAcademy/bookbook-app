import React, { useContext } from 'react';
import PropTypes from 'prop-types';
// constants
import * as C from '../../constants';
// contexts
import { LocaleContext } from '../../contexts/locale';
// helpers
import { getLocaleItem } from '../../helpers';
// ui
import { Flex } from '../../ui';
// /////////////////////////////////////////////////////////////////////////////////////////////////

export const HomeList = props => {
  const { locale, changeLocale } = useContext(LocaleContext);
  return (
    <Flex data-testid={C.TEST_ID_HOME_LIST}>
      <p onClick={() => changeLocale('EN')}>changeLocale</p>
      <p>{getLocaleItem('home', locale, 'Home')}</p>
    </Flex>
  );
};

export default HomeList;

HomeList.propTypes = {};

HomeList.displayName = 'HomeList';
