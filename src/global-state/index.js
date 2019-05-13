import { not } from 'ramda';
import { produce } from 'immer';
import { createStore } from 'react-hooks-global-state';
// global-state
import { GLOBAL_TOGGLE_SIDEBAR } from './action-types';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

const initialState = {
  isSidebarOpened: false,
};

export const { GlobalStateProvider, dispatch, useGlobalState } = createStore(
  (state, action) =>
    produce(state, draft => {
      switch (action.type) {
        case GLOBAL_TOGGLE_SIDEBAR:
          draft.isSidebarOpened = not(state.isSidebarOpened);
          break;
        // TODO: check is it correct
        default:
          draft = state;
      }
    }),
  initialState,
);
