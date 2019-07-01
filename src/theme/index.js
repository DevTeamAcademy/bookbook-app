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
  form: {
    label: {
      color: 'red',
    },
    input: {
      authPages: {
        width: '140px',
        height: '20px',
        bg: '#fff8f0',
        borderRadius: '1px',
      },
      focusBoxShadow: '0 0 5px 0 rgba(206, 40, 40, 0.5)',
    },
  },
  colors,
  icons: {
    activeColor: '#e6dda6',
  },
};
