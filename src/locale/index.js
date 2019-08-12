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
  addItems: {
    book: 'Книжку',
    quote: 'Цитату',
    library: 'Бібліотеку',
  },
  headerNavLabels: {
    menu: 'Меню',
    list: 'Домашня',
    library: 'Бібліотека',
    quotes: 'Цитати',
    notify: 'Сповіщення',
    search: 'Пошук',
  },
  sidebarMenuLabels: {
    profile: 'Мій Профіль',
    share: 'Поділитись',
    help: 'Допомога',
    about: 'Про Додаток',
    language: 'Мова',
    settings: 'Налаштування',
    logout: 'Вийти',
  },
  labels: {
    firstName: "Ім'я",
    lastName: 'Прізвище',
    email: 'Пошта',
    login: 'Логін',
    password: 'Пароль',
  },
  actions: {
    add: 'Додати',
    login: 'Увійти',
    register: 'Зареєструватись',
  },
  messages: {
    successLogin: 'Успішний Вхід!',
    successRegister: 'Успішна Реєстрація!',
  },
  fields: {
    search: 'Пошук...',
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
  addItems: {
    book: 'Book',
    quote: 'Quote',
    library: 'Library',
  },
  headerNavLabels: {
    menu: 'Menu',
    list: 'Home',
    library: 'Library',
    quotes: 'Quotes',
    notify: 'Notify',
    search: 'Search',
  },
  sidebarMenuLabels: {
    profile: 'Profile',
    share: 'Share',
    help: 'Help',
    about: 'About',
    language: 'Language',
    settings: 'Settings',
    logout: 'Logout',
  },
  labels: {
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    password: 'Password',
    login: 'Login',
  },
  actions: {
    add: 'Add',
    login: 'Login',
    register: 'Submit',
  },
  messages: {
    successLogin: 'Success Login!',
    successRegister: 'Success Register!',
  },
  fields: {
    search: 'Search...',
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
  addItems: {
    book: 'Book',
    quote: 'Quote',
    library: 'Library',
  },
  headerNavLabels: {
    menu: 'Menu',
    list: 'Home',
    library: 'Library',
    quotes: 'Quotes',
    notify: 'Notify',
    search: 'Search',
  },
  sidebarMenuLabels: {
    profile: 'Profile',
    share: 'Share',
    help: 'Help',
    about: 'About',
    language: 'Language',
    settings: 'Settings',
    logout: 'Logout',
  },
  labels: {
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    password: 'Password',
    login: 'Login',
  },
  actions: {
    add: 'Add',
    login: 'Login',
    register: 'Submit',
  },
  messages: {
    successLogin: 'Success Login!',
    successRegister: 'Success Register!',
  },
  fields: {
    search: 'Search...',
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
  addItems: {
    book: 'Book',
    quote: 'Quote',
    library: 'Library',
  },
  headerNavLabels: {
    menu: 'Menu',
    list: 'Home',
    library: 'Library',
    quotes: 'Quotes',
    notify: 'Notify',
    search: 'Search',
  },
  sidebarMenuLabels: {
    profile: 'Profile',
    share: 'Share',
    help: 'Help',
    about: 'About',
    language: 'Language',
    settings: 'Settings',
    logout: 'Logout',
  },
  labels: {
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    password: 'Password',
    login: 'Login',
  },
  actions: {
    add: 'Add',
    login: 'Login',
    register: 'Submit',
  },
  messages: {
    successLogin: 'Success Login!',
    successRegister: 'Success Register!',
  },
  fields: {
    search: 'Search...',
  },
};

const locales = {
  [C.LOCALE_NAME_UA]: UA,
  [C.LOCALE_NAME_EN]: EN,
  [C.LOCALE_NAME_RU]: RU,
  [C.LOCALE_NAME_PL]: PL,
};

export default locales;
