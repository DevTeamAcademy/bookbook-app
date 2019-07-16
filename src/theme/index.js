// NOTE: add all default styles props here (colors, shadows, borders, spaces, sizes etc.)

const colors = {
  white: '#ffffff',
  black: '#000000',
  lightGrey: '#615d60',
  middleGrey: '#9D8C70',
  darkGrey: '#363135',
  mainBlue: '#2c7bda',
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
        bg: '#fff8f0', // TODO: name and move to colors
        width: '280px',
        height: '40px',
        borderRadius: '2px',
      },
      focusBoxShadow: '0 0 5px 0 rgba(206, 40, 40, 0.5)',
    },
  },
  btns: {
    authPages: {
      bg: '#e6dda6', // TODO: name and move to colors
      width: '280px',
      height: '44px',
      cursor: 'pointer',
      borderRadius: '22px',
    },
  },
  icons: {
    activeColor: '#e6dda6', // TODO: name and move to colors
  },
  routeLink: {
    p: '0px 15px',
    fontSize: '12px',
    fontWeight: 600,
    cursor: 'pointer',
    color: colors.mainBlue,
  },
};
