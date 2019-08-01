import R from 'ramda';
import React, { useContext } from 'react';
// constants
import * as C from '../../constants';
// contexts
import { LocaleContext } from '../../contexts/locale';
// helpers
import * as H from '../../helpers';
// icons
import * as I from '../../icons';
//theme
import Theme from '../../theme';
// ui
import { Flex, Text } from '../../ui';
import { PageWrapper } from '../../ui/wrappers';
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
    height={70}
    alignItems='center'
    justifyContent='space-between'
    backgroundColor={Theme.colors.darkBlue}
    borderBottom='1px solid rgba(94, 92, 94, .65)'
    onClick={() => {
      props.changeLocale(props.localeName);
    }}
  >
    <Flex width='80%'>
      <Flex ml={20} alignItems='center'>
        {<props.icon />}
      </Flex>
      <Text
        ml={14}
        fontSize={[14, 18, 22]}
        color={H.ifElse(props.active, Theme.colors.white, Theme.colors.inactiveGrey)}
      >
        {props.originalLanguageName}
      </Text>
    </Flex>
    <Flex width='20%'>
      <Text fontSize={[11, 12, 14]} color={H.ifElse(props.active, Theme.colors.white, Theme.colors.inactiveGrey)}>
        {H.getLocale(props.translatedLanguageName)}
      </Text>
      <Text padding='0px 0px 0px 6px' display={H.ifElse(props.active, 'flex', 'none')}>
        <I.Tick />
      </Text>
    </Flex>
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

LanguagePage.propTypes = {};

LanguagePage.displayName = 'LanguagePage';
