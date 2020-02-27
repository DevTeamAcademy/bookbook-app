import R from 'ramda';
import { produce } from 'immer';
import { createStore } from 'react-hooks-global-state';
// global-state
import { GLOBAL_TOGGLE_SIDEBAR, GLOBAL_TOGGLE_ACTION_LIST } from './action-types';
// //////////////////////////////////////////////////

// TODO: move all staff to global reducer

const initialState = {
  currentUser: null,
  isSidebarOpened: false,
  isActionListOpened: false,
};

export const { GlobalStateProvider, dispatch, useGlobalState } = createStore(
  (state, action) =>
    produce(state, draft => {
      switch (action.type) {
        case GLOBAL_TOGGLE_SIDEBAR:
          draft.isSidebarOpened = R.not(state.isSidebarOpened);
          break;
        case GLOBAL_TOGGLE_ACTION_LIST:
          draft.isActionListOpened = R.not(state.isActionListOpened);
          break;
        default:
          draft = state;
      }
    }),
  initialState,
);
