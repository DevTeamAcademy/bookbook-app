import { dispatch } from '../global-state';
import { GLOBAL_TOGGLE_SIDEBAR, GLOBAL_TOGGLE_ACTION_LIST } from '../global-state/action-types';
// //////////////////////////////////////////////////

const toggleSidebarOpened = () => dispatch({ type: GLOBAL_TOGGLE_SIDEBAR });
const toggleActionList = () => dispatch({ type: GLOBAL_TOGGLE_ACTION_LIST });

export { toggleActionList, toggleSidebarOpened };
