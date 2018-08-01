import { FILTER } from '../constants';

export const setFilterValue = type => ({
  type: FILTER.SET_FILTER_VALUE,
  payload: type
});
