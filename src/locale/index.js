// constants
import { LOCALE_NAME_EN, LOCALE_NAME_UA, LOCALE_NAME_RU, LOCALE_NAME_PL } from '../constants';
// /////////////////////////////////////////////////////////////////////////////////////////////////

const UA = {
  home: 'домашня',
  aboutUs: 'про нас',
  contacts: 'контакти',
  termsAndConditions: 'умови використання',
  privacyPolicy: 'політика приватності',
  copyright: '2018 © Всі права захищено',
  languages: [
    {
      localeName: LOCALE_NAME_EN,
      value: 'English',
    },
    {
      localeName: LOCALE_NAME_UA,
      value: 'Українська',
    },
    {
      localeName: LOCALE_NAME_RU,
      value: 'Русский',
    },
    {
      localeName: LOCALE_NAME_PL,
      value: 'Polski',
    },
  ],
};

const EN = {
  home: 'home',
  aboutUs: 'about us',
  contacts: 'contacts',
  termsAndConditions: 'terms and conditions',
  privacyPolicy: 'privacy policy',
  copyright: '2018 © All rights reserved',
  languages: [
    {
      localeName: LOCALE_NAME_EN,
      value: 'English',
    },
    {
      localeName: LOCALE_NAME_UA,
      value: 'Українська',
    },
    {
      localeName: LOCALE_NAME_RU,
      value: 'Русский',
    },
    {
      localeName: LOCALE_NAME_PL,
      value: 'Polski',
    },
  ],
};

const RU = {
  home: 'home',
  aboutUs: 'about us',
  contacts: 'contacts',
  termsAndConditions: 'terms and conditions',
  privacyPolicy: 'privacy policy',
  copyright: '2018 © All rights reserved',
  languages: [
    {
      localeName: LOCALE_NAME_EN,
      value: 'English',
    },
    {
      localeName: LOCALE_NAME_UA,
      value: 'Українська',
    },
    {
      localeName: LOCALE_NAME_RU,
      value: 'Русский',
    },
    {
      localeName: LOCALE_NAME_PL,
      value: 'Polski',
    },
  ],
};

const PL = {
  home: 'home',
  aboutUs: 'about us',
  contacts: 'contacts',
  termsAndConditions: 'terms and conditions',
  privacyPolicy: 'privacy policy',
  copyright: '2018 © All rights reserved',
  languages: [
    {
      localeName: LOCALE_NAME_EN,
      value: 'English',
    },
    {
      localeName: LOCALE_NAME_UA,
      value: 'Українська',
    },
    {
      localeName: LOCALE_NAME_RU,
      value: 'Русский',
    },
    {
      localeName: LOCALE_NAME_PL,
      value: 'Polski',
    },
  ],
};

// TODO: with all locale and translations
const locales = {
  [LOCALE_NAME_UA]: UA,
  [LOCALE_NAME_EN]: EN,
  [LOCALE_NAME_RU]: RU,
  [LOCALE_NAME_PL]: PL,
};

export default locales;
