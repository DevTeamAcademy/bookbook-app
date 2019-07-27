import R from 'ramda';
import { produce } from 'immer';
import { createStore } from 'react-hooks-global-state';
// helpers
import * as H from '../helpers';
// global-state
import { GLOBAL_TOGGLE_SIDEBAR, GLOBAL_SET_CURRENT_USER, GLOBAL_TOGGLE_ADD_ITEMS_LIST } from './action-types';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

const initialState = {
  currentUser: null,
  isSidebarOpened: false,
  isAddListItemsOpened: false,
};

export const { GlobalStateProvider, dispatch, useGlobalState } = createStore(
  (state, action) =>
    produce(state, draft => {
      switch (action.type) {
        case GLOBAL_TOGGLE_SIDEBAR:
          draft.isSidebarOpened = R.not(state.isSidebarOpened);
          break;
        case GLOBAL_SET_CURRENT_USER:
          const accessToken = R.path(['payload', 'access_token'], action);
          H.setAuthTokenToSession(accessToken);
          draft.currentUser = action.payload;
          break;
        case GLOBAL_TOGGLE_ADD_ITEMS_LIST:
          draft.isAddListItemsOpened = R.not(state.isAddListItemsOpened);
          break;
        default:
          draft = state;
      }
    }),
  initialState,
);
