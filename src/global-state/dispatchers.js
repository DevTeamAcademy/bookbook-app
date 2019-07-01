import { dispatch } from './';
import { GLOBAL_SET_CURRENT_USER } from './action-types';
// /////////////////////////////////////////////////////////////////////////////////////////////////

const setCurrentUser = user => dispatch({ type: GLOBAL_SET_CURRENT_USER, payload: user });

export { setCurrentUser };
