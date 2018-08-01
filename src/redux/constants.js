import mirror from 'keymirror';

export const USER = mirror({
  SET_NAME: null,
  SET_SECOND_NAME: null,
  SET_PASSWORD: null
});

export const FEED = mirror({
  SET_POSTS: null,
  APPLY_FILTER: null,
  ADD_POSTS: null,
  SET_DISPLAYED_POSTS: null
});

export const FILTER = mirror({
  SET_FILTER_VALUE: null
})
