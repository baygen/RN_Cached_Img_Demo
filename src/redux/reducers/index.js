import { combineReducers } from 'redux';

import { navigationReducer } from '../../navigator';
import user from './user';
import userStatus from './userStatus';
import feed from './feed';

export default combineReducers({
  navigation: navigationReducer,
  userStatus,
  feed,
  user
});
