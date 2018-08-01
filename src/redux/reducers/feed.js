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
  case FEED.ADD_POSTS:
    return {
      ...state,
      allPosts: [...state.allPosts, ...action.payload]
    };
  case FEED.SET_FILTER_TYPE:
    return {
      ...state,
      filterType: action.payload
    };
  case FEED.APPLY_FILTER:
    return {
      ...state,
      displayedPosts: state.filterType
        ? state.allPosts.filter(p => p.type === state.filterType)
        : state.allPosts
    };
  default:
    return state;
  }
};