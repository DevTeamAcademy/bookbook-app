// TODO: add all default styles props here (colors, shadows, borders, font sizes etc.)

const colors = {
  white: '#FFFFFF',
  black: '#000000',
  mainWhite: '#FBFBFB',
  lightBlack: '#101111',
  lightGrey: '#615d60',
  middleGrey: '#9D8C70',
  darkGrey: '#363135',
  mainOrange: '#F18701',
  darkOrange: '#B96700',
  mainBlue: '#59ABE3',
  mainYellow: '#FDE3A7',
};

export default {
  colors,
  form: {
    label: {
      color: 'black',
      requiredStarColor: 'red',
    },
    input: {
      authPages: {
        p: '15px',
        mb: '20px',
        bg: '#fff8f0',
        width: '280px',
        height: '40px',
        borderRadius: '2px',
      },
      focusBoxShadow: '0 0 5px 0 rgba(206, 40, 40, 0.5)',
    },
  },
  btns: {
    authPages: {
      bg: '#e6dda6',
      width: '280px',
      height: '44px',
      cursor: 'pointer',
      borderRadius: '22px',
    },
  },
  icons: {
    activeColor: '#e6dda6',
  },
  routeLink: {
    p: '0px 15px',
    color: '#2c7bda',
    fontSize: '12px',
    fontWeight: 600,
    cursor: 'pointer',
  },
};
