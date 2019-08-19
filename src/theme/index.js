// NOTE: add all default styles props here (colors, shadows, borders, spaces, sizes etc.)

const colors = {
  grey: '#888181',
  white: '#ffffff',
  black: '#000000',
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
};

const borders = {
  itemBorderBottom: '1px solid rgba(94, 92, 94, .65)',
};

export default {
  colors,
  borders,
  form: {
    label: {
      main: {
        p: '5px 0',
        fontSize: 14,
        color: colors.white,
        requiredStarColor: 'red', // TODO: with design
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
      focusBoxShadow: '0 0 5px 0 rgba(206, 40, 40, 0.5)',
    },
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
    main: {
      width: '280px',
      height: '44px',
      cursor: 'pointer',
      borderRadius: '22px',
      bg: colors.darkBlue,
      color: colors.lightBlue,
      border: `1px solid ${colors.lightBlue}`,
    },
    authPages: {
      width: '280px',
      height: '44px',
      cursor: 'pointer',
      borderRadius: '22px',
      bg: colors.paleOlive,
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
};
