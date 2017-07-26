import { combineReducers } from 'redux';

import {
  // sessions_reducer as sessions,
  // resources_reducer as resources,
  device_rn,
} from 'users-share';

import nav from './nav';
import app from './app';

console.log('xxxxx:',  device_rn)
const reducer_root = combineReducers({
  device: device_rn.reducer,
  nav,
  app,
  // resources,
  // sessions,
});

export default reducer_root;
