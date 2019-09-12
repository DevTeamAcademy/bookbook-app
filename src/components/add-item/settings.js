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
  py: '8px',
  m: '10px 5px',
  width: '130px',
  fontSize: '13px',
  textAlign: 'center',
  borderRadius: '20px',
  color: Theme.addItem.commonTextColor,
  background: Theme.addItem.commonTextBackground,
};

const commonIcon = {
  m: '10px 5px',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  alignItems: 'center',
  justifyContent: 'center',
  background: Theme.addItem.iconBackground,
  boxShadow: `0 2px 4px 0 ${Theme.colors.darkGrey}`,
};

export default props => ({
  default: {
    commonText: commonText,
    commonIcon: commonIcon,
    commonWrapper: commonWrapper,
  },
});
