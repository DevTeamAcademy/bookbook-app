// constants
import { LOCALE_NAME_EN, LOCALE_NAME_UA, LOCALE_NAME_RU, LOCALE_NAME_PL } from '../constants';
// /////////////////////////////////////////////////////////////////////////////////////////////////

const UA = {
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
  headerNavLabels: {
    menu: 'Meню',
    list: 'Домашня',
    library: 'Бібліотека',
    quotes: 'Цитати',
    notify: 'Сповіщення',
    search: 'Пошук',
  },
};

const EN = {
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
  headerNavLabels: {
    menu: 'Menu',
    list: 'Home',
    library: 'Library',
    quotes: 'Quotes',
    notify: 'Notify',
    search: 'Search',
  },
};

const RU = {
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
  headerNavLabels: {
    menu: 'Menu',
    list: 'Home',
    library: 'Library',
    quotes: 'Quotes',
    notify: 'Notify',
    search: 'Search',
  },
};

const PL = {
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
  headerNavLabels: {
    menu: 'Menu',
    list: 'Home',
    library: 'Library',
    quotes: 'Quotes',
    notify: 'Notify',
    search: 'Search',
  },
};

const locales = {
  [LOCALE_NAME_UA]: UA,
  [LOCALE_NAME_EN]: EN,
  [LOCALE_NAME_RU]: RU,
  [LOCALE_NAME_PL]: PL,
};

export default locales;
