import { FEED } from '../constants';

export const addPosts = (list) => ({
  type: FEED.ADD_POSTS,
  payload: list
});

export const setFilterType = type => ({
  type: FEED.SET_FILTER_TYPE,
  payload: type
});

export const applyFilter = () => ({
  type: FEED.APPLY_FILTER
});
