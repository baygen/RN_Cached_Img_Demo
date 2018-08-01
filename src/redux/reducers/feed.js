import { FEED } from '../constants';

const feed = {
  allPosts: [],
  displayedPosts: [],
  filterType: 'none'
};

export default (state = feed, action) => {
  switch (action.type) {
  case FEED.SET_POSTS:
    return {
      ...state,
      allPosts: action.payload
    };
  case FEED.SET_DISPLAYED_POSTS:
    return {
      ...state,
      displayedPosts: action.payload
    };
  case FEED.ADD_POSTS:
    return {
      ...state,
      allPosts: [...state.allPosts, ...action.payload]
    };
  case FEED.APPLY_FILTER:
    return {
      ...state,
      displayedPosts: action.filterType
        ? state.allPosts.filter(p => p.type === action.filterType)
        : state.allPosts
    };
  default:
    return state;
  }
};