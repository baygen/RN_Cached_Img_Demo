import { combineReducers } from 'redux';

import { navigationReducer } from '../../navigator';
import user from './user';
import userStatus from './userStatus';
import feed from './feed';
import filter from './filter';

export default combineReducers({
  navigation: navigationReducer,
  userStatus,
  feed,
  filter,
  user
});
