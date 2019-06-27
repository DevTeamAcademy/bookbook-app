import { produce } from 'immer';
import { not, path } from 'ramda';
import { createStore } from 'react-hooks-global-state';
// helpers
import * as H from '../helpers';
// global-state
import { GLOBAL_TOGGLE_SIDEBAR, GLOBAL_SET_CURRENT_USER } from './action-types';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

const initialState = {
  isSidebarOpened: false,
  currentUser: null,
};

export const { GlobalStateProvider, dispatch, useGlobalState } = createStore(
  (state, action) =>
    produce(state, draft => {
      switch (action.type) {
        case GLOBAL_TOGGLE_SIDEBAR:
          draft.isSidebarOpened = not(state.isSidebarOpened);
          break;
        case GLOBAL_SET_CURRENT_USER:
          const accessToken = path(['payload', 'access_token'], action);
          H.setAuthTokenToSession(accessToken);
          draft.currentUser = action.payload;
          break;
        // TODO: check is it correct
        default:
          draft = state;
      }
    }),
  initialState,
);
