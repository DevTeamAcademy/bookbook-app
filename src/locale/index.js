// constants
import * as C from '../constants';
// /////////////////////////////////////////////////////////////////////////////////////////////////

export const UA = {
  copyright: '2019 © Всі права захищено',
  privacyPolicy: 'Політика приватності',
  termsAndConditions: 'Умови використання',
  localeNames: {
    [C.LOCALE_NAME_PL]: 'Польська',
    [C.LOCALE_NAME_RU]: 'Російська',
    [C.LOCALE_NAME_UA]: 'Українська',
    [C.LOCALE_NAME_EN]: 'Англійська',
  },
  languages: [
    {
      value: 'English',
      localeName: C.LOCALE_NAME_EN,
    },
    {
      value: 'Українська',
      localeName: C.LOCALE_NAME_UA,
    },
    {
      value: 'Русский',
      localeName: C.LOCALE_NAME_RU,
    },
    {
      value: 'Polski',
      localeName: C.LOCALE_NAME_PL,
    },
  ],
  addItems: {
    book: 'Книжку',
    quote: 'Цитату',
    library: 'Бібліотеку',
  },
  headerNavLabels: {
    menu: 'Меню',
    search: 'Пошук',
    list: 'Домашня',
    quotes: 'Цитати',
    notify: 'Сповіщення',
    library: 'Бібліотека',
  },
  sidebarMenuLabels: {
    logout: 'Вийти',
    help: 'Допомога',
    language: 'Мова',
    share: 'Поділитись',
    about: 'Про Додаток',
    profile: 'Мій Профіль',
    settings: 'Налаштування',
  },
  labels: {
    book: 'Книга',
    login: 'Логін',
    email: 'Пошта',
    author: 'Автор',
    quote: 'Цитата',
    page: 'Сторінка',
    link: 'Посилання',
    firstName: "Ім'я",
    password: 'Пароль',
    scope: 'Видимість',
    description: 'Опис',
    public: 'Публічний',
    lastName: 'Прізвище',
    private: 'Приватний',
    category: 'Категорія',
    semiPublic: 'Напівприватний',
  },
  actions: {
    add: 'Додати',
    login: 'Увійти',
    send: 'Відправити',
    save: 'Зберегти',
    register: 'Зареєструватись',
    forgotPassword: 'Забули пароль?',
  },
  messages: {
    successLogin: 'Успішний Вхід!',
    successRegister: 'Успішна Реєстрація!',
    successSave: 'Ваші дані успішно збережено!',
  },
  fields: {
    search: 'Пошук...',
  },
  hints: {
    passwordRecovery: 'Введіть свою адресу електронної пошти, і ми надішлемо вам посилання для його скидання',
  },
  searchSwitchLabels: {
    [C.SEARCH_SWITCH_FIELDS.FIELD_BOOK]: 'Книжки',
    [C.SEARCH_SWITCH_FIELDS.FIELD_QUOTE]: 'Цитати',
    [C.SEARCH_SWITCH_FIELDS.FIELD_BOOKER]: 'Букери',
    [C.SEARCH_SWITCH_FIELDS.FIELD_AUTHOR]: 'Автори',
  },
};

const EN = {
  privacyPolicy: 'Privacy policy',
  copyright: '2019 © All rights reserved',
  termsAndConditions: 'Terms and conditions',
  localeNames: {
    [C.LOCALE_NAME_PL]: 'Polish',
    [C.LOCALE_NAME_RU]: 'Russian',
    [C.LOCALE_NAME_EN]: 'English',
    [C.LOCALE_NAME_UA]: 'Ukrainian',
  },
  languages: [
    {
      value: 'English',
      localeName: C.LOCALE_NAME_EN,
    },
    {
      value: 'Українська',
      localeName: C.LOCALE_NAME_UA,
    },
    {
      value: 'Русский',
      localeName: C.LOCALE_NAME_RU,
    },
    {
      value: 'Polski',
      localeName: C.LOCALE_NAME_PL,
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
    notify: 'Notify',
    quotes: 'Quotes',
    search: 'Search',
    library: 'Library',
  },
  sidebarMenuLabels: {
    help: 'Help',
    share: 'Share',
    about: 'About',
    logout: 'Logout',
    profile: 'Profile',
    language: 'Language',
    settings: 'Settings',
  },
  labels: {
    book: 'Book',
    page: 'Page',
    link: 'Link',
    quote: 'Quote',
    login: 'Login',
    email: 'Email',
    scope: 'Scope',
    author: 'Author',
    public: 'Public',
    private: 'Private',
    category: 'Category',
    password: 'Password',
    lastName: 'Last Name',
    firstName: 'First Name',
    semiPublic: 'Semi-Public',
    description: 'Description',
  },
  actions: {
    add: 'Add',
    save: 'Save',
    login: 'Login',
    register: 'Submit',
    send: 'Send',
    forgotPassword: 'Forgot password?',
  },
  messages: {
    successLogin: 'Success Login!',
    successRegister: 'Success Register!',
    successSave: 'The data was saved successfully!',
  },
  fields: {
    search: 'Search...',
  },
  hints: {
    passwordRecovery: 'Enter your email and we will send you a link for password recovery',
  },
  searchSwitchLabels: {
    [C.SEARCH_SWITCH_FIELDS.FIELD_BOOK]: 'Books',
    [C.SEARCH_SWITCH_FIELDS.FIELD_QUOTE]: 'Quotes',
    [C.SEARCH_SWITCH_FIELDS.FIELD_BOOKER]: 'Bookers',
    [C.SEARCH_SWITCH_FIELDS.FIELD_AUTHOR]: 'Authors',
  },
};

const RU = {
  privacyPolicy: 'Privacy policy',
  copyright: '2019 © All rights reserved',
  termsAndConditions: 'Terms and conditions',
  localeNames: {
    [C.LOCALE_NAME_RU]: 'Русский',
    [C.LOCALE_NAME_PL]: 'Польский',
    [C.LOCALE_NAME_UA]: 'Украинский',
    [C.LOCALE_NAME_EN]: 'Английский',
  },
  languages: [
    {
      value: 'English',
      localeName: C.LOCALE_NAME_EN,
    },
    {
      value: 'Українська',
      localeName: C.LOCALE_NAME_UA,
    },
    {
      value: 'Русский',
      localeName: C.LOCALE_NAME_RU,
    },
    {
      value: 'Polski',
      localeName: C.LOCALE_NAME_PL,
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
    quotes: 'Quotes',
    notify: 'Notify',
    search: 'Search',
    library: 'Library',
  },
  sidebarMenuLabels: {
    help: 'Help',
    about: 'About',
    share: 'Share',
    logout: 'Logout',
    profile: 'Profile',
    language: 'Language',
    settings: 'Settings',
  },
  labels: {
    book: 'Book',
    page: 'Page',
    link: 'Link',
    quote: 'Quote',
    login: 'Login',
    email: 'Email',
    scope: 'Scope',
    author: 'Author',
    public: 'Public',
    private: 'Private',
    category: 'Category',
    password: 'Password',
    lastName: 'Last Name',
    firstName: 'First Name',
    semiPublic: 'Semi-Public',
    description: 'Description',
  },
  actions: {
    add: 'Add',
    save: 'Save',
    login: 'Login',
    register: 'Submit',
    send: 'Send',
    forgotPassword: 'Forgot password?',
  },
  messages: {
    successLogin: 'Success Login!',
    successRegister: 'Success Register!',
    successSave: 'The data was saved successfully!',
  },
  fields: {
    search: 'Search...',
  },
  hints: {
    passwordRecovery: 'Enter your email and we will send you a link for password recovery',
  },
  searchSwitchLabels: {
    [C.SEARCH_SWITCH_FIELDS.FIELD_BOOK]: 'Books',
    [C.SEARCH_SWITCH_FIELDS.FIELD_QUOTE]: 'Quotes',
    [C.SEARCH_SWITCH_FIELDS.FIELD_BOOKER]: 'Bookers',
    [C.SEARCH_SWITCH_FIELDS.FIELD_AUTHOR]: 'Authors',
  },
};

const PL = {
  privacyPolicy: 'Privacy policy',
  copyright: '2019 © All rights reserved',
  termsAndConditions: 'Terms and conditions',
  localeNames: {
    [C.LOCALE_NAME_PL]: 'Polski',
    [C.LOCALE_NAME_RU]: 'Rosyjski',
    [C.LOCALE_NAME_UA]: 'Ukraiński',
    [C.LOCALE_NAME_EN]: 'Angielski',
  },
  languages: [
    {
      value: 'English',
      localeName: C.LOCALE_NAME_EN,
    },
    {
      value: 'Українська',
      localeName: C.LOCALE_NAME_UA,
    },
    {
      value: 'Русский',
      localeName: C.LOCALE_NAME_RU,
    },
    {
      value: 'Polski',
      localeName: C.LOCALE_NAME_PL,
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
    search: 'Search',
    quotes: 'Quotes',
    notify: 'Notify',
    library: 'Library',
  },
  sidebarMenuLabels: {
    help: 'Help',
    share: 'Share',
    about: 'About',
    logout: 'Logout',
    profile: 'Profile',
    language: 'Language',
    settings: 'Settings',
  },
  labels: {
    book: 'Book',
    page: 'Page',
    link: 'Link',
    quote: 'Quote',
    login: 'Login',
    email: 'Email',
    scope: 'Scope',
    author: 'Author',
    public: 'Public',
    private: 'Private',
    category: 'Category',
    password: 'Password',
    lastName: 'Last Name',
    firstName: 'First Name',
    semiPublic: 'Semi-Public',
    description: 'Description',
  },
  actions: {
    add: 'Add',
    save: 'Save',
    login: 'Login',
    register: 'Submit',
    send: 'Send',
    forgotPassword: 'Forgot password?',
  },
  messages: {
    successLogin: 'Success Login!',
    successRegister: 'Success Register!',
    successSave: 'The data was saved successfully!',
  },
  fields: {
    search: 'Search...',
  },
  hints: {
    passwordRecovery: 'Enter your email and we will send you a link for password recovery',
  },
  searchSwitchLabels: {
    [C.SEARCH_SWITCH_FIELDS.FIELD_BOOK]: 'Books',
    [C.SEARCH_SWITCH_FIELDS.FIELD_QUOTE]: 'Quotes',
    [C.SEARCH_SWITCH_FIELDS.FIELD_BOOKER]: 'Bookers',
    [C.SEARCH_SWITCH_FIELDS.FIELD_AUTHOR]: 'Authors',
  },
};

const locales = {
  [C.LOCALE_NAME_UA]: UA,
  [C.LOCALE_NAME_EN]: EN,
  [C.LOCALE_NAME_RU]: RU,
  [C.LOCALE_NAME_PL]: PL,
};

export default locales;
