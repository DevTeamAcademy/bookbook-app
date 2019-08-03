import { dispatch } from '../global-state';
import {
  GLOBAL_TOGGLE_SIDEBAR,
  GLOBAL_SET_CURRENT_USER,
  GLOBAL_TOGGLE_ACTION_LIST,
} from '../global-state/action-types';
// /////////////////////////////////////////////////////////////////////////////////////////////////

const toggleSidebarOpened = () => dispatch({ type: GLOBAL_TOGGLE_SIDEBAR });
const toggleActionList = () => dispatch({ type: GLOBAL_TOGGLE_ACTION_LIST });
const setCurrentUser = user => dispatch({ type: GLOBAL_SET_CURRENT_USER, payload: user });

export { setCurrentUser, toggleSidebarOpened, toggleActionList };
