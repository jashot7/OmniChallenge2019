/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { fromJS } from 'immutable';
import { combineReducers, reducer } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { DISPATCH_ACTIONS } from './containers/constants';
import { mainReducer } from '../../ui/app/reducer';
import { UserInfoModel } from '../../ui/app/models/user-info-model';
/**
 * Merge route into the global application state
 */
let userReducer = function (state = {}, action) {
  switch (action.type) {
    case DISPATCH_ACTIONS: TEMP_REDUCER:
      return state;
    default:
      return state;
  }
}

let userInfoReducer = function (state = {}, action) {
  switch (action.type) {
    default:
      return state
  }
}


/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {
  return combineReducers({
    mainReducer: mainReducer,
    userReducer: userReducer,
    userInfo: userInfoReducer,
    form: formReducer,
    ...injectedReducers,
  });
}