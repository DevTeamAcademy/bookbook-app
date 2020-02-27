// NOTE: add all default styles props here (colors, shadows, borders, spaces, sizes etc.)

const colors = {
  red: 'red', // TODO: check main red color
  grey: '#888181',
  light: '#f9f9f9',
  white: '#ffffff',
  black: '#000000',
  bunting: '#283042',
  licorice: '#353b46',
  darkBlue: '#1f2532',
  darkGrey: '#363135',
  mainBlue: '#2c7bda',
  lightGrey: '#615d60',
  paleOlive: '#e6dda6',
  lightBlue: '#6fa6d6',
  middleBlue: '#333b4a',
  middleGrey: '#9D8C70',
  paleYellow: '#fff8f0',
  inactiveGrey: '#9d9c9d', // TODO: rename properly;
  realMiddleGrey: '#666366',
};

const mainButton = {
  width: '280px',
  height: '44px',
  cursor: 'pointer',
  bg: colors.darkBlue,
  borderRadius: '22px',
  color: colors.lightBlue,
  border: `1px solid ${colors.lightBlue}`,
};

const notificationButton = {
  ...mainButton,
  width: '45%',
  bg: 'transparent',
  maxWidth: '140px',
  borderRadius: '18px',
  fontSize: [12, 14, 14],
  height: ['30px', '35px', '35px'],
};

const borders = {
  itemBorderBottom: '1px solid rgba(94, 92, 94, .65)', // TODO: rename properly;
};

const shadows = {
  formInputDefault: '0 0 5px 0 rgba(206, 40, 40, 0.5)',
};

export default {
  colors,
  borders,
  shadows,
  form: {
    label: {
      main: {
        p: '5px 0',
        fontSize: 14,
        color: colors.white,
        requiredStarColor: 'red', // TODO: with design
      },
    },
    // NOTE: from Styles API on react-select (https://react-select.com/styles)
    reactSelect: {
      main: {
        control: {
          width: '280px',
          marginBottom: '20px',
          borderColor: colors.middleBlue,
          backgroundColor: colors.darkBlue,
          border: `1px solid ${colors.middleBlue}`,
          '&:hover': {
            borderColor: colors.middleBlue,
          },
        },
        input: {
          color: colors.white,
        },
        singleValue: {
          color: colors.white,
        },
      },
    },
    input: {
      main: {
        px: '10px',
        mb: '20px',
        width: '280px',
        height: '40px',
        borderRadius: '4px',
        color: colors.white,
        bg: colors.darkBlue,
        border: `1px solid ${colors.middleBlue}`,
      },
      authPages: {
        px: '10px',
        mb: '20px',
        width: '280px',
        height: '40px',
        borderRadius: '2px',
        bg: colors.paleYellow,
      },
      focusBoxShadow: shadows.formInputDefault,
    },
  },
  switch: {
    onBgColor: 'transparent',
    offBgColor: 'transparent',
    onColor: colors.paleOlive,
    offColor: colors.realMiddleGrey,
    onBorderColor: colors.paleOlive,
    offBorderColor: colors.realMiddleGrey,
  },
  multiswitch: {
    bg: colors.darkBlue,
    color: colors.paleOlive,
    border: colors.paleOlive,
    checkedBg: colors.paleOlive,
    checkedColor: colors.darkBlue,
    borderColor: colors.paleOlive,
  },
  btns: {
    main: mainButton,
    authPages: {
      width: '280px',
      height: '44px',
      cursor: 'pointer',
      borderRadius: '22px',
      bg: colors.paleOlive,
    },
    notifications: {
      accept: notificationButton,
      decline: {
        ...notificationButton,
        color: colors.white,
        border: `1px solid ${colors.white}`,
      },
      disabled: {
        ...notificationButton,
        color: colors.lightGrey,
        border: `1px solid ${colors.grey}`,
      },
    },
  },
  icons: {
    activeColor: colors.paleOlive,
  },
  routeLink: {
    p: '0px 15px',
    fontWeight: 600,
    fontSize: '12px',
    cursor: 'pointer',
    color: colors.mainBlue,
  },
  addItem: {
    iconBackground: colors.light,
    commonTextColor: colors.white,
    commonTextBackground: colors.middleBlue,
  },
  avatar: {
    initialsText: colors.mainBlue,
    initialsBackground: colors.light,
  },
  booker: {
    nickNameText: colors.light,
    addedBookerIcon: colors.white,
    addBookerIcon: colors.lightBlue,
    descriptionText: colors.inactiveGrey,
  },
  notification: {
    date: colors.grey,
    text: colors.light,
    message: colors.darkGrey,
    booker: colors.paleOlive,
    actionButton: colors.licorice,
    itemBackground: colors.bunting,
  },
};
