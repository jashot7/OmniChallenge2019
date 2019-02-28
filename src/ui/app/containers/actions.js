/**
 * actions.js
 *
 * This file contains the various actions used by Redux.
 */

import { DISPATCH_ACTIONS } from './constants';
import { fetchLuckyNumber } from '../containers/saga';

export function getLuckyNumber(username) {
  fetchLuckyNumber(action.payload);
  return {
    type: DISPATCH_ACTIONS.GET_LUCKY_NUMBER,
    username
  };
}

export function getUserInformation() {
  return
}
/*
  Following a successful service call, this will dispatch the action to update the state with the new lucky number.
*/
export function updateLuckyNumberLocally(luckyNumber) {
  return {
    type: DISPATCH_ACTIONS.LOCALLY_UPDATE_LUCKY_NUMBER,
    luckyNumber
  }
}
