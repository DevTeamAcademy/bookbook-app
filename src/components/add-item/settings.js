// theme
import Theme from '../../theme';
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
  textTransform: 'capitalize',
  background: Theme.colors.grey,
};

const commonIcon = {
  m: '10px',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  alignItems: 'center',
  justifyContent: 'center',
  background: Theme.colors.lighterGrey,
  boxShadow: `0 2px 4px 0 ${Theme.colors.darkGrey}`,
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
