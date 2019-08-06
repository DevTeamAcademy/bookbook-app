import { dispatch } from '../global-state';
import { GLOBAL_TOGGLE_SIDEBAR, GLOBAL_SET_CURRENT_USER } from '../global-state/action-types';
// /////////////////////////////////////////////////////////////////////////////////////////////////

const toggleSidebarOpened = () => dispatch({ type: GLOBAL_TOGGLE_SIDEBAR });
const setCurrentUser = user => dispatch({ type: GLOBAL_SET_CURRENT_USER, payload: user });

export { setCurrentUser, toggleSidebarOpened };
