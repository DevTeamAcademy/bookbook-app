// constants
import * as C from '../../../constants';
// helpers
import * as H from '../../../helpers';
///////////////////////////////////////////////////////////////////////////////

export const muiltiSwitchSettings = {
  width: '100%',
  height: '35px',
  color: '#f9f9f9',
  fontSize: '14px',
  fontWeight: '400',
  borderRadius: '100px',
  multiswitchMargin: '20px 0 15px 0',
};

export const searchSwitchFields = [
  {
    width: '25%',
    height: '35px',
    value: C.SEARCH_SWITCH_FIELDS.FIELD_BOOKER,
    name: H.getLocale(`searchSwitchLabels.${C.SEARCH_SWITCH_FIELDS.FIELD_BOOKER}`),
  },
  {
    width: '25%',
    height: '35px',
    value: C.SEARCH_SWITCH_FIELDS.FIELD_QUOTE,
    name: H.getLocale(`searchSwitchLabels.${C.SEARCH_SWITCH_FIELDS.FIELD_QUOTE}`),
  },
  {
    width: '25%',
    height: '35px',
    value: C.SEARCH_SWITCH_FIELDS.FIELD_BOOK,
    name: H.getLocale(`searchSwitchLabels.${C.SEARCH_SWITCH_FIELDS.FIELD_BOOK}`),
  },
  {
    width: '25%',
    height: '35px',
    value: C.SEARCH_SWITCH_FIELDS.FIELD_AUTHOR,
    name: H.getLocale(`searchSwitchLabels.${C.SEARCH_SWITCH_FIELDS.FIELD_AUTHOR}`),
  },
];
