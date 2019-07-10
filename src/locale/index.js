// constants
import * as C from '../constants';
// /////////////////////////////////////////////////////////////////////////////////////////////////

const UA = {
  termsAndConditions: 'Умови використання',
  privacyPolicy: 'Політика приватності',
  copyright: '2019 © Всі права захищено',
  languages: [
    {
      localeName: C.LOCALE_NAME_EN,
      value: 'English',
    },
    {
      localeName: C.LOCALE_NAME_UA,
      value: 'Українська',
    },
    {
      localeName: C.LOCALE_NAME_RU,
      value: 'Русский',
    },
    {
      localeName: C.LOCALE_NAME_PL,
      value: 'Polski',
    },
  ],
  headerNavLabels: {
    menu: 'Меню',
    list: 'Домашня',
    library: 'Бібліотека',
    quotes: 'Цитати',
    notify: 'Сповіщення',
    search: 'Пошук',
  },
  labels: {
    firstName: "Ім'я",
    lastName: 'Прізвище',
    email: 'Пошта',
    login: 'Логін',
    password: 'Пароль',
  },
  actions: {
    register: 'Зареєструватись',
    login: 'Увійти',
  },
};

const EN = {
  termsAndConditions: 'Terms and conditions',
  privacyPolicy: 'Privacy policy',
  copyright: '2019 © All rights reserved',
  languages: [
    {
      localeName: C.LOCALE_NAME_EN,
      value: 'English',
    },
    {
      localeName: C.LOCALE_NAME_UA,
      value: 'Українська',
    },
    {
      localeName: C.LOCALE_NAME_RU,
      value: 'Русский',
    },
    {
      localeName: C.LOCALE_NAME_PL,
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
  labels: {
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    password: 'Password',
    login: 'Login',
  },
  actions: {
    register: 'Submit',
    login: 'Login',
  },
};

const RU = {
  termsAndConditions: 'Terms and conditions',
  privacyPolicy: 'Privacy policy',
  copyright: '2019 © All rights reserved',
  languages: [
    {
      localeName: C.LOCALE_NAME_EN,
      value: 'English',
    },
    {
      localeName: C.LOCALE_NAME_UA,
      value: 'Українська',
    },
    {
      localeName: C.LOCALE_NAME_RU,
      value: 'Русский',
    },
    {
      localeName: C.LOCALE_NAME_PL,
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
  labels: {
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    password: 'Password',
    login: 'Login',
  },
  actions: {
    register: 'Submit',
    login: 'Login',
  },
};

const PL = {
  termsAndConditions: 'Terms and conditions',
  privacyPolicy: 'Privacy policy',
  copyright: '2019 © All rights reserved',
  languages: [
    {
      localeName: C.LOCALE_NAME_EN,
      value: 'English',
    },
    {
      localeName: C.LOCALE_NAME_UA,
      value: 'Українська',
    },
    {
      localeName: C.LOCALE_NAME_RU,
      value: 'Русский',
    },
    {
      localeName: C.LOCALE_NAME_PL,
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
  labels: {
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    password: 'Password',
    login: 'Login',
  },
  actions: {
    register: 'Submit',
    login: 'Login',
  },
};

const locales = {
  [C.LOCALE_NAME_UA]: UA,
  [C.LOCALE_NAME_EN]: EN,
  [C.LOCALE_NAME_RU]: RU,
  [C.LOCALE_NAME_PL]: PL,
};

export default locales;
