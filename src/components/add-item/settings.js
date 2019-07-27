////////////////////////////////////////////////////

const commonWrapper = {
  flexWrap: 'wrap',
  maxWidth: '300px',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const commonText = {
  m: '10px',
  py: '10px',
  color: 'white',
  width: '150px',
  fontSize: '14px',
  textAlign: 'center',
  borderRadius: '20px',
  background: '#888181',
  textTransform: 'capitalize',
};

const commonIcon = {
  m: '10px',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  alignItems: 'center',
  background: '#f9f9f9',
  justifyContent: 'center',
  boxShadow: '0 2px 4px 0 #363135',
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
