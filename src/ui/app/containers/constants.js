/**
 * constants.js
 *
 * This file contains some constants used in the Redux infrastructure.
 * It facilitates the centralization of the key values.
 */

export const CONTAINER_KEY = 'code-challenge/welcome';

// TODO: Add more action constants if needed
export const DISPATCH_ACTIONS = {
  GET_LUCKY_NUMBER: `${CONTAINER_KEY}/GET_LUCKY_NUMBER`,
  LOCALLY_UPDATE_LUCKY_NUMBER: `${CONTAINER_KEY}/LOCALLY_UPDATE_LUCKY_NUMBER`,
  LOCALLY_UPDATE_LUCKY_NUMBER_ASYNC: `${CONTAINER_KEY}/LOCALLY_UPDATE_LUCKY_NUMBER_ASYNC`,
  TEMP_REDUCER: `${CONTAINER_KEY}/TEMP_REDUCER`
};
