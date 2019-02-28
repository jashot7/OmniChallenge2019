/**
 * reducer.js
 *
 * This file contains the reducer used to set values in the Redux store.
 * Note that the Redux store is immutable.
 */

import { fromJS } from 'immutable';

import { DISPATCH_ACTIONS } from '../app/containers/constants';
import { fetchLuckyNumber } from './containers/saga';

// TODO: Initialize more things in the Redux store if needed
const initialState = fromJS({
  // This is for route and form.
});

export function mainReducer(state = initialState, action) {
  switch (action.type) {
    case DISPATCH_ACTIONS: TEMP_REDUCER:
      return state.merge({
        thisWillNeverHappen: action.payload,
      });
    case DISPATCH_ACTIONS.GET_LUCKY_NUMBER:
      // return Object.assign({}, state, {
      //   fetchLuckyNumber(action.payload);
      // });
    default:
      return state;
  }
}

export default mainReducer;
