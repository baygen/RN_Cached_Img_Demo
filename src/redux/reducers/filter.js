import { FILTER } from '../constants';

const filter = {
  value: ''
};

export default (state = filter, action) => {
  switch (action.type) {
  case FILTER.SET_FILTER_VALUE:
    return {
      ...state,
      value: action.payload
    };
  default:
    return state;
  }
};