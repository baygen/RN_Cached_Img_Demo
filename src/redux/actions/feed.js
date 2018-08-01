import { FEED } from '../constants';

export const addPosts = (list) => ({
  type: FEED.ADD_POSTS,
  payload: list
});

export const setPosts = (list) => ({
  type: FEED.SET_POSTS,
  payload: list
});

export const setDisplayedPosts = (list) => ({
  type: FEED.SET_DISPLAYED_POSTS,
  payload: list
});

export const applyFilter = filterType => ({
  type: FEED.APPLY_FILTER,
  filterType
});
