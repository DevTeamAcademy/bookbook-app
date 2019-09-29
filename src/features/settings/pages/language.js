import R from 'ramda';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
// constants
import * as C from '../../../constants';
// contexts
import { LocaleContext } from '../../../contexts/locale';
// helpers
import * as H from '../../../helpers';
// icons
import * as I from '../../../icons';
//theme
import Theme from '../../../theme';
// ui
import { Box, Flex, Text, PageWrapper } from '../../../ui';
// /////////////////////////////////////////////////////////////////////////////////////////////////

const langs = [
  {
    icon: I.UkrFlag,
    localeName: C.LOCALE_NAME_UA,
    originalLanguageName: C.ORIGINAL_LANGUAGE_NAME_UA,
    translatedLanguageName: `localeNames.${C.LOCALE_NAME_UA}`,
  },
  {
    icon: I.UsaFlag,
    localeName: C.LOCALE_NAME_EN,
    originalLanguageName: C.ORIGINAL_LANGUAGE_NAME_EN,
    translatedLanguageName: `localeNames.${C.LOCALE_NAME_EN}`,
  },
  {
    icon: I.PolFlag,
    localeName: C.LOCALE_NAME_PL,
    originalLanguageName: C.ORIGINAL_LANGUAGE_NAME_PL,
    translatedLanguageName: `localeNames.${C.LOCALE_NAME_PL}`,
  },
  {
    icon: I.RusFlag,
    localeName: C.LOCALE_NAME_RU,
    originalLanguageName: C.ORIGINAL_LANGUAGE_NAME_RU,
    translatedLanguageName: `localeNames.${C.LOCALE_NAME_RU}`,
  },
];

const isActive = localeName => R.equals(localeName, H.getLocaleName());

const LangItem = props => (
  <Flex
    p={15}
    height={70}
    alignItems='center'
    justifyContent='space-between'
    backgroundColor={Theme.colors.darkBlue}
    borderBottom={Theme.borders.itemBorderBottom}
    onClick={() => {
      props.changeLocale(props.localeName);
    }}
  >
    <Flex>
      <I.IconWrapper opacity='1'>{<props.icon width={30} height={21} />}</I.IconWrapper>
      <Text
        ml={15}
        fontSize={[14, 18, 22]}
        color={H.ifElse(props.active, Theme.colors.white, Theme.colors.inactiveGrey)}
      >
        {props.originalLanguageName}
      </Text>
    </Flex>
    <Box>
      <Text fontSize={[11, 12, 14]} color={H.ifElse(props.active, Theme.colors.white, Theme.colors.inactiveGrey)}>
        {H.getLocale(props.translatedLanguageName)}
      </Text>
      {props.active && (
        <I.IconWrapper pl={10} opacity='1'>
          <I.Tick width={14} height={11} color={Theme.colors.white} />
        </I.IconWrapper>
      )}
    </Box>
  </Flex>
);

export const LanguagePage = () => {
  const { changeLocale } = useContext(LocaleContext);
  return (
    <PageWrapper>
      <Flex flexDirection='column'>
        {langs.map((item, index) => (
          <LangItem
            key={index}
            icon={item.icon}
            changeLocale={changeLocale}
            localeName={item.localeName}
            active={isActive(item.localeName)}
            originalLanguageName={item.originalLanguageName}
            translatedLanguageName={item.translatedLanguageName}
          />
        ))}
      </Flex>
    </PageWrapper>
  );
};

export default LanguagePage;

LanguagePage.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
  location: PropTypes.object,
};

LanguagePage.displayName = 'LanguagePage';
