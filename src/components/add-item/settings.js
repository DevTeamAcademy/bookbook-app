////////////////////////////////////////////////////

const commonWrapper = {
  flexWrap: 'wrap',
  maxWidth: '300px',
  alignItems: 'center',
  justifyContent: 'center',
};

const commonText = {
  m: '10px',
  p: '10px 20px',
  color: 'black',
  fontSize: '14px',
  borderRadius: '20px',
  width: 'max-content',
  background: '#f3f3f3',
  border: '1px solid black',
};

const commonIcon = {
  m: '10px',
  width: '40px',
  height: '40px',
};

export default props => ({
  default: {
    wrapper: {
      ...commonWrapper,
    },
    text: {
      ...commonText,
    },
    icon: {
      ...commonIcon,
    },
  },
});
